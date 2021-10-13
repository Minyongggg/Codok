const { Lecture, Profile, Post, Comment } = require("../models");

exports.getCommentByPk = async (pk) => {
  const result = await Comment.findOne({
    where: {
      pk,
    },
  });
  return result;
};

exports.getCommentsByProf = async (pk) => {
  const profile = await Profile.findOne({
    where: {
      pk,
    },
  });
  const result = await profile.getComments();
  return result;
};

exports.getCommentsByPost = async (pk) => {
  const post = await Post.findOne({
    where: {
      pk,
    },
  });
  const result = await post.getComments();
  return result;
};

exports.newComment = async ({ postPk, authorPk, content }) => {
  const result = await Comment.create({
    postPk,
    authorPk,
    content,
  });
  return result;
};

exports.updateComment = async (pk, { content }) => {
  const comment = await Comment.findOne({
    where: {
      pk,
    },
  });
  comment.content = content;
  await comment.save();
  return comment;
};

exports.delComment = async (pk) => {
  const comment = await Comment.findOne({
    where: {
      pk,
    },
  });
  await comment.destroy();
  return true;
};
