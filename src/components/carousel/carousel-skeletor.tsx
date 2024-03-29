/* eslint-disable react/no-array-index-key */

import { nanoid } from "nanoid";

const CarouselSkeletor = () => (
  <ul className="grid grid-cols-3 gap-8 md:grid-cols-4 lg:grid-cols-5">
    {[...Array(10)].map((movie) => (
      <div key={nanoid()} data-skeletor={movie}>
        <div className="overflow-hidden rounded-lg bg-gray-300 animate-pulse h-[307px] w-[198px]" />
        <p className="mt-2 h-4 w-1/2 rounded-lg bg-gray-600" />
      </div>
    ))}
  </ul>
);

export default CarouselSkeletor;

/* eslint-enable react/no-array-index-key */
