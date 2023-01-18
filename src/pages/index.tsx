import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { MainLayout } from "../templates";
import { SEO } from "../templates";
import { Carrusel } from "../components";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <MainLayout>
      <Carrusel />
    </MainLayout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <SEO title="Ahorro Seguros" />;
