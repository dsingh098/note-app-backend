import api from "./api.js";

// REGISTER
export const register = async (data) => {
  const res = await api.post("/auth/register", data);
  return res.data;
};

// LOGIN
export const login = async (data) => {
  const res = await api.post("/auth/login", data);
  return res.data;
};

// GET CURRENT USER
export const getMe = async () => {
  const res = await api.get("/auth/get-me");
  return res.data;
};

// LOGOUT
export const logout = async () => {
  const res = await api.post("/auth/logout");
  return res.data;
};