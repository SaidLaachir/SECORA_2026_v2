import React from "react";
import clubIcon from "/public/clubicon.png";
export default function BackgroundLogo() {
  return (
    <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-0">
      <img
        src={clubIcon}
        alt="Background Logo"
        className="w-[300px] opacity-10 select-none"
      />
    </div>
  );
}
