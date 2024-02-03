import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import CarouselContainer from "../components/carousel/carousel-container";
import Search from "../components/search/search";

export default withPageAuthRequired(async () => (
  <>
    <Search />
    <div className="min-h-screen">
      <CarouselContainer type="popular" title="Popular" />
      <CarouselContainer type="top_rated" title="Top Rated" />
      <CarouselContainer type="upcoming" title="Upcoming" />
      <CarouselContainer type="now_playing" title="On Theaters" />
    </div>
  </>
));
