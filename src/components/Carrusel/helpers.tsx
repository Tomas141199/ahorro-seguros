import * as React from "react";
import Typography from "@mui/material/Typography";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import { Button } from "gatsby-theme-material-ui";

interface CardProps {
  data: any;
  dataIndex: any;
}

const Shine = keyframes`
  to {
    background-position-x: -200%;
  }
`;

const LazyLoad = styled.img`
  &.loading {
    background: #eee;
    background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
    border-radius: 5px;
    background-size: 200% 100%;
    animation: 1.5s ${Shine} linear infinite;
  }
`;

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

export const Card = React.memo(function (props: CardProps) {
  const { data, dataIndex } = props;
  const {
    node: {
      cover: { url },
      titulo,
    },
  } = data[dataIndex];

  return (
    <div
      style={{
        width: "100%",
        height: 300,
        userSelect: "none",
        position: "relative",
      }}
      className="my-slide-component"
    >
      <LazyImage src={url} alt={titulo} />
      <Typography
        variant="h4"
        component="h4"
        color="white"
        sx={{
          width: { xs: "100%", sm: "auto" },
          position: "absolute",
          top: 30,
          left: "50%",
          transform: "translate(-50%,0)",
          fontWeight: "medium",
        }}
      >
        {titulo}
      </Typography>
      <Link to="cotizar" style={{ textDecoration: "none" }}>
        <Button
          variant="contained"
          color="primary"
          sx={{
            position: "absolute",
            bottom: "30%",
            left: "50%",
            transform: "translate(-50%,0)",
          }}
        >
          COTIZAR AHORA
        </Button>
      </Link>
    </div>
  );
});
