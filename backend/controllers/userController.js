const { generateToken } = require("../helpers/tokens");
const { validateEmail, validateLength } = require("../helpers/validation");
const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");

exports.register = async (req, res, next) => {
  try {
    const { name, email, password, pic } = req.body;

    if (!validateEmail(email)) {
      return res.status(400).json({ message: "Invalid email address." });
    }
    const check = await userModel.findOne({ email });

    if (check) {
      return res.status(400).json({
        message:
          "The email address already exists, try with a different email address.",
      });
    }

    if (!validateLength(name, 1, 30)) {
      return res.status(400).json({
        message: "Name must be between 1 and 30 characters",
      });
    }

    if (!validateLength(password, 6, 30)) {
      return res
        .status(400)
        .json({ message: "Password must be at least 6 characters" });
    }
    const salt = await bcrypt.genSalt(12);
    const encryptedPassword = await bcrypt.hash(password, salt);

    const user = await new userModel({
      ...req.body,
      password: encryptedPassword,
    }).save();
    const token = generateToken(
      {
        id: user._id.toString(),
      },
      "7d"
    );

    res.send({
      id: user._id,
      name: user.name,
      pic: user.pic,
      email: user.email,
      token: token,
      message: "Registration successful.",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message:
          "The email address you entered is not connected to an account.",
      });
    }

    const check = await bcrypt.compare(password, user.password);
    if (!check) {
      return res.status(400).json({
        message: "Invalid credentials. Please, try again.",
      });
    }
    const token = generateToken(
      {
        id: user._id.toString(),
      },
      "7d"
    );
    res.send({
      id: user._id,
      name: user.name,
      email: user.email,
      pic: user.pic,
      token: token,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAllUsers = async (req, res, next) => {
  try {
    const keyword = req.query.search
      ? {
          $or: [
            { name: { $regex: req.query.search, $options: "i" } },
            { email: { $regex: req.query.search, $options: "i" } },
          ],
        }
      : {};
    console.log(req.user);
    const users = await userModel
      .find(keyword)
      .find({ _id: { $ne: req.user._id } });
    res.send(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
