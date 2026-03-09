import { motion } from "framer-motion";
import {
  BookOpen,
  PlayCircle,
  FileText,
  CheckCircle2,
  Clock,
  BrainCircuit,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Schedule() {
  const navigate = useNavigate();

  return (
    <div className="min-h-full p-8 md:p-12 max-w-4xl mx-auto">
      {/* Greeting Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 mb-8"
      >
        <h1 className="text-3xl font-heading font-semibold text-ink-dark mb-4">
          Dear Alex,
        </h1>
        <p className="text-ink-medium text-lg leading-relaxed mb-6">
          In your selected domain{" "}
          <strong className="text-primary-purple">
            Artificial Intelligence
          </strong>
          , we begin with{" "}
          <strong className="text-ink-dark">Python Fundamentals</strong>.
        </p>
        <div className="bg-pastel-lavender/50 p-6 rounded-2xl border border-pastel-lavender flex items-start gap-4">
          <BrainCircuit className="w-6 h-6 text-primary-purple shrink-0 mt-1" />
          <div>
            <h3 className="font-heading font-semibold text-primary-purple mb-1">
              Why start here?
            </h3>
            <p className="text-ink-dark text-sm leading-relaxed">
              Python is the core language used for data analysis, machine
              learning, and AI. Mastering it first gives you the necessary tools
              to build complex models later.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Today's Task */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-12"
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-heading font-semibold text-ink-dark">
            Today's Task
          </h2>
          <div className="flex items-center gap-2 text-ink-medium bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">
            <Clock className="w-4 h-4" />
            <span className="text-sm font-medium">18:00 - 20:00 (2 hours)</span>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 border-l-4 border-l-primary-blue">
          <h3 className="text-xl font-heading font-semibold text-ink-dark mb-2">
            Learn Variables and Data Types
          </h3>
          <p className="text-ink-medium mb-8">
            Understand how Python stores data, the difference between strings,
            integers, and booleans, and how to manipulate them.
          </p>

          <h4 className="font-heading font-semibold text-ink-dark mb-4">
            Curated Resources
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <a
              href="#"
              className="flex flex-col p-4 rounded-2xl border border-gray-100 hover:border-red-200 hover:bg-red-50 transition-all group"
            >
              <PlayCircle className="w-8 h-8 text-red-500 mb-3 group-hover:scale-110 transition-transform" />
              <span className="font-medium text-ink-dark mb-1">
                YouTube Lecture
              </span>
              <span className="text-xs text-ink-medium">
                Corey Schafer (45 mins)
              </span>
            </a>

            <a
              href="#"
              className="flex flex-col p-4 rounded-2xl border border-gray-100 hover:border-blue-200 hover:bg-blue-50 transition-all group"
            >
              <FileText className="w-8 h-8 text-blue-500 mb-3 group-hover:scale-110 transition-transform" />
              <span className="font-medium text-ink-dark mb-1">
                Official Docs
              </span>
              <span className="text-xs text-ink-medium">
                Python.org Tutorial
              </span>
            </a>

            <a
              href="#"
              className="flex flex-col p-4 rounded-2xl border border-gray-100 hover:border-green-200 hover:bg-green-50 transition-all group"
            >
              <BookOpen className="w-8 h-8 text-green-500 mb-3 group-hover:scale-110 transition-transform" />
              <span className="font-medium text-ink-dark mb-1">
                Interactive Practice
              </span>
              <span className="text-xs text-ink-medium">
                W3Schools Exercises
              </span>
            </a>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-100 flex justify-end">
            <button
              onClick={() => navigate("/app/dashboard")}
              className="px-6 py-3 bg-primary-green text-white rounded-full font-medium hover:bg-green-600 transition-all shadow-sm flex items-center gap-2"
            >
              <CheckCircle2 className="w-5 h-5" />
              Mark as Completed
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
