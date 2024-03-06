const express = require("express");

const {
  registerController,
  loginController,
  testController,
  forgotPasswordController,
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
router.post("/forgot-password", forgotPasswordController);

//protected route auth
router.get("/user-auth", requireSignIn, (req, res) => {
  console.log("get req");
  res.status(200).send({ ok: true });
});

//protected route auth
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  console.log("get req");
  res.status(200).send({ ok: true });
});

module.exports = router;
