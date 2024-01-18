"use server";

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

export const getf = (): Promise<TmdbMovie> => {
  const url =
    "https://api.themoviedb.org/3/movie/872585?api_key=6b4c90e3639bb74749774b61e3804b42";

  const movieData = fetch(url)
    .then((res) => res.json())
    .then((data) => data.results);

  return movieData;
};

export async function getMovie(id: number) {
  try {
    const url = `${baseURL}${id}?api_key=${apiKey}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch data. Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
