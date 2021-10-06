import { React, useEffect } from 'react';
import axios from 'axios';

function Mypage() {
  useEffect(() => {
    axios({
      method: 'get',
      url: 'http://localhost:5000/user/mypage',
      withCredentials: true,
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  });

  return <div>mypage</div>;
}

export default Mypage;
