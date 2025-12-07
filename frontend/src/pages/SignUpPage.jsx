import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import {
  MessageCircleIcon,
  LockIcon,
  MailIcon,
  UserIcon,
  LoaderIcon,
} from "lucide-react";
import { Link } from "react-router-dom"; // <-- corrected import

function SignUpPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const { signup, isSigningUp } = useAuthStore();

  // fixed onChange handler
  const onChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md p-8 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
        {/* Heading */}
        <div className="text-center mb-8">
          <MessageCircleIcon className="w-12 h-12 mx-auto text-gray-800 mb-4" />
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Create Account
          </h2>
          <p className="text-gray-800 text-sm">Sign up for a new account</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Full Name */}
          <div>
            <label className="block text-sm text-gray-800 mb-1">
              Full Name
            </label>
            <div className="relative">
              <UserIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-800" />
              <input
                type="text"
                required
                value={formData.fullName}
                onChange={(e) => onChange("fullName", e.target.value)}
                placeholder="John Doe"
                className="w-full pl-10 pr-3 py-3 bg-white/20 border border-white/20 rounded-lg text-gray-800 placeholder-gray-800"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm text-gray-800 mb-1">Email</label>
            <div className="relative">
              <MailIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-800" />
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => onChange("email", e.target.value)}
                placeholder="johndoe@gmail.com"
                className="w-full pl-10 pr-3 py-3 bg-white/20 border border-white/20 rounded-lg text-gray-800 placeholder-gray-800"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm text-gray-800 mb-1">Password</label>
            <div className="relative">
              <LockIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-800" />
              <input
                type="password"
                required
                value={formData.password}
                onChange={(e) => onChange("password", e.target.value)}
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
              disabled={isSigningUp}
              className="flex-1 px-4 py-3 rounded-lg bg-cyan-400 text-black font-semibold hover:bg-cyan-300 transition disabled:opacity-50"
            >
              {isSigningUp ? (
                <LoaderIcon className="w-5 h-5 mx-auto animate-spin" />
              ) : (
                "Sign Up"
              )}
            </button>
          </div>

          {/* Login link */}
          <p className="text-center text-sm text-gray-800 mt-3">
            Already have an account?
            <Link to="/login" className="ml-1 text-cyan-400 hover:underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignUpPage;
