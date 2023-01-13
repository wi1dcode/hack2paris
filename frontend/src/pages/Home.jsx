import React, { useContext, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import ResearchInfosContext from "../contexts/ResearchInfos";
import { Link /* useNavigate */ } from "react-router-dom";

function Home() {
  const {
    whereInput,
    setWhereInput,
    setDateFormated,
    dateFormated,
    setDateRaw,
    dateRaw,
    onSubmitSearchProducts,
  } = useContext(ResearchInfosContext);

  /*   const navigate = useNavigate(); */

  const handleChange = (newValue) => {
    setDateRaw(newValue);
    setDateFormated(
      `${newValue.$D < 10 ? "0" : ""}${newValue.$D}/${
        newValue.$M < 10 ? "0" : ""
      }${newValue.$M + 1}/${newValue.$y}`
    );
  };

  console.log(dateFormated);
  console.log(whereInput);
  return (
    <main className="main homepage">
      <form className="form form--only" onSubmit={onSubmitSearchProducts}>
        <TextField
          className="form__fieldset"
          helperText="Type the place where you want to rent"
          label="Where are you?"
          id="demo-helper-text-aligned"
          value={whereInput}
          onInput={(e) => setWhereInput(e.target.value)}
        />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DesktopDatePicker
            className="form__fieldset"
            label="Choose a date"
            inputFormat="DD/MM/YYYY"
            value={dateRaw}
            onChange={handleChange}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
        <Link to="/list">
          <Button className="acces-btn" variant="contained" type="submit">
            Search
          </Button>
        </Link>
      </form>
    </main>
  );
}

export default Home;
