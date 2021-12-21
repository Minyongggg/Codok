const { Lecture, Profile, Chat } = require("../models");
const { Op } = require("sequelize");

exports.getChats = async (chatroomPk) => {
  const chats = await Chat.findAll({
    where: {
      chatroomPk,
    }
  })
  return chats;
}