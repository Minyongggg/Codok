import { atom } from "recoil";

export const userState = atom({
  key: "userState",
  default: null,
});

export const profileState = atom({
  key: "profileState",
  default: null,
  // 프로필 없음: "none"
  // 프로필 있음: something
});
