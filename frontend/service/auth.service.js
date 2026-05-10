import api from "./api.js";

// REGISTER
export const register = async (data) => {
  try {
    const res = await api.post("/auth/register", data);
    return res.data;
  } catch (error) {
    console.error("Register error:", error.response?.data || error.message);
    throw error;
  }
};

// LOGIN
export const login = async (data) => {
  try {
    const res = await api.post("/auth/login", data);
    return res.data;
  } catch (error) {
    console.error("Login error:", error.response?.data || error.message);
    throw error;
  }
};

// GET CURRENT USER
export const getMe = async () => {
  try {
    const res = await api.get("/auth/get-me");
    return res.data;
  } catch (error) {
    console.error("getMe error:", error.response?.data || error.message);
    throw error;
  }
};

// LOGOUT
export const logout = async () => {
  try {
    const res = await api.post("/auth/logout");
    return res.data;
  } catch (error) {
    console.error("Logout error:", error.response?.data || error.message);
    throw error;
  }
};