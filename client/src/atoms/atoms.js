import { atom } from "recoil";

export const userState = atom({
  key: "userState",
  default: "",
});

export const profileState = atom({
  key: "profileState",
  default: null,
});
