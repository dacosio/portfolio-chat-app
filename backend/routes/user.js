const express = require("express");
const {
  login,
  register,
  getAllUsers,
} = require("../controllers/userController");

const { authUser } = require("../middlewares/auth");

const router = express.Router();

router.post("/user/login", login);
router.post("/user/register", register);
router.get("/users", authUser, getAllUsers);

module.exports = router;
