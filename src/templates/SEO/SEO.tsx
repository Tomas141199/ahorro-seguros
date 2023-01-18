import React from "react";

interface Props {
  title?: string;
  children?: any;
}

export const SEO = (props: Props) => {
  const { title, children } = props;

  const seo = {
    title: title || "AS",
  };

  return (
    <>
      <title>{seo.title}</title>
      <link
        rel="icon"
        href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>👤</text></svg>"
      />
      {children}
    </>
  );
};
