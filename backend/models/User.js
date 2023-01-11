const { Schema, model } = require("mongoose")

// model of user

const User = new Schema(
  {
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    mail: { type: String, unique: true, required: true },
    city: { type: String, required: true },
  },
  {
    versionKey: false,
  }
)

module.exports = model("User", User)
