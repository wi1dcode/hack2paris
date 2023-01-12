import React from "react";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
//import AnimationIcon from '@mui/icons-material/Animation';
import OutboundIcon from '@mui/icons-material/Outbound';
import ConnexionPanel from "./ConnexionPanel";

function handlerMenu(){
  let panelMenu = document.querySelector('.header__panel');
  panelMenu.classList.toggle("opened");
}

function Header() {
  return (
    <header connexion="connexion" className="header">
      <Link to="/home" className="header__title">
        <OutboundIcon />
        <span>Geeks on Wheels</span>
      </Link>
      <Button
        className="header__menu" 
        variant="contained" 
        startIcon={<MenuIcon fontSize="large" />} 
        endIcon={<AccountBoxIcon fontSize="large" />}
        onClick={handlerMenu}
        >
          <span className="srOnly">Menu Connexion</span>
      </Button>
      <ConnexionPanel />
    </header>
  );
}

export default Header;