import { TmdbMovie } from "../models";

const apiKey = process.env.TMDB_KEY;

export const searchApi = (query: string): Promise<TmdbMovie[]> => {
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&page=1&include_adult=false&query=${query}`;
  return fetch(url)
    .then((res) => res.json())
    .then((data) => data.results);
};

export const getPopularMovies = (): Promise<TmdbMovie[]> => {
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`;
  console.log(url);
  return fetch(url)
    .then((res) => res.json())
    .then((data) => data.results);
};
