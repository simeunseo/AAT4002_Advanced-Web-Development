const Message = require("../model/Message");

const getAllMessages = async (req, res, next) => {
  let messages;
  try {
    messages = await Message.find();
  } catch (err) {
    console.log(err);
  }

  if (!messages) {
    return res.status(404).json({ message: "No messages found" });
  }
  return res.status(200).json({ messages });
};

exports.getAllMessages = getAllMessages;
