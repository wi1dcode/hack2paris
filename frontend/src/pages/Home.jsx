import React, { useContext, useState } from "react"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker"
import ResearchInfosContext from "../contexts/ResearchInfos"

import dayjs from "dayjs"

function Home() {
  const { whereInput, setWhereInput, setDateFormated } =
    useContext(ResearchInfosContext)

  const [dateRaw, setRawDate] = useState(dayjs("2023-01-12T09:00:00"))

  const handleChange = (newValue) => {
    setRawDate(newValue)
  }

  async function onSubmitSearchProducts(event) {
    event.preventDefault()
    setDateFormated(
      `${dateRaw.$D < 10 ? "0" : ""}${dateRaw.$D}/${
        dateRaw.$M < 10 ? "0" : ""
      }${dateRaw.$M + 1}/${dateRaw.$y}`
    )
  }

  return (
    <main className="main homepage">
      <form className="form form--only" onSubmit={onSubmitSearchProducts}>
        <div>
          <TextField
            className="form__fieldset"
            helperText="Type the place where you want to rent"
            label="Where are you?"
            id="demo-helper-text-aligned"
            value={whereInput}
            onInput={(e) => setWhereInput(e.target.value)}
          />
        </div>
        <div>
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
        </div>
        <Button className="acces-btn" variant="contained" type="submit">
          Search
        </Button>
      </form>
    </main>
  )
}

export default Home
