<<<<<<< HEAD
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageSignin from "./pages/signin";
import Dashboard from "./pages/dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="signin" element={<PageSignin />} />
      </Routes>
=======
import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { listen } from "./redux/listener";
import { AppRoutes } from "./routes";

function App() {
  useEffect(() => {
    listen();
  }, []);

  return (
    <BrowserRouter>
      <AppRoutes />
>>>>>>> ca6655a5e725eddafaaff36ca2644728335e448f
    </BrowserRouter>
  );
}

export default App;
