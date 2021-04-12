const { User } = require('../../models');
const { validatePassword } = require("../../libs");
const jwt = require("jsonwebtoken");

const signIn = async (req, res) => {
  const user = await User.findOne({ username: req.body.username });
  if (user === null) {
      res.status(400).json({
          message: 'Invalid credentials'
      });
  } else {
      console.log(user)
    //   const isCorrectPass = await validatePassword();
    //   if(!isCorrectPass) {

    //   }
  }
  res.json({ msg: "signIn" });
};

module.exports = signIn;
