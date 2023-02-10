import Typography from "@mui/material/Typography";
import { HeadFC, Link } from "gatsby";
import React from "react";
import { SEO } from "../templates";

const respuesta = () => {
  return (
    <div className="wrapper">
      <svg
        className="checkmark"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 52 52"
      >
        <circle
          className="checkmark__circle"
          cx="26"
          cy="26"
          r="25"
          fill="none"
        />{" "}
        <path
          className="checkmark__check"
          fill="none"
          d="M14.1 27.2l7.1 7.2 16.7-16.8"
        />
      </svg>
      <Typography variant="h6" color="black" display={"block"}>
        Tu solicitud ha sido enviada correctamente
      </Typography>
      <Typography>
        Enseguida me pondré en contacto contigo para atender tu petición
      </Typography>
      <Link
        to="/"
        style={{
          color: "#00477A",
        }}
      >
        Ir al inicio
      </Link>
    </div>
  );
};

export default respuesta;

export const Head: HeadFC = () => <SEO title="Formulario enviado" />;
