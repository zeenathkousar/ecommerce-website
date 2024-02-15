const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(`connected to db ${conn.connection.host}`);
  } catch (e) {
    console.log(`err in mongodb ${error}`.bgRed.white);
  }
};

module.exports = connectDB;
