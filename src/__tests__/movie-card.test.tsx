import MovieCard from "@/app/(main)/discover/components/movie-card/movie-card";
import { render } from "@testing-library/react";

describe("movie card", () => {
  it("should render correctly", () => {
    const mockedMovie = {
      adult: false,
      backdrop_path: "/jXJxMcVoEuXzym3vFnjqDW4ifo6.jpg",
      genre_ids: [28, 12, 14],
      id: 572802,
      original_language: "en",
      original_title: "Aquaman and the Lost Kingdom",
      overview:
        "Black Manta, still driven by the need to avenge his father's death and wielding the power of the mythic Black Trident, will stop at nothing to take Aquaman down once and for all. To defeat him, Aquaman must turn to his imprisoned brother Orm, the former King of Atlantis, to forge an unlikely alliance in order to save the world from irreversible destruction.",
      popularity: 1213.101,
      poster_path: "/8xV47NDrjdZDpkVcCFqkdHa3T0C.jpg",
      release_date: "2023-12-20",
      title: "Aquaman and the Lost Kingdom",
      video: false,
      vote_average: 6.479,
      vote_count: 475,
    };

    const renderInstance = render(<MovieCard movie={mockedMovie} />);
    console.log(renderInstance);

    expect(renderInstance).toBeTruthy();
  });
});
