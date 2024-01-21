import { nanoid } from "nanoid";

const MAX_RATING = 5;

const calculateRoundedRating = (average: number, maxRating: number) => {
  const starRating = (average / 10) * maxRating;
  return Math.round(starRating * 2) / 2;
};

/* eslint-disable react/no-array-index-key */
const renderStars = (maxRating: number, roundedRating: number) => (
  <ul className="flex">
    {[...Array(maxRating)].map((_, index) => (
      <li key={nanoid()} className="text-4xl">
        {index + 1 <= roundedRating ? "★" : "☆"}
      </li>
    ))}
  </ul>
);
/* eslint-enable react/no-array-index-key */

const StarsRating = ({ average }: { average: number }) => {
  const roundedRating = calculateRoundedRating(average, MAX_RATING);

  return (
    <div className="flex items-center gap-2">
      {renderStars(MAX_RATING, roundedRating)}
    </div>
  );
};

export default StarsRating;
