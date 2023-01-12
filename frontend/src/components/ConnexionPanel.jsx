import React from "react";
import { useContext} from "react";
import { Link } from "react-router-dom";
import UserInfosContext from "../contexts/UserInfos";



function ConnexionPanel() {
  function logout() {
    localStorage.clear();
};

function closeMenu() {
  let panelMenu = document.querySelector('.header__panel');
  panelMenu.classList.toggle("opened");
};
  // const [isLogged, setIsLogged] = useState(false);

  // useEffect(() => {
  //   if (localStorage.getItem("token") !== null) {
  //     setIsLogged(true);
  //   } else {
  //     setIsLogged(false);
  //   }
  // }, [isLogged]);
  
  const { isLogged } = useContext(UserInfosContext);

  return (
    <div  className="header__panel">
        {!isLogged ?
          <ul className="header__offline">
            <li className="header__item">
              <Link to="/register" className="header__link" onClick={closeMenu}>Register</Link>
            </li>
            <li className="header__item">
              <Link to="/login" className="header__link" onClick={closeMenu}>Login</Link>
            </li>
          </ul>
        :
          <ul className="header__online">
            <li className="header__item">
              <Link to="/messages" className="header__link" onClick={closeMenu}>Messages</Link>
            </li>
            <li className="header__item">
              <Link to="/profile" className="header__link" onClick={closeMenu}>Profile</Link>
            </li>
            <li className="header__item">
              <Link to="/suggest" className="header__link" onClick={closeMenu}>Suggest a vehicle</Link>
            </li>
            <li className="header__item header__item--button">
              <button className="header__logout" type="button" onClick={logout}>Logout</button>
            </li>
          </ul>
        }
  
    </div>
  );
}

export default ConnexionPanel;
