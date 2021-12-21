const chatroomServices = require("../../services/chatroom");

exports.getChatroom = async (req, res, next) => {
  try {
    console.log("req.body: " + req)
    const chatroom = await chatroomServices.getChatroom(req.body);

    res.json({
      message: "채팅방 입장 성공!",
      chatroom,
    });
  } catch (error) {
    next(error);
  }
};
