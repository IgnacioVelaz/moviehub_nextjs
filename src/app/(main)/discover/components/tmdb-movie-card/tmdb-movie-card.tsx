import React, { FC } from "react";
import Image from "next/image";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import Link from "next/link";
import { TmdbMovie } from "../../models";
import MovieControls from "./movie-controls";

type Props = {
  movie: TmdbMovie;
  handlers: {
    /* eslint-disable no-unused-vars */
    moveMovie: (
      movieId: string,
      type: string,
      router: AppRouterInstance,
    ) => void;
    addMovieToList: (
      movie: TmdbMovie,
      type: string,
      router: AppRouterInstance,
    ) => void;
    deleteMovie: (movieId: string, router: AppRouterInstance) => void;
    /* eslint-enable no-unused-vars */
  };
};

const TMDBMovieCard: FC<Props> = ({ movie, handlers }) => {
  const moviePoster = movie.poster_path
    ? `https://themoviedb.org/t/p/w200${movie.poster_path}`
    : "https://res.cloudinary.com/dsinhkkv3/image/upload/c_thumb,w_200,g_face/v1700430158/unavailable_g9q1zp.jpg";
  return (
    <div
      className="w-full rounded-md overflow-hidden relative group"
      key={movie.id}
    >
      <Link href={`/movie/${movie.id}`}>
        <div className="absolute top-0 left-0 w-full h-full border-2 border-solid border-transparent transition-all group-hover:border-secondary" />
        {movie.poster_path && (
          <Image
            src={`${moviePoster}`}
            alt={`${movie.title} Poster`}
            className="w-full h-auto bg-[#dbdada] rounded-md mr-4 text-transparent mb-2"
            height={150}
            width={150}
          />
        )}
        <div>
          <div className="p-2">
            <h5 className="mb-2 text-xl font-medium leading-tight dark:text-neutral-50">
              {movie.title}
            </h5>
          </div>
        </div>
      </Link>
      <MovieControls movie={movie} handlers={handlers} />
    </div>
  );
};

export default TMDBMovieCard;
