const chatServices = require("../../services/chat");

exports.sendChat = async (req, res, next) => {
  try {
    const chat = await chatServices.sendChat(req.body);

    res.json({
      message: "채팅 전송 성공!",
      chat: chat
    })
  } catch (error) {
    next(error);
  }
};

exports.getChats = async (req, res, next) => {
  try {
    const chats = await chatServices.getChats(req.params.chatroomPk)

    res.json({
      message: "채팅 로드 성공!",
      chats,
    });
  } catch (error) {
    next(error);
  }
};
