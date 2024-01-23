/* eslint-disable react/no-array-index-key */

import { nanoid } from "nanoid";

const MoviesGridSkeleton = () => (
  <ul className="grid grid-cols-3 gap-8 md:grid-cols-4 lg:grid-cols-5">
    {[...Array(10)].map((movie) => (
      <div
        key={nanoid()}
        data-skeleton={movie}
        className="overflow-hidden rounded-lg bg-gray-300 animate-pulse h-[307px] w-[198px]"
      />
    ))}
  </ul>
);

export default MoviesGridSkeleton;

/* eslint-enable react/no-array-index-key */
