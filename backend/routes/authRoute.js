const express = require("express");

const {
  registerController,
  loginController,
  testController,
  forgetPasswordController,
} = require("../controllers/authController");

const { requireSignIn, isAdmin } = require("../middlewares/authMiddleware");

//router object
const router = express.Router();

//routing
//REGISTER || Method post
router.post("/register", registerController);

//LOGIN  || Method post
router.post("/login", loginController);

//test routes
router.get("/test", requireSignIn, isAdmin, testController);

//Forget Password  || POST
router.post("forget-password", forgetPasswordController);

//protected route auth
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

module.exports = router;
