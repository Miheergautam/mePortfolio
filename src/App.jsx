import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

// Pages
import MainLayout from "./pages/MainLayout";
import MyTech from "./pages/MyTech/MyTech";
import Blogs from "./pages/Blogs/Blogs";

// Loader
import Loader from "./components/Loader";

// GA4 Utility (assuming it’s created in utils/analytics.js)
import { gtagEvent } from "./utils/analytics";

// ----------- Pageview Tracker Component ------------
const PageViewTracker = () => {
  const location = useLocation();

  useEffect(() => {
    gtagEvent("page_view", {
      page_path: location.pathname + location.search,
    });
  }, [location]);

  return null;
};
// ---------------------------------------------------

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
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      {!isLoaded ? (
        <Loader onComplete={() => setIsLoaded(true)} />
      ) : (
        <Router basename="/mePortfolio/">
          <AppRoutes />
        </Router>
      )}
    </>
  );
}

export default App;