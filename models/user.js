const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    password_digest: { type: String, required: true },
    is_tourGuide: { type: Boolean, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
