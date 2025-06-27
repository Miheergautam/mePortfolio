import React, { useEffect, useRef, useState } from "react";
import useSound from "use-sound";
import { gtagEvent } from "../utils/analytics";

import futuristicSong from "../sounds/song1.mp3";
import retroSong from "../sounds/song2.mp3";
import minimalSong from "../sounds/song3.mp3";

const themeSongs = {
  futuristic: futuristicSong,
  retro: retroSong,
  minimal: minimalSong,
};

export default function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [muted, setMuted] = useState(false);
  const [theme, setTheme] = useState("futuristic");
  const [hasStarted, setHasStarted] = useState(false);
  const intervalRef = useRef(null);
  const totalBlocks = 30;
  const [activeSound, setActiveSound] = useState(null);

  const [playFuturistic, { sound: futuristicSound }] = useSound(
    futuristicSong,
    { volume: 0.2, loop: true, soundEnabled: !muted }
  );
  const [playRetro, { sound: retroSound }] = useSound(retroSong, {
    volume: 0.2,
    loop: true,
    soundEnabled: !muted,
  });
  const [playMinimal, { sound: minimalSound }] = useSound(minimalSong, {
    volume: 0.2,
    loop: true,
    soundEnabled: !muted,
  });

  const soundMap = {
    futuristic: { play: playFuturistic, instance: futuristicSound },
    retro: { play: playRetro, instance: retroSound },
    minimal: { play: playMinimal, instance: minimalSound },
  };

  const startSound = (themeName) => {
    if (activeSound) activeSound.stop();
    const selected = soundMap[themeName];
    if (selected) {
      selected.play();
      setActiveSound(selected.instance);
    }
  };

  useEffect(() => {
    if (!hasStarted) return;

    const timeout = setTimeout(() => {
      intervalRef.current = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(intervalRef.current);
            if (activeSound) activeSound.stop();
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
      if (activeSound) activeSound.stop();
    };
  }, [hasStarted]);

  useEffect(() => {
    if (hasStarted) {
      startSound(theme);
      gtagEvent("theme_changed", { theme });
    }
  }, [theme, muted]);

  useEffect(() => {
    if (progress >= 100 && activeSound) {
      activeSound.stop();
    }
  }, [progress]);

  const activeBlocks = Math.floor((progress / 100) * totalBlocks);

  const dialogues = [
    "Connecting to .mePORTFOLIO...",
    "Compiling Web Projects...",
    "Booting ML Engine...",
    "Syncing GitHub Repos...",
    "Rendering Cinematic Edits...",
    "Activating Visual Aesthetics...",
    "Running Final Checks...",
    "Ready to Launch 🚀",
  ];

  const getStatusMessage = () => {
    const index = Math.floor((progress / 100) * dialogues.length);
    return dialogues[Math.min(index, dialogues.length - 1)];
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-neutral-900 text-cust-light font-mono relative overflow-hidden gap-6">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-tr from-black via-neutral-900 to-black opacity-80" />

      {/* Cinematic Intro */}
      {!hasStarted && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black z-20 duration-700">
          <button
            onClick={() => {
              startSound(theme);
              setHasStarted(true);
              gtagEvent("launch_started", { theme });
            }}
            className="px-10 py-4 md:px-12 md:py-5 rounded-2xl text-cust-red font-bold md:text-2xl tracking-widest 
             border border-cust-red bg-white/5 backdrop-blur-md 
             shadow-[0_4px_20px_rgba(255,0,0,0.2)] hover:shadow-[0_0_40px_rgba(255,0,0,0.5)]
             transition-all duration-300 hover:bg-cust-red hover:text-black"
          >
            BEGIN THE LAUNCH
          </button>
        </div>
      )}

      {/* Title */}
      <h1 className="text-3xl md:text-6xl font-bold tracking-widest text-cust-red animate-pulse relative z-10">
        LAUNCHING <span className="text-white">.</span>mePORTFOLIO
      </h1>

      {/* Loader Blocks */}
      <div className="flex gap-1 w-72 md:w-96 justify-center z-10">
        {Array.from({ length: totalBlocks }).map((_, i) => (
          <div
            key={i}
            className={`h-6 w-full rounded-sm transition-all duration-300 ${
              i < activeBlocks
                ? "bg-cust-red shadow-[0_0_6px_#f00a] animate-pulse"
                : "bg-cust-light-dark"
            }`}
            style={{ transitionDelay: `${i * 20}ms` }}
          />
        ))}
      </div>

      {/* Progress % */}
      <span className="text-sm text-cust-red tracking-widest z-10">
        {progress}%
      </span>

      {/* Status Dialogue */}
      <p className="text-sm text-cust-light mt-2 z-10 tracking-wide opacity-80 min-h-[1em]">
        {getStatusMessage()}
      </p>

      {/* Controls */}
      <div className="flex gap-4 mt-6 z-10">
        <button
          onClick={() => {
            setMuted(!muted);
            gtagEvent("mute_toggled", { muted: !muted });
          }}
          className="text-xs text-cust-light opacity-50 hover:opacity-100 transition"
        >
          {muted ? "🔇 Unmute" : "🔊 Mute"}
        </button>

        <select
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
          className="bg-transparent border border-cust-red text-cust-light text-xs px-2 py-1 rounded-md"
        >
          <option value="futuristic">Energetic</option>
          <option value="retro">90s Retro</option>
          <option value="minimal">Minimal</option>
        </select>

        {/* <button
          onClick={() => {
            clearInterval(intervalRef.current);
            if (activeSound) activeSound.stop();
            gtagEvent("loader_skipped");
            onComplete();
          }}
          className="text-xs text-cust-light opacity-30 hover:opacity-80 transition"
        >
          Skip ⏭
        </button> */}
      </div>
    </div>
  );
}
