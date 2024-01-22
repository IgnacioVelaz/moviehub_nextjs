"use client";

import Link from "next/link";
import movieFunctions from "@/utils/movie-functions";
import { FC, Suspense, lazy, useEffect } from "react";
import { MovieInterfaceDB } from "@/interfaces/MovieInterfaceDB";
import MoviesGridSkeleton from "@/components/movies-grid/movies-grid-skeleton";
import { useMoviesContext } from "@/context/movies-context";

const MoviesGrid = lazy(() => import("@/components/movies-grid/movies-grid"));

type Props = {
  movies: MovieInterfaceDB[];
  type: string;
};

const UserMovies: FC<Props> = ({ movies, type }) => {
  const { userMovies, setUserMovies } = useMoviesContext();

  useEffect(() => {
    if (!userMovies || userMovies.length === 0) setUserMovies(movies);
  }, [userMovies]);

  const filteredMovies =
    movies && movies.filter((movie) => movie.type === type);

  return (
    <div>
      {filteredMovies && filteredMovies.length > 0 ? (
        <Suspense fallback={<MoviesGridSkeleton />}>
          <MoviesGrid movies={filteredMovies} handlers={movieFunctions} />
        </Suspense>
      ) : (
        <>
          <h2 className="text-gray-500 text-3xl text-center mb-40">
            You haven&apos;t seen any movies yet? 😨. Go watch some! 📽
          </h2>
          <div className="text-center">
            <Link href="/discover">
              <button type="button">
                <span className="text-3xl">Add Movie</span>
              </button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};
export default UserMovies;
