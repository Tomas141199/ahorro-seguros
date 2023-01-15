import React from "react";
import IconButton from "@mui/material/IconButton";
import AppBar from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import { BoxLinks, HideOnScroll, LogoNav } from "./helpers";

interface Props {
  window?: () => Window;
  children: React.ReactNode;
  handleDrawerToggle: () => void;
}

const Appbar = (props: Props) => {
  const { handleDrawerToggle } = props;
  return (
    <HideOnScroll {...props}>
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="primary"
            aria-label="open drawer"
            edge="start"
            sx={{
              display: { xs: "block", sm: "none" },
            }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
          <LogoNav />
          <BoxLinks />
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
};

export default Appbar;
