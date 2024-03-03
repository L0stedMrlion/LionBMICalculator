import React from "react";
import { RiMailFill, RiReactjsLine } from "react-icons/ri";

const BMIInputs = () => {
  return (
    <div className="bg-gray-1000 text-white p-4 rounded-lg shadow-md">
      <label htmlFor="weight" className="block mb-2 font-poppins">
        Weight (kg):
      </label>
      <input
        type="number"
        defaultValue={"0"}
        id="weight"
        name="weight"
        placeholder="Enter your weight"
        className="w-full p-2 bg-gray-900 text-white rounded-md mb-4"
      />
      <label htmlFor="height" className="block mb-2.5">
        Height (cm):
      </label>
      <input
        type="number"
        defaultValue={"0"}
        id="height"
        name="height"
        placeholder="Enter your height"
        className="w-full p-2 bg-gray-900 text-white rounded-md mb-4"
      />
      <button className="bg-yellow-500 hover:bg-yellow-530 text-white font-bold py-2 px-5 rounded flex justify-between lg:justify-around items-center mx-auto">
        <RiMailFill style={{ width: "20px", height: "20px", margin: "2px" }} />
        Submit
      </button>
    </div>
  );
};

export default BMIInputs;
