import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    Authorization: "Bearer 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",
  },
});
