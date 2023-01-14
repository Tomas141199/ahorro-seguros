import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Box, Button } from "@mui/material";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Box p={4}>
      <Button variant="contained">Hello gatsby-theme-material-ui</Button>
    </Box>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
