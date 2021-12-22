const { Lecture, Profile, Chatroom } = require("../models");
const { Op } = require("sequelize");

exports.getChatroom = async ({ profilePk, friendPk }) => {
  let chatroom = await Chatroom.findOne({
    where: {
      profile1: profilePk,
      profile2: friendPk
    },
  });

  if(!chatroom) {
    chatroom = await Chatroom.findOne({
      where: {
        profile1: friendPk,
        profile2: profilePk
      }
    })
  }

  if(!chatroom){
    const profile1 = await Profile.findOne({where: {pk: profilePk}});
    const profile2 = await Profile.findOne({where: {pk: friendPk}});

    chatroom = await Chatroom.create({
      profile1: profilePk,
      profile2: friendPk,
      nickname1: profile1.nickname,
      nickname2: profile2.nickname
    })
  }

  return chatroom;
};

exports.findChatrooms = async ( profilePk ) => {
  const chatrooms = await Chatroom.findAll({
    where: {
      [Op.or]: [{profile1: profilePk}, {profile2: profilePk}]
    },
    order: [
      ['lastAt', 'DESC'],
    ],
  })
  
  return chatrooms;
}