import { MovieDetailsInterface } from "@/interfaces/MovieDetailsInterface";

/* eslint-disable camelcase */
const movieDetailsToTmdb = (movie: MovieDetailsInterface) => {
  const {
    id,
    title,
    vote_average,
    genres,
    poster_path,
    adult,
    backdrop_path,
    original_language,
    original_title,
    overview,
    popularity,
    release_date,
    video,
  } = movie;
  return {
    id,
    title,
    vote_average,
    genre_ids: genres.map((genre) => genre.id),
    poster_path,
    adult,
    backdrop_path,
    original_language,
    original_title,
    overview,
    media_type: "",
    popularity,
    release_date,
    video,
  };
};
/* eslint-enable camelcase */
export default movieDetailsToTmdb;
