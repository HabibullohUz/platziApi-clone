import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Introduction from "./pages/Introduction";
import "./style.css";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<h1>404: Not Found</h1>} />
        <Route path="/introduction" element={<Introduction />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
