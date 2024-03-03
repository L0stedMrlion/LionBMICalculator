import React from "react";
import { Navbar } from "./components/Navbar";
import BMIInputs from "./components/BMIInputs"; // Assuming the file path is correct

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="mx-auto max-w-md p-6 rounded-lg shadow-md">
        <BMIInputs />
      </div>
    </main>
  );
}
