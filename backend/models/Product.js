const { Schema, model } = require("mongoose")

const Product = new Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    localisation: { type: String, required: true },
    owner: {
      type: String,
      required: true,
    },
    isAvailable: { type: Boolean, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    rentings: {
      type: [Map],
      of: new Schema({
        renter_id: { type: Schema.Types.ObjectId, required: true },
        renter_date: { type: Date, required: true },
      }),
      required: false,
    },
    photo: { type: String, required: true },
  },
  {
    versionKey: false,
  }
)

module.exports = model("Product", Product)
