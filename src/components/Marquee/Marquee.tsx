import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Marquee from "react-fast-marquee";
import { Box } from "@mui/material";

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
        bgcolor: "#F3F5F6",
      }}
    >
      <Marquee speed={10}>
        {data.map((item: any) => {
          return (
            <img
              key={item.node.id}
              src={item.node.logo[0].url}
              alt={item.node.nombre}
              className="marquee-img"
            />
          );
        })}
      </Marquee>
    </Box>
  );
};

export default ComponentName;
