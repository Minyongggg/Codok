const { Lecture, Profile, Post } = require("../models");

exports.getPostByPk = async (pk) => {
  const result = await Post.findOne({
    where: {
      pk,
    },
  });
  return result;
};

exports.getPostsByProf = async (pk) => {
  const profile = await Profile.findOne({
    where: {
      pk,
    },
  });
  const result = await profile.getPosts();
  return result;
};

exports.getPostsByLec = async (courseId) => {
  const lecture = await Lecture.findOne({
    where: {
      courseId,
    },
  });
  const result = await lecture.getPosts();
  return result;
};

exports.newPost = async ({ lecturePk, courseId, title, authorPk, content }) => {
  const result = await Post.create({
    lecturePk,
    courseId,
    title,
    authorPk,
    content,
    createAt: Date.now()
  });
  return result;
};

exports.updatePost = async (pk, { title, content }) => {
  const post = await Post.findOne({
    where: {
      pk,
    },
  });
  post.title = title;
  post.content = content;
  await post.save();
  return post;
};

exports.delPost = async (pk) => {
  const post = await Post.findOne({
    where: {
      pk,
    },
  });
  await post.destroy();
  return true;
};
