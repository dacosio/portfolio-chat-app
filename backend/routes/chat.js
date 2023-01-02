const express = require("express");

const { authUser } = require("../middlewares/auth");
const {
  accessChat,
  getAllChats,
  renameGroup,
  createGroupChat,
  removeFromGroup,
  addToGroup,
} = require("../controllers/chatController");

const router = express.Router();

router.post("/chat", authUser, accessChat);
router.get("/chat", authUser, getAllChats);
router.post("/chat/group", authUser, createGroupChat);
router.put("/chat/rename", authUser, renameGroup);
router.put("/chat/group/remove", authUser, removeFromGroup);
router.put("/chat/group/add", authUser, addToGroup);

module.exports = router;
