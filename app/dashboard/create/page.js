"use client";
import React from "react";
import { Plus, Upload } from "lucide-react";
import DeadlinePicker from "../../components/DeadlinePicker";
import QuestionCard from "../../components/QuestionCard";
import { useState } from "react";
import SubmitedQuestion from "@/app/components/SubmitedQuestion";
const Page = () => {


  const [questions, setQuestions] = useState([
  {
    id: Date.now(),
    question: "",
    options: ["", "", "", ""],
    activeTill: { date: "", time: "" },
    source: "",
  },
]);

const [submittedQuestions, setSubmittedQuestions] = useState([]);



const addQuestion = () => {
  setQuestions(prev => [
    ...prev,
    {
      id: Date.now(),
      question: "",
      options: ["", "", "", ""],
      activeTill: { date: "", time: "" },
      source: "",
    },
  ]);
};


const deleteQuestion = (id) => {
  setQuestions(prev => prev.filter(q => q.id !== id));
};

  
const handleSubmit = (e) => {
  e.preventDefault();

 
  setSubmittedQuestions(prev => [...prev, ...questions]);

 
  setQuestions([
    {
      id: Date.now(),
      question: "",
      options: ["", "", "", ""],
      activeTill: { date: "", time: "" },
      source: "",
    },
  ]);
};



  return (
    <div className="p-4 sm:p-6 w-full max-w-3xl ">
      <h1 className="text-2xl md:text-3xl font-bold text-black mb-6">
        Create Contest
      </h1>

      <div className="flex flex-col md:flex-row gap-6 md:gap-10 ">
     
        <div className="flex flex-col w-full sm:w-1/3 bg-[#EFF0F3] h-40 items-center justify-center rounded-lg cursor-pointer mx-auto sm:mx-0">
          <Upload className="w-6 h-6 text-[#050D27] mb-2" />
          <p className="text-[#050D27] text-sm underline">Upload your image</p>
        </div>

        <form
          action=""
          className="flex flex-col text-[#050D27] w-full max-w-xl md:mx-0"
        >
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
              Name of the contest
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#12BAB0] focus:border-transparent"
            />
          </div>

          <div className="mb-4  ">
            <label className="block text-[#4E4E4E] text-sm font-bold mb-1">
              Contest Active till
            </label>
            <DeadlinePicker />
          </div>
        </form>
      </div>

      <div className="border-1 border-gray-200 m-5"></div>

{submittedQuestions.map((q, index) => (
  <SubmitedQuestion key={q.id} data={q} index={index} />
))}


{questions.map((q, index) => (
<QuestionCard
  key={q.id}
  index={submittedQuestions.length + index}
  data={q}
  onChange={(updatedData) => {
    setQuestions(prev =>
      prev.map(item =>
        item.id === q.id ? { ...item, ...updatedData } : item
      )
    );
  }}
  onDelete={() => deleteQuestion(q.id)}
/>

))}


      <div className="flex justify-between items-center mt-6">
        <h1
          onClick={addQuestion}
          className="text-xl font-semibold underline text-[#12BAB0] cursor-pointer"
        >
          New Question <Plus className="inline-block ml-2" size={18} />
        </h1>
        <button
        onClick={handleSubmit}
        className="px-8 py-2 bg-[#12BAB0] rounded-full cursor-pointer hover:bg-[#0f9c8f] transition-colors">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Page;
