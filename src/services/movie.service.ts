"use server";

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
