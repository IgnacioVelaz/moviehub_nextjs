"use client";

import MovieControls from "@/app/(main)/discover/components/movie-card/movie-controls";
import movieFunctions from "@/utils/movieFunctions";
import { FC } from "react";

type MovieCardProps = {
  movie: any;
};

const BasicMovieCard: FC<MovieCardProps> = ({ movie }) => (
  <div
    className="w-full rounded-md overflow-hidden relative group"
    key={movie.tmdb_id}
  >
    <div className="absolute top-0 left-0 w-full h-full border-2 border-solid border-transparent transition-all group-hover:border-secondary" />
    {movie.poster_image && (
      <img
        src={`${movie.poster_image}`}
        alt={`${movie.name} Poster`}
        className="w-full h-auto bg-[#dbdada] rounded-md mr-4 text-transparent mb-2"
      />
    )}

    <MovieControls movie={movie} handlers={movieFunctions} />
  </div>
);
export default BasicMovieCard;
