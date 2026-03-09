import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { User, Mail, Lock, ArrowRight, CheckCircle2 } from "lucide-react";

export default function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        // Store token if needed, or just redirect
        localStorage.setItem("token", data.token);
        alert("Account Created!");
        navigate("/app/quiz");
      } else {
        setError(data.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Network error. Please make sure the backend is running.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-pastel-blue/30 flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full bg-white rounded-[2rem] shadow-xl border border-gray-100 overflow-hidden"
      >
        <div className="p-8 md:p-12">
          <div className="text-center mb-10">
            <div className="w-16 h-16 bg-primary-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <User className="w-8 h-8 text-primary-blue" />
            </div>
            <h1 className="text-3xl font-heading font-bold text-ink-dark mb-2">
              Create Account
            </h1>
            <p className="text-ink-medium">
              Start your journey with ClarityPath
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-primary-blue/20 focus:border-primary-blue outline-none transition-all"
              />
            </div>

            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-primary-blue/20 focus:border-primary-blue outline-none transition-all"
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
                value={formData.password}
                onChange={handleChange}
                className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-primary-blue/20 focus:border-primary-blue outline-none transition-all"
              />
            </div>

            {error && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-red-500 text-sm text-center font-medium"
              >
                {error}
              </motion.p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary-blue text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-opacity-90 transition-all shadow-lg shadow-primary-blue/20 disabled:opacity-50"
            >
              {isSubmitting ? "Creating Account..." : "Sign Up"}
              {!isSubmitting && <ArrowRight className="w-5 h-5" />}
            </button>
          </form>

          <p className="text-center mt-8 text-ink-medium text-sm">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-primary-blue font-bold hover:underline"
            >
              Log In
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
