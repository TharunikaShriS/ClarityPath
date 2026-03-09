import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { ArrowRight, BrainCircuit, CheckCircle2 } from "lucide-react";
import { cn } from "../lib/utils";

const questions = [
  "When faced with a complex problem, I prefer breaking it down into logical steps.",
  "I enjoy designing visual interfaces and thinking about user experience.",
  "I am comfortable with advanced mathematics and statistical analysis.",
  "I like understanding how systems work under the hood and optimizing them.",
  "I have high patience for debugging and finding hidden errors in logic.",
  "I am fascinated by how data can predict future trends.",
  "I enjoy thinking about security vulnerabilities and protecting systems.",
];

const results = [
  {
    id: "ai",
    name: "Artificial Intelligence",
    match: 92,
    desc: "Perfect for your analytical and mathematical mindset.",
    color: "bg-pastel-lavender",
    text: "text-primary-purple",
  },
  {
    id: "data",
    name: "Data Science",
    match: 88,
    desc: "Strong alignment with your interest in patterns and statistics.",
    color: "bg-pastel-green",
    text: "text-primary-green",
  },
  {
    id: "cyber",
    name: "Cybersecurity",
    match: 84,
    desc: "Matches your curiosity for system vulnerabilities.",
    color: "bg-pastel-peach",
    text: "text-primary-orange",
  },
];

export default function InterestQuiz() {
  const navigate = useNavigate();
  const location = useLocation();
  const initialText = location.state?.interestText || "";

  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [userInfo, setUserInfo] = useState({ name: "", email: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleAnswer = (score: number) => {
    const newAnswers = [...answers, score];
    setAnswers(newAnswers);

    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsAnalyzing(true);
      setTimeout(() => {
        setIsAnalyzing(false);
        setShowResults(true);
      }, 2500);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("http://localhost:5000/api/users/submit-quiz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: userInfo.name,
          email: userInfo.email,
          quizResults: answers,
          domainMatches: results,
        }),
      });

      if (response.ok) {
        navigate("/app/dashboard"); // Or wherever you want to redirect after success
      } else {
        const data = await response.json();
        setError(data.message || "Failed to submit results.");
      }
    } catch (err) {
      setError("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (showResults) {
    return (
      <div className="min-h-full p-8 md:p-12 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="w-16 h-16 bg-pastel-green rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-8 h-8 text-primary-green" />
          </div>
          <h1 className="text-3xl font-heading font-semibold text-ink-dark mb-4">
            Analysis Complete
          </h1>
          <p className="text-ink-medium text-lg mb-8">
            Enter your details to save your results and see your top matches.
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-8 rounded-3xl border border-gray-100 shadow-sm mb-12">
            <div className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Full Name"
                  required
                  value={userInfo.name}
                  onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-blue focus:ring-1 focus:ring-primary-blue outline-none transition-all"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  value={userInfo.email}
                  onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-blue focus:ring-1 focus:ring-primary-blue outline-none transition-all"
                />
              </div>
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary-blue text-white py-4 rounded-xl font-semibold hover:bg-opacity-90 transition-all disabled:opacity-50"
              >
                {isSubmitting ? "Submitting..." : "Save Results"}
              </button>
            </div>
          </form>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {results.map((result, index) => (
            <motion.div
              key={result.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => navigate(`/app/domain/${result.id}`)}
              className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all cursor-pointer group relative overflow-hidden"
            >
              <div
                className={cn("absolute top-0 left-0 w-full h-2", result.color)}
              />

              <div className="flex justify-between items-start mb-6">
                <h3 className="font-heading font-semibold text-xl text-ink-dark">
                  {result.name}
                </h3>
                <div
                  className={cn(
                    "px-3 py-1 rounded-full text-sm font-medium",
                    result.color,
                    result.text,
                  )}
                >
                  {result.match}% Match
                </div>
              </div>

              <p className="text-ink-medium mb-8 leading-relaxed">
                {result.desc}
              </p>

              <div className="flex items-center text-primary-blue font-medium group-hover:translate-x-2 transition-transform">
                Explore Domain <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    );
  }

  if (isAnalyzing) {
    return (
      <div className="min-h-full flex flex-col items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          className="w-16 h-16 border-4 border-pastel-blue border-t-primary-blue rounded-full mb-8"
        />
        <h2 className="text-2xl font-heading font-semibold text-ink-dark mb-2">
          Analyzing your profile...
        </h2>
        <p className="text-ink-medium">
          Matching your cognitive style with 50+ tech roles
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-full p-8 md:p-12 max-w-3xl mx-auto flex flex-col justify-center">
      <div className="mb-12">
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm font-medium text-ink-medium uppercase tracking-wider">
            Question {currentStep + 1} of {questions.length}
          </span>
          <span className="text-sm font-medium text-primary-blue">
            {Math.round((currentStep / questions.length) * 100)}%
          </span>
        </div>
        <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-primary-blue rounded-full"
            initial={{ width: `${(currentStep / questions.length) * 100}%` }}
            animate={{
              width: `${((currentStep + 1) / questions.length) * 100}%`,
            }}
          />
        </div>
      </div>

      <motion.div
        key={currentStep}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100"
      >
        <h2 className="text-2xl md:text-3xl font-heading font-medium text-ink-dark mb-12 leading-relaxed">
          {questions[currentStep]}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {[
            { label: "Strongly Disagree", score: 1 },
            { label: "Disagree", score: 2 },
            { label: "Neutral", score: 3 },
            { label: "Agree", score: 4 },
            { label: "Strongly Agree", score: 5 },
          ].map((option) => (
            <button
              key={option.score}
              onClick={() => handleAnswer(option.score)}
              className="py-4 px-2 rounded-xl border border-gray-200 hover:border-primary-blue hover:bg-pastel-blue text-ink-medium hover:text-primary-blue transition-all text-sm font-medium"
            >
              {option.label}
            </button>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
