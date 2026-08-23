import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  Pause,
  Play,
  SkipBack,
  SkipForward,
  Volume2,
  VolumeX,
} from "lucide-react";
import { gtagEvent } from "../utils/analytics";

const defaultYoutubePlaylistId = "PLV9Y77TQ4I9dbaEOCCt_pdPavAXOXMkkN";
const youtubePlaylistId =
  import.meta.env.VITE_YOUTUBE_PLAYLIST_ID || defaultYoutubePlaylistId;

let youtubeApiPromise;

const loadYouTubeApi = () => {
  if (window.YT?.Player) return Promise.resolve(window.YT);

  if (!youtubeApiPromise) {
    youtubeApiPromise = new Promise((resolve) => {
      const previousReady = window.onYouTubeIframeAPIReady;

      window.onYouTubeIframeAPIReady = () => {
        previousReady?.();
        resolve(window.YT);
      };

      if (!document.querySelector('script[src="https://www.youtube.com/iframe_api"]')) {
        const script = document.createElement("script");
        script.src = "https://www.youtube.com/iframe_api";
        document.body.appendChild(script);
      }
    });
  }

  return youtubeApiPromise;
};

const formatTime = (seconds) => {
  if (!Number.isFinite(seconds) || seconds <= 0) return "0:00";

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60)
    .toString()
    .padStart(2, "0");

  return `${minutes}:${remainingSeconds}`;
};

