// src/components/PageWrapper.jsx
import React from "react";
import { motion } from "framer-motion";
import clubIcon from "/public/clubicon.png";

export default function PageWrapper({ children }) {
  return (
    <div className="relative w-full min-h-screen bg-transparent transition-colors">
      {/* Fixed Background Logo */}
      <div
        className="fixed inset-0 flex items-center justify-center pointer-events-none z-0"
        style={{
          backgroundImage: `url(${clubIcon})`,
          backgroundSize: "300px",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          opacity: 0.05,
        }}
      ></div>

      {/* Animated Page Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="relative z-10 w-full"
      >
        {children}
      </motion.div>
    </div>
  );
}
