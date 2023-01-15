import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Box, Button } from "@mui/material";
import { MainLayout } from "../templates";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <MainLayout>
      <Box p={4}>
        <Button variant="contained" color="secondary">
          Hello gatsby-theme-material-ui
        </Button>
      </Box>
    </MainLayout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
