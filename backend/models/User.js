const { Schema, model } = require("mongoose");

const User = new Schema(
  {
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    location_product: {
      type: Schema.Types.ObjectId,
    },
    mail: { type: String, unique: true, required: true },
    city: { type: String, required: true },
  },
  {
    versionKey: false,
  }
);

module.exports = model("User", User);
