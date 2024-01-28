const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const routes = require("./routes");
const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "./upload",
  })
);

app.use("/", routes);

module.exports = app;
