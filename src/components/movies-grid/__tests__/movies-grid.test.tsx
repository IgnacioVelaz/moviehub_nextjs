import { render, screen } from "@testing-library/react";
import MoviesGrid from "../movies-grid";

jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      prefetch: () => null,
    };
  },
}));

const mockHandlers = {
  moveMovie: jest.fn(),
  addMovieToList: jest.fn(),
  deleteMovie: jest.fn(),
};

const mockMovies = [
  {
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
  },
  {
    name: "Parasite",
    id: "65a83fc8f0344da1f2033a03",
    tmdb_id: 496243,
    poster_image:
      "https://themoviedb.org/t/p/w200/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
    score: 8.5,
    type: "watched",
    genres: [
      {
        name: "Thriller",
      },
      {
        name: "Comedy",
      },
      {
        name: "Drama",
      },
    ],
  },
];

describe("Movies Grid", () => {
  it("Should render a grid with the right number of items", () => {
    render(<MoviesGrid movies={mockMovies} handlers={mockHandlers} />);

    const titlesArray = screen.getAllByRole("img");

    expect(titlesArray.length).toBe(2);
  });
});
