import React from "react";
import { Plus, Trash2 } from "lucide-react";
import QuestionDeadline from "./QuestionDeadline";

export default function QuestionCard({ index, data, onChange, onDelete, onSave }) {
  const addOption = () => {
    onChange({
      options: [...data.options, ""],
    });
  };

  const removeOption = (i) => {
    if (data.options.length > 1) {
      const newOptions = data.options.filter((_, idx) => idx !== i);
      onChange({ options: newOptions });
    }
  };

  const updateOption = (i, value) => {
    const newOptions = [...data.options];
    newOptions[i] = value;
    onChange({ options: newOptions });
  };

  return (
    <div className="w-full max-w-3xl mb-6">
      <div
        className={`p-4 sm:p-6 rounded-3xl border-l-4 sm:border-l-8 border-[#010B28] bg-[#EFF0F3] min-h-[100px]`}
      >
        <div className="flex items-center mb-4 justify-between">
          <h2 className="text-base sm:text-lg font-semibold text-[#12BAB0] mb-4">
            Question {index + 1}
          </h2>
          {onDelete && (
            <Trash2
              className="ml-2 sm:ml-4 mt-2 text-red-500 cursor-pointer flex-shrink-0"
              size={20}
              onClick={onDelete}
            />
          )}
        </div>

        <h2 className="text-[#222222] text-base sm:text-lg">Type the question:</h2>

        <div className="pr-0 sm:pr-12">
    
          <div className="mb-4">
            <textarea
              rows={4}
              value={data.question}
              onChange={(e) =>
                onChange({ question: e.target.value })
              }
              className="w-full px-3 sm:px-4 py-2 sm:py-2.5 border border-gray-300 rounded-lg text-sm text-[#4E4E4E] outline-none focus:ring-2 focus:ring-[#12BAB0] focus:border-transparent"
            />
          </div>

          <div className="mb-6 border border-gray-300 rounded-lg p-3 sm:p-4">
            <div className="space-y-3">
              {data.options.map((option, i) => (
                <div key={i} className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <div className="w-full">
                      <input
                        type="text"
                        placeholder={`Option ${i + 1}`}
                        value={option}
                        onChange={(e) =>
                          updateOption(i, e.target.value)
                        }
                        className="w-full px-1 sm:px-2 py-2 text-[#4E4E4E] border-gray-300 rounded-lg outline-none text-sm sm:text-base"
                      />
                      <div className="border border-[#4E4E4E]"></div>
                    </div>

                    {data.options.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeOption(i)}
                        className="text-gray-400 hover:text-[#12BAB0] transition-colors flex-shrink-0 px-1 text-xl cursor-pointer sm:text-base"
                      >
                        _
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>

      
            <button
              type="button"
              onClick={addOption}
              className="flex w-full justify-end text-[#222222] mt-4 text-sm font-medium hover:text-[#12BAB0] transition-colors cursor-pointer"
            >
              <Plus size={18} />
            </button>
          </div>

          <div className="md:flex items-center gap-4">
            <h1 className="w-48 text-[#222222] text-base sm:text-lg font-bold">
              Question Active Till:
            </h1>

            <div className="flex-1 pb-4">
              <QuestionDeadline
                value={data.activeTill}
                onChange={(value) =>
                  onChange({ activeTill: value })
                }
              />
            </div>
          </div>

       
          <div className="flex items-center justify-between md:pr-32 sm:flex-row sm:items-center gap-2 sm:gap-4">
            <h1 className="text-[#222222] text-base sm:text-lg font-bold whitespace-nowrap">
              Source:
            </h1>
            <p className="text-[#4E4E4E] text-[12px] md:text-sm sm:text-md underline break-all cursor-pointer">
              Placeholder for the link of the source answer
            </p>
          </div>

 
          {onSave && (
            <div className="flex  mt-6">
              <button
                onClick={onSave}
                className="px-8 py-2 bg-[#010B28] text-white rounded-full hover:bg-[#0f9c8f] transition-colors cursor-pointer"
              >
                Save
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
