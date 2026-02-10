// src/components/Preloader.jsx
import React, { useEffect, useState } from "react";

export default function Preloader({ onFinish }) {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Match this to your video length (ms)
    const VIDEO_DURATION = 5000;

    // Start fade slightly before end
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, VIDEO_DURATION - 600);

    // Finish preloader
    const finishTimer = setTimeout(() => {
      onFinish();
    }, VIDEO_DURATION);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(finishTimer);
    };
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 z-50 bg-black flex items-center justify-center transition-opacity duration-500 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <video
        src="/preloader.mp4"
        autoPlay
        muted
        playsInline
        className="w-full h-full object-cover"
      />
    </div>
  );
}
