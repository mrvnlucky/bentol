import React, { useState } from "react";
import Pertalite from "../assets/pertalite.jpg"
import Pertamax from "../assets/pertamax.jpg"
import PertamaxTurbo from "../assets/pertamax-turbo.jpg"


const featuredFuel = [
    Pertalite,
    Pertamax,
    PertamaxTurbo
];

let count = 0;
export default function Carousel() {

    const [currentIndex, setCurrentIndex] =
        useState(0);

    const handleOnNextClick = () => {
        count = (count + 1) % featuredFuel.length
        setCurrentIndex(count);
    }

    const handleOnPreviousClick = () => {
        const fuelLength = featuredFuel.length;
        count = (currentIndex + fuelLength - 1) % fuelLength;
        setCurrentIndex(count);
    }

    return (
        <div className="w-full select-none relative">
            <div className="aspect-w-16 aspect-h-9">
                <img src={`${featuredFuel[currentIndex]}`}></img>
            </div>
            <div className="absolute w-full top-1/2 transform -translate-y-1/2 px-3 flex justify-between items-center">
                <button onClick={handleOnPreviousClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                    </svg>
                </button>
                <button onClick={handleOnNextClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                    </svg>
                </button>
            </div>
        </div>

    )
}
