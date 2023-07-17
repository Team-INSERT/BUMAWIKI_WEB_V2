import { atom } from "recoil";
import ContributeDocsType from "@/types/contributeDocs.type";

export const initUserState = {
  id: 0,
  email: "",
  nickName: "",
  authority: "",
  contributeDocs: [] as ContributeDocsType[],
  isLogin: false,
};

const userState = atom({
  key: `userState`,
  default: initUserState,
});

export default userState;
