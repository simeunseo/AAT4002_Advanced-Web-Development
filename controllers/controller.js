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
  return res.status(200).json({ messages: "Get Success" });
};

const addMessage = async (req, res, next) => {
  const { name, content } = req.body;
  let message;
  try {
    message = new Message({
      name,
      content,
    });
    await message.save();
  } catch (err) {
    console.log(err);
  }

  if (!message) {
    return res.status(500).json({ message: "Unable to Add Message" });
  }
  return res.status(201).json({ message: "Add Success" });
};

const getMessageById = async (req, res, next) => {
  const id = req.params.id;
  let message;
  try {
    message = await Message.findById(id);
  } catch (err) {
    console.log(err);
  }
  if (!message) {
    return res.status(404).json({ message: "No Message Found" });
  }
  return res.status(200).json({ message: "Get Success" });
};

const updateMessage = async (req, res, next) => {
  const id = req.params.id;
  const { name, content } = req.body;
  let message;
  try {
    message = await Message.findByIdAndUpdate(id, {
      name,
      content,
    });
    message = await message.save();
  } catch (err) {
    console.log(err);
  }
  if (!message) {
    return res.status(404).json({ message: "Unable To Update By this ID" });
  }
  return res.status(200).json({ message: "Update Success" });
};

const deleteMessage = async (req, res, next) => {
  const id = req.params.id;
  let message;
  try {
    message = await Message.findByIdAndRemove(id);
  } catch (err) {
    console.log(err);
  }
  if (!message) {
    return res.status(404).json({ message: "Unable To Delete By this ID" });
  }
  return res.status(200).json({ message: "Delete Success" });
};

exports.getAllMessages = getAllMessages;
exports.addMessage = addMessage;
exports.getMessageById = getMessageById;
exports.updateMessage = updateMessage;
exports.deleteMessage = deleteMessage;
