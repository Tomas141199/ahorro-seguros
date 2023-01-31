import { createTheme } from "@mui/material";

const theme = createTheme({
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: "white",
        },
      },
    },
  },
  palette: {
    primary: {
      main: "#00477A",
    },
    secondary: {
      main: "#FF3E00",
    },
    mode: "light",
  },
});

theme.typography.h3 = {
  fontSize: "1.2rem",
  "@media (min-width:600px)": {
    fontSize: "1.5rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "2.4rem",
  },
};

theme.typography.h2 = {
  fontSize: "1.3rem",
  "@media (min-width:600px)": {
    fontSize: "1.6rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "2.6rem",
  },
};

export default theme;
