import * as React from "react";
import Button from "@mui/material/Button";
import Slide from "@mui/material/Slide";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import RequestQuoteRoundedIcon from "@mui/icons-material/RequestQuoteRounded";
import Typography from "@mui/material/Typography";
import logo from "../../images/logo-nav.png";
import Box from "@mui/material/Box";
import { navItems } from "../../constants";
import { Link } from "gatsby";

interface Props {
  window?: () => Window;
  children: React.ReactElement;
}

export function HideOnScroll(props: Props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

interface Action {
  nombre: string;
}

export function CotizarAction(props: Action) {
  const { nombre } = props;
  return (
    <Button
      variant="contained"
      color="secondary"
      startIcon={<RequestQuoteRoundedIcon />}
    >
      {nombre}
    </Button>
  );
}

export function LogoNav() {
  return (
    <Typography
      variant="h6"
      component="div"
      sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
    >
      <img src={logo} alt="ahorro seguros logo" width={200} />
    </Typography>
  );
}

export function BoxLinks() {
  return (
    <Box sx={{ display: { xs: "none", sm: "block" } }}>
      {navItems.map(({ nombre, path }) => (
        <Link
          key={path}
          to={path}
          style={{ textDecoration: "none", marginLeft: 10 }}
        >
          {path === "/cotizar" ? (
            <CotizarAction {...{ nombre }} />
          ) : (
            <Button>{nombre}</Button>
          )}
        </Link>
      ))}
    </Box>
  );
}
