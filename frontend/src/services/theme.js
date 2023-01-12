import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: { //blue
      dark: "#1a746b",
      main: "#26a69a",
      light: "#51b7ae",
      contrastText: "#FFFFFF",
    },
    secondary: { //green
      dark: "#404a86",
      main: "#5c6bc0",
      light: "#7c88cc",
      contrastText: "#FFFFFF",
    },
    custom: {
      main: "#021b3d",  //navy
      contrastText: "#FFFFFF",
    },
  },
});
export default theme;
