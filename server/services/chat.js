const { Lecture, Profile, Chat, Chatroom } = require("../models");

exports.sendChat = async ({ senderPk, receiverPk, content, createdAt, chatroomPk }) => {
  const chat = await Chat.create({
    senderPk,
    receiverPk,
    content,
    createdAt,
    chatroomPk
  })

  let chatroom = await Chatroom.findOne({
    where: { pk: chatroomPk }
  })
  chatroom.lastChat = content;
  chatroom.lastAt = Date();
  await chatroom.save();

  return chat;
}

exports.getChats = async (chatroomPk) => {
  const chats = await Chat.findAll({
    where: {
      chatroomPk: chatroomPk,
    }
  })


  return chats;
}