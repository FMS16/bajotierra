import React from "react";

const Header = () => {
  return (
    <header className="fixed w-full py-10 z-50 flex justify-center">
      <nav
        className="flex bg-white/10 backdrop-blur-md p-4 px-10 space-x-10 rounded-3xl opacity-50 text-white"
        aria-label="Main navigation"
      >
        <a href="/" className="hover:opacity-70">
          Home
        </a>
        <a href="/about" className="hover:opacity-70">
          Crew
        </a>
        <a href="/contact" className="hover:opacity-70">
          Backstage
        </a>
      </nav>
    </header>
  );
};

export default Header;
