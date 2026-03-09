import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Flame,
  Target,
  CheckCircle2,
  Trophy,
  Coffee,
  X,
  Briefcase,
  GraduationCap,
  Code,
} from "lucide-react";

export default function Dashboard() {
  const [showFoodCheck, setShowFoodCheck] = useState(true);
  const [foodResponse, setFoodResponse] = useState<"yes" | "no" | null>(null);

  const handleFoodCheck = (response: "yes" | "no") => {
    setFoodResponse(response);
    setTimeout(() => {
      setShowFoodCheck(false);
    }, 3000);
  };

  return (
    <div className="min-h-full p-8 md:p-12 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-heading font-semibold text-ink-dark">
          Your Progress Dashboard
        </h1>
        <div className="flex items-center gap-2 bg-pastel-peach px-4 py-2 rounded-full text-primary-orange font-medium">
          <Flame className="w-5 h-5" />
          12 Day Streak
        </div>
      </div>

      {/* Wellness Check-in */}
      <AnimatePresence>
        {showFoodCheck && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, height: 0, marginBottom: 0 }}
            className="bg-white rounded-3xl p-6 shadow-sm border border-pastel-blue mb-8 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-2 h-full bg-primary-blue" />
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-pastel-blue rounded-full flex items-center justify-center text-primary-blue">
                <Coffee className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-ink-dark text-lg">
                  Wellness Check-in
                </h3>
                <p className="text-ink-medium">
                  Did you eat properly and stay hydrated today?
                </p>
              </div>
            </div>

            {!foodResponse ? (
              <div className="flex gap-3">
                <button
                  onClick={() => handleFoodCheck("yes")}
                  className="px-6 py-2 bg-pastel-green text-primary-green rounded-full font-medium hover:bg-green-100 transition-colors"
                >
                  Yes, I did!
                </button>
                <button
                  onClick={() => handleFoodCheck("no")}
                  className="px-6 py-2 bg-gray-100 text-ink-medium rounded-full font-medium hover:bg-gray-200 transition-colors"
                >
                  Not really
                </button>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-primary-blue font-medium"
              >
                {foodResponse === "yes"
                  ? "Great job! A healthy body fuels a sharp mind. 🌟"
                  : "Please take a break and grab a healthy snack! Your brain needs energy. 🍎"}
              </motion.div>
            )}

            <button
              onClick={() => setShowFoodCheck(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X className="w-5 h-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {/* Stats Column */}
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              <Target className="w-6 h-6 text-primary-purple" />
              <h3 className="font-heading font-semibold text-ink-dark">
                Roadmap Progress
              </h3>
            </div>
            <div className="flex items-end gap-2 mb-4">
              <span className="text-4xl font-bold text-ink-dark">24</span>
              <span className="text-ink-medium mb-1">%</span>
            </div>
            <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-primary-purple rounded-full w-[24%]" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle2 className="w-6 h-6 text-primary-green" />
              <h3 className="font-heading font-semibold text-ink-dark">
                Completed Topics
              </h3>
            </div>
            <div className="flex items-end gap-2 mb-2">
              <span className="text-4xl font-bold text-ink-dark">12</span>
              <span className="text-ink-medium mb-1">/ 50</span>
            </div>
            <p className="text-sm text-ink-medium">
              You finished "Python Basics" yesterday.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 md:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <Trophy className="w-6 h-6 text-primary-orange" />
                <h3 className="font-heading font-semibold text-ink-dark">
                  Recent Assessments
                </h3>
              </div>
              <button className="text-sm font-medium text-primary-blue hover:underline">
                View All
              </button>
            </div>

            <div className="space-y-4">
              {[
                { title: "Variables & Data Types", score: 90, date: "Today" },
                {
                  title: "Linear Algebra Basics",
                  score: 85,
                  date: "Yesterday",
                },
                {
                  title: "Intro to AI Concepts",
                  score: 100,
                  date: "3 days ago",
                },
              ].map((assessment, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-4 rounded-2xl bg-gray-50 border border-gray-100"
                >
                  <div>
                    <h4 className="font-medium text-ink-dark">
                      {assessment.title}
                    </h4>
                    <span className="text-xs text-ink-medium">
                      {assessment.date}
                    </span>
                  </div>
                  <div className="px-3 py-1 bg-white rounded-full text-sm font-bold text-primary-green shadow-sm">
                    {assessment.score}%
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Opportunities Column */}
        <div className="space-y-6">
          <div className="bg-pastel-blue/20 p-6 rounded-3xl border border-pastel-blue">
            <h3 className="font-heading font-semibold text-ink-dark mb-2">
              Milestone Reached! 🎉
            </h3>
            <p className="text-sm text-ink-medium mb-6">
              You've completed the fundamentals. Here are some recommended next
              steps.
            </p>

            <div className="space-y-4">
              <a
                href="#"
                className="flex items-start gap-3 p-4 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all group"
              >
                <div className="w-10 h-10 rounded-full bg-pastel-lavender flex items-center justify-center text-primary-purple shrink-0 group-hover:scale-110 transition-transform">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium text-ink-dark text-sm mb-1">
                    Data Entry Intern
                  </h4>
                  <p className="text-xs text-ink-medium">
                    Apply your new Python skills in a real-world setting.
                  </p>
                </div>
              </a>

              <a
                href="#"
                className="flex items-start gap-3 p-4 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all group"
              >
                <div className="w-10 h-10 rounded-full bg-pastel-green flex items-center justify-center text-primary-green shrink-0 group-hover:scale-110 transition-transform">
                  <Code className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium text-ink-dark text-sm mb-1">
                    Open Source: Pandas
                  </h4>
                  <p className="text-xs text-ink-medium">
                    Good first issues available for beginners.
                  </p>
                </div>
              </a>

              <a
                href="#"
                className="flex items-start gap-3 p-4 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all group"
              >
                <div className="w-10 h-10 rounded-full bg-pastel-peach flex items-center justify-center text-primary-orange shrink-0 group-hover:scale-110 transition-transform">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium text-ink-dark text-sm mb-1">
                    Kaggle Micro-Course
                  </h4>
                  <p className="text-xs text-ink-medium">
                    Practice data manipulation interactively.
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
