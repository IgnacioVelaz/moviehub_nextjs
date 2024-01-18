"use server";

import { tmdbToMongoGenresIds } from "@/utils/tmdbToMongoGenresIds";
import { FormattedMovie } from "@/app/(main)/discover/models/formatted-movie-model";
import { UserFromDatabaseType } from "@/interfaces/UserFromDatabaseInterface";
import { getUserByEmail } from "./user.service";
import { PrismaClient } from "../../prisma/generated/mongodb_client";

const prisma = new PrismaClient();

export const getUserMovies = async () => {
  const user: UserFromDatabaseType | string = await getUserByEmail();

  if (typeof user === "string" || !user.props || !user.props.user) {
    return "Can't get user movies";
  }

  const movies = await prisma.user.findUnique({
    where: { id: user.props.user.id },
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

  return movies || "Can't get user movies";
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
  const user: UserFromDatabaseType | string = await getUserByEmail();

  if (typeof user === "string" || !user.props) {
    return "Can't find user. Please logout and login.";
  }

  const userId = user.props.user.id;

  const deletedMovie = await prisma.movies.delete({
    where: { id: movieId, userId },
  });

  return deletedMovie || "Can't delete movie";
};

/* eslint-disable camelcase */
export const addMovie = async (data: FormattedMovie) => {
  const { name, poster_image, score, tmdb_id, tmdb_genresIds, type } = data;
  const user: UserFromDatabaseType | string = await getUserByEmail();

  if (typeof user === "string" || !user.props) {
    return "Can't add movie right now";
  }

  const userId = user.props.user.id;
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

  return newMovie || "Can't add movie right now";
};

/* eslint-enable camelcase */
