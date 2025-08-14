"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";

const LockIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
    <circle cx="12" cy="16" r="1"></circle>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
  </svg>
);

const EyeIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
    <circle cx="12" cy="12" r="3"></circle>
  </svg>
);

const EyeOffIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
    <line x1="1" y1="1" x2="23" y2="23"></line>
  </svg>
);

const CheckIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="20,6 9,17 4,12"></polyline>
  </svg>
);

// Main Component
const RegisterComponent: React.FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [fullName, setFullName] = useState<string>("");
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen">
      <div className="w-full flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Card Container */}
          <div className="signin-card border border-gray-200 rounded-lg shadow-sm p-6">
            {/* Header */}
            <div className="text-center mb-6">
              <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-white">
                Create account
              </h1>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
                Enter your details to get started
              </p>
            </div>

            <form className="space-y-4">
              {/* name Input */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Full Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 dark:text-gray-500">
                    <FaUser />
                  </div>
                  <input
                    id="name"
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Enter your full name"
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-black text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-transparent transition-all duration-200"
                  />
                </div>
              </div>

              {/* Email Input */}
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
                    placeholder="you@example.com"
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-black text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-transparent transition-all duration-200"
                  />
                </div>
              </div>

              {/* Password Input */}
              <div className="space-y-2">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 dark:text-gray-500">
                    <LockIcon />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="block w-full pl-10 pr-12 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-black text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-transparent transition-all duration-200"
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                  >
                    {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                  </button>
                </div>
              </div>

              {/* Terms Checkbox */}
              <div className="flex items-start space-x-2">
                <div className="relative flex items-center">
                  <input
                    id="terms"
                    type="checkbox"
                    checked={isChecked}
                    onChange={(e) => setIsChecked(e.target.checked)}
                    className="sr-only"
                  />
                  <label
                    htmlFor="terms"
                    className="flex items-center cursor-pointer"
                  >
                    <div
                      className={`w-4 h-4 border border-gray-300 dark:border-gray-600 rounded flex items-center justify-center transition-all duration-200 ${
                        isChecked
                          ? "bg-gray-900 dark:bg-gray-100 border-gray-900 dark:border-gray-100"
                          : "bg-white dark:bg-black hover:border-gray-400 dark:hover:border-gray-500"
                      }`}
                    >
                      {isChecked && <CheckIcon />}
                    </div>
                  </label>
                </div>
                <label
                  htmlFor="terms"
                  className="text-sm text-gray-600 dark:text-gray-400 cursor-pointer leading-4"
                >
                  I agree to the{" "}
                  <a
                    href="#"
                    className="text-gray-900 dark:text-gray-100 hover:underline"
                  >
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a
                    href="#"
                    className="text-gray-900 dark:text-gray-100 hover:underline"
                  >
                    Privacy Policy
                  </a>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="signin-button w-full bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-500 dark:to-purple-500 text-white font-semibold text-xl py-3 px-4 rounded-lg hover:from-indigo-700 hover:to-purple-700 dark:hover:from-indigo-600 dark:hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 transform transition-all duration-200 hover:scale-[1.01] shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={!isChecked}
              >
                Create account
              </button>
            </form>

            {/* Footer */}
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Already have an account?{" "}
                <Link
                  href="login"
                  className="font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300 transition-colors"
                >
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterComponent;

// Add custom styles for enhanced shadcn feel
const styles = `
  .signin-input:focus {
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);
  }

  .dark .signin-input:focus {
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.1);
  }

  .signin-button:hover {
    transform: translateY(-1px);
  }

  .signin-checkbox:checked + label .checkbox-icon {
    background-color: currentColor;
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .signin-card {
    animation: fadeIn 0.3s ease-out;
  }
`;

// Inject styles
if (typeof document !== "undefined") {
  const styleSheet = document.createElement("style");
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);
}
