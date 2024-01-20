import { TmdbMovie } from "@/app/(main)/discover/models";
import {
  addMovie,
  deleteMovieById,
  editMovieType,
} from "@/services/movie.service";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import toast from "react-hot-toast";
import tmdbToDbMovie from "./tmdb-to-db-movie";

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

  deleteMovie: async (movieId: string, router: AppRouterInstance) => {
    await deleteMovieById(movieId);
    await router.refresh();
    toast.success("Movie removed successfully");
  },

  addMovieToList: async (
    movie: TmdbMovie,
    list: string,
    router: AppRouterInstance,
  ) => {
    const formattedMovie = tmdbToDbMovie(movie, list);
    await addMovie(formattedMovie);
    await router.refresh();
    toast.success("Movie added!");
  },
};

export default movieFunctions;
