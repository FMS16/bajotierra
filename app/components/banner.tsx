import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Banner = () => {
  return (
    <div className="relative w-full h-screen">
      <div className="absolute h-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center text-center">
        <h1 className="text-9xl tracking-widest font-bold pirata text-white">
          Bajo Tierra
        </h1>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center">
        <button className="bg-white/10 backdrop-blur-md p-5 rounded-full cursor-pointer" aria-label="Scroll down">
          <FontAwesomeIcon className="w-5 h-5 text-white opacity-50" icon={faChevronDown} />
        </button>
      </div>
    </div>
  );
};

export default Banner;
