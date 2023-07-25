import axios from "axios";

export const api = axios.create({
  baseURL: "https://tech-tracker.onrender.com",
  timeout: 8000,
});
