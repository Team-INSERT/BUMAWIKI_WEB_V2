import axios from "axios";
import { Storage } from "../storage";

export const getAccessToken = async () => {
  try {
    console.log(Storage.getItem("refresh_token"));
    const res = (
      await axios.put("/auth/refresh/access", {
        refresh_token: Storage.getItem("refresh_token"),
      })
    ).data;
    Storage.setItem("access_token", res.accessToken);
  } catch (err) {
    console.log(err);
  }
};
