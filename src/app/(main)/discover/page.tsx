import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import Search from "./components/search/search";
import CarouselContainer from "./components/carousel/carousel-container";

export default withPageAuthRequired(async () => (
  <>
    <Search />
    <CarouselContainer type="popular" title="Popular" />
    <CarouselContainer type="top_rated" title="Top Rated" />
    <CarouselContainer type="upcoming" title="Upcoming" />
    <CarouselContainer type="now_playing" title="On Theaters" />
  </>
));
