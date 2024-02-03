"use server";

import { TmdbMovie } from "../app/models";

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

export const getMovie = async (id: number) => {
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
};

export const getStreamingOptions = async (
  countryCode: string,
  movieId: number,
) => {
  try {
    const url = `${baseURL}${movieId}/watch/providers?api_key=${apiKey}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch data. Status: ${response.status}`);
    }
    const data = await response.json();
    if (!data.results[countryCode])
      return `This movie isn't available for streaming at your current location`;
    return data.results[countryCode];
  } catch (error) {
    console.error("Error fetching data:", error);
    return error;
  }
};
