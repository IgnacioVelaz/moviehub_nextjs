import Carousel from "./components/carousel/Carousel";
import Search from "./components/search/search";
import { getMovies } from "./services";

const Discover = async () => {
  const popularMovies = await getMovies("popular");
  const topRatedMovies = await getMovies("top_rated");
  const upcomingMovies = await getMovies("upcoming");
  const theaterMovies = await getMovies("now_playing");

  return (
    <>
      <Search />
      <Carousel movies={popularMovies} title="Popular" />
      <Carousel movies={topRatedMovies} title="Top Rated" />
      <Carousel movies={upcomingMovies} title="Upcoming" />
      <Carousel movies={theaterMovies} title="On Theaters" />
      {/* <div className="grid grid-cols-3 gap-8 md:grid-cols-4 lg:grid-cols-5">
        {movies && movies.length > 0
          ? movies.map((movie) => <MovieCard movie={movie} />)
          : null}
      </div> */}
    </>
  );
};
export default Discover;
