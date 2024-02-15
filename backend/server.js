const express = require("express");
const app = express();

const colors = require("colors");
const morgan = require("morgan");
const connectDB = require("./config/db");

//importing routes
const authRoute = require("./routes/authRoute");

//configure env
const dotenv = require("dotenv").config({ path: "" });

//db connection config
connectDB();

//configure morgan- middlewares
app.use(express.json());
app.use(morgan("dev"));

const port = process.env.PORT || 4000;

//routes
app.use("/api/v1/auth", authRoute);

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
