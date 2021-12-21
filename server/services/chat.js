const { Lecture, Profile, Chat } = require("../models");

exports.sendChat = async ({ senderPk, receiverPk, content, createdAt, chatroomPk }) => {
  const chat = await Chat.create({
    senderPk,
    receiverPk,
    content,
    createdAt,
    chatroomPk
  })
  return chat;
}

exports.getChats = async (chatroomPk) => {
  const chats = await Chat.findAll({
    where: {
      chatroomPk,
    }
  })
  return chats;
}