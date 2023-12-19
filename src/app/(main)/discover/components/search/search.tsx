"use client";

import { ChangeEvent, useState } from "react";
import { SearchMovieCard } from "../search-movie-card";
import { TmdbMovie } from "../../models";
import { searchMovies } from "../../services";

const Search = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<TmdbMovie[]>([]);

  const onChange = async (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setQuery(event.target.value);
    const queryResults = await searchMovies(event.target.value);
    if (!queryResults) setResults([]);
    if (queryResults && queryResults.length > 0) setResults(queryResults);
  };

  return (
    <div className="py-12 max-w-[600px] mx-auto">
      <div>
        <input
          type="text"
          placeholder="Search for a movie"
          value={query}
          onChange={onChange}
          className="w-full bg-primary p-4 rounded-md text-white text-xl"
        />
      </div>

      {results && results.length > 0 && (
        <ul className="mt-5">
          {results.map((movie) => (
            <li key={movie.id}>
              <SearchMovieCard movie={movie} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default Search;
