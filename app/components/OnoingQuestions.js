import React, { useState } from "react";
import { Edit2, Trash2 } from "lucide-react";
import QuestionCard from "./QuestionCard";

const OnoingQuestions = () => {
  const [questions, setQuestions] = useState([
    { question: "Will the 2024 Macbook Pro have a 5D chip?", options: ["Yes", "No"], activeTill: "5d : 21h : 40m left" },
    { question: "Will the iPhone 16 have satellite connectivity?", options: ["Yes", "No"], activeTill: "4d : 12h : 15m left" },
    { question: "Will AI replace teachers by 2030?", options: ["Yes", "No"], activeTill: "2d : 5h : 30m left" },
  ]);

  const [selectedOption, setSelectedOption] = useState({});
  const [editingIndex, setEditingIndex] = useState(null);
  const [localData, setLocalData] = useState(null);

  const handleEdit = (index) => {
    setEditingIndex(index);
    setLocalData({ ...questions[index] });
  };

  const handleSave = () => {
    setQuestions((prev) =>
      prev.map((q, i) => (i === editingIndex ? { ...q, ...localData } : q))
    );
    setEditingIndex(null);
    setLocalData(null);
  };

  const handleDelete = (index) => {
    setQuestions((prev) => prev.filter((_, i) => i !== index));
    if (editingIndex === index) {
      setEditingIndex(null);
      setLocalData(null);
    }
  };

  return (
    <div className="w-full max-w-3xl flex flex-col gap-4 md:gap-6 px-4 md:px-0">
      {questions.map((q, i) => {
      
        if (editingIndex === i) {
          return (
            <QuestionCard
              key={i}
              index={i}
              data={localData}
              onChange={(newData) => setLocalData((prev) => ({ ...prev, ...newData }))}
              onDelete={() => handleDelete(i)}
              onSave={handleSave}
            />
          );
        }

     
        return (
          <div key={i} className="bg-[#EFF0F3] border border-[#0629A2] rounded-xl p-4 md:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="text-[#282828] flex flex-wrap items-center gap-2 sm:gap-4">
                <h1 className="text-base md:text-lg lg:text-xl">
                  Question {i + 1}/{questions.length}
                </h1>
                <p className="bg-[#FFFFFF] border border-[#12BAB0] p-1 px-2 rounded-full text-xs md:text-sm text-[#12BAB0] whitespace-nowrap">
                  <strong className="text-[#12BAAF]"> Active </strong>
                  <span className="text-[#010B28] font-semibold"> until</span> {q.activeTill}
                </p>
              </div>
              <div className="text-[#282828] flex gap-4  sm:self-auto">
                <Edit2 className="cursor-pointer w-4 h-4 md:w-5 md:h-5" onClick={() => handleEdit(i)} />
                <Trash2 className="text-red-700 cursor-pointer w-4 h-4 md:w-5 md:h-5" onClick={() => handleDelete(i)} />
              </div>
            </div>

            <div className="border border-[#D9D9D9] mt-3 md:mt-4"></div>

            <h1 className="text-[#282828] text-lg md:text-xl lg:text-2xl font-bold mt-3 md:mt-4 break-words">
              {q.question}
            </h1>

            <div className="mt-3 md:mt-4 flex flex-col gap-2 md:gap-3 mb-3 md:mb-4">
              {q.options.map((opt, idx) => (
                <label key={idx} className="flex items-center gap-2 text-[#4C4D4E] text-sm md:text-md">
                  <input
                    type="radio"
                    name={`question${i}`}
                    value={opt}
                    checked={selectedOption[i] === opt}
                    onChange={() =>
                      setSelectedOption((prev) => ({ ...prev, [i]: opt }))
                    }
                    className="w-3.5 h-3.5 md:w-4 md:h-4"
                  />
                  <span className="break-words">{opt}</span>
                </label>
              ))}
            </div>

            <a href="/" className="text-[#1C77FF] text-xs md:text-sm underline inline-block">
              Verified By Source Name
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default OnoingQuestions;