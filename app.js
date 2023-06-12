const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/route");

const app = express();

app.use("/messages", router);

mongoose
  .connect(
    "mongodb+srv://admin:Y5G4G5niY2APDPMK@cluster0.5nyf8tl.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected To Database"))
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => console.log(err));
