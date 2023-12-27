import { useEffect, useRef } from "react";
import CarouselCard from "../CarouselCard";
import "./styles.css";

const Carousel = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ref.current?.scrollTo({ left: 1000 });
  }, []);

  return (
    <div id="carousel" ref={ref}>
      <CarouselCard />
      <CarouselCard />
      <CarouselCard />
      <CarouselCard />
    </div>
  );
};

export default Carousel;
