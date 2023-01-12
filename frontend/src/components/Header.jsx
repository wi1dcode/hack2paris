import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
//import ConnexionPanel from "./ConnexionPanel";

function Header() {
  return (
    <header connexion="connexion" className="header">
      <Link to="/home" className="header__title">Geeks on Wheels</Link>
      <Button className="header__menu" variant="contained" startIcon={<MenuIcon />} endIcon={<AccountBoxIcon />} >
        <span className="srOnly">Menu Connexion</span>
      </Button>
      {/* <ConnexionPanel status="status"/> */}
    </header>
  );
}

export default Header;