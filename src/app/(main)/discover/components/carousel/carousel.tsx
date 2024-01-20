"use client";

import { Pagination, A11y, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import movieFunctions from "@/utils/movie-functions";
import { nanoid } from "nanoid";
import { TmdbMovie } from "../../models";
import TMDBMovieCard from "../tmdb-movie-card/tmdb-movie-card";

import "./swiper.styles.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

type Props = {
  movies: TmdbMovie[];
  title: string;
};

const Carousel = ({ movies, title }: Props) => {
  const [swiperIsLoaded, setSwiperIsLoaded] = useState(false);

  const handleSwiperLoad = () => {
    setSwiperIsLoaded(true);
  };

  return (
    <div>
      {swiperIsLoaded && <h2 className="uppercase text-xl mt-6">{title}</h2>}
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
        onSwiper={handleSwiperLoad}
      >
        {movies.map((movie) => (
          <SwiperSlide key={nanoid()}>
            {swiperIsLoaded && (
              <TMDBMovieCard movie={movie} handlers={movieFunctions} />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
