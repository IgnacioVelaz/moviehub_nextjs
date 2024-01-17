import { fireEvent, render, screen } from "@testing-library/react";
import UserMovieCard from "../userMovieCard";

jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      prefetch: () => null,
    };
  },
}));

const mockMovie = {
  name: "The Shawshank Redemption",
  id: "65a7d1b2efc9b4131bce641e",
  tmdb_id: 278,
  poster_image:
    "https://themoviedb.org/t/p/w200/lyQBXzOQSuE59IsHyhrp0qIiPAz.jpg",
  score: 8.71,
  type: "watched",
  genres: [
    {
      name: "Crime",
    },
    {
      name: "Drama",
    },
  ],
};

const mockHandlers = {
  moveMovie: jest.fn(),
  addMovieToList: jest.fn(),
  deleteMovie: jest.fn(),
};

describe("Watched movie card", () => {
  beforeEach(() => {
    render(<UserMovieCard movie={mockMovie} handlers={mockHandlers} />);
  });

  describe("Render", () => {
    it("should render a movie image", () => {
      const img = screen.getByAltText("The Shawshank Redemption Poster");

      expect(img).toBeInTheDocument();
    });

    it("should render a move to watchlist button", () => {
      const moveToWatchlistBtn = screen.getByRole("button", {
        name: "Move to watchlist",
      });

      expect(moveToWatchlistBtn).toBeInTheDocument();
    });

    it("should not render a move to watched button", () => {
      const moveToWatchedtBtn = screen.queryByRole("button", {
        name: "Move to watched",
      });

      expect(moveToWatchedtBtn).not.toBeInTheDocument();
    });
  });

  describe("Behavior", () => {
    it("should call moveMovie when the move to watchlist button is clicked", async () => {
      const moveToWatchlistBtn = screen.getByRole("button", {
        name: "Move to watchlist",
      });

      await fireEvent.click(moveToWatchlistBtn);

      expect(mockHandlers.moveMovie).toHaveBeenCalled();
    });
    it("should call deleteMovie when the delete movie button is clicked", async () => {
      const deleteBtn = screen.getByRole("button", {
        name: "Delete movie",
      });

      await fireEvent.click(deleteBtn);

      expect(mockHandlers.deleteMovie).toHaveBeenCalled();
    });
  });
});
