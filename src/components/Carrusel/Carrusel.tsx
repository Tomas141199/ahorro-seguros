import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import {
  StackedCarousel,
  ResponsiveContainer,
} from "react-stacked-center-carousel";
import { Card } from "../Card";
import "@fontsource/roboto/100.css";
import { carrusel } from "../../constants/carruselInfo";

const Carrusel = () => {
  const ref = React.useRef();

  return (
    <div style={{ width: "100%", position: "relative" }}>
      <ResponsiveContainer
        carouselRef={ref}
        render={(parentWidth, carouselRef) => {
          let currentVisibleSlide = 5;
          if (parentWidth <= 1440) currentVisibleSlide = 3;
          if (parentWidth <= 1080) currentVisibleSlide = 1;
          return (
            <StackedCarousel
              ref={carouselRef}
              slideComponent={Card}
              slideWidth={parentWidth < 800 ? parentWidth : 750}
              carouselWidth={parentWidth}
              data={carrusel}
              currentVisibleSlide={currentVisibleSlide}
              maxVisibleSlide={5}
              useGrabCursor
            />
          );
        }}
      />
    </div>
  );
};

export default Carrusel;
