import React, { useState, useEffect } from "react";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/80 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-6"}`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="text-2xl font-bold tracking-tighter flex items-center gap-2">
          <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center text-white text-xs font-black">
            B
          </div>
          <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent">
            bblack-jew ENTj
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a
            href="#services"
            className="hover:text-indigo-600 transition-colors"
          >
            Services
          </a>
          <a
            href="#portfolio"
            className="hover:text-indigo-600 transition-colors"
          >
            Portfolio
          </a>
          <a
            href="#ai-tool"
            className="hover:text-indigo-600 transition-colors"
          >
            AI Strategist
          </a>
          <a
            href="#contact"
            className="px-5 py-2.5 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-all"
          >
            Get in Touch
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
