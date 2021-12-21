const { Take, Post, Lecture } = require("../models");
const blackboard = require("./blackboard")

exports.createTakes = async (profilePk, {id, password}) => {

  const courseList = await blackboard.blackboard(id, password);

  if(courseList){
    await Take.destroy({where : {profilePk : profilePk}});

    for(let i=0; i < courseList.length; i++){

      let lecture = await Lecture.findOne({where : {courseId : courseList[i]}})
      console.log("---------------------------------")
      console.log(lecture)
      console.log("---------------------------------")


      await Take.create({
        profilePk,
        lecturePk: lecture.pk
      });
    }

    return true;
  }

  return false;
};
