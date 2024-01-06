"use client";

import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import { FC } from "react";
import { MovieInterfaceDB } from "@/interfaces/MovieInterfaceDB";
import { deleteMovieById, editMovieType } from "@/services/movie.service";
import { useRouter } from "next/navigation";
import { ControlButton } from "../buttons/buttons";

type MovieControlsProps = {
  movie: MovieInterfaceDB;
  type: "watchlist" | "watched";
};

const MovieControls: FC<MovieControlsProps> = ({ movie, type }) => {
  const router = useRouter();
  return (
    <div className="absolute bottom-5 inline left-1/2 -translate-x-1/2 bg-black/50 rounded-md p-1 border border-white/60 opacity-0 transition-all group-hover:opacity-100">
      {type === "watchlist" && (
        <>
          <ControlButton
            onClick={() => {
              editMovieType(movie.id, "watched");
              router.refresh();
            }}
          >
            <FaEye />
          </ControlButton>

          <ControlButton
            onClick={() => {
              deleteMovieById(movie.id);
              router.refresh();
            }}
          >
            <IoCloseSharp />
          </ControlButton>
        </>
      )}

      {type === "watched" && (
        <>
          <ControlButton
            onClick={() => {
              editMovieType(movie.id, "watchlist");
              router.refresh();
            }}
          >
            <FaEyeSlash />
          </ControlButton>

          <ControlButton
            onClick={() => {
              deleteMovieById(movie.id);
              router.refresh();
            }}
          >
            <IoCloseSharp />
          </ControlButton>
        </>
      )}
    </div>
  );
};
export default MovieControls;
