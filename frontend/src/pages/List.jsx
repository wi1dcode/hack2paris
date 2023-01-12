import React, { useState, useEffect } from "react"
import axios from "axios"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"

function List() {
  const [products, setProducts] = useState(null)
  const [where, setWhere] = useState("")
  const [when, setWhen] = useState("")

  useEffect(() => {
    axios.get("http://localhost:5000/products").then((res) => {
      setProducts(res)
    })
  }, [products])

  if (!post) return null;

  return <div>List</div>
}

export default List
