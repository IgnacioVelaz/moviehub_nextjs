"use client";

import { Pagination, A11y, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Suspense, lazy } from "react";
import movieFunctions from "@/utils/movieFunctions";
import { TmdbMovie } from "../../models";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

type Props = {
  movies: TmdbMovie[];
  title: string;
};

const TMDBMovieCard = lazy(() => import("../tmdb-movie-card/tmdb-movie-card"));

const Carousel = ({ movies, title }: Props) => (
  <>
    <h2>{title}</h2>
    <Swiper
      modules={[Pagination, A11y, Navigation]}
      spaceBetween={10}
      slidesPerView={4}
      slidesPerGroup={4}
      breakpoints={{
        766: {
          slidesPerView: 5,
          slidesPerGroup: 5,
        },
      }}
      pagination
      navigation
      loop
    >
      {movies.map((movie) => (
        <SwiperSlide key={movie.id}>
          <Suspense fallback={<div>Loading...</div>}>
            <TMDBMovieCard movie={movie} handlers={movieFunctions} />
          </Suspense>
        </SwiperSlide>
      ))}
    </Swiper>
  </>
);

export default Carousel;
