const mongoose = require("mongoose");
const mongoDBUri =
  process.env.PROD_DB || "mongodb://127.0.0.1:27017/tourDatabase";

mongoose
  .connect(mongoDBUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB Server Connected!");
  })
  .catch((error) => {
    console.log("MongoDB Server Connection Error:", error.message);
  });

mongoose.set("debug", false);

const db = mongoose.connection;

module.exports = db;
