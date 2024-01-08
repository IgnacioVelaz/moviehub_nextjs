import { getUserByEmail } from "@/services/user.service";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import Carousel from "./components/carousel/Carousel";
import Search from "./components/search/search";
import { getMovies } from "./services";

export default withPageAuthRequired(async () => {
  const popularMovies = await getMovies("popular");
  const topRatedMovies = await getMovies("top_rated");
  const upcomingMovies = await getMovies("upcoming");
  const theaterMovies = await getMovies("now_playing");

  await getUserByEmail();

  return (
    <>
      <Search />
      <Carousel movies={popularMovies} title="Popular" />
      <Carousel movies={topRatedMovies} title="Top Rated" />
      <Carousel movies={upcomingMovies} title="Upcoming" />
      <Carousel movies={theaterMovies} title="On Theaters" />
    </>
  );
});
