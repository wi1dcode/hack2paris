import { useContext } from "react"
import { Link } from "react-router-dom"
import Button from "@mui/material/Button"
import UserInfosContext from "../contexts/UserInfos"

function PopUp() {
  const { isLogged } = useContext(UserInfosContext)

  return (
    <div>
      {
        !isLogged && (
          <div className="popUp">
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
          </div>
        )
        // :
        // <>
        //     <p className="popUp__text">Contact the Owner</p>
        //     <form className="form--contact">
        //         <textarea className="textarea"></textarea>
        //         <Button
        //             variant="contained"
        //         >
        //             Send
        //         </Button>
        //     </form>
        // </>
      }
    </div>
  )
}

export default PopUp
