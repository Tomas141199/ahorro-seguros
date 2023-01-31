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
      {children}
    </>
  );
};
