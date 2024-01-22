import MovieControls from "@/app/(main)/discover/components/tmdb-movie-card/movie-controls";
import { MovieInterfaceDB } from "@/interfaces/MovieInterfaceDB";
import { MovieFunctionsType } from "@/utils/movie-functions";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

type MovieCardProps = {
  movie: MovieInterfaceDB;
  handlers: MovieFunctionsType;
};

const UserMovieCard: FC<MovieCardProps> = ({ movie, handlers }) => (
  <div
    className="w-full rounded-md overflow-hidden relative group outline outline-0 outline-accent transition-all hover:outline-4"
    key={movie.tmdb_id}
  >
    <Link href={`/movie/${movie.tmdb_id}`}>
      <div className="absolute top-0 left-0 w-full h-full outline outline-8 outline-accent transition-all group-hover:outline-accent" />
      {movie.poster_image && (
        <Image
          src={`${movie.poster_image}`}
          alt={`${movie.name} Poster`}
          className="w-full h-auto bg-[#dbdada] rounded-md text-transparent brightness-[0.82] group-hover:brightness-110"
          height={307}
          width={198}
        />
      )}
    </Link>
    <MovieControls movie={movie} handlers={handlers} />
  </div>
);
export default UserMovieCard;
