import React, { useRef } from "react";

export default function VideoPlayer() {
  const videoRef = useRef();

  const handlePlay = () => videoRef.current.play();
  const handlePause = () => videoRef.current.pause();

  return (
    <div className="video-container">
      <video
        ref={videoRef}
        width="800"
        height="450"
        controls
        style={{ borderRadius: "10px" }}
      >
        <source src="/sample.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="controls">
        <button onClick={handlePlay}>▶ Play</button>
        <button onClick={handlePause}>⏸ Pause</button>
      </div>
    </div>
  );
}
