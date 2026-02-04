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
    </BrowserRouter>
  );
}

export default App;
