import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSessionById } from "../api/sessionApi";
import VideoPlayer from "../components/VideoPlayer";
import { showError } from "../toastConfig";
import { Toaster } from "react-hot-toast";

export default function SessionPage() {
  const { unique_id } = useParams();
  const [session, setSession] = useState(null);

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const data = await getSessionById(unique_id);
        setSession(data);
      } catch {
        showError("Session not found or expired.");
      }
    };
    fetchSession();
  }, [unique_id]);

  return (
    <div className="container">
      <Toaster position="top-right" />
      <h1>🎓 Student Session</h1>
      {session ? <VideoPlayer /> : <p>Loading...</p>}
    </div>
  );
}
