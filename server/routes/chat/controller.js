const chatServices = require("../../services/chat");

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
