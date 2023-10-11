import React from "react";
import Typography from "@mui/material/Typography";

import { LazyImage } from "../LazyImage";
import { ActionButton } from "./helpers";

interface CardProps {
  data: any;
  dataIndex: any;
}

export const Card = React.memo(function (props: CardProps) {
  const { data, dataIndex } = props;
  const { id, titulo, cover: url } = data[dataIndex];

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
          width: { xs: "95%", sm: "auto" },
          position: "absolute",
          top: 30,
          left: "50%",
          transform: "translate(-50%,0)",
          fontWeight: "medium",
        }}
      >
        {titulo}
      </Typography>
      <ActionButton />
    </div>
  );
});

export default Card;
