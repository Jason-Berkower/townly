const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    password_digest: { type: String, required: false },
    is_tourGuide: { type: Boolean, required: true },
    tours: [{ type: Schema.Types.ObjectId, ref: "Tour" }]
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
