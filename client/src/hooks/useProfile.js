import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { profileState } from "../atoms/atoms";
import axios from "axios";

export const useProfile = () => {
  const profilePk = localStorage.getItem("CodokId");
  const [profile, setProfile] = useRecoilState(profileState);
  useEffect(() => {
    if (profilePk) {
      getProfile();
      return;
    }
    setProfile(() => "none");
  }, []);

  const getProfile = async () => {
    await axios({
      method: "GET",
      url: `http://localhost:8000/api/profiles/${profilePk}`,
      withCredentials: true,
    })
      .then((res) => {
        setProfile(() => res.data.data);
      })
      .catch((err) => console.log(err));
  };
  return { profile, setProfile };
};
