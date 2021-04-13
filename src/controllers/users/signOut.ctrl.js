const { User } = require("../../models");

const signOut = async (req, res) => {
  const token = req.header("Authorization");
  const query = { token: token };

  const user = await User.findOne(query);

  if (user == null) {
    res.status(400).json({
      status: "Error",
      message: "Invalid token",
    });
  } else {
    await User.update(query, { $unset: { token: 1 } });
    res.json({ status: "Ok", message: "You are logged out" });
  }
};

module.exports = signOut;
