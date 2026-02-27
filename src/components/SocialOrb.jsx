import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageCircle,
  X,
} from "lucide-react";
import {
  FaInstagram,
  FaLinkedin,
  FaDiscord,
  FaWhatsapp,
} from "react-icons/fa";

export default function FloatingBubble() {
  const [showHint, setShowHint] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [active, setActive] = useState(false);

  const bubbleRef = useRef(null);
  const holdTimeout = useRef(null);

  /* ------------------------------
     Responsive detection
  ------------------------------ */
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  /* ------------------------------
     Hint every 2 minutes
  ------------------------------ */
  useEffect(() => {
    const show = () => {
      setShowHint(true);
      setTimeout(() => setShowHint(false), 3000);
    };

    show(); // show on first load

    const interval = setInterval(show, 120000);
    return () => clearInterval(interval);
  }, []);

  /* ------------------------------
     Click outside = close
  ------------------------------ */
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (bubbleRef.current && !bubbleRef.current.contains(e.target)) {
        setActive(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  /* ------------------------------
     Drag snapping (right only)
  ------------------------------ */
  const handleDragEnd = () => {
    const screenWidth = window.innerWidth;
    const rightSnap = screenWidth - 80;
    bubbleRef.current.style.left = `${rightSnap}px`;
  };

  /* ------------------------------
     Hover (desktop)
  ------------------------------ */
  const handleMouseEnter = () => {
    if (!isMobile) setActive(true);
  };

  const handleMouseLeave = () => {
    if (!isMobile) setActive(false);
  };

  /* ------------------------------
     Hold (mobile)
  ------------------------------ */
  const handleTouchStart = () => {
    holdTimeout.current = setTimeout(() => {
      setActive(true);
    }, 400); // hold duration
  };

  const handleTouchEnd = () => {
    clearTimeout(holdTimeout.current);
  };

  return (
    <motion.div
      ref={bubbleRef}
      drag
      dragMomentum={false}
      onDragEnd={handleDragEnd}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className={`
        fixed z-50
        ${isMobile ? "w-14 h-14" : "w-16 h-16"}
        rounded-full
        bg-gradient-to-br from-blue-600 to-indigo-600
        shadow-xl
        flex items-center justify-center
        cursor-pointer
      `}
      style={{
        bottom: isMobile ? "85px" : "95px",
        right: "20px",
      }}
      whileTap={{ scale: 0.9 }}
    >
      <MessageCircle className="text-white" size={22} />

      {/* --------------------------
          Hint Bubble
      --------------------------- */}
      <AnimatePresence>
        {showHint && !active && (
            <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: -10 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="
                absolute bottom-full mb-3
                left-1/2 -translate-x-1/2
                px-4 py-1.5
                text-xs font-medium text-center whitespace-nowrap
                rounded-full
                backdrop-blur-md
                bg-blue-600/90 text-white
                shadow-md
            "
            >
            {isMobile ? "Hold me" : "Hover on me"}
            </motion.div>
        )}
        </AnimatePresence>

      {/* --------------------------
          Social Icons (Vertical)
      --------------------------- */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: -20 }}
            exit={{ opacity: 0 }}
            className="absolute bottom-full mb-4 flex flex-col gap-3 items-center"
          >
            {/* Instagram */}
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="https://www.instagram.com/e_cybersec_club/"
              className="w-11 h-11 rounded-full flex items-center justify-center shadow-md"
              style={{
                background:
                  "radial-gradient(circle at 30% 30%, #feda75, #d62976, #962fbf)",
              }}
            >
              <FaInstagram className="text-white" size={18} />
            </motion.a>

            {/* LinkedIn */}
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="https://www.linkedin.com/company/akira-club/posts/?feedView=all"
              className="w-11 h-11 rounded-full bg-[#0077B5] flex items-center justify-center shadow-md"
            >
              <FaLinkedin className="text-white" size={18} />
            </motion.a>

            {/* Discord */}
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="https://discord.gg/rPVBFPvq"
              className="w-11 h-11 rounded-full bg-[#5865F2] flex items-center justify-center shadow-md"
            >
              <FaDiscord className="text-white" size={18} />
            </motion.a>

            {/* WhatsApp */}
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="https://chat.whatsapp.com/DBc4WdUPcVnI2z0iHGRZPC?mode=ems_wa_c"
              className="w-11 h-11 rounded-full bg-[#25D366] flex items-center justify-center shadow-md"
            >
              <FaWhatsapp className="text-white" size={18} />
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}