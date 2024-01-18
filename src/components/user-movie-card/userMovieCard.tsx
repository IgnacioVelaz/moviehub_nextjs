import MovieControls from "@/app/(main)/discover/components/tmdb-movie-card/movie-controls";
import { TmdbMovie } from "@/app/(main)/discover/models";
import { MovieInterfaceDB } from "@/interfaces/MovieInterfaceDB";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import Link from "next/link";
import { FC } from "react";

type MovieCardProps = {
  movie: MovieInterfaceDB;
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

const UserMovieCard: FC<MovieCardProps> = ({ movie, handlers }) => (
  <div
    className="w-full rounded-md overflow-hidden relative group"
    key={movie.tmdb_id}
  >
    <Link href={`/movie/${movie.tmdb_id}`}>
      <div className="absolute top-0 left-0 w-full h-full border-2 border-solid border-transparent transition-all group-hover:border-secondary" />
      {movie.poster_image && (
        <img
          src={`${movie.poster_image}`}
          alt={`${movie.name} Poster`}
          className="w-full h-auto bg-[#dbdada] rounded-md mr-4 text-transparent mb-2"
        />
      )}
    </Link>
    <MovieControls movie={movie} handlers={handlers} />
  </div>
);
export default UserMovieCard;
