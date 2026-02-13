
// public/src/api/api.js
import axios from "axios";

const api = axios.create({
  baseURL: "https://coreblog.coinswipe.xyz/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