export default function PlaylistIsland({ isVisible }) {
  const playerHostId = useMemo(
    () => `youtube-playlist-player-${Math.random().toString(36).slice(2)}`,
    []
  );
  const playerRef = useRef(null);
  const progressTimerRef = useRef(null);
  const longPressTimerRef = useRef(null);
  const [isReady, setIsReady] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [trackTitle, setTrackTitle] = useState("Launch playlist");
  const [trackCredit, setTrackCredit] = useState("YouTube playlist");
  const [videoId, setVideoId] = useState("");
  const [isCollapsed, setIsCollapsed] = useState(false);

  const refreshTrackData = () => {
    const player = playerRef.current;
    if (!player?.getVideoData) return;

    const videoData = player.getVideoData();
    setTrackTitle(videoData?.title || "Launch playlist");
    setTrackCredit(videoData?.author || "YouTube playlist");
    setVideoId(videoData?.video_id || "");
    setDuration(player.getDuration?.() || 0);
  };

  useEffect(() => {
    if (!isVisible || playerRef.current) return;

    let cancelled = false;

    loadYouTubeApi().then((YT) => {
      if (cancelled) return;

      playerRef.current = new YT.Player(playerHostId, {
        height: "1",
        width: "1",
        playerVars: {
          autoplay: 1,
          controls: 0,
          disablekb: 1,
          list: youtubePlaylistId,
          listType: "playlist",
          loop: 1,
          modestbranding: 1,
          playsinline: 1,
          rel: 0,
        },
        events: {
          onReady: (event) => {
            setIsReady(true);
            event.target.setShuffle?.(false);
            event.target.playVideo();
            refreshTrackData();
          },
          onStateChange: (event) => {
            const state = event.data;
            setIsPlaying(state === YT.PlayerState.PLAYING);
            refreshTrackData();
          },
        },
      });
    });

    return () => {
      cancelled = true;
    };
  }, [isVisible, playerHostId]);

  useEffect(() => {
    if (!isVisible) return;

    progressTimerRef.current = setInterval(() => {
      const player = playerRef.current;
      if (!player?.getCurrentTime) return;

      setCurrentTime(player.getCurrentTime() || 0);
      setDuration(player.getDuration?.() || 0);
    }, 500);

    return () => {
      clearInterval(progressTimerRef.current);
    };
  }, [isVisible]);

  useEffect(() => {
    return () => {
      clearTimeout(longPressTimerRef.current);
    };
  }, []);

  const togglePlayback = () => {
    const player = playerRef.current;
    if (!isReady || !player) return;

    if (isPlaying) {
      player.pauseVideo();
    } else {
      player.playVideo();
    }

    gtagEvent("playlist_playback_toggled", { playing: !isPlaying });
  };

  const toggleMute = () => {
    const player = playerRef.current;
    if (!isReady || !player) return;

    if (isMuted) {
      player.unMute();
    } else {
      player.mute();
    }

    setIsMuted(!isMuted);
    gtagEvent("playlist_mute_toggled", { muted: !isMuted });
  };

  const skipTrack = (direction) => {
    const player = playerRef.current;
    if (!isReady || !player) return;

    if (direction === "next") {
      player.nextVideo();
    } else {
      player.previousVideo();
    }

    setTimeout(refreshTrackData, 400);
    gtagEvent("playlist_track_skipped", { direction });
  };

  const toggleCollapsed = () => {
    setIsCollapsed((current) => {
      const nextValue = !current;
      gtagEvent("playlist_island_toggled", { collapsed: nextValue });
      return nextValue;
    });
  };

  const startCollapsePress = () => {
    clearTimeout(longPressTimerRef.current);
    longPressTimerRef.current = setTimeout(() => {
      setIsCollapsed(true);
      gtagEvent("playlist_island_toggled", { collapsed: true });
    }, 550);
  };

  const clearCollapsePress = () => {
    clearTimeout(longPressTimerRef.current);
  };

  const progress = duration > 0 ? Math.min((currentTime / duration) * 100, 100) : 0;
  const coverImage = videoId
    ? `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`
    : "assets/logox.jpg";

  if (!isVisible) return null;

  const hiddenPlayer = (
    <div className="pointer-events-none absolute h-px w-px overflow-hidden opacity-0">
      <div id={playerHostId} />
    </div>
  );

  return (
    <>
      {isCollapsed ? (
        <div className="fixed bottom-[1.35rem] right-[max(5.65rem,calc((100vw-72rem)/2+5.65rem))] z-[56] md:bottom-[2.05rem] lg:right-[max(23rem,calc((100vw-72rem)/2+23rem))]">
          <button
            onClick={toggleCollapsed}
            className="group flex h-14 max-w-[12rem] items-center gap-2 rounded-full border border-cust-red/35 bg-black/70 px-2.5 pr-3 text-left shadow-[0_0_30px_rgba(235,96,97,0.24)] backdrop-blur-2xl transition hover:border-cust-red/70 hover:bg-black/85 md:h-16 md:max-w-[13.5rem]"
            aria-label="Expand music player"
            title={trackTitle}
          >
            <span className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border border-cust-red/60 bg-neutral-950 shadow-[0_0_22px_rgba(235,96,97,0.34)] md:h-11 md:w-11">
              <img
                src={coverImage}
                alt=""
                className="h-full w-full object-cover"
                style={{
                  animation: isPlaying
                    ? "playlist-disc-spin 8s linear infinite"
                    : "none",
                }}
              />
              <span className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 via-transparent to-cust-red/25" />
              <span className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/50 bg-black/90 shadow-[0_0_10px_rgba(0,0,0,0.6)]" />
            </span>

            <span className="min-w-0">
              <span className="flex items-center gap-1.5 text-[0.58rem] font-bold uppercase tracking-[0.22em] text-cust-red">
                <span className="h-1.5 w-1.5 rounded-full bg-cust-red shadow-[0_0_10px_rgba(235,96,97,0.8)]" />
                Now Playing
              </span>
              <span className="mt-0.5 block truncate text-xs font-bold text-white md:text-sm">
                {trackTitle}
              </span>
              <span className="hidden truncate text-[0.68rem] font-medium text-neutral-400 md:block">
                Credits: {trackCredit}
              </span>
            </span>
          </button>
        </div>
      ) : (
        <div className="fixed bottom-[1.05rem] left-1/2 z-[56] w-[min(calc(100vw-9rem),30rem)] -translate-x-1/2 px-1 md:bottom-[1.55rem]">
          <div
            className="relative overflow-hidden rounded-full border border-cust-red/35 bg-[rgba(15,7,8,0.92)] shadow-[0_0_42px_rgba(235,96,97,0.2)] backdrop-blur-2xl"
            onDoubleClick={toggleCollapsed}
            onPointerDown={startCollapsePress}
            onPointerLeave={clearCollapsePress}
            onPointerUp={clearCollapsePress}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cust-red/30 via-black/10 to-rose-300/15" />
            <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cust-red/60 to-transparent" />
            <div className="relative flex h-14 items-center gap-2 px-3 py-1.5 md:h-16 md:gap-3 md:px-4">
              <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full border border-cust-red/60 bg-neutral-900 shadow-[0_0_24px_rgba(235,96,97,0.28)] md:h-12 md:w-12">
                <img
                  src={coverImage}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <h2 className="truncate text-xs font-bold tracking-normal text-white md:text-sm">
                      {trackTitle}
                    </h2>
                    <p className="mt-0.5 hidden truncate text-[0.65rem] font-medium text-neutral-400 sm:block">
                      Credits: {trackCredit}
                    </p>
                  </div>

                  <button
                    onClick={toggleMute}
                    className="hidden h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/10 text-neutral-300 transition hover:border-cust-red/60 hover:text-white md:mr-7 md:flex"
                    aria-label={isMuted ? "Unmute playlist" : "Mute playlist"}
                  >
                    {isMuted ? <VolumeX size={15} /> : <Volume2 size={15} />}
                  </button>
                </div>

                <div className="mt-1 flex items-center gap-2 text-[0.65rem] font-semibold text-neutral-400">
                  <span className="hidden w-8 text-left sm:inline">{formatTime(currentTime)}</span>
                  <div className="h-1 flex-1 overflow-hidden rounded-full bg-white/20">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-cust-red to-rose-200 transition-all duration-300"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                  <span className="hidden w-8 text-right sm:inline">{formatTime(duration)}</span>
                </div>
              </div>

              <div className="flex shrink-0 items-center gap-1.5 md:gap-2">
                <button
                  onClick={() => skipTrack("previous")}
                  className="hidden h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:border-cust-red/60 hover:bg-white/15 sm:flex"
                  aria-label="Previous song"
                >
                  <SkipBack size={14} fill="currentColor" />
                </button>

                <button
                  onClick={togglePlayback}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-cust-red text-black shadow-[0_0_34px_rgba(235,96,97,0.4)] transition hover:bg-white md:h-10 md:w-10"
                  aria-label={isPlaying ? "Pause playlist" : "Play playlist"}
                >
                  {isPlaying ? (
                    <Pause size={16} fill="currentColor" />
                  ) : (
                    <Play size={16} fill="currentColor" />
                  )}
                </button>

                <button
                  onClick={() => skipTrack("next")}
                  className="hidden h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:border-cust-red/60 hover:bg-white/15 sm:flex"
                  aria-label="Next song"
                >
                  <SkipForward size={14} fill="currentColor" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {hiddenPlayer}
    </>
  );
}
