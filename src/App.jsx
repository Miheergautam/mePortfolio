import React from "react";
import TopBar from "./components/MainLayout/TopBar/TopBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Pages imports
import MainLayout from "./pages/MainLayout";
import MyTech from "./pages/MyTech/MyTech";
import Blogs from "./pages/Blogs/Blogs";

function App() {
  return (
    <Router basename="zenith-Portfolio/">
      <Routes>
        <Route path="/" element={<MainLayout />} />
      </Routes>
      <Routes>
        <Route path="/mytech" element={<MyTech />} />
      </Routes>
      <Routes>
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
    </Router>
  );
}

export default App;
