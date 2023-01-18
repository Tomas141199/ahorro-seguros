import * as React from "react";
import { Link } from "gatsby";

import Button from "@mui/material/Button";

export const ActionButton = () => {
  return (
    <Link to="cotizar" style={{ textDecoration: "none" }}>
      <Button
        variant="contained"
        color="secondary"
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
  );
};
