const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const messageModel = new mongoose.Schema(
  {
    sender: {
      type: ObjectId,
      ref: "User",
    },
    content: {
      type: String,
      trim: true,
    },
    chat: {
      type: ObjectId,
      ref: "Chat",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Message", messageModel);
