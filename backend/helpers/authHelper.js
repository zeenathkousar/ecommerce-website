const bcrypt = require("bcrypt");

const hashfunc = async (password) => {
  try {
    const saltrounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltrounds);
    return hashedPassword;
  } catch (err) {
    console.log(err);
  }
};

const comparePassword = async (password, hashpassword) => {
  return bcrypt.compare(password, hashpassword);
};

module.exports = { hashfunc, comparePassword };
