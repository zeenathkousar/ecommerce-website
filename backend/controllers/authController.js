const { hashfunc } = require("../helpers/authHelper");
const userModel = require("../models/userModel");

const registerController = async (req, res) => {
  try {
    //taking input data
    const { name, email, password, phone, address } = req.body;
    //validators
    if (!name) {
      return res.send({ error: "Name is Required" });
    }
    if (!email) {
      return res.send({ error: "Email is Required" });
    }
    if (!password) {
      return res.send({ error: "Password is Required" });
    }
    if (!phone) {
      return res.send({ error: "Phoneno is Required" });
    }
    if (!address) {
      return res.send({ error: "Address is Required" });
    }
    //check  user
    const existingUser = await userModel.findOne({ email });
    //check for esisting user
    if (existingUser) {
      return res.status(200).send({
        success: true,
        message: "you already Registred!! Please Login",
        error,
      });
    }
    //register user
    const hashedPassword = await hashfunc;
  } catch (err) {
    console.log(err);
    res.status(500).send({
      success: false,
      message: "Error in Registration",
      error,
    });
  }
};

module.exports = { registerController };
