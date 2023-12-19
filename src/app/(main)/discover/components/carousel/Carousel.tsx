"use client";

import { Pagination, A11y, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { TmdbMovie } from "../../models";
import MovieCard from "../movie-card";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

type Props = {
  movies: TmdbMovie[];
  title: string;
};

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
          <MovieCard movie={movie} />
        </SwiperSlide>
      ))}
    </Swiper>
  </>
);

export default Carousel;
