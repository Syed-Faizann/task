import React from "react";

const RequestSend = ({ setMode }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setMode("resetPassword");
  };
  return (
    <>
      <h1 className="text-black text-6xl font-bold mt-8 mb-2">
        Forgot Your <br /> Password
      </h1>

      <p className="text-black mb-6 mt-10">
        A password reset message was sent to your email address. <br />
        Please click the link in that message to reset your password.
      </p>

      <button
        onClick={handleSubmit}
        type="submit"
        className="w-full mt-15 bg-black hover:bg-[#0ea89b] text-white font-bold text-xl py-2 rounded-full transition-colors"
      >
        Login
      </button>
    </>
  );
};

export default RequestSend;
