import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { MovieFunctionsType } from "@/utils/movie-functions";
import { TmdbMovie } from "../../models";
import MovieControls from "./movie-controls";

type Props = {
  movie: TmdbMovie;
  handlers: MovieFunctionsType;
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
        <div className="absolute top-0 left-0 w-full h-full " />
        {movie.poster_path && (
          <Image
            src={`${moviePoster}`}
            alt={`${movie.title} Poster`}
            className="w-full h-auto bg-[#dbdada] rounded-md brightness-[.82] group-hover:brightness-110"
            height={150}
            width={150}
          />
        )}
        <div />
      </Link>
      <MovieControls movie={movie} handlers={handlers} />
    </div>
  );
};

export default TMDBMovieCard;
