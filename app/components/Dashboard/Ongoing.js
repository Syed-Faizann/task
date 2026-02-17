import React from "react";
import banner from "../../assets/banner.jpg";
import Image from "next/image";
import { useState } from "react";
import OnoingQuestions from "../OnoingQuestions";

const Ongoing = () => {
  return (
    <div className="w-full   ">
      <div className="bg-[#F0F0F3] rounded-xl shadow-md flex flex-col md:flex-row justify-between mb-6 overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <div className="p-4 md:p-6 ">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 sm:gap-4 flex-1">
            <div className="flex flex-col w-full sm:w-auto">
              <h2 className="text-base items-center md:text-lg flex xs:flex-row xs:items-center gap-1 sm:gap-2 text-[#282828]">
                <span className="text-lg sm:text-xl md:text-2xl font-bold whitespace-nowrap">
                  Ongoing Contest
                </span>
                <span className="text-[11px] sm:text-base md:text-xl text-[#4C4D4E] xs:ml-0 sm:ml-0">
                  | 23/06/01 - 23/07/01
                </span>
              </h2>
            </div>

            <div className="flex items-center">
              <div className=" text-[#282828] whitespace-nowrap">
                <span className="text-sm sm:text-base md:text-xl text-[#4C4D4E] xs:ml-0 sm:ml-0">
                  Second timer
                </span>
              </div>
            </div>
          </div>

          <p className="text-[#222222] pt-4 md:text-base text-[13px]">Add, remove questions</p>
        </div>

        <div className="relative w-full md:w-[233px] h-[140px] sm:h-[160px] md:min-h-[160px]">
          <Image
            src={banner}
            alt="Ongoing Contest Banner"
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, 233px"
            priority={false}
          />
        </div>
      </div>
      <OnoingQuestions />
    </div>
  );
};

export default Ongoing;
