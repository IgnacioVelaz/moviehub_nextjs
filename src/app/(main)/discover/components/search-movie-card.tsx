import Image from "next/image";
import { TmdbMovie } from "../models";

type Props = {
  movie: TmdbMovie;
};

export const SearchMovieCard = ({ movie }: Props) => {
  const moviePoster = movie.poster_path
    ? `https://themoviedb.org/t/p/w200${movie.poster_path}`
    : "https://res.cloudinary.com/dsinhkkv3/image/upload/c_thumb,w_200,g_face/v1700430158/unavailable_g9q1zp.jpg";

  return (
    <div className="flex mb-5">
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
          <h3 className="text-xl font-semibold">{movie.title}</h3>
          <h4 className="text-xl font-light text-primary">
            {movie.release_date ? movie.release_date.substring(0, 4) : "-"}
          </h4>
        </div>

        <div className="flex gap-4">
          <button
            type="button"
            onClick={() => {
              const formattedMovie = {
                tmdb_id: movie.id,
                name: movie.title,
                score: movie.vote_average,
                tmdb_genresIds: movie.genre_ids,
                poster_image: moviePoster,
                type: "watchlist",
              };
              console.log(formattedMovie);
            }}
          >
            {status === "pending" ? "Adding movie..." : "Add to watchlist"}
          </button>

          <button
            type="button"
            onClick={() => {
              const formattedMovie = {
                tmdb_id: movie.id,
                name: movie.title,
                score: movie.vote_average,
                tmdb_genresIds: movie.genre_ids,
                poster_image: moviePoster,
                type: "watched",
              };
              console.log(formattedMovie);
            }}
          >
            {status === "pending" ? "Adding movie..." : "Add to watched"}
          </button>
        </div>
      </div>
    </div>
  );
};
