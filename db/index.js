const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/tourDatabase", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB Server Connected!");
  })
  .catch((error) => {
    console.log("MongoDB Server Connection Error:", error.message);
  });

// Take this out before deployment
mongoose.set("debug", true);

const db = mongoose.connection;

module.exports = db;
