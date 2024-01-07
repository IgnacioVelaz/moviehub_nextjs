"use server";

import { tmdbToMongoGenresIds } from "@/utils/tmdbToMongoGenresIds";
import { getUserByEmail } from "./user.service";
import { PrismaClient } from "../../prisma/generated/mongodb_client";

const prisma = new PrismaClient();

export const getUserMovies = async () => {
  const user = await getUserByEmail();
  const movies = await prisma.user.findUnique({
    where: { id: user?.props.user.id },
    select: {
      movies: {
        select: {
          name: true,
          id: true,
          tmdb_id: true,
          poster_image: true,
          score: true,
          type: true,
          genres: {
            select: { name: true },
          },
        },
      },
    },
  });

  return movies;
};

export const editMovieType = async (movieId: string, type: string) => {
  const updatedMovie = await prisma.movies.update({
    where: { id: movieId },
    data: {
      type,
    },
  });

  return updatedMovie;
};

export const deleteMovieById = async (movieId: string) => {
  const user = await getUserByEmail();
  const userId = user?.props.user.id;

  const deletedMovie = await prisma.movies.delete({
    where: { id: movieId, userId },
  });

  return deletedMovie;
};

/* eslint-disable camelcase */
export const addMovie = async (data) => {
  const { name, poster_image, score, tmdb_id, tmdb_genresIds, type } = data;
  const user = await getUserByEmail();
  const userId = user?.props.user.id;
  const genres = tmdbToMongoGenresIds(tmdb_genresIds);

  const newMovie = await prisma.movies.create({
    data: {
      tmdb_id,
      name,
      poster_image,
      score,
      type,
      tmdb_genresIds: tmdb_genresIds.map((genreId: number) => genreId),
      genres: {
        connect: genres.map((genre: string) => ({
          id: genre,
        })),
      },
      user: { connect: { id: userId } },
    },
  });

  if (newMovie) return newMovie;
  if (!newMovie) return "Can't add movie right now";
  return null;
};

/* eslint-enable camelcase */
