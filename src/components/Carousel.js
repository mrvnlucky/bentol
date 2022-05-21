import React, { useState } from "react";
import Pertalite from "../assets/gas/Pertalite.jpg";
import Pertamax from "../assets/gas/Pertamax.jpg";
import PertamaxTurbo from "../assets/gas/PertamaxTurbo.jpg";
import Dex from "../assets/gas/Dex.jpg";
import DexLite from "../assets/gas/Dexlite.jpg";
import White from "../assets/white.jpg";

const featuredFuel = [Pertalite, Pertamax, PertamaxTurbo, Dex, DexLite, White];

const harga = [
  "Rp. 7.650",
  "Rp. 12.500",
  "Rp. 14.500",
  "Rp. 13.700",
  "Rp. 12.950",
  " ",
];

let count = 0;
export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const fuelLength = featuredFuel.length;
  const handleOnNextClick = () => {
    if (count > fuelLength) {
      setCurrentIndex(0);
    }
    count = (count + fuelLength / 2) % fuelLength;
    setCurrentIndex(count);
  };

  const handleOnPreviousClick = () => {
    if (count > fuelLength) {
      setCurrentIndex(3);
    }
    count = (currentIndex + fuelLength - fuelLength / 2) % fuelLength;
    setCurrentIndex(count);
  };

  return (
    <div className="w-10/12 select-none relative m-auto mt-8 rounded-lg border border-white shadow-lg">
      <div className="flex flex-row ml-10 mr-10">
        <div className="w-1/3">
          <img src={`${featuredFuel[currentIndex]}`}></img>
          <h1 className="text-right mr-10 text-2xl font-extrabold text-red mb-3">
            {harga[currentIndex]}
          </h1>
        </div>
        <div className="w-1/3">
          <img src={`${featuredFuel[currentIndex + 1]}`}></img>
          <h1 className="text-right mr-10 text-2xl font-extrabold text-red mb-3">
            {harga[currentIndex + 1]}
          </h1>
        </div>
        <div className="w-1/3">
          <img src={`${featuredFuel[currentIndex + 2]}`}></img>
          <h1 className="text-right mr-10 text-2xl font-extrabold text-red mb-3">
            {harga[currentIndex + 2]}
          </h1>
        </div>
      </div>
      <div className="absolute w-full top-1/2 transform -translate-y-1/2 px-2 flex justify-between items-center">
        <button
          className="bg-silver rounded-full w-12"
          onClick={handleOnPreviousClick}
        >
          <svg
            viewBox="0 0 32 32"
            class="icon icon-caret-left"
            aria-hidden="true"
            fill="white"
          >
            <path d="M20.697 24L9.303 16.003 20.697 8z" />
          </svg>
        </button>
        <button
          className="bg-silver rounded-full w-12"
          onClick={handleOnNextClick}
        >
          <svg
            viewBox="0 0 32 32"
            class="icon icon-caret-right"
            aria-hidden="true"
            fill="white"
          >
            <path d="M11.303 8l11.394 7.997L11.303 24z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
