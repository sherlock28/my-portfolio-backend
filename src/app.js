require("dotenv").config();

const path = require("path");
const multer = require("multer");
const express = require("express");

// initializations
require('./database');
const app = express();

// settings
app.set("port", process.env.PORT);

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
if (process.env.NODE_ENV === "development") {
  const morgan = require("morgan");
  app.use(morgan("dev"));
}

// routes
app.use("/api", require("./routes/projects.routes"));
app.use("/api/users", require("./routes/users.routes"));

module.exports = app;
