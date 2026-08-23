import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

//UI components
import SplashCursor from "./components/UI/SplashCursor";
import PlaylistIsland from "./components/PlaylistIsland";

// Pages
import MainLayout from "./pages/MainLayout";
import MyTech from "./pages/MyTech/MyTech";
import Blogs from "./pages/Blogs/Blogs";

// Loader
import Loader from "./components/Loader";

// GA4 Utility
import { gtagEvent } from "./utils/analytics";

// Pageview Tracker Component 
const PageViewTracker = () => {
  const location = useLocation();

  useEffect(() => {
    gtagEvent("page_view", {
      page_path: location.pathname + location.search,
    });
  }, [location]);

  return null;
};

function AppRoutes() {
  return (
    <>
      <PageViewTracker />
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/mytech" element={<MyTech />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
    </>
  );
}

function App() {
  const [isLoaded, setIsLoaded] = useState(() => {
    return sessionStorage.getItem("hasLoaded") === "true";
  });
  const [isPlaylistVisible, setIsPlaylistVisible] = useState(() => {
    return (
      sessionStorage.getItem("playlistVisible") === "true" ||
      sessionStorage.getItem("hasLoaded") === "true"
    );
  });

  const showPlaylist = () => {
    sessionStorage.setItem("playlistVisible", "true");
    setIsPlaylistVisible(true);
  };

  return (
    <>
      {!isLoaded ? (
        <>
          <SplashCursor />
          <Loader
            onLaunch={showPlaylist}
            onComplete={() => {
              sessionStorage.setItem("hasLoaded", "true");
              setIsLoaded(true);
            }}
          />
        </>
      ) : (
        <Router basename="/mePortfolio/">
          {/* Cursor Effect */}
          <SplashCursor />
          <AppRoutes />
        </Router>
      )}
      <PlaylistIsland isVisible={isPlaylistVisible} />
    </>
  );
}

export default App;
