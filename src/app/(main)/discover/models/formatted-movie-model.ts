export interface FormattedMovie {
  tmdb_id: number;
  name: string;
  score: number;
  tmdb_genresIds: number[] | never[];
  poster_image: string;
  type: string;
}
