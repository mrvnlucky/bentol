import React, { useState } from "react";
import Pertalite from "../assets/gas/Pertalite.jpg";
import Pertamax from "../assets/gas/Pertamax.jpg";
import PertamaxTurbo from "../assets/gas/PertamaxTurbo.jpg";
import Dex from "../assets/gas/Dex.jpg";
import DexLite from "../assets/gas/Dexlite.jpg";
import White from "../assets/white.jpg";

const featuredFuel = [Pertalite, Pertamax, PertamaxTurbo, Dex, DexLite, White];
const harga = ["Rp. 10,000", "Rp. 12,950", "Rp. 14,400", "Rp. 15,100", "Rp. 14,550", ""];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const fuelLength = featuredFuel.length;

  const handleOnNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 3) % fuelLength);
  };

  const handleOnPreviousClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 3 + fuelLength) % fuelLength);
  };

  const getIndex = (offset) => (currentIndex + offset + fuelLength) % fuelLength;

  return (
    <div className="w-1/3 bg-white z-10 select-none relative m-auto mt-2 rounded-lg border border-white shadow-lg">
      <div className="flex flex-row ml-10 mr-10">
        {[0, 1, 2].map((offset) => (
          <div key={offset} className="w-1/3">
            <img src={featuredFuel[getIndex(offset)]} alt={`fuel-${offset}`} />
            <h1 className="text-right mr-10 text-lg font-extrabold text-red mb-3">
              {harga[getIndex(offset)]}
            </h1>
          </div>
        ))}
      </div>
      <div className="absolute w-full top-1/2 transform -translate-y-1/2 px-2 flex justify-between items-center">
        <button
          className="bg-silver rounded-full w-8"
          onClick={handleOnPreviousClick}
        >
          <svg
            viewBox="0 0 32 32"
            className="icon icon-caret-left"
            aria-hidden="true"
            fill="white"
          >
            <path d="M20.697 24L9.303 16.003 20.697 8z" />
          </svg>
        </button>
        <button
          className="bg-silver rounded-full w-8"
          onClick={handleOnNextClick}
        >
          <svg
            viewBox="0 0 32 32"
            className="icon icon-caret-right"
            aria-hidden="true"
            fill="white"
          >
            <path d="M11.303 8l11.394 7.997L11.303 24z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
