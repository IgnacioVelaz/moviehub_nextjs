import { MovieInterfaceDB } from "@/interfaces/MovieInterfaceDB";
import { FC } from "react";
import { nanoid } from "nanoid";
import { MovieFunctionsType } from "@/utils/movie-functions";
import UserMovieCard from "../user-movie-card/userMovieCard";

type Props = {
  movies: MovieInterfaceDB[];
  handlers: MovieFunctionsType;
};

const MoviesGrid: FC<Props> = ({ movies, handlers }) => (
  <div className="grid grid-cols-3 gap-8 md:grid-cols-4 lg:grid-cols-5">
    {movies.map((movie) => (
      <UserMovieCard movie={movie} handlers={handlers} key={nanoid()} />
    ))}
  </div>
);

export default MoviesGrid;
