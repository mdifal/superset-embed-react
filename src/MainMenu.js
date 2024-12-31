// File: MainMenu.js

import React from "react";
import { useNavigate } from "react-router-dom";
import "./MainMenu.css";

const MainMenu = () => {
  const navigate = useNavigate();

  return (
    <div className="main-menu-container">
      <div className="main-menu-box">
        <h1>Main Menu</h1>
        <button onClick={() => navigate("/embed")}>Go to Embed</button>
      </div>
    </div>
  );
};

export default MainMenu;
