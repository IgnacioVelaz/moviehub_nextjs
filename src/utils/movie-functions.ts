import { TmdbMovie } from "@/app/models";
import {
  addMovie,
  deleteMovieById,
  editMovieType,
} from "@/services/movie.service";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import toast from "react-hot-toast";
import tmdbToDbMovie from "./tmdb-to-db-movie";

export type MovieFunctionsType = {
  /* eslint-disable no-unused-vars */
  moveMovie: (movieId: string, type: string, router: AppRouterInstance) => void;
  addMovieToList: (movie: TmdbMovie, type: string) => void;
  deleteMovie: (movieId: string) => void;
  /* eslint-enable no-unused-vars */
};

const movieFunctions = {
  moveMovie: async (
    movieId: string,
    type: string,
    router: AppRouterInstance,
  ) => {
    if (type === "watchlist") {
      await editMovieType(movieId, "watched");
    }
    if (type === "watched") {
      await editMovieType(movieId, "watchlist");
    }
    await router.refresh();
    toast.success("Movie moved successfully");
  },

  deleteMovie: async (movieId: string) => {
    await deleteMovieById(movieId);
    toast.success("Movie removed successfully");
  },

  addMovieToList: async (movie: TmdbMovie, list: string) => {
    const formattedMovie = tmdbToDbMovie(movie, list);
    await addMovie(formattedMovie);
    toast.success("Movie added!");
  },
};

export default movieFunctions;
