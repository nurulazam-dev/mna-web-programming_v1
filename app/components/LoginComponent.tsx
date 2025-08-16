"use client";
import Link from "next/link";
import React, { useState } from "react";
import { MdMailOutline } from "react-icons/md";
import backgroundBanner from "../../public/images/mna-web-programming-banner.png";
import { RiLockPasswordLine } from "react-icons/ri";
import { IoEyeOffOutline } from "react-icons/io5";
import { BsEye } from "react-icons/bs";
import { CgLogIn } from "react-icons/cg";
import { FaCheckSquare } from "react-icons/fa";

// Main Component
const LoginComponent: React.FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center p-6"
      style={{
        backgroundImage: `url(${backgroundBanner.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="w-full max-w-md space-y-5 border p-6 rounded-lg shadow-lg bg-gray-50 dark:bg-gray-900">
        {/* =====Header ===== */}
        <div className="text-center">
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-white">
            Welcome back
          </h1>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
            Enter your credentials to sign in
          </p>
        </div>

        {/* =======================
                  Form
        ======================== */}
        <form className="space-y-4">
          {/* =======Email Input======= */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Email
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 dark:text-gray-500">
                <MdMailOutline className="w-5 h-5" />
              </div>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-black text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-transparent transition-all duration-200"
              />
            </div>
          </div>

          {/* =============Password Input============ */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 dark:text-gray-500">
                <RiLockPasswordLine className="w-5 h-5" />
              </div>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="block w-full pl-10 pr-12 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-black text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-transparent transition-all duration-200"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              >
                {showPassword ? (
                  <IoEyeOffOutline className="w-5 h-5" />
                ) : (
                  <BsEye className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          {/* ===========================
                  Remember & Forgot
          =========================== */}
          <div className="flex items-center justify-between">
            {/* ==========Remember Checkbox============ */}
            <div className="flex items-start space-x-2">
              <div className="relative flex items-center">
                <input
                  id="remember-me"
                  type="checkbox"
                  checked={isChecked}
                  onChange={(e) => setIsChecked(e.target.checked)}
                  className="sr-only"
                />
                <label
                  htmlFor="remember-me"
                  className="flex items-center cursor-pointer"
                >
                  <div
                    className={`w-4 h-4 border border-gray-300 dark:border-gray-600 rounded flex items-center justify-center transition-all duration-200 ${
                      isChecked
                        ? "bg-gray-900 dark:bg-indigo-600 border-gray-900 dark:border-gray-100"
                        : "bg-white dark:bg-black hover:border-gray-400 dark:hover:border-gray-500"
                    }`}
                  >
                    {isChecked && <FaCheckSquare />}
                  </div>
                </label>
              </div>
              <label
                htmlFor="remember-me"
                className="text-sm text-gray-700 dark:text-gray-300 cursor-pointer leading-4"
              >
                Keep me signed in
              </label>
            </div>
            {/* ==================
                Forgot Password
            ====================== */}
            <a
              href="#"
              className="text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300 transition-colors"
            >
              Reset password
            </a>
          </div>

          {/* ===============
              Submit Button
          ==================== */}
          <button
            type="submit"
            className="signin-button w-full bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-500 dark:to-purple-500 text-white font-semibold text-xl py-3 px-4 rounded-lg hover:from-indigo-700 hover:to-purple-700 dark:hover:from-indigo-600 dark:hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 transform transition-all duration-200 hover:scale-[1.01] shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center"
            disabled={!isChecked}
          >
            Login <CgLogIn className="w-6 h-6 ml-1 mt-1" />
          </button>
        </form>

        {/* ===============Footer============== */}
        <div className="text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            New to our platform?{" "}
            <Link
              href="register"
              className="font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300 transition-colors"
            >
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
