const { Lecture, Profile, Chatroom } = require("../models");
const { Op } = require("sequelize");

exports.getChatroom = async ({ profilePk, friendPk }) => {
  console.log("profilePk: " + profilePk)
  console.log("friendPk: " + friendPk)
  let created;
  let chatroom = await Chatroom.findOne({
    where: {
      profile1: profilePk,
      profile2: friendPk
    },
  });

  if(!chatroom) {
    [ chatroom, created ] = await Chatroom.findOrCreate({
      where: {
        profile1: friendPk,
        profile2: profilePk
      }
    })
  }
  console.log('채팅방이야~~~' + chatroom)

  return chatroom;
};
