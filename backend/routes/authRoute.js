const express = require("express");

const {
  registerController,
  loginController,
  testController,
} = require("../controllers/authController");

const requireSign = require("../middlewares/authMiddleware");

//router object
const router = express.Router();

//routing
//REGISTER || Method post
router.post("/register", registerController);

//LOGIN  || Method post
router.post("/login", loginController);

//test routes
router.get("/test", requireSign, testController);

module.exports = router;
