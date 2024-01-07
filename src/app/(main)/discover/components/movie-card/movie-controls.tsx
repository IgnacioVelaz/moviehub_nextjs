"use client";

import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import { FC } from "react";
import { MovieInterfaceDB } from "@/interfaces/MovieInterfaceDB";
import {
  addMovie,
  deleteMovieById,
  editMovieType,
} from "@/services/movie.service";
import { useRouter } from "next/navigation";
import { ControlButton } from "../buttons/buttons";
import { TmdbMovie } from "../../models";

type MovieControlsProps =
  | {
      movie: MovieInterfaceDB;
      type: "watchlist" | "watched";
    }
  | {
      movie: TmdbMovie;
      type: "tmdb";
    };

const MovieControls: FC<MovieControlsProps> = ({ movie, type }) => {
  const router = useRouter();
  const moviePoster =
    type === "tmdb" && movie.poster_path
      ? `https://themoviedb.org/t/p/w200${movie.poster_path}`
      : "https://res.cloudinary.com/dsinhkkv3/image/upload/c_thumb,w_200,g_face/v1700430158/unavailable_g9q1zp.jpg";

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

      {type === "tmdb" && (
        <>
          <ControlButton
            onClick={() => {
              const formattedMovie = {
                tmdb_id: movie.id,
                name: movie.title,
                score: movie.vote_average,
                tmdb_genresIds: movie.genre_ids,
                poster_image: moviePoster,
                type: "watchlist",
              };
              addMovie(formattedMovie);
              router.refresh();
            }}
          >
            <FaEyeSlash />
          </ControlButton>
          <ControlButton
            onClick={() => {
              const formattedMovie = {
                tmdb_id: movie.id,
                name: movie.title,
                score: movie.vote_average,
                tmdb_genresIds: movie.genre_ids,
                poster_image: moviePoster,
                type: "watched",
              };
              addMovie(formattedMovie);
              router.refresh();
            }}
          >
            <FaEye />
          </ControlButton>
        </>
      )}
    </div>
  );
};
export default MovieControls;
