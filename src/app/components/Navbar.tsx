import React from "react";
import { RiCalculatorFill } from "react-icons/ri";

export function Navbar() {
  return (
    <nav className="flex justify-between lg:justify-around py-6 px-4 lg:px-0">
      <h3 className="p-2 text-white font-bold text-xl flex items-center transition-colors duration-200 hover:text-yellow-500 hover:cursor-pointer">
        <RiCalculatorFill className="mr-2" />
        <span>Lion&apos;s BMI Calculator</span>
      </h3>
    </nav>
  );
}
