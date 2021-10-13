const postServices = require("../../services/post");

exports.getPostByPk = async (req, res, next) => {
  try {
    const post = await postServices.getPostByPk(req.params.pk);
    res.json({
      message: "게시글 조회 완료",
      data: post,
    });
  } catch (error) {
    next(error);
  }
};

exports.getPostsByProf = async (req, res, next) => {
  try {
    const posts = await postServices.getPostsByProf(req.params.pk);
    res.json({
      message: "게시글 조회 완료",
      data: posts,
    });
  } catch (error) {
    next(error);
  }
};

exports.getPostsByLec = async (req, res, next) => {
  try {
    const posts = await postServices.getPostsByLec(req.params.courseId);
    res.json({
      message: "게시글 조회 완료",
      data: posts,
    });
  } catch (error) {
    next(error);
  }
};

exports.newPost = async (req, res, next) => {
  try {
    const post = await postServices.newPost(req.body);
    res.json({
      message: "게시글 생성 완료",
      data: post,
    });
  } catch (error) {
    next(error);
  }
};

exports.updatePost = async (req, res, next) => {
  try {
    const post = await postServices.updatePost(req.params.pk, req.body);
    res.json({
      message: "게시글 수정 완료",
      data: post,
    });
  } catch (error) {
    next(error);
  }
};

exports.delPost = async (req, res, next) => {
  try {
    await postServices.delPost(req.params.pk);
    res.json({
      message: "게시글 삭제 완료",
    });
  } catch (error) {
    next(error);
  }
};
