"use client";

import { MovieDetailsInterface } from "@/interfaces/MovieDetailsInterface";
import movieDetailsToTmdb from "@/utils/movie-details-to-tmdb-movie";
import movieFunctions from "@/utils/movie-functions";
import { useRouter } from "next/navigation";
import { FC } from "react";
import { FaEye } from "react-icons/fa";
import { IoAddCircleSharp } from "react-icons/io5";

type MoviePageControlersProps = {
  movie: MovieDetailsInterface;
};

const MoviePageControlers: FC<MoviePageControlersProps> = ({ movie }) => {
  const { addMovieToList } = movieFunctions;
  const router = useRouter();

  const tmdbMovie = movieDetailsToTmdb(movie);

  console.log("MOVIE", movie);

  return (
    <div className="flex justify-center items-center gap-4">
      <button
        type="button"
        onClick={() => {
          addMovieToList(tmdbMovie, "watchlist", router);
        }}
        aria-label="Add to Watchlist"
      >
        <IoAddCircleSharp className="text-4xl hover:text-accent" />
      </button>

      <button
        type="button"
        onClick={() => {
          addMovieToList(tmdbMovie, "watched", router);
        }}
        aria-label="Add to Watched"
      >
        <FaEye className="text-4xl hover:text-accent" />
      </button>
    </div>
  );
};
export default MoviePageControlers;
