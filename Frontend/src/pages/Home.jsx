import React, { useState } from "react";
import { startSession } from "../api/sessionApi";
import VideoPlayer from "../components/VideoPlayer";
import { showSuccess, showError } from "../toastConfig";
import  { Toaster } from "react-hot-toast";

export default function Home() {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleStartSession = async () => {
    setLoading(true);
    try {
      const newSession = await startSession();
      console.log("newSession", newSession);
      setSession(newSession);
      showSuccess("Session created successfully!");
    } catch (error) {
      console.error(error);
      showError("Failed to create session. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <Toaster position="top-right" />
      <h1>🎥 Live Session Portal (Admin)</h1>

      {!session ? (
        <button className="start-btn" onClick={handleStartSession} disabled={loading}>
          {loading ? "Starting..." : "Start Session"}
        </button>
      ) : (
        <div>
          <p><strong>Session Created!</strong></p>
          <p>Share this URL with students:</p>
          <p className="link">{session.userurl}</p>
          <VideoPlayer />
        </div>
      )}
    </div>
  );
}
