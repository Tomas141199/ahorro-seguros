import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import { Appbar } from "../../components/Appbar";
import { DrawerApp } from "./helpers";
import Footer from "../../components/Footer/Footer";
import { Typography } from "@mui/material";

interface Props {
  window?: () => Window;
  children: React.ReactNode;
}

export default function MainLayout(props: Props) {
  const { window, children } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Appbar handleDrawerToggle={handleDrawerToggle} {...props} />
        <DrawerApp
          handleDrawerToggle={handleDrawerToggle}
          container={container}
          mobileOpen={mobileOpen}
        />
        <Box component="main" sx={{ width: "100%" }}>
          <Toolbar />
          {children}
        </Box>
      </Box>
      <Footer />
      <Typography
        sx={{
          textAlign: "center",
          fontSize: 12,
          paddingX: 4,
          paddingY: 1,
          bgcolor: "#F3F5F6",
        }}
      >
        Todos los derechos reservados. El uso de este sitio implica que aceptas
        nuestro{" "}
        <a
          href="https://res.cloudinary.com/my-account-145/image/upload/v1676001671/Aviso_de_Privacidad_478927f064.pdf?updated_at=2023-02-10T04:01:12.059Z"
          target={"_blank"}
          style={{ fontWeight: 600, color: "black" }}
        >
          Aviso de Privacidad
        </a>
        . Los pagos de cualquier tipo de póliza se realizan única y
        exclusivamente en cuentas a nombre de las compañías de seguros y nunca a
        nombre de particulares.
      </Typography>
    </Box>
  );
}
