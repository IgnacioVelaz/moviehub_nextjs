"use client";

import movieFunctions from "@/utils/movieFunctions";
import { MovieInterfaceDB } from "@/interfaces/MovieInterfaceDB";
import { FC } from "react";
import UserMovieCard from "../user-movie-card/userMovieCard";

type props = {
  movies: MovieInterfaceDB[];
};

const MoviesGrid: FC<props> = ({ movies }) => (
  <div className="grid grid-cols-3 gap-8 md:grid-cols-4 lg:grid-cols-5">
    {movies.map((movie) => (
      <UserMovieCard movie={movie} handlers={movieFunctions} />
    ))}
  </div>
);

export default MoviesGrid;
