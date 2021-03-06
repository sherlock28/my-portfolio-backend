const { User } = require("../../models");
const { encryptPassword } = require("../../libs");

const signUp = async (req, res) => {
  const { username, email, password } = req.body;

  const newUser = new User({
    username,
    email,
    password,
  });

  const user = await User.findOne({ email: email }).lean();

  if (user === null) {
    newUser.password = await encryptPassword(newUser.password);
    const savedUser = await newUser.save();
    res.status(201).json({
      status: 'Ok',
      message: 'Registered',
      user: savedUser
    });
  } else {
    res.status(400).json({
      status: 'Error',
      message: 'The email is already in use',
    });
  }
};

module.exports = signUp;
