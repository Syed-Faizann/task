"use client";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";

const LoginForm = ({ setMode }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <>
      <h1 className="text-[#0A0A0A]  text-3xl md:text-4xl font-bold mt-8 mb-2">Login</h1>

      <form className="mt-4 flex flex-col">
        <label className="text-gray-500 text-[12px] md:text-sm font-medium mt-2">
          Username or email*
        </label>
        <input
          className="border border-gray-300 rounded-full px-4 py-2 text-[#0A0A0A]"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label className="text-gray-500 text-[12px] md:text-sm font-medium mt-5">
          Password*
        </label>
        <div className="relative w-full">
          <input
            className="border border-gray-300 rounded-full px-4 py-2 w-full text-[#0A0A0A]"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 text-[#12BAB0] -translate-y-1/2"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>

        <div className="flex justify-between items-center mt-8 text-[10px] md:text-sm">
          <label className="flex items-center gap-2 text-gray-600">
            <input type="checkbox" />
            Remember me
          </label>

          <button
            type="button"
            onClick={() => setMode("forget")}
            className="text-[10px] md:text-base text-[#12BAB0] hover:underline"
          >
            Forgot My Password
          </button>
        </div>

        <Link href="/dashboard" className="w-full">
          <button
            type="submit"
            className="mt-6 bg-black text-white py-2 font- rounded-full w-full cursor-pointer"
          >
            Login
          </button>
        </Link>
      </form>
    </>
  );
};

export default LoginForm;
