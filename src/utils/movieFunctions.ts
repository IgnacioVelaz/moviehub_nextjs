import { TmdbMovie } from "@/app/(main)/discover/models";
import {
  addMovie,
  deleteMovieById,
  editMovieType,
} from "@/services/movie.service";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import tmdbToDbMovie from "./tmdbToDbMovie";

const movieFunctions = {
  moveMovie: (movieId: string, type: string, router: AppRouterInstance) => {
    if (type === "watchlist") {
      editMovieType(movieId, "watched");
    }
    if (type === "watched") {
      editMovieType(movieId, "watchlist");
    }
    router.refresh();
  },

  deleteMovie: (movieId: string, router: AppRouterInstance) => {
    deleteMovieById(movieId);
    router.refresh();
  },

  addMovieToList: (
    movie: TmdbMovie,
    list: string,
    router: AppRouterInstance,
  ) => {
    const formattedMovie = tmdbToDbMovie(movie, list);
    addMovie(formattedMovie);
    router.refresh();
  },
};

export default movieFunctions;
