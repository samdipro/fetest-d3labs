import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import { api } from "../api/api";
import "./Readme.css";
import { Center } from "@chakra-ui/react";

export default function ReadMe() {
  const { username, repos } = useParams();
  const [readme, setReadme] = useState("");

  async function fetchReadme() {
    try {
      const result = await api(`/repos/${username}/${repos}/readme`);
      const base64Content = result.data.content;
      const decodedContent = atob(base64Content);
      setReadme(decodedContent);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchReadme();
  }, [username, repos]);

  return (
    <div className="readme-container">
      {!readme ? (
        <Center h={"100vh"} className="placeholder">
          '{repos}' repository has no README available
        </Center>
      ) : (
        <ReactMarkdown>{readme}</ReactMarkdown>
      )}
    </div>
  );
}
