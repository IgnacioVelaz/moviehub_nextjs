import BasicMovieCard from "@/components/basic-movie-card/basicMovieCard";
import Container from "@/components/container/container";
import { getUserMovies } from "@/services/movie.service";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import Link from "next/link";

export default withPageAuthRequired(async () => {
  const { movies } = await getUserMovies();
  const watchlist = movies.filter((movie) => movie.type === "watchlist");

  return (
    <div className="p-8">
      <pre>{JSON.stringify(movies)}</pre>
      <Container>
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-blue text-2xl uppercase w-full text-center p-10">
            My Watchlist
          </h1>
        </div>
        {watchlist && watchlist.length > 0 ? (
          <div className="grid grid-cols-3 gap-8 md:grid-cols-4 lg:grid-cols-5">
            {watchlist.map((movie) => (
              <BasicMovieCard movie={movie} type="watchlist" />
            ))}
          </div>
        ) : (
          <>
            <h2 className="text-gray-500 text-3xl text-center mb-40">
              There are no movies in your watchlist. Go find some!
            </h2>
            <div className="text-center">
              <Link href="/discover">
                <button type="button">
                  <span className="text-3xl">Add Movie</span>
                </button>
              </Link>
            </div>
          </>
        )}
      </Container>
    </div>
  );
});
