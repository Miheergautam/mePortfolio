import React, { useEffect, useRef, useState } from "react";
import { gtagEvent } from "../utils/analytics";

export default function Loader({ onComplete, onLaunch }) {
  const [progress, setProgress] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const intervalRef = useRef(null);
  const totalBlocks = 30;
  const entryBg = `${import.meta.env.BASE_URL}assets/entry_bg.png`;

  useEffect(() => {
    if (!hasStarted) return;

    const timeout = setTimeout(() => {
      intervalRef.current = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(intervalRef.current);
            gtagEvent("launch_completed");
            setTimeout(onComplete, 1000);
            return 100;
          }
          return prev + 1;
        });
      }, 200);
    }, 400);

    return () => {
      clearInterval(intervalRef.current);
      clearTimeout(timeout);
    };
  }, [hasStarted]);

  const activeBlocks = Math.floor((progress / 100) * totalBlocks);

  const dialogues = [
    "Connecting to .mePORTFOLIO...",
    "Compiling Web Projects...",
    "Booting ML Engine...",
    "Syncing GitHub Repos...",
    "Rendering Cinematic Edits...",
    "Activating Visual Aesthetics...",
    "Running Final Checks...",
    "Ready to Launch",
  ];

  const getStatusMessage = () => {
    const index = Math.floor((progress / 100) * dialogues.length);
    return dialogues[Math.min(index, dialogues.length - 1)];
  };

  return (
    <div
      className="flex flex-col items-center justify-center h-screen bg-neutral-900 bg-cover bg-center text-cust-light font-mono relative overflow-hidden gap-6"
      style={{ backgroundImage: `url(${entryBg})` }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-tr from-black via-neutral-900 to-black opacity-80" />

      {/* Cinematic Intro */}
      {!hasStarted && (
        <div
          className="absolute inset-0 z-20 flex items-center justify-center bg-black bg-cover bg-center overflow-hidden"
          style={{ backgroundImage: `url(${entryBg})` }}
        >
      
          {/* Background Animation Layer */}
          <div className="absolute inset-0 opacity-40">
            {/* <AnimatedBackground />*/}
          </div>
          <div className="absolute inset-0 bg-black/55" />
      
          {/* Content */}
          <div className="relative flex min-h-screen w-full flex-col items-center justify-center px-6 text-center">
            <div className="relative flex max-w-4xl flex-col items-center">
              <h1 className="text-5xl font-semibold leading-none tracking-normal text-white md:text-8xl">
                <span className="text-white/45">.</span>
                <span className="text-cust-red">me</span>Portfolio
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-7 text-neutral-300 md:text-xl md:leading-9">
                A professional archive of things I have built, learned,
                shipped, broken, fixed, and proudly documented.
              </p>

              <button
                onClick={() => {
                  setHasStarted(true);
                  onLaunch?.();
                  gtagEvent("launch_started");
                }}
                className="group mt-10 inline-flex items-center gap-4 rounded-full border border-cust-red/40 bg-cust-red px-8 py-3 text-sm font-bold uppercase tracking-[0.28em] text-black shadow-[0_0_40px_rgba(235,96,97,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_0_60px_rgba(255,255,255,0.18)] focus:outline-none focus:ring-2 focus:ring-cust-red/50 focus:ring-offset-2 focus:ring-offset-black md:px-10 md:py-4 md:text-base"
              >
                <span>Take The Tour</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  &rarr;
                </span>
              </button>

              <p className="mt-5 text-xs uppercase tracking-[0.28em] text-white/35 md:text-sm">
                Some experiments may contain traces of caffeine.
              </p>
            </div>

            <p className="absolute bottom-5 right-5 text-[0.6rem] font-semibold tracking-[0.3em] text-white/80 md:text-xs">
              #credits: updating_me
            </p>
          </div>
        </div>
      )}

      {/* Title */}
      <h1 className="relative z-10 text-center text-3xl font-semibold tracking-normal text-white md:text-6xl">
        Launching <span className="text-white/45">.</span>
        <span className="text-cust-red">me</span>Portfolio
      </h1>

      {/* Loader Blocks */}
      <div className="z-10 flex w-72 justify-center gap-1 md:w-96">
        {Array.from({ length: totalBlocks }).map((_, i) => (
          <div
            key={i}
            className={`h-6 w-full rounded-sm transition-all duration-300 ${
              i < activeBlocks
                ? "bg-cust-red shadow-[0_0_8px_rgba(235,96,97,0.55)]"
                : "bg-white/10"
            }`}
            style={{ transitionDelay: `${i * 20}ms` }}
          />
        ))}
      </div>

      {/* Progress % */}
      <span className="z-10 text-sm font-semibold tracking-[0.35em] text-cust-red">
        {progress}%
      </span>

      {/* Status Dialogue */}
      <p className="z-10 mt-2 min-h-[1em] text-sm tracking-wide text-neutral-400">
        {getStatusMessage()}
      </p>

      {progress >= 30 && (
        <button
          onClick={() => {
            clearInterval(intervalRef.current);
            gtagEvent("loader_skipped");
            onComplete();
          }}
          className="relative z-10 rounded-full border border-white/15 px-5 py-2 text-xs font-bold uppercase tracking-[0.22em] text-neutral-300 transition hover:border-cust-red/60 hover:text-white"
        >
          Skip
        </button>
      )}
    </div>
  );
}
