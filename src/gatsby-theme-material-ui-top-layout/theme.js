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
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
  },
});

export default theme;
