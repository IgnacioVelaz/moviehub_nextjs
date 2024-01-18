export type GenreFromUser = {
  name: string;
};

export type MovieFromUser = {
  name: string;
  poster_image: string;
  score: number;
  genres: GenreFromUser[];
};

export type UserFromDatabaseType = {
  props: {
    user: {
      email: string;
      name: string;
      id: string;
      movies?: MovieFromUser[];
    };
  };
};
