import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    Authorization: "Bearer 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",
  },
});
