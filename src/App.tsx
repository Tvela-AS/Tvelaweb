import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import Portal from "./pages/Portal";
import Utvikling from "./pages/Utvikling";
import Sikkerhet from "./pages/Sikkerhet";
import Nettverk from "./pages/Nettverk";
import Konsulent from "./pages/Konsulent";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portal />} />
        <Route path="/utvikling" element={<Utvikling />} />
        <Route path="/sikkerhet" element={<Sikkerhet />} />
        <Route path="/nettverk" element={<Nettverk />} />
        <Route path="/konsulent" element={<Konsulent />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Analytics />
    </BrowserRouter>
  );
}

export default App;
