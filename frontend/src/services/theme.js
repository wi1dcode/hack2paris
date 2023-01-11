import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      light: "#FED154",
      main: "#F4B301",
      dark: "#F5A302",
      contrastText: "#1E2329",
    },
    secondary: {
      light: "#3B4046",
      main: "#2A2F35",
      dark: "#1E2329",
      contrastText: "#F4B301",
    },
    custom: {
      main: "#5AAA95",
      contrastText: "#F4B301",
    },
  },
});
export default theme;
