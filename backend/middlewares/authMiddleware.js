const JWT = require("jsonwebtoken");

//Protected Routes token base
const requireSign = async (req, res, next) => {
  try {
    console.log("try block");
    console.log(`req headers are ${req.headers.authorization}`);
    const decode = await JWT.verify(
      req.headers.authorization,
      process.env.JWT_SECRET
    );
    // const token = req.body.jwt;
    // const decode = await JWT.verify(token, process.env.JWT_SECRET);
    // console.log(`decode value is ${decoode}`);

    next();
  } catch (err) {
    console.log(err);
  }
};

module.exports = requireSign;
