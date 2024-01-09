import BasicMovieCard from "@/components/basic-movie-card/basicMovieCard";
import Container from "@/components/container/container";
import { getUserMovies } from "@/services/movie.service";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import Link from "next/link";

export default withPageAuthRequired(async () => {
  const res = await getUserMovies();

  if (typeof res === "string") {
    return <h2>{res}</h2>;
  }

  const movies = res && res.movies;
  const watched = movies && movies.filter((movie) => movie.type === "watched");

  return (
    <div className="p-8">
      <Container>
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-blue text-2xl uppercase w-full text-center p-10">
            Watched
          </h1>
        </div>
        {watched && watched.length > 0 ? (
          <div className="grid grid-cols-3 gap-8 md:grid-cols-4 lg:grid-cols-5">
            {watched.map((movie) => (
              <BasicMovieCard movie={movie} type="watched" />
            ))}
          </div>
        ) : (
          <>
            <h2 className="text-gray-500 text-3xl text-center mb-40">
              You haven&apos;t seen any movies yet? 😨. Go watch some! 📽
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
