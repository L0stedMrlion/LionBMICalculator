import React from "react";
import { RiCalculatorFill } from "react-icons/ri";

const BMIInputs = () => {
  return (
    <div className="bg-gray-1000 text-white p-4 rounded-lg shadow-md">
      <label htmlFor="weight" className="block mb-2 font-poppins">
        Weight (kg):
      </label>
      <input
        type="number"
        id="weight"
        name="weight"
        placeholder="Enter your weight"
        className="w-full p-2 bg-gray-900 text-white rounded-md mb-4"
      />
      <label htmlFor="height" className="block mb-2">
        Height (cm):
      </label>
      <input
        type="number"
        id="height"
        name="height"
        placeholder="Enter your height"
        className="w-full p-2 bg-gray-900 text-white rounded-md"
      />
    </div>
  );
};

export default BMIInputs;
