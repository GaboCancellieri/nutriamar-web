import axios from "axios";

export default axios.create({
  baseURL: `http://${process.env.NODE_HOST}:${process.env.NODE_PORT}/api`,
  headers: {
    Authorization: "Bearer " + localStorage.getItem("accessToken"),
    "Content-Type": "application/json",
  },
});
