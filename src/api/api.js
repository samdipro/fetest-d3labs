import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    Authorization: "Bearer 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",
  },
});
