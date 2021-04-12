require("dotenv").config();

const path = require("path");
const multer = require("multer");
const express = require("express");

// initializations
require("./database");
const app = express();

// settings
app.set("port", process.env.PORT);

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const storage = multer.diskStorage({
  destination: path.join(__dirname, "public/uploads"),
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
app.use(multer({ storage }).single("image"));

if (process.env.NODE_ENV === "development") {
  app.use(require("morgan")("dev"));
}

// routes
app.use("/api", require("./routes/projects.routes"));
app.use("/api/users", require("./routes/users.routes"));

module.exports = app;
