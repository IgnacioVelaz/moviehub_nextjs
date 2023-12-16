import MovieCard from "./components/movie-card";
import Search from "./components/search/search";
import { getPopularMovies } from "./services";

const fetchPopularMovies = async () => getPopularMovies();

const Discover = async () => {
  const movies = await fetchPopularMovies();

  return (
    <>
      <Search />
      <div className="grid grid-cols-3 gap-8 md:grid-cols-4 lg:grid-cols-5">
        {movies && movies.length > 0
          ? movies.map((movie) => <MovieCard movie={movie} />)
          : null}
      </div>
    </>
  );
};
export default Discover;
