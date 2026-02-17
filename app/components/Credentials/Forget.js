"use client";

import { useState } from "react";

const Forget = ({ setMode }) => {
  const [email, setEmail] = useState("");

  const handleSend = (e) => {
    e.preventDefault();
    setMode("requestSend");
  };

  return (
    <>
      <h1 className="text-black text-4xl md:text-6xl font-bold mt-8 mb-2">
        Forgot Your <br /> Password
      </h1>

      <p className="text-black text-[14px] md:text-base mb-6 mt-6">
        Enter your email address and we'll send you a reset link
      </p>

      <form className="mt-4 flex flex-col" onSubmit={handleSend}>
        <label className="text-gray-500 text-[12px] md:text-sm font-medium mt-2 ml-1">
          Email*
        </label>

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="border border-gray-300 rounded-full px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#12BAB0]"
        />

        <button
          type="submit"
          className=" mt-6 bg-black hover:bg-[#0ea89b] text-white text-lg md:text-xl py-2 rounded-full transition-colors"
        >
          Send
        </button>
      </form>
    </>
  );
};

export default Forget;
