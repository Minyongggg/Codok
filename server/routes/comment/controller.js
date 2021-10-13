const commentServices = require("../../services/comment");

exports.getCommentByPk = async (req, res, next) => {
  try {
    const comment = await commentServices.getCommentByPk(req.params.pk);
    res.json({
      message: "댓글 조회 완료",
      data: comment,
    });
  } catch (error) {
    next(error);
  }
};

exports.getCommentsByProf = async (req, res, next) => {
  try {
    const comments = await commentServices.getCommentsByProf(req.params.pk);
    res.json({
      message: "댓글 조회 완료",
      data: comments,
    });
  } catch (error) {
    next(error);
  }
};

exports.getCommentsByPost = async (req, res, next) => {
  try {
    const comments = await commentServices.getCommentsByPost(req.params.pk);
    res.json({
      message: "댓글 조회 완료",
      data: comments,
    });
  } catch (error) {
    next(error);
  }
};

exports.newComment = async (req, res, next) => {
  try {
    const comment = await commentServices.newComment(req.body);
    res.json({
      message: "댓글 생성 완료",
      data: comment,
    });
  } catch (error) {
    next(error);
  }
};

exports.updateComment = async (req, res, next) => {
  try {
    const comment = await commentServices.updateComment(
      req.params.pk,
      req.body
    );
    res.json({
      message: "댓글 수정 완료",
      data: comment,
    });
  } catch (error) {
    next(error);
  }
};

exports.delComment = async (req, res, next) => {
  try {
    await commentServices.delComment(req.params.pk);
    res.json({
      message: "댓글 삭제 완료",
    });
  } catch (error) {
    next(error);
  }
};
