import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Drawer from "@mui/material/Drawer";
import logo from "../../images/logo-footer.png";
import { navItems } from "../../constants";
import { Link } from "gatsby-theme-material-ui";

interface Props {
  handleDrawerToggle: () => void;
}

export function BoxDrawer(props: Props) {
  const { handleDrawerToggle } = props;
  return (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <img src={logo} alt="logo ahorro seguros" width={140} />
      <List>
        {navItems.map(({ nombre, path }) => (
          <Link to={path} key={nombre} style={{ textDecoration: "none" }}>
            <ListItem key={path} disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={nombre} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );
}

interface DrawerProps {
  handleDrawerToggle: () => void;
  container: any;
  mobileOpen: boolean;
}

export function DrawerApp(props: DrawerProps) {
  const drawerWidth = 240;
  const { handleDrawerToggle, container, mobileOpen } = props;

  return (
    <Box component="nav">
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
      >
        <BoxDrawer handleDrawerToggle={handleDrawerToggle} />
      </Drawer>
    </Box>
  );
}
