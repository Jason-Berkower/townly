const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tourSchema = new Schema(
  {
    name: { type: String, required: true },
    tour_operator: { type: String, required: true },
    date: { type: String, required: true },
    time: { type: String, required: true },
    type: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    popularity: { type: Number, required: true },
    imgURL: { type: String, required: true },
    street: { type: String, required: true },
    city: { type: String, required: true },
    country: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Tour", tourSchema);
