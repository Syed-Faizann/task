"use client";
import React from "react";
import { Plus } from "lucide-react";
import { useState } from "react";
import Archived from "../components/Dashboard/Archived";
import Ongoing from "../components/Dashboard/Ongoing";
import Link from "next/link";

const Page = () => {
  const [activeTab, setActiveTab] = useState("Ongoing");

  return (
    <>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1 className="text-2xl md:text-3xl font-bold text-black">
          Contests
        </h1>
        <Link href="/dashboard/create">
          <button className="bg-[#12BAB0] transition-colors cursor-pointer text-white px-4 py-3 rounded-full text-sm font-medium flex items-center justify-center gap-2 w-full sm:w-auto hover:bg-opacity-90">
            <Plus className="w-4 h-4" />
            Create New Contest
          </button>
        </Link>
      </div>

      <div className="mt-6 flex items-center gap-4">
        <button
          className={`relative px-4 py-2 cursor-pointer ${
            activeTab === "Ongoing"
              ? "text-black font-bold"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("Ongoing")}
        >
          Ongoing
          {activeTab === "Ongoing" && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-black"></div>
          )}
        </button>
        <button
          className={`relative px-4 py-2 cursor-pointer ${
            activeTab === "Archived"
              ? "text-black font-bold"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("Archived")}
        >
          Archived
          {activeTab === "Archived" && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-black"></div>
          )}
        </button>
      </div>

      <div className="mt-6">
        {activeTab === "Ongoing" && <Ongoing />}
        {activeTab === "Archived" && <Archived />}
      </div>
    </>
  );
};

export default Page;