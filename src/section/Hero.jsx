import React, { useState } from "react";
import { heroimg } from "../assets/images";
import { SearchBar } from "../Components";

const Hero = ({ children }) => {
  return (
    <div className="relative">
      <img src={heroimg} className="h-[372px] sm:w-full object-cover" />
      <div className="flex-col items-center absolute  top-1/2 left-[40%] md:left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h2 className="text-white font-montserrat text-[32px] font-semibold">
          Download High Quality Images by creators
        </h2>
        <p className="text-slate-gray text-sm font-montserrat font-medium">
          Over 2.4 million+ stock Images by our talented community
        </p>
        {children}
      </div>
    </div>
  );
};

export default Hero;
