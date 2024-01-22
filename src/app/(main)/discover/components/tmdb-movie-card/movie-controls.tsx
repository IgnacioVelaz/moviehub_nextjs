import { FaEye } from "react-icons/fa";
import { IoAddCircleSharp, IoCloseSharp } from "react-icons/io5";
import { FC, useContext } from "react";
import { MovieInterfaceDB } from "@/interfaces/MovieInterfaceDB";
import { useRouter } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { MoviesContext } from "@/context/movies-context";
import tmdbToDbMovie from "@/utils/tmdb-to-db-movie";
import { ControlButton } from "../buttons/buttons";
import { TmdbMovie } from "../../models";

type MovieControlsProps = {
  movie: MovieInterfaceDB | TmdbMovie;
  /* eslint-disable no-unused-vars */
  handlers: {
    moveMovie: (
      movieId: string,
      type: string,
      router: AppRouterInstance,
    ) => void;
    addMovieToList: (movie: TmdbMovie, type: string) => void;
    deleteMovie: (movieId: string, router: AppRouterInstance) => void;
  };
  /* eslint-enable no-unused-vars */
};

const isMovieInterfaceDB = (
  movie: MovieInterfaceDB | TmdbMovie,
): movie is MovieInterfaceDB => (movie as MovieInterfaceDB).type !== undefined;

const MovieControls: FC<MovieControlsProps> = ({ movie, handlers }) => {
  const router = useRouter();

  const type = isMovieInterfaceDB(movie) ? movie.type : "tmdb";

  const { addMovieToList, deleteMovie, moveMovie } = handlers;
  const { setUserMovies, userMovies } = useContext(MoviesContext);

  const alreadySavedMovie = userMovies.find(
    (contextMovie) => contextMovie.tmdb_id === movie.id,
  );

  const isDisabled = !!alreadySavedMovie;

  const handleDeleteMovie = (movieId: string) => {
    deleteMovie(movieId, router);
    setUserMovies((prevMovies: MovieInterfaceDB[]) =>
      prevMovies.filter(
        (item: MovieInterfaceDB) =>
          item.tmdb_id !== (movie as MovieInterfaceDB).tmdb_id,
      ),
    );
  };

  const handleAddMovie = (movieToAdd: TmdbMovie, list: string) => {
    const formattedMovie = tmdbToDbMovie(movieToAdd, list);
    addMovieToList(movieToAdd, list);
    setUserMovies((prevMovies: MovieInterfaceDB[]) => [
      ...prevMovies,
      formattedMovie,
    ]);
  };

  return (
    <div className="absolute bottom-5 inline left-1/2 -translate-x-1/2 bg-black/50 rounded-md p-1 border border-white/60 opacity-0 transition-all group-hover:opacity-100">
      {isMovieInterfaceDB(movie) && (
        <>
          <ControlButton
            onClick={() => {
              moveMovie(movie.id, movie.type, router);
            }}
            ariaLabel={
              type === "watchlist" ? "Move to watched" : "Move to watchlist"
            }
          >
            {type === "watchlist" ? <FaEye /> : <IoAddCircleSharp />}
          </ControlButton>

          <ControlButton
            ariaLabel="Delete movie"
            onClick={() => {
              handleDeleteMovie(movie.id);
            }}
          >
            <IoCloseSharp />
          </ControlButton>
        </>
      )}

      {!isMovieInterfaceDB(movie) && (
        <>
          <ControlButton
            ariaLabel="add to watchlist"
            disabled={isDisabled}
            onClick={() => {
              handleAddMovie(movie, "watchlist");
            }}
          >
            <IoAddCircleSharp />
          </ControlButton>
          <ControlButton
            ariaLabel="add to watched"
            disabled={isDisabled}
            onClick={() => {
              handleAddMovie(movie, "watched");
            }}
          >
            <FaEye />
          </ControlButton>
        </>
      )}
    </div>
  );
};
export default MovieControls;
