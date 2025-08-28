import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

function Home() {
  return <h1>Hello LegalConnect!</h1>;
}

function NotFound() {
  return <h1>404 Not Found</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
