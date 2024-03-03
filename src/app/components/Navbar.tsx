import React from "react";
import { twMerge } from "tailwind-merge";
import { RiCalculatorFill } from "react-icons/ri";

export function Navbar() {
  return (
    <nav className="flex justify-between lg:justify-around items-center py-5 px-4 lg:px-0">
      <h3
        className={twMerge(
          "p-2",
          "text-white font-bold text-xl flex items-center",
          "transition-colors duration-200",
          "hover:text-yellow-600 hover:cursor-pointer"
        )}
      >
        <RiCalculatorFill className="mr-2" />
        <span className="lg:ml-0.6">LionBMICalculator</span>{" "}
      </h3>
    </nav>
  );
}
