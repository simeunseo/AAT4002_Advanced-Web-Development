const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose
  .connect("mongodb+srv://admin:Y5G4G5niY2APDPMK@cluster0.5nyf8tl.mongodb.net/")
  .then(() => console.log("Connected To Database"))
  .then(() => {
    app.listen(3000);
  })
  .catch((err) => console.log(err));
