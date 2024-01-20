"use client";

import Link from "next/link";
import movieFunctions from "@/utils/movie-functions";
import { FC, Suspense, lazy } from "react";
import { MovieInterfaceDB } from "@/interfaces/MovieInterfaceDB";
import MoviesGridSkeleton from "@/components/movies-grid/movies-grid-skeleton";

const MoviesGrid = lazy(() => import("@/components/movies-grid/movies-grid"));

type Props = {
  movies: MovieInterfaceDB[];
};

const UserMovies: FC<Props> = ({ movies }) => (
  <div>
    {movies && movies.length > 0 ? (
      <Suspense fallback={<MoviesGridSkeleton />}>
        <MoviesGrid movies={movies} handlers={movieFunctions} />
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
export default UserMovies;
