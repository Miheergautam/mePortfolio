import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Pages
import MainLayout from "./pages/MainLayout";
import MyTech from "./pages/MyTech/MyTech";
import Blogs from "./pages/Blogs/Blogs";

// Loader
import Loader from "./components/Loader";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      {!isLoaded ? (
        <Loader onComplete={() => setIsLoaded(true)} />
      ) : (
        <Router basename="mePortfolio/">
          <Routes>
            <Route path="/" element={<MainLayout />} />
            <Route path="/mytech" element={<MyTech />} />
            <Route path="/blogs" element={<Blogs />} />
          </Routes>
        </Router>
      )}
    </>
  );
}

export default App;
