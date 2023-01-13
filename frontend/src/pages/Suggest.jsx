import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import { Navigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"

function Suggest() {
  const [title, setTitle] = useState("")
  const [price, setPrice] = useState("")
  const [city, setCity] = useState("")
  const [picture, setPicture] = useState("")
  const [description, setDescription] = useState("")

  async function addSugest(event) {
    event.preventDefault()

    await axios
      .post("http://localhost:5001/product", {
        name: title,
        price: price,
        city: city,
        photo: picture,
        description: description,
      })
      .then(() => {
        Navigate("/list", { replace: true })
      })
  }

  return (
    <form className="form form--only" onSubmit={addSugest}>
      <div>
        <TextField
          className="form__fieldset"
          helperText="Please enter your title"
          id="demo-helper-text-aligned"
          label="Title"
          value={title}
          onInput={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <TextField
          className="form__fieldset"
          helperText="Please enter your price"
          id="demo-helper-text-aligned"
          label="Price"
          value={price}
          onInput={(e) => setPrice(e.target.value)}
        />
      </div>
      <div>
        <TextField
          className="form__fieldset"
          helperText="Please enter your city"
          id="demo-helper-text-aligned"
          label="City"
          value={city}
          onInput={(e) => setCity(e.target.value)}
        />
      </div>
      <div>
        <TextField
          className="form__fieldset"
          helperText="Please enter your picture"
          id="demo-helper-text-aligned"
          label="Picture URL"
          type="Picture"
          value={picture}
          onInput={(e) => setPicture(e.target.value)}
        />
      </div>
      <div>
        <TextField
          className="form__fieldset"
          helperText="Please enter your description"
          id="demo-helper-text-aligned"
          label="Description"
          type="Description"
          value={description}
          onInput={(e) => setDescription(e.target.value)}
        />
      </div>
      <Button className="acces-btn" variant="contained" type="submit">
        Post
      </Button>
    </form>
  )
}

export default Suggest
