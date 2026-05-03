"use client";
import { useState, useRef, useEffect } from "react";

export default function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || !audioRef.current) return;

    const playAudio = async () => {
      // Force a small delay to ensure DOM is fully ready
      await new Promise(resolve => setTimeout(resolve, 500));
      
      try {
        await audioRef.current?.play();
        setIsPlaying(true);
      } catch (error) {
        console.log("Autoplay blocked or failed. Waiting for user interaction.");
        
        const handleInteraction = async () => {
          try {
            await audioRef.current?.play();
            setIsPlaying(true);
            cleanupListeners();
          } catch (err) {
            console.error("Playback failed after interaction:", err);
          }
        };

        const cleanupListeners = () => {
          window.removeEventListener("click", handleInteraction);
          window.removeEventListener("touchstart", handleInteraction);
          window.removeEventListener("scroll", handleInteraction);
          window.removeEventListener("keydown", handleInteraction);
          window.removeEventListener("mousemove", handleInteraction);
        };

        window.addEventListener("click", handleInteraction);
        window.addEventListener("touchstart", handleInteraction);
        window.addEventListener("scroll", handleInteraction);
        window.addEventListener("keydown", handleInteraction);
        window.addEventListener("mousemove", handleInteraction); // Broaden for desktop

        return cleanupListeners;
      }
    };

    playAudio();
  }, [mounted]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(console.error);
    }
    setIsPlaying(!isPlaying);
  };

  if (!mounted) return null;

  return (
    <>
      <audio 
        ref={audioRef} 
        src="/audio/song1.mp3" 
        loop 
        preload="auto" 
        playsInline
      />
      <button
        onClick={togglePlay}
        className="audio-player-btn"
        aria-label={isPlaying ? "Pausar música" : "Tocar música"}
        title={isPlaying ? "Pausar" : "Tocar"}
      >
        <span className={`audio-icon ${isPlaying ? "playing" : ""}`}>
          {isPlaying ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="6" y="4" width="4" height="16"/>
              <rect x="14" y="4" width="4" height="16"/>
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18V5l12-2v13"/>
              <circle cx="6" cy="18" r="3"/>
              <circle cx="18" cy="16" r="3"/>
            </svg>
          )}
        </span>
        {isPlaying && <span className="audio-pulse-ring" />}
      </button>
    </>
  );
}
