const express = require("express");
const mongoose = require("mongoose");
const authRouter = require("./routes/authRouter");
const productRouter = require("./routes/productRouter");
const PORT = process.env.PORT || 5000;
require("dotenv").config();
const { DB_USER, DB_HOST, DB_PASS, FRONTEND_URL } = process.env;
const cors = require("cors");

const app = express();

/// Linking frontend
app.use(
  cors({
    origin: FRONTEND_URL ?? "http://localhost:3000",
    optionsSuccessStatus: 200,
  })
);

app.use(express.json());;
app.use("/auth", authRouter);;
app.use("/product", productRouter);;

// Connecting mongoDB
mongoose.set("strictQuery", false)

const start = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/?retryWrites=true&w=majority`
    );
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
};

start();
