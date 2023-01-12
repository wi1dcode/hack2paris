import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import AccountBoxIcon from '@mui/icons-material/AccountBox';


function Header() {
  return (
    <header connexion="connexion" className="header">
      <Link to="/home" className="header__title">Geeks on Wheels</Link>
      <Button className="header__menu" variant="contained" startIcon={<MenuIcon />} endIcon={<AccountBoxIcon />} >
        <span className="srOnly">Menu Connexion</span>
      </Button>
      <div  className="header__panel">
        <ul className="header__offline">
          <li className="header__item">
            <Link to="/register" className="header__link">Register</Link>
          </li>
          <li className="header__item">
            <Link to="/login" className="header__link">Login</Link>
          </li>
          <li className="header__item">
            <Link to="/suggest" className="header__link">Suggest a vehicle</Link>
          </li>
        </ul>
        <ul className="header__online">
          <li className="header__item">
              <Link to="/messages" className="header__link">Messages</Link>
            </li>
            <li className="header__item">
              <Link to="/profile" className="header__link">Profile</Link>
            </li>
            <li className="header__item">
              <Button className="header__logout" variant="outlined">Logout</Button>
            </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;