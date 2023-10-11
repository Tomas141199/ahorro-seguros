import * as React from "react";
import Marquee from "react-fast-marquee";
import { Box } from "@mui/material";
import { marqueeInfo } from "../../constants/marqueeInfo";

const ComponentName = () => {
  return (
    <Box
      component={"section"}
      mt={12}
      sx={{
        bgcolor: "#F3F5F6",
      }}
    >
      <Marquee speed={10}>
        {marqueeInfo.map((item: any) => {
          return (
            <img
              key={item.id}
              src={item.url}
              alt={item.nombre}
              className="marquee-img"
            />
          );
        })}
      </Marquee>
    </Box>
  );
};

export default ComponentName;
