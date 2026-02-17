import React from "react";

const restrictions = [
  "Be minimum 8 characters",
  "Include at least one uppercase letter",
  "Include at least one number",
  "Include at least one symbol",
  "Cannot match your email address",
];

const ResetPassword = ({ setMode }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setMode("login");
  };

  return (
    <>
      <h1 className="text-black text-4xl md:text-6xl font-bold mt-8 mb-2">
        Reset Your <br /> Password
      </h1>

      <form className="mt-9 flex flex-col">
        <label className="text-gray-500 text-[12px] md:text-sm font-medium mt-2">
          New Password*
        </label>
        <input
          className="border border-gray-300 rounded-full px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#12BAB0] focus:border-transparent"
          type="password"
        />

        <label className="text-gray-500 text-[12px] md:text-sm font-medium mt-5">
          Confirm New Password*
        </label>
        <div className="relative w-full">
          <input
            className="border border-gray-300 rounded-full px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#12BAB0] focus:border-transparent w-full"
            type="password"
          />
          <button
            type="button"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
          ></button>
        </div>

        <div>
          <h1 className="text-black text-[16px] md:text-base mt-3">Your password must:</h1>

          <ul>
            {restrictions.map((item, index) => (
              <li
                key={index}
                className="text-gray-500 text-[12px] md:text-sm font-medium mt-2 ml-1"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <button
          onClick={handleSubmit}
          type="button"
          className="mt-15 bg-black hover:bg-[#0ea89b] text-white  text-lg md:text-xl py-2 rounded-full transition-colors"
        >
          Reset
        </button>
      </form>
    </>
  );
};

export default ResetPassword;
