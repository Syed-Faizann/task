import React, { useState } from "react";
import Image from "next/image";
import banner from "../../assets/banner.jpg";

const Archived = ({ contests = [] }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const allContests =
    contests.length > 0
      ? contests
      : Array.from({ length: 12 }, (_, i) => ({
          id: i + 1,
          title: `Contest ${i + 1}`,
          date: "01.06.23",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.",
        }));

  const totalPages = Math.ceil(allContests.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentContests = allContests.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    document
      .getElementById("archived-top")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="mt-6 md:mt-24 relative z-20">
      <div id="archived-top" className="absolute top-0 -mt-20"></div>

      {currentContests.map((contest, index) => (
        <div
          key={contest.id || index}
          className="bg-[#F0F0F3] rounded-xl shadow-md flex flex-col md:flex-row justify-between mb-6 overflow-hidden hover:shadow-lg transition-shadow duration-300"
        >
          <div className="p-4 md:p-6 flex flex-col justify-center flex-1">
            <h2 className="text-base md:text-lg flex items-center sm:flex-row sm:items-center gap-1 sm:gap-2 text-[#282828]">
              <span className="text-xl md:text-2xl font-bold">
                {contest.title || `Contest ${contest}`}
              </span>
              <span className="text-sm md:text-base">
                | {contest.date || "01.06.23"}
              </span>
            </h2>

            <p className="text-[#282828] text-xs md:text-sm mt-3">
              {contest.description ||
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet."}
            </p>

            <a
              href="#"
              className="text-teal-400 text-xs md:text-sm mt-4 underline hover:text-teal-600 transition-colors"
            >
              See Details
            </a>
          </div>

          <div className="relative w-full md:w-[233px] h-[160px] md:min-h-[160px]">
            <Image
              src={contest.image || banner}
              alt={`Contest ${contest.title || contest}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 233px"
            />
          </div>
        </div>
      ))}

      {allContests.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No archived contests found</p>
        </div>
      )}

      {totalPages > 1 && (
        <>
          <div className="flex flex-wrap gap-2 mt-8">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`px-3 py-2 md:px-4 md:py-2 rounded-md text-sm md:text-base transition-colors ${
                  currentPage === page
                    ? "bg-black text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {page}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Archived;
