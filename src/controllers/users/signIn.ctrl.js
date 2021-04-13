const { User } = require("../../models");
const { validatePassword } = require("../../libs");
const jwt = require("jsonwebtoken");

const signIn = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (user === null) {
    res.status(400).json({
      message: "Invalid credentials",
    });
  } else {
    const isCorrectPass = await validatePassword(
      req.body.password,
      user.password
    );

    if (isCorrectPass) {
      const token = await jwt.sign(
        {
          id: user._id,
          username: user.username,
          email: user.email,
        },
        process.env.SECRET_KEY,
        { expiresIn: 86400 }
      );

      const query = { email: user.email };
      await User.findOneAndUpdate(query, { token: token });

      res
        .status(200)
        .header({
          Authorization: token,
          "Access-Control-Expose-Headers": "Authorization",
        })
        .json({
          status: "Ok",
          message: "You are authenticated",
        });
    } else {
      res.status(400).json({
        message: "Invalid credentials",
      });
    }
  }
};

module.exports = signIn;
