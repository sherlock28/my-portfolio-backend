const fieldUserValidation = (req, res, next) => {
  const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;

  const { username, email, password, confirmpass } = req.body;

  if (username === undefined || username.length === 0) {
    res.status(400).json({ message: "Username is required" });
    return;
  }

  if (email === undefined || email.length == 0) {
    res.status(400).json({ message: "Email is required" });
    return;
  }

  if (password === undefined || password.length == 0) {
    res.status(400).json({ message: "Password is required" });
    return;
  }

  if (confirmpass === undefined || confirmpass.length == 0) {
    res.status(400).json({ message: "Confirmpass is required" });
    return;
  }

  if (email.toString().match(emailRegex) === null) {
    res.status(400).json({
      message: "Invalid email",
    });
    return;
  }

  if (password != confirmpass) {
    res.status(400).json({ message: "Password not match" });
    return;
  }
  if (password.length < 8) {
    res.status(400).json({ message: "Password must be at least 8 chars long" });
    return;
  }

  next();
};

module.exports = fieldUserValidation;
