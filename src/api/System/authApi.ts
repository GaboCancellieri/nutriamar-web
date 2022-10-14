import axios from "axios";

export const login = async (payload: any) => {
  return await axios.post("http://localhost:3001/api/login", payload);
};
