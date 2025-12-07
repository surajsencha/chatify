import React, { useState } from "react";
import {
  MessageCircleIcon,
  MailIcon,
  LoaderIcon,
  LockIcon,
} from "lucide-react";
import { Link } from "react-router-dom"; // use react-router-dom
import { useAuthStore } from "../store/useAuthStore";
import BorderAnimatedContainer from "../components/BorderAnimatedContainer";

export default function LoginPage() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { login, isLoggingIn } = useAuthStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center  p-4">
      <BorderAnimatedContainer>
        {/* Single centered card */}
        <div className="w-full max-w-md p-8 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
          {/* Heading */}
          <div className="text-center mb-8">
            <MessageCircleIcon className="w-12 h-12 mx-auto text-gray-800 mb-4" />
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Welcome Back
            </h2>
            <p className="text-gray-800 text-sm">
              Login to access your account
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div>
              <label className="block text-sm text-gray-800 mb-1">Email</label>
              <div className="relative">
                <MailIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-800" />
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="johndoe@gmail.com"
                  className="w-full pl-10 pr-3 py-3 bg-white/20 border border-white/20 rounded-lg text-gray-800 placeholder-gray-800"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm text-gray-800 mb-1">
                Password
              </label>
              <div className="relative">
                <LockIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-800" />
                <input
                  type="password"
                  required
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  placeholder="Enter your password"
                  className="w-full pl-10 pr-3 py-3 bg-white/20 border border-white/20 rounded-lg text-gray-800 placeholder-gray-800"
                />
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 pt-2">
              <Link
                to="/"
                className="flex-1 text-center px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-gray-800 hover:bg-white/20 transition"
              >
                Back
              </Link>

              <button
                type="submit"
                disabled={isLoggingIn}
                className="flex-1 px-4 py-3 rounded-lg bg-cyan-400 text-black font-semibold hover:bg-cyan-300 transition disabled:opacity-50"
              >
                {isLoggingIn ? (
                  <LoaderIcon className="w-5 h-5 mx-auto animate-spin" />
                ) : (
                  "Log In"
                )}
              </button>
            </div>

            {/* Signup link */}
            <p className="text-center text-sm text-gray-800 mt-3">
              Don’t have an account?
              <Link to="/signup" className="ml-1 text-cyan-400 hover:underline">
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </BorderAnimatedContainer>
    </div>
  );
}
