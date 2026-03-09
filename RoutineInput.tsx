import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Clock, CalendarDays, Sun, Moon, ArrowRight } from "lucide-react";

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export default function RoutineInput() {
  const navigate = useNavigate();
  const [activeDay, setActiveDay] = useState("Monday");
  const [routine, setRoutine] = useState({
    wakeUp: "07:00",
    collegeStart: "09:00",
    collegeEnd: "15:00",
    freeTimeStart: "18:00",
    freeTimeEnd: "21:00",
  });

  const handleGenerate = () => {
    navigate("/app/schedule");
  };

  return (
    <div className="min-h-full p-8 md:p-12 max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-heading font-semibold text-ink-dark mb-4">
          Tell us your routine
        </h1>
        <p className="text-ink-medium text-lg max-w-2xl mx-auto">
          We'll generate a personalized learning schedule that fits perfectly
          into your daily life without causing burnout.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Day Selector */}
        <div className="lg:col-span-1 space-y-2">
          {days.map((day) => (
            <button
              key={day}
              onClick={() => setActiveDay(day)}
              className={`w-full text-left px-6 py-4 rounded-2xl font-medium transition-all ${
                activeDay === day
                  ? "bg-pastel-blue text-primary-blue shadow-sm"
                  : "bg-white text-ink-medium hover:bg-gray-50 border border-gray-100"
              }`}
            >
              {day}
            </button>
          ))}
        </div>

        {/* Routine Form */}
        <div className="lg:col-span-3">
          <motion.div
            key={activeDay}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100"
          >
            <div className="flex items-center gap-3 mb-8 pb-6 border-b border-gray-100">
              <CalendarDays className="w-6 h-6 text-primary-blue" />
              <h2 className="text-2xl font-heading font-semibold text-ink-dark">
                {activeDay}'s Schedule
              </h2>
            </div>

            <div className="space-y-8">
              {/* Wake Up */}
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-xl bg-pastel-peach flex items-center justify-center text-primary-orange">
                  <Sun className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium text-ink-medium mb-2">
                    Wake Up Time
                  </label>
                  <input
                    type="time"
                    value={routine.wakeUp}
                    onChange={(e) =>
                      setRoutine({ ...routine, wakeUp: e.target.value })
                    }
                    className="w-full md:w-48 px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-blue focus:ring-2 focus:ring-pastel-blue outline-none transition-all"
                  />
                </div>
              </div>

              {/* College/Work */}
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-xl bg-pastel-lavender flex items-center justify-center text-primary-purple">
                  <Clock className="w-6 h-6" />
                </div>
                <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-ink-medium mb-2">
                      College/Work Starts
                    </label>
                    <input
                      type="time"
                      value={routine.collegeStart}
                      onChange={(e) =>
                        setRoutine({ ...routine, collegeStart: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-blue focus:ring-2 focus:ring-pastel-blue outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-ink-medium mb-2">
                      College/Work Ends
                    </label>
                    <input
                      type="time"
                      value={routine.collegeEnd}
                      onChange={(e) =>
                        setRoutine({ ...routine, collegeEnd: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-blue focus:ring-2 focus:ring-pastel-blue outline-none transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Free Time */}
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-xl bg-pastel-blue flex items-center justify-center text-primary-blue">
                  <Moon className="w-6 h-6" />
                </div>
                <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-ink-medium mb-2">
                      Dedicated Study Start
                    </label>
                    <input
                      type="time"
                      value={routine.freeTimeStart}
                      onChange={(e) =>
                        setRoutine({
                          ...routine,
                          freeTimeStart: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-blue focus:ring-2 focus:ring-pastel-blue outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-ink-medium mb-2">
                      Dedicated Study End
                    </label>
                    <input
                      type="time"
                      value={routine.freeTimeEnd}
                      onChange={(e) =>
                        setRoutine({ ...routine, freeTimeEnd: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-blue focus:ring-2 focus:ring-pastel-blue outline-none transition-all"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 flex justify-between items-center pt-6 border-t border-gray-100">
              <button className="text-ink-medium hover:text-primary-blue font-medium transition-colors">
                Apply to all weekdays
              </button>
              <button
                onClick={handleGenerate}
                className="px-8 py-4 bg-ink-dark text-white rounded-full font-medium hover:bg-gray-800 transition-all shadow-md flex items-center gap-2"
              >
                Generate Schedule <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
