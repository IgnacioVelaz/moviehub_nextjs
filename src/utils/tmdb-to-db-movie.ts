import { TmdbMovie } from "@/app/models";

const tmdbToDbMovie = (movie: TmdbMovie, list: string) => {
  const moviePoster = movie.poster_path
    ? `https://themoviedb.org/t/p/w200${movie.poster_path}`
    : "https://res.cloudinary.com/dsinhkkv3/image/upload/c_thumb,w_200,g_face/v1700430158/unavailable_g9q1zp.jpg";

  return {
    tmdb_id: movie.id,
    name: movie.title,
    score: movie.vote_average,
    tmdb_genresIds: movie.genre_ids,
    poster_image: moviePoster,
    type: list,
  };
};

export default tmdbToDbMovie;
