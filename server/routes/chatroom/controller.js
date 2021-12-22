const chatroomServices = require("../../services/chatroom");

exports.getChatroom = async (req, res, next) => {
  try {
    const chatroom = await chatroomServices.getChatroom(req.body);

    res.json({
      message: "채팅방 입장 성공!",
      chatroom,
    });
  } catch (error) {
    next(error);
  }
};

exports.findChatrooms = async (req, res, next) => {
  try {
    const chatrooms = await chatroomServices.findChatrooms(req.params.profilePk);

    res.json({
      chatrooms: chatrooms
    })

  } catch (error) {
    next(error);
  }
}