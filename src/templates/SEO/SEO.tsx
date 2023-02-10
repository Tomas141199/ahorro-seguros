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
      {/* <!-- Primary Meta Tags --> */}
      <meta name="title" content="Ahorro seguros - Roberto Lagunes Cabrera" />
      <meta
        name="description"
        content="Actualmente soy Agente Profesional de Seguros. Estoy certificado ante la Comisión Nacional de Seguros y Finanzas, con cédula c334854. Anteriormente me gradué con honores como Master en Comportamiento Humano y Liderazgo con Cédula 09155084, así mismo tengo la Licenciatura en Contaduría Pública con Cédula 3139374, Mi intención es fomentar la cultura de estar protegidos tanto como individualmente como familia, así como nuestro patrimonio, esto a través de la industria Aseguradora."
      />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://ahorro-seguros.com/" />
      <meta
        property="og:title"
        content="Meta Tags — Preview, Edit and Generate"
      />
      <meta
        property="og:description"
        content="Actualmente soy Agente Profesional de Seguros. Estoy certificado ante la Comisión Nacional de Seguros y Finanzas, con cédula c334854. Anteriormente me gradué con honores como Master en Comportamiento Humano y Liderazgo con Cédula 09155084, así mismo tengo la Licenciatura en Contaduría Pública con Cédula 3139374, Mi intención es fomentar la cultura de estar protegidos tanto como individualmente como familia, así como nuestro patrimonio, esto a través de la industria Aseguradora."
      />
      <meta
        property="og:image"
        content="https://res.cloudinary.com/my-account-145/image/upload/v1676001629/Whats_App_Image_2023_02_08_at_20_41_34_6ef8a03d90.jpg?updated_at=2023-02-10T04:00:43.279Z"
      />

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://ahorro-seguros.com/" />
      <meta
        property="twitter:title"
        content="Ahorro Seguros - Roberto Lagunes Cabrera"
      />
      <meta
        property="twitter:description"
        content="Actualmente soy Agente Profesional de Seguros. Estoy certificado ante la Comisión Nacional de Seguros y Finanzas, con cédula c334854. Anteriormente me gradué con honores como Master en Comportamiento Humano y Liderazgo con Cédula 09155084, así mismo tengo la Licenciatura en Contaduría Pública con Cédula 3139374, Mi intención es fomentar la cultura de estar protegidos tanto como individualmente como familia, así como nuestro patrimonio, esto a través de la industria Aseguradora."
      />
      <meta
        property="twitter:image"
        content="https://res.cloudinary.com/my-account-145/image/upload/v1676001629/Whats_App_Image_2023_02_08_at_20_41_34_6ef8a03d90.jpg?updated_at=2023-02-10T04:00:43.279Z"
      />
      {children}
    </>
  );
};
