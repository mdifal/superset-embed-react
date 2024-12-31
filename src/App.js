// File: App.js

import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./LoginPage";
import EmbedPage from "./EmbedPage";
import MainMenu from "./MainMenu";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <Navigate to="/main-menu" />
            ) : (
              <LoginPage setIsAuthenticated={setIsAuthenticated} />
            )
          }
        />
        <Route
          path="/main-menu"
          element={
            isAuthenticated ? (
              <MainMenu />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/embed"
          element={
            isAuthenticated ? (
              <EmbedPage />
            ) : (
              <Navigate to="/" />
            )
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
