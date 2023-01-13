import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function Register() {
  const [usernameReg, setUsernameReg] = useState("");
  const [emailReg, setEmailReg] = useState("");
  const [cityReg, setCityReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");

  const navigate = useNavigate();

  async function onSubmit(event) {
    event.preventDefault();

    await axios
      .post("http://localhost:5001/auth/register", {
        username: usernameReg,
        password: passwordReg,
        mail: emailReg,
        city: cityReg,
      })
      .then(() => {
        navigate("/", { replace: true });
      });
  }

  return (
    <div>
      <form className="form form--only" onSubmit={onSubmit}>
        <div>
          <TextField
            className="form__fieldset"
            helperText="Please enter your username"
            id="demo-helper-text-aligned"
            label="Username"
            value={usernameReg}
            onInput={(e) => setUsernameReg(e.target.value)}
          />
        </div>
        <div>
          <TextField
            className="form__fieldset"
            helperText="Please enter your email"
            id="demo-helper-text-aligned"
            label="Email"
            type="email"
            value={emailReg}
            onInput={(e) => setEmailReg(e.target.value)}
          />
        </div>
        <div>
          <TextField
            className="form__fieldset"
            helperText="Please enter your city"
            id="demo-helper-text-aligned"
            label="City"
            value={cityReg}
            onInput={(e) => setCityReg(e.target.value)}
          />
        </div>
        <div>
          <TextField
            className="form__fieldset"
            helperText="Please enter your password"
            id="demo-helper-text-aligned"
            label="Password"
            type="password"
            value={passwordReg}
            onInput={(e) => setPasswordReg(e.target.value)}
          />
        </div>
        <Button className="acces-btn" variant="contained" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
}

export default Register;
