import React, { useState } from "react";
import { UserIcon, MailIcon, LockIcon } from "lucide-react";
import { Link } from "react-router-dom"; // change if using react-router

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup Data:", formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      {/* Single centered container */}
      <div className="w-full max-w-md rounded-2xl p-8 bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
        {/* Heading */}
        <div className="text-center mb-8">
          <UserIcon className="w-12 h-12 mx-auto text-gray-800 mb-3" />
          <h1 className="text-3xl font-bold text-gray-800">Create Account</h1>
          <p className="text-gray-800 text-sm mt-1">Join us today</p>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* NAME */}
          <label className="block">
            <span className="text-sm text-gray-800 mb-1 block">Name</span>
            <div className="relative">
              <UserIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-800" />
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                placeholder="John Doe"
                className="w-full pl-10 pr-3 py-3 rounded-lg bg-white/20 border border-white/20 placeholder-gray-800 text-gray-800"
              />
            </div>
          </label>

          {/* EMAIL */}
          <label className="block">
            <span className="text-sm text-gray-800 mb-1 block">Email</span>
            <div className="relative">
              <MailIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-800" />
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder="example@gmail.com"
                className="w-full pl-10 pr-3 py-3 rounded-lg bg-white/20 border border-white/20 placeholder-gray-800 text-gray-800"
              />
            </div>
          </label>

          {/* PASSWORD */}
          <label className="block">
            <span className="text-sm text-gray-800 mb-1 block">Password</span>
            <div className="relative">
              <LockIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-800" />
              <input
                type="password"
                required
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                placeholder="Create a strong password"
                className="w-full pl-10 pr-3 py-3 rounded-lg bg-white/20 border border-white/20 placeholder-gray-800 text-gray-800"
              />
            </div>
          </label>

          {/* ACTIONS */}
          <div className="flex gap-4 pt-2">
            <Link
              to="/"
              className="flex-1 text-center px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-gray-800 hover:bg-white/20 transition"
            >
              Back
            </Link>

            <button
              type="submit"
              className="flex-1 px-4 py-3 rounded-lg bg-cyan-400 text-black font-semibold hover:bg-cyan-300 transition"
            >
              Sign Up
            </button>
          </div>
        </form>

        {/* LOGIN LINK */}
        <p className="text-center text-gray-800 text-sm mt-4">
          Already have an account?
          <Link to="/login" className="text-cyan-400 hover:underline ml-1">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
