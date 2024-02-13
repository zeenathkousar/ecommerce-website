const express = require("express");
const app = express();

const colors = require("colors");

//configure env
const dotenv = require("dotenv").config({ path: "" });

//

const port = process.env.PORT || 4000;

//creating rest api
app.get("/", (req, res) => {
  res.send({
    message: "welcome to the application",
  });
});

//running - listen server
app.listen(port, () => {
  console.log(`Server Started ${port} `.bgCyan.white);
});
