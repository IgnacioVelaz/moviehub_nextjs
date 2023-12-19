import { TmdbMovie } from "../models";

const apiKey = process.env.NEXT_PUBLIC_TMDB_KEY;
const baseURL = "https://api.themoviedb.org/3/movie/";

export const searchMovies = (query: string): Promise<TmdbMovie[]> | null => {
  if (query.length > 2) {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&page=1&include_adult=false&query=${query}`;
    return fetch(url)
      .then((res) => res.json())
      .then((data) => data.results);
  }
  return null;
};

export const getMovies = (category: string): Promise<TmdbMovie[]> => {
  const url = `${baseURL}${category}?api_key=${apiKey}&language=en-US&page=1`;
  return fetch(url)
    .then((res) => res.json())
    .then((data) => data.results);
};
