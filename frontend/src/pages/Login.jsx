import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function Login() {
  const [usernameLog, setUsernameLog] = useState("");
  const [passwordLog, setPasswordLog] = useState("");

  const navigate = useNavigate();

  async function onSubmitLogin(event) {
    event.preventDefault();

    await axios
      .post("http://localhost:5001/auth/login", {
        password: passwordLog,
        username: usernameLog,
      })
      .then((res) => {
        const { token } = res.data;
        localStorage.setItem("token", token);
        navigate("/", { replace: true });
      });
  }

  return (
    <div>
      Login
      <form className="form" onSubmit={onSubmitLogin}>
        <div>
          <TextField
            helperText="Please enter your username"
            id="demo-helper-text-aligned"
            label="Username"
            value={usernameLog}
            onInput={(e) => setUsernameLog(e.target.value)}
          />
        </div>
        {/* test */}
        <div>
          <TextField
            helperText="Please enter your password"
            id="demo-helper-text-aligned"
            label="Password"
            type="password"
            value={passwordLog}
            onInput={(e) => setPasswordLog(e.target.value)}
          />
        </div>
        <Button className="acces-btn" variant="contained" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
}

export default Login;
