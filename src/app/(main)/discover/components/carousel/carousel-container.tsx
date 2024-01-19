import { FC, Suspense, lazy } from "react";
import { getMovies } from "../../services";
import CarouselSkeletor from "./carousel-skeletor";

type CarouselContainerProps = {
  type: string;
  title: string;
};

const Carousel = lazy(() => import("./carousel-temp"));

const CarouselContainer: FC<CarouselContainerProps> = async ({
  type,
  title,
}) => {
  const movies = await getMovies(type);

  return (
    <Suspense fallback={<CarouselSkeletor />}>
      <Carousel movies={movies} title={title} />{" "}
    </Suspense>
  );
};

export default CarouselContainer;
