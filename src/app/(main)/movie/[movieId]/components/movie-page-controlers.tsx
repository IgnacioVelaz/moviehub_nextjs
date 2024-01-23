"use client";

import { TmdbMovie } from "@/app/(main)/discover/models";
import { MoviesContext } from "@/context/movies-context";
import { MovieDetailsInterface } from "@/interfaces/MovieDetailsInterface";
import { MovieInterfaceDB } from "@/interfaces/MovieInterfaceDB";
import movieDetailsToTmdb from "@/utils/movie-details-to-tmdb-movie";
import movieFunctions from "@/utils/movie-functions";
import tmdbToDbMovie from "@/utils/tmdb-to-db-movie";
import { FC, useContext } from "react";
import { FaEye } from "react-icons/fa";
import { IoAddCircleSharp } from "react-icons/io5";

type MoviePageControlersProps = {
  movie: MovieDetailsInterface;
};

const MoviePageControlers: FC<MoviePageControlersProps> = ({ movie }) => {
  const { addMovieToList } = movieFunctions;
  const tmdbMovie = movieDetailsToTmdb(movie);

  const { userMovies, setUserMovies } = useContext(MoviesContext);

  const alreadySavedMovie = userMovies.find(
    (contextMovie) => contextMovie.tmdb_id === movie.id,
  );

  const isDisabled = !!alreadySavedMovie;

  const handleAddMovie = (movieToAdd: TmdbMovie, list: string) => {
    const dbMovie = tmdbToDbMovie(movieToAdd, list);
    addMovieToList(tmdbMovie, list);
    setUserMovies((prevMovies: MovieInterfaceDB[]) => [...prevMovies, dbMovie]);
  };

  return (
    <div className="flex justify-center items-center gap-4">
      <button
        className="disabled:opacity-50 disabled:pointer-events-none"
        disabled={isDisabled}
        type="button"
        onClick={() => {
          handleAddMovie(tmdbMovie, "watchlist");
        }}
        aria-label="Add to Watchlist"
      >
        <IoAddCircleSharp className="text-4xl hover:text-accent" />
      </button>

      <button
        className="disabled:opacity-50 disabled:pointer-events-none"
        disabled={isDisabled}
        type="button"
        onClick={() => {
          handleAddMovie(tmdbMovie, "watched");
        }}
        aria-label="Add to Watched"
      >
        <FaEye className="text-4xl hover:text-accent" />
      </button>
    </div>
  );
};
export default MoviePageControlers;
