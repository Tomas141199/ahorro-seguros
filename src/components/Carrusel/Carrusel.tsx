import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import {
  StackedCarousel,
  ResponsiveContainer,
} from "react-stacked-center-carousel";
import { Card } from "../Card";
import "@fontsource/roboto/100.css";

const Carrusel = () => {
  const data = useStaticQuery(graphql`
    query {
      allStrapiCarrusel {
        edges {
          node {
            id
            titulo
            cover {
              strapi_id
              url
            }
          }
        }
      }
    }
  `);

  const {
    allStrapiCarrusel: { edges: info },
  } = data;

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
              data={info}
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
