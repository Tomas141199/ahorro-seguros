import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Marquee from "react-fast-marquee";
import { Box } from "@mui/material";
import { grey } from "@mui/material/colors";

const query = graphql`
  query {
    allStrapiMarca {
      edges {
        node {
          id
          logo {
            url
          }
          nombre
        }
      }
    }
  }
`;

const ComponentName = () => {
  const {
    allStrapiMarca: { edges: data },
  } = useStaticQuery(query);

  return (
    <Box
      component={"section"}
      mt={12}
      sx={{
        bgcolor: grey.A100,
      }}
    >
      <Marquee speed={10}>
        {data.map((item: any) => {
          return (
            <img
              key={item.node.id}
              src={item.node.logo[0].url}
              alt={item.node.nombre}
              style={{
                width: "4%",
                aspectRatio: "3/2",
                objectFit: "contain",
                mixBlendMode: "color-burn",
                marginLeft: "110px",
                marginRight: "110px",
              }}
            />
          );
        })}
      </Marquee>
    </Box>
  );
};

export default ComponentName;
