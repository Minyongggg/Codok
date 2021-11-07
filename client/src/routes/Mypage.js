import { React, useEffect } from "react";
import axios from "axios";

function Mypage() {
  useEffect(() => {
    axios({
      method: "post",
      url: "http://localhost:8000/api/lectures/courseIdList",
      data: { courseIdList: ["COSE222-01", "COSE341-01", "COSE342-01"] },
      withCredentials: true,
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  });
  return <div>mypage</div>;
}

export default Mypage;
