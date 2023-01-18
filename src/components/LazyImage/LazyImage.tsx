import * as React from "react";
import { LazyLoad } from "./LazyImage.styled";

interface LazyImageProps {
  src: string;
  alt: string;
}

export const LazyImage = (props: LazyImageProps) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const { src, alt } = props;
  const loadImage = () => {
    setIsLoading(false);
  };

  return (
    <LazyLoad
      src={src}
      alt={alt}
      onLoad={loadImage}
      style={{
        height: "100%",
        width: "100%",
        objectFit: "cover",
        borderRadius: 0,
      }}
      draggable={false}
      className={`${isLoading ? "loading" : ""}`}
    />
  );
};

export default LazyImage;
