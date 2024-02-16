const { hashfunc, comparePassword } = require("../helpers/authHelper");
const userModel = require("../models/userModel");
const JWT = require("jsonwebtoken");

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
      });
    }
    //register user
    const hashedPassword = await hashfunc(password);
    //saving to db
    const user = await new userModel({
      name,
      email,
      phone,
      address,
      password: hashedPassword,
    }).save();
    res.status(201).send({
      success: true,
      message: "User Registered Successfully",
      user,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      success: false,
      message: "Error in Registration",
      err,
    });
  }
};

//POST LOGIN
const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    //validation
    if (!email || !password) {
      return res.status(404).send({
        success: false,
        message: "Invalid Email or Password",
      });
    }
    //check user
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "Email is not registered",
      });
    }
    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.status(200).send({
        success: false,
        message: "Invalid Password",
      });
    }
    //token
    const token = await JWT.sign({ _id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    res.status(200).send({
      success: true,
      message: "Login Successfull",
      user: {
        name: user.name,
        email: user.email,
        phone: user.phone,
        address: user.address,
      },
      jwt: token,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      success: false,
      message: "Error in login",
      err,
    });
  }
};

//testController
const testController = (req, res) => {
  res.send("protected route");
};

module.exports = { registerController, loginController, testController };
