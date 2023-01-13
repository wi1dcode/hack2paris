import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
//import AnimationIcon from '@mui/icons-material/Animation';
import OutboundIcon from "@mui/icons-material/Outbound";
import ConnexionPanel from "./ConnexionPanel";

function handlerMenu() {
  let panelMenu = document.querySelector(".header__panel");
  panelMenu.classList.toggle("opened");
}

function Header() {
  return (
    <header connexion="connexion" className="header">
      <Link to="/" className="header__logo">
        <OutboundIcon />
        <span className="header__title">
          <span>Geeks&nbsp;</span>
          <span>on Wheels</span>
        </span>
      </Link>
      <Button
        className="header__menu"
        variant="contained"
        startIcon={<AccountBoxIcon className="isNoMobile" />}
        endIcon={<MenuIcon />}
        onClick={handlerMenu}
      >
        <span className="srOnly">Menu Connexion</span>
      </Button>
      <ConnexionPanel />
    </header>
  );
}

export default Header;
