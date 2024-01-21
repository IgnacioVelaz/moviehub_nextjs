import { FaEye } from "react-icons/fa";
import { IoAddCircleSharp, IoCloseSharp } from "react-icons/io5";
import { FC } from "react";
import { MovieInterfaceDB } from "@/interfaces/MovieInterfaceDB";
import { useRouter } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
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
    addMovieToList: (
      movie: TmdbMovie,
      type: string,
      router: AppRouterInstance,
    ) => void;
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
              deleteMovie(movie.id, router);
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
            onClick={() => {
              addMovieToList(movie, "watchlist", router);
            }}
          >
            <IoAddCircleSharp />
          </ControlButton>
          <ControlButton
            ariaLabel="add to watched"
            onClick={() => {
              addMovieToList(movie, "watched", router);
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
