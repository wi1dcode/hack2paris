import { Link } from "react-router-dom";
import { Button } from "react";

function logout() {
    localStorage.clear();
};

function ConnexionPanel() {
  return (
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
              <Button className="header__logout" onClick={logout}>Logout</Button>
            </li>
        </ul>
      </div>
  );
}

export default ConnexionPanel;