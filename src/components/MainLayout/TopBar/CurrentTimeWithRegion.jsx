import React, { useState, useEffect } from "react";

const CurrentTimeWithRegion = () => {
  const formatTime = () =>
    new Intl.DateTimeFormat("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone: "Asia/Kolkata",
    }).format(new Date());

  const [currentTime, setCurrentTime] = useState(formatTime);
  const region = "Asia/Kolkata";

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(formatTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <span className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-400 md:inline-flex">
      <span className="h-1.5 w-1.5 rounded-full bg-cust-red shadow-[0_0_14px_rgba(235,96,97,0.8)]" />
      <span>{region}</span>
      <span className="text-white/25">/</span>
      <span className="text-neutral-200">{currentTime}</span>
    </span>
  );
};

export default CurrentTimeWithRegion;
