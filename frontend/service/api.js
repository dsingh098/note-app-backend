import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8000/api",
  withCredentials: true, // REQUIRED for cookies
  headers: {
    "Content-Type": "application/json",
  },
});

