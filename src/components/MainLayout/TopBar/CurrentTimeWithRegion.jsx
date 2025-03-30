import React, { useState, useEffect } from "react";

const CurrentTimeWithRegion = () => {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());
  const region = Intl.DateTimeFormat().resolvedOptions().timeZone;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <span className="hidden md:inline-block">
      {region} - {currentTime}
    </span>
  );
};

export default CurrentTimeWithRegion;
