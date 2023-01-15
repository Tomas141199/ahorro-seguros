import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import { Appbar } from "../../components/Appbar";
import { DrawerApp } from "./helpers";

interface Props {
  window?: () => Window;
  children: React.ReactNode;
}

export default function DrawerAppBar(props: Props) {
  const { window, children } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Appbar handleDrawerToggle={handleDrawerToggle} {...props} />
      <DrawerApp
        handleDrawerToggle={handleDrawerToggle}
        container={container}
        mobileOpen={mobileOpen}
      />
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}
