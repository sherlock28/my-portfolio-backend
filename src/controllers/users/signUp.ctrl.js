const { User } = require("../../models");
const { encryptPassword } = require("../../libs");
const jwt = require("jsonwebtoken");

const signUp = async (req, res) => {
  res.json({ msg: "signUp" });
};

module.exports = signUp;
