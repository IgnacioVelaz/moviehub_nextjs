import Image from "next/image";
import Link from "next/link";
import movieFunctions from "@/utils/movie-functions";
import { IoAddCircleSharp } from "react-icons/io5";
import { FaEye } from "react-icons/fa";
import tmdbToDbMovie from "@/utils/tmdb-to-db-movie";
import { useContext } from "react";
import { MoviesContext } from "@/context/movies-context";
import { MovieInterfaceDB } from "@/interfaces/MovieInterfaceDB";
import { TmdbMovie } from "../models";

type Props = {
  movie: TmdbMovie;
};

export const SearchMovieCard = ({ movie }: Props) => {
  const moviePoster = movie.poster_path
    ? `https://themoviedb.org/t/p/w200${movie.poster_path}`
    : "https://res.cloudinary.com/dsinhkkv3/image/upload/c_thumb,w_200,g_face/v1700430158/unavailable_g9q1zp.jpg";

  const { addMovieToList } = movieFunctions;

  const { setUserMovies, userMovies } = useContext(MoviesContext);

  const alreadySavedMovie = userMovies.find(
    (contextMovie) => contextMovie.tmdb_id === movie.id,
  );

  const isDisabled = !!alreadySavedMovie;

  const handleAddMovie = (movieToAdd: TmdbMovie, list: string) => {
    const formattedMovie = tmdbToDbMovie(movie, list);
    addMovieToList(movieToAdd, list);
    setUserMovies((prevMovies: MovieInterfaceDB[]) => [
      ...prevMovies,
      formattedMovie,
    ]);
  };

  return (
    <div className="flex p-4 justify-between hover:bg-secondary">
      <Link href={`/movie/${movie.id}`} className="grow">
        <div className="flex">
          <div>
            <Image
              src={moviePoster}
              alt={`${movie.title} Poster`}
              className="w-20 h-auto bg-[#dbdada] rounded-md mr-4 text-transparent"
              height={60}
              width={80}
            />
          </div>
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-2xl">{movie.title}</h3>
              <h4 className="text-xl font-light">
                {movie.release_date ? movie.release_date.substring(0, 4) : "-"}
              </h4>
            </div>
          </div>
        </div>
      </Link>

      <div className="flex flex-col justify-center items-center gap-4 w-10">
        <button
          className="disabled:opacity-50 disabled:pointer-events-none"
          disabled={isDisabled}
          type="button"
          onClick={() => {
            handleAddMovie(movie, "watchlist");
          }}
          aria-label="Add to Watchlist"
        >
          <IoAddCircleSharp className="text-4xl hover:text-accent" />
        </button>

        <button
          className="disabled:opacity-50 disabled:pointer-events-none"
          disabled={isDisabled}
          type="button"
          onClick={() => {
            handleAddMovie(movie, "watched");
          }}
          aria-label="Add to Watched"
        >
          <FaEye className="text-4xl hover:text-accent" />
        </button>
      </div>
    </div>
  );
};
