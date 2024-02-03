import Container from "@/components/container/container";
import { getUserMovies } from "@/services/movie.service";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import UserMovies from "../../components/user-movies/user-movies";

export default withPageAuthRequired(async () => {
  const res = await getUserMovies();

  if (typeof res === "string") {
    return <h2>{res}</h2>;
  }

  const movies = res && res.movies;

  return (
    <div className="p-8">
      <Container>
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-blue text-2xl uppercase w-full text-center p-10">
            Watched
          </h1>
        </div>
        <UserMovies movies={movies} type="watched" />
      </Container>
    </div>
  );
});
