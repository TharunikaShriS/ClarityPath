import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  ChevronDown,
  ChevronRight,
  CheckCircle2,
  Circle,
  ArrowRight,
} from "lucide-react";
import { cn } from "../lib/utils";

const roadmapData = [
  {
    id: "math",
    title: "Mathematics for AI",
    status: "completed",
    subtopics: [
      { id: "linear", title: "Linear Algebra (Vectors, Matrices)" },
      { id: "calc", title: "Calculus (Derivatives, Gradients)" },
      { id: "stats", title: "Probability & Statistics" },
    ],
  },
  {
    id: "python",
    title: "Python Fundamentals",
    status: "in-progress",
    subtopics: [
      { id: "basics", title: "Variables, Data Types, Loops" },
      { id: "ds", title: "Data Structures (Lists, Dicts, Sets)" },
      { id: "oop", title: "Object Oriented Programming" },
      { id: "libs", title: "NumPy & Pandas Basics" },
    ],
  },
  {
    id: "ml",
    title: "Machine Learning Basics",
    status: "locked",
    subtopics: [
      { id: "supervised", title: "Supervised Learning" },
      { id: "unsupervised", title: "Unsupervised Learning" },
      { id: "eval", title: "Model Evaluation Metrics" },
    ],
  },
  {
    id: "dl",
    title: "Deep Learning",
    status: "locked",
    subtopics: [
      { id: "nn", title: "Neural Networks" },
      { id: "cnn", title: "Convolutional Neural Networks (CNNs)" },
      { id: "rnn", title: "Recurrent Neural Networks (RNNs)" },
    ],
  },
];

export default function Roadmap() {
  const navigate = useNavigate();
  const [expandedNodes, setExpandedNodes] = useState<string[]>(["python"]);

  const toggleNode = (id: string) => {
    setExpandedNodes((prev) =>
      prev.includes(id)
        ? prev.filter((nodeId) => nodeId !== id)
        : [...prev, id],
    );
  };

  return (
    <div className="min-h-full p-8 md:p-12 max-w-4xl mx-auto">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h1 className="text-3xl font-heading font-semibold text-ink-dark mb-2">
            Your AI Roadmap
          </h1>
          <p className="text-ink-medium">
            A structured, step-by-step path to mastering Artificial
            Intelligence.
          </p>
        </div>
        <button
          onClick={() => navigate("/app/routine")}
          className="px-6 py-3 bg-primary-blue text-white rounded-full font-medium hover:bg-blue-600 transition-all shadow-sm flex items-center gap-2"
        >
          Generate Schedule <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-[27px] top-8 bottom-8 w-[2px] bg-gray-200 z-0"></div>

        <div className="space-y-6 relative z-10">
          {roadmapData.map((node, index) => {
            const isExpanded = expandedNodes.includes(node.id);
            const isCompleted = node.status === "completed";
            const isInProgress = node.status === "in-progress";

            return (
              <div key={node.id} className="flex items-start gap-6">
                {/* Node Icon */}
                <div className="mt-1 relative z-10 bg-[#FAFAFA] py-2">
                  {isCompleted ? (
                    <CheckCircle2 className="w-8 h-8 text-primary-green bg-white rounded-full" />
                  ) : isInProgress ? (
                    <div className="w-8 h-8 rounded-full border-4 border-primary-blue bg-white flex items-center justify-center">
                      <div className="w-2 h-2 bg-primary-blue rounded-full"></div>
                    </div>
                  ) : (
                    <Circle className="w-8 h-8 text-gray-300 bg-white rounded-full" />
                  )}
                </div>

                {/* Node Content */}
                <div className="flex-1">
                  <div
                    onClick={() => toggleNode(node.id)}
                    className={cn(
                      "bg-white rounded-2xl p-6 border shadow-sm cursor-pointer transition-all hover:shadow-md flex justify-between items-center",
                      isInProgress
                        ? "border-primary-blue ring-1 ring-primary-blue/20"
                        : "border-gray-100",
                    )}
                  >
                    <div>
                      <h3
                        className={cn(
                          "font-heading font-semibold text-lg",
                          isCompleted
                            ? "text-ink-dark"
                            : isInProgress
                              ? "text-primary-blue"
                              : "text-ink-medium",
                        )}
                      >
                        {node.title}
                      </h3>
                      <p className="text-sm text-ink-medium mt-1">
                        {node.subtopics.length} topics
                      </p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400">
                      {isExpanded ? (
                        <ChevronDown className="w-5 h-5" />
                      ) : (
                        <ChevronRight className="w-5 h-5" />
                      )}
                    </div>
                  </div>

                  {/* Subtopics */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 pb-2 pl-6 space-y-3">
                          {node.subtopics.map((sub, subIndex) => (
                            <div
                              key={sub.id}
                              className="flex items-center gap-3 p-3 rounded-xl hover:bg-white border border-transparent hover:border-gray-100 transition-colors cursor-pointer group"
                            >
                              <div
                                className={cn(
                                  "w-2 h-2 rounded-full",
                                  isCompleted
                                    ? "bg-primary-green"
                                    : isInProgress && subIndex === 0
                                      ? "bg-primary-blue"
                                      : "bg-gray-300",
                                )}
                              ></div>
                              <span
                                className={cn(
                                  "text-sm font-medium",
                                  isCompleted
                                    ? "text-ink-medium line-through"
                                    : isInProgress && subIndex === 0
                                      ? "text-ink-dark"
                                      : "text-ink-medium",
                                )}
                              >
                                {sub.title}
                              </span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
