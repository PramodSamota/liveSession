import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SessionPage from "./pages/SessionPage";

export default function App() {
  return (
    <Routes>
      {/* Admin Page — Start Session */}
      <Route path="/" element={<Home />} />

      {/* Student Page — Join Session via unique_id */}
      <Route path="/session/:unique_id" element={<SessionPage />} />

      {/* Optional: 404 Fallback */}
      <Route
        path="*"
        element={
          <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h2>404 - Page Not Found</h2>
            <p>The page you are looking for doesn’t exist.</p>
          </div>
        }
      />
    </Routes>
  );
}
