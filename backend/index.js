const express = require("express");
const mongoose = require("mongoose");
const authRouter = require("./routes/authRouter");
const productRouter = require("./routes/productRouter");
const PORT = process.env.PORT || 5000;
require("dotenv").config();
const { DB_USER, DB_HOST, DB_PASS } = process.env;

const app = express();

app.use(express.json());
app.use("/auth", authRouter);
app.use("/product", productRouter);

// Connecting mongoDB

const start = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/?retryWrites=true&w=majority`
    );
    app.listen(PORT, () => {
      console.log(`server startet on ${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
};

start();
