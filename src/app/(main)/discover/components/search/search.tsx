"use client";

import { ChangeEvent, KeyboardEventHandler, useState } from "react";
import { nanoid } from "nanoid";
import { SearchMovieCard } from "../search-movie-card";
import { TmdbMovie } from "../../models";
import { searchMovies } from "../../services";
import "./search.css";

const Search = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<TmdbMovie[]>([]);

  const onChange = async (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setQuery(event.target.value);
    const queryResults = await searchMovies(event.target.value);
    if (!queryResults) setResults([]);
    if (queryResults && queryResults.length > 0) {
      setResults(queryResults);
    }
  };

  const closeSearch = () => {
    setQuery("");
    setResults([]);
  };

  const handleKeyDown: KeyboardEventHandler<HTMLDivElement> = (event) => {
    if (event.key === "Escape") closeSearch();
  };

  return (
    <>
      {results && results.length > 0 && (
        /* eslint-disable jsx-a11y/click-events-have-key-events */
        /* eslint-disable jsx-a11y/no-static-element-interactions */
        <div
          className="fixed inset-0 bg-black bg-opacity-60 z-20 backdrop-blur-sm"
          onClick={closeSearch}
        />
        /* eslint-enable jsx-a11y/no-static-element-interactions */
        /* eslint-enable jsx-a11y/click-events-have-key-events */
      )}
      <div className="py-12 max-w-[600px] mx-auto pt-16 relative z-20">
        <div>
          <input
            type="text"
            placeholder="Search for a movie"
            value={query}
            onKeyDown={handleKeyDown}
            onChange={onChange}
            className="w-full bg-primary p-4 rounded-md text-white text-xl outline outline-0 outline-accent focus-visible:outline-2"
          />
        </div>

        {results && results.length > 0 && (
          <ul className="mt-2 absolute z-40 bg-primary rounded-xl w-full overflow-y-scroll max-h-[70vh]">
            {results.map((movie) => (
              <li key={nanoid()}>
                <SearchMovieCard movie={movie} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};
export default Search;
