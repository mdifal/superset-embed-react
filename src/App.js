// File: App.js

import React from "react";

const App = () => {
  const supersetUrl = "http://localhost:8088/superset/welcome/"; // Ganti dengan URL dashboard Superset Anda

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

export default App;
