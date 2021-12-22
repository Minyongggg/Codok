import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { profileState, userState } from "../atoms/atoms";

export const useUser = () => {
  const profilePk = localStorage.getItem("CodokId");
  const [user, setUser] = useRecoilState(userState);
  useEffect(() => {
    if (profilePk) {
      setUser(() => "isLogin");
      return;
    }

    setUser(() => "none");
  }, []);

  return { user, setUser };
};
