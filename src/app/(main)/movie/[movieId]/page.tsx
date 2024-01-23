import { getMovie } from "@/app/(main)/discover/services";
import Container from "@/components/container/container";
import { LuClock9 } from "react-icons/lu";
import { monthsNames } from "@/utils/months-names";
import { MovieDetailsInterface } from "@/interfaces/MovieDetailsInterface";
import Image from "next/image";
import { headers } from "next/headers";
import Link from "next/link";
import Modal from "@/components/modal/modal";
import { FC } from "react";
import { getCountryData } from "@/utils/get-country-data";
import { nanoid } from "nanoid";
import WhereToWatch from "./components/where-to-watch";
import StarsRating from "./components/stars-rating";
import MoviePageControlers from "./components/movie-page-controlers";

type MoviePageProps = {
  params: { movieId: number };
  searchParams: Record<string, string> | null | undefined;
};

const MoviePage: FC<MoviePageProps> = async ({ params, searchParams }) => {
  const show = searchParams?.show;
  const movieDetails: MovieDetailsInterface = await getMovie(params.movieId);

  const headersList = headers();
  const countryCode = headersList.get("country");
  const country = getCountryData(countryCode);

  const {
    backdrop_path: backdropPath,
    poster_path: posterPath,
    title,
    genres,
    runtime,
    release_date: releaseDate,
    overview,
    tagline,
    vote_average: voteAverage,
    vote_count: voteCount,
  } = movieDetails;

  const parsedDate = new Date(releaseDate);

  const releaseMonth = monthsNames[parsedDate.getMonth()];
  const releaseYear = parsedDate.getFullYear();

  return (
    <>
      {show && (
        <Modal closeLink={`/movie/${params.movieId}/`}>
          <WhereToWatch
            movieId={params.movieId}
            userCountry={country}
            movieTitle={title}
          />
        </Modal>
      )}
      <main>
        <Image
          src={`https://image.tmdb.org/t/p/original${backdropPath}`}
          alt={`${title} backdrop image`}
          className="absolute top-0 left-0 right-0 h-full object-cover w-full object-top"
          height={1200}
          width={1200}
          priority
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent z-10 h-96" />
        <Container>
          <section className="relative z-10 flex flex-col justify-between min-h-screen py-8 items-end">
            <div className="flex flex-col mt-8 items-end">
              <div className="flex items-center gap-1">
                <StarsRating average={voteAverage} />
                <p>({voteCount})</p>
              </div>
              <div>
                <MoviePageControlers movie={movieDetails} />
              </div>
            </div>
            <div className="flex w-full justify-between items-end">
              <div className="mb-7">
                <h1 className="font-bold text-2xl line-clamp-2 sm:text-3xl lg:font-semibold uppercase max-w-sm">
                  {title}
                </h1>
                <ul className="flex gap-2">
                  {genres.map(({ name }) => (
                    <li key={nanoid()} className="text-gray-400">
                      {name}
                    </li>
                  ))}
                </ul>
                <div className="flex gap-2">
                  <span className="flex items-baseline">
                    {runtime && `Duration: ${runtime}m`}
                  </span>
                  <LuClock9 className="relative top-1" />
                  <div>
                    {releaseMonth} {releaseYear}
                  </div>
                </div>
                <Link href={`/movie/${params.movieId}/?show=true`}>
                  <button
                    type="button"
                    className="border-white border-2 px-4 py-2 w-[80%] uppercase mt-2"
                  >
                    Where to Watch
                  </button>
                </Link>
              </div>
              <section className="flex justify-between gap-6 mb-7">
                <header
                  className={`max-w-xl flex flex-col  ${
                    overview === "" ? "hidden" : "block"
                  }`}
                >
                  <h3 className="mb-2 sm:font-semibold sm:text-lg uppercase ">
                    {tagline || "Synopsis"}
                  </h3>
                  <p className="leading-8 text-sm sm:leading-9 font-light [text-wrap:balance] sm:[text-wrap:wrap] sm:text-base lg:leading-7 lg:line-clamp-5">
                    {overview}
                  </p>
                </header>
              </section>
              <div className="hidden xl:flex  justify-end min-h-[270px]">
                <Image
                  src={`https://image.tmdb.org/t/p/w342${posterPath}`}
                  alt={`${title} Poster`}
                  width={180}
                  height={270}
                  className="rounded"
                />
              </div>
            </div>
          </section>
        </Container>
      </main>
    </>
  );
};

export default MoviePage;
