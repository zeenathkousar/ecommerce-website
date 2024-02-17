const JWT = require("jsonwebtoken");
const userModel = require("../models/userModel");

//Protected Routes token base
const requireSign = async (req, res, next) => {
  try {
    console.log("try block of requiresign");
    console.log(`req headers are ${req.headers.authorization}`);
    const decode = await JWT.verify(
      req.headers.authorization,
      process.env.JWT_SECRET
    );
    req.user = decode;
    next();
  } catch (err) {
    console.log(err);
  }
};

//admin access
const isAdmin = async (req, res, next) => {
  try {
    console.log("try block of isAdmin");
    console.log(req.user);

    const user = await userModel.findById(req.user._id);
    //comparing role
    if (user.role !== 1) {
      return res.status(401).send({
        success: false,
        message: "UnAuthorized Access",
      });
    } else {
      next();
    }
  } catch (err) {
    console.log(err);
    res.status(401).send({
      success: false,
      err,
      message: "Error in admin middleware",
    });
  }
};

module.exports = { requireSign, isAdmin };
