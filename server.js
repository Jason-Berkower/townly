const db = require("./db");
const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const PORT = process.env.PORT || 4567;
const routes = require("./routes");

db.on("error", console.error.bind(console, "Mongo Connection Error"));

const app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());

app.use("/api", routes);

app.listen(PORT, () => console.log(`Express server listening on port ${PORT}`));
