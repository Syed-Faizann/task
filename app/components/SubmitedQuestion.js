import React, { useState, useEffect } from "react";
import { Edit2 } from "lucide-react";
import QuestionCard from "./QuestionCard";

const SubmitedQuestion = ({ data, index, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);

  const [localData, setLocalData] = useState({ ...data });

  useEffect(() => {
    setLocalData({ ...data });
  }, [data]);


  const handleSave = () => {
    onUpdate?.(localData); 
    setIsEditing(false);
  };

  if (isEditing) {

    return (
      <div className="w-full max-w-3xl mb-6">
        <QuestionCard
          index={index}
          data={localData}
          onChange={(updatedData) => setLocalData(prev => ({ ...prev, ...updatedData }))}
          onDelete={() => {}}
          onSave={handleSave} 
        />
      </div>
    );
  }


  return (
    <div className="w-full max-w-3xl mb-6">
      <div className="bg-[#EFF0F3] border-[#000000] border-1 rounded-xl p-6">
        <div className="flex justify-between">
          <h2 className="text-base sm:text-lg font-semibold text-[#12BAB0] mb-4">
            Question {index + 1}
          </h2>
          <Edit2
            className="ml-2 sm:ml-4 mt-2 text-[#222222] cursor-pointer flex-shrink-0"
            size={20}
            onClick={() => setIsEditing(true)}
          />
        </div>

        <h1 className="text-[#4E4E4E] text-xl font-bold">{localData.question}</h1>

        <div className="mt-4 flex flex-col gap-4">
          {localData.options.map((opt, i) => (
            <label key={`${localData.id}-${i}`} className="flex items-center gap-2 text-[#4C4D4E] text-sm">
              <input type="radio" name={`answer-${index}`} value={opt} />
              {opt}
            </label>
          ))}
        </div>

        <div className="md:flex items-center gap-4 mt-4">
          <h1 className="w-48 text-[#4C4D4E] text-base sm:text-lg font-bold">
            Question Active Till:
          </h1>
          <div className="flex md:flex-row flex-col gap-4 flex-1 md:w-full md:max-w-1/2 mt-3">
            <div className="relative w-full sm:w-1/2">
              <input
                type="date"
                value={localData.activeTill?.date || ""}
                readOnly
                className="
                  w-full
                  text-[#222222]
                  rounded-full
                  px-3 py-2 pr-10
                  text-sm
                  bg-gray-100
                  cursor-not-allowed
                  [&::-webkit-calendar-picker-indicator]:opacity-0
                "
              />
            </div>
            <div className="relative w-full sm:w-1/2">
              <input
                type="time"
                value={localData.activeTill?.time || ""}
                readOnly
                className="
                  w-full
                  text-[#222222]
                  rounded-full
                  px-3 py-2 pr-10
                  text-sm
                  bg-gray-100
                  cursor-not-allowed
                  [&::-webkit-calendar-picker-indicator]:opacity-0
                "
              />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between md:pr-45 sm:flex-row sm:items-center gap-2 sm:gap-4 mt-4">
          <h1 className="text-[#222222] text-[12px] sm:text-lg font-bold whitespace-nowrap">
            Source:
          </h1>
          <p className="text-[#4E4E4E] text-[9px] md:text-sm sm:text-md underline break-all cursor-pointer">
            Placeholder for the link of the source answer
          </p>
        </div>
      </div>
    </div>
  );
};

export default SubmitedQuestion;
