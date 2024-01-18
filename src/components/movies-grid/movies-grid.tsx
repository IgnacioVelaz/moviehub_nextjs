import { MovieInterfaceDB } from "@/interfaces/MovieInterfaceDB";
import { FC, Suspense, lazy } from "react";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { TmdbMovie } from "@/app/(main)/discover/models";

const UserMovieCard = lazy(() => import("../user-movie-card/userMovieCard"));

type Props = {
  movies: MovieInterfaceDB[];
  /* eslint-disable no-unused-vars */
  handlers: {
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
  };
  /* eslint-enable no-unused-vars */
};

const MoviesGrid: FC<Props> = ({ movies, handlers }) => (
  <div className="grid grid-cols-3 gap-8 md:grid-cols-4 lg:grid-cols-5">
    {movies.map((movie) => (
      <Suspense fallback="Loading...">
        <UserMovieCard movie={movie} handlers={handlers} />
      </Suspense>
    ))}
  </div>
);

export default MoviesGrid;
