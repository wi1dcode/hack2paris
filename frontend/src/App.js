import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { ThemeProvider } from "@mui/material/styles";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import TemplateNav from "./components/TemplateNav";
import Home from "./pages/Home";
import List from "./pages/List";
import Vehicle from "./pages/Vehicle";
import User from "./pages/User";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import Login from "./pages/Login";

import "./styles/App.scss";

import theme from "./services/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="" element={<TemplateNav />}>
            <Route path="/" element={<Home />} />
            <Route path="/list" element={<List />} />
            <Route path="/vehicle" element={<Vehicle />} />
            <Route path="/user" element={<User />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
