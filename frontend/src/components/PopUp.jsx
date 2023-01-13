import { useContext } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

import TextareaAutosize from "@mui/base/TextareaAutosize";
import UserInfosContext from "../contexts/UserInfos";

function PopUp() {
  const { isLogged } = useContext(UserInfosContext);

  return (
    <div className="popUp">
      {!isLogged ? (
        <>
          <p className="popUp__text">You need to log to contact the Owner</p>
          <div className="access">
            <Button
              component={Link}
              to="/register"
              className="acces__btn"
              variant="contained"
            >
              Register
            </Button>
            <Button
              component={Link}
              to="/login"
              className="acces__btn"
              variant="contained"
            >
              Login
            </Button>
          </div>
        </>
      ) : (
        <>
          <p className="popUp__text">Contact the Owner</p>
          <form className="form">
            <textarea
              className="textarea"
              placeholder="Type your demand"
            ></textarea>
            <div className="access">
              <Button className="acces__btn" variant="contained">
                Send
              </Button>
            </div>
          </form>
        </>
      )}
    </div>
  );
}

export default PopUp;
