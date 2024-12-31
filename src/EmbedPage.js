// File: EmbedPage.js

import React from "react";

const EmbedPage = () => {
  const supersetUrl = "http://localhost:8088/superset/dashboard/1/"; // Ganti dengan URL dashboard Superset Anda

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Embed Apache Superset</h1>
      <iframe
        src={supersetUrl}
        title="Apache Superset Dashboard"
        style={{ width: "100%", height: "80vh", border: "none" }}
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default EmbedPage;
