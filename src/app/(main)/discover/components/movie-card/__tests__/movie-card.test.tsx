import MovieCard from "@/app/(main)/discover/components/movie-card/movie-card";
import { fireEvent, render, screen } from "@testing-library/react";

jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      prefetch: () => null,
    };
  },
}));

const mockMovie = {
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

const mockHandlers = {
  moveMovie: jest.fn(),
  addMovieToList: jest.fn(),
  deleteMovie: jest.fn(),
};

describe("Movie card", () => {
  beforeEach(() => {
    render(<MovieCard movie={mockMovie} handlers={mockHandlers} />);
  });

  describe("Render", () => {
    it("should render a movie heading", () => {
      const title = screen.getByRole("heading", {
        name: "Aquaman and the Lost Kingdom",
      });

      expect(title).toBeInTheDocument();
    });

    it("should render a movie image", () => {
      const img = screen.getByAltText("Aquaman and the Lost Kingdom Poster");

      expect(img).toBeInTheDocument();
    });

    it("should render an add to watchlist button", () => {
      const watchlistBtn = screen.getByRole("button", {
        name: "add to watchlist",
      });

      expect(watchlistBtn).toBeInTheDocument();
    });

    it("should render an add to watched button", () => {
      const watchedtBtn = screen.getByRole("button", {
        name: "add to watched",
      });

      expect(watchedtBtn).toBeInTheDocument();
    });
  });

  describe("Behavior", () => {
    it("should call addMovieToList when the add to watched button is clicked", async () => {
      const watchedBtn = screen.getByRole("button", {
        name: "add to watched",
      });

      await fireEvent.click(watchedBtn);

      expect(mockHandlers.addMovieToList).toHaveBeenCalled();
    });
    it("should call addMovieToList when the add to watchlist button is clicked", async () => {
      const watchlistBtn = screen.getByRole("button", {
        name: "add to watched",
      });

      await fireEvent.click(watchlistBtn);

      expect(mockHandlers.addMovieToList).toHaveBeenCalled();
    });
  });
});
