import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Preloader({ onFinish }) {
  const [audioStarted, setAudioStarted] = useState(false);

  useEffect(() => {
    if (!audioStarted) {
      // Wait for user interaction
      const startAudio = () => {
        const audio = new Audio("/preloaderSound.mp3");
        audio.volume = 0;
        audio.play().catch(() => console.warn("Audio blocked"));

        // Fade in
        const fadeIn = setInterval(() => {
          if (audio.volume < 0.4) audio.volume += 0.02;
          else clearInterval(fadeIn);
        }, 100);

        // Fade out near the end
        const fadeOutTimeout = setTimeout(() => {
          const fadeOut = setInterval(() => {
            if (audio.volume > 0.02) audio.volume -= 0.02;
            else {
              audio.pause();
              clearInterval(fadeOut);
            }
          }, 100);
        }, 3000); // fade out starts ~3s in

        // Finish preloader after animation duration
        const finishTimer = setTimeout(() => {
          onFinish();
          audio.pause();
        }, 3500);

        // Clean up
        const cleanup = () => {
          clearInterval(fadeIn);
          clearTimeout(fadeOutTimeout);
          clearTimeout(finishTimer);
          audio.pause();
          window.removeEventListener("click", startAudio);
        };
        window.addEventListener("beforeunload", cleanup);
      };

      window.addEventListener("click", startAudio, { once: true });
      setAudioStarted(true);
    }
  }, [audioStarted, onFinish]);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-black z-50 overflow-hidden cursor-pointer">
      {/* Lightning Text */}
      <motion.h1
        className="text-5xl md:text-6xl font-extrabold text-[#00c8ff] drop-shadow-[0_0_20px_#00c8ff] flex flex-col items-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: [0, 1, 1, 0.7, 1],
          scale: [0.8, 1.1, 1, 1.05, 1],
          textShadow: [
            "0 0 10px #00c8ff",
            "0 0 20px #00c8ff",
            "0 0 15px #00c8ff",
            "0 0 25px #00c8ff",
            "0 0 20px #00c8ff",
          ],
        }}
        transition={{
          duration: 3,
          times: [0, 0.3, 0.6, 0.8, 1],
        }}
      >
        ESC⚡
        {/* Blue dot under text */}
        <motion.span
          className="block w-3 h-3 bg-[#00c8ff] rounded-full mt-3 shadow-[0_0_10px_#00c8ff]"
          animate={{ scale: [1, 1.6, 1], opacity: [1, 0.7, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        />
      </motion.h1>

      {/* Tap anywhere text */}
      <motion.p
        className="mt-6 text-sm md:text-base text-[#00c8ff] font-semibold drop-shadow-[0_0_10px_#00c8ff] tracking-wide"
        animate={{ opacity: [0.6, 1, 0.6], textShadow: ["0 0 5px #00c8ff", "0 0 15px #00c8ff", "0 0 5px #00c8ff"] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        Tap anywhere to unmute
      </motion.p>
    </div>
  );
}
