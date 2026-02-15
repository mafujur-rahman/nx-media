"use client";

import React, { useState, useEffect } from "react";
import { HiChevronDoubleUp } from "react-icons/hi";

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
      setShowButton(scrollPosition > windowHeight / 2);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-5 right-0 flex justify-end max-w-7xl mx-auto z-50 px-4 pointer-events-none">
      {showButton && (
        <button
          onClick={scrollToTop}
          className="pointer-events-auto bg-black text-white p-3 rounded-full shadow-lg transition-all duration-500 border border-white"
        >
          <HiChevronDoubleUp size={24} />
        </button>
      )}
    </div>
  );
};
export default ScrollToTop;