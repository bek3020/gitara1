import React from "react";
import Rasim from "../assets/img/logo/gitaras.png";

const Contakt = () => {
  return (
    <div className="relative overflow-hidden h-72 bg-gray-900">
      <div className="absolute inset-0">
        <img src={Rasim} alt="Gitara" className="w-full h-full object-cover" />
      </div>

      <div className="absolute inset-0 bg-opacity-70 bg-[#2B1F0E] flex justify-end items-start p-8 z-10">
        <div className="bg-[#F7F0E6] p-5 w-80 text-center text-gray-900">
          <p className="text-xs uppercase text-gray-500 mb-1">
            актуальный контент
          </p>

          <h2 className="font-serif text-2xl font-bold text-[#926B48] mb-5">
            GUITAR LAVKA
          </h2>

          <div className="flex border border-gray-300">
            <input
              type="email"
              placeholder="Email"
              className="flex-grow p-2 text-base border-none outline-none bg-white"
            />

            <button className="bg-[#926B48] text-white p-2.5 cursor-pointer text-lg hover:bg-opacity-80 transition">
              <span>&#x27A4;</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contakt;
