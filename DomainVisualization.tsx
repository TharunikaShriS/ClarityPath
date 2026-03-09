import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Search, Sparkles } from "lucide-react";
import { cn } from "../lib/utils";

const domains = [
  { id: "web", name: "Web Development", x: 20, y: 20, color: "#4A90E2" },
  { id: "ai", name: "Artificial Intelligence", x: 80, y: 15, color: "#9B59B6" },
  { id: "data", name: "Data Science", x: 85, y: 50, color: "#50C878" },
  { id: "cyber", name: "Cybersecurity", x: 75, y: 80, color: "#E74C3C" },
  { id: "cloud", name: "Cloud Engineering", x: 50, y: 85, color: "#3498DB" },
  { id: "devops", name: "DevOps", x: 25, y: 75, color: "#F39C12" },
  { id: "mobile", name: "Mobile Development", x: 10, y: 50, color: "#1ABC9C" },
  { id: "uiux", name: "UI/UX Design", x: 35, y: 35, color: "#E84393" },
  { id: "blockchain", name: "Blockchain", x: 65, y: 25, color: "#F1C40F" },
  { id: "game", name: "Game Development", x: 50, y: 10, color: "#8E44AD" },
];

export default function DomainVisualization() {
  const navigate = useNavigate();
  const [hoveredDomain, setHoveredDomain] = useState<string | null>(null);
  const [interestText, setInterestText] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (interestText.trim()) {
      navigate("/app/quiz", { state: { interestText } });
    }
  };

  return (
    <div className="h-full w-full bg-[#0A0A0A] relative overflow-hidden flex flex-col items-center justify-center">
      {/* Header UI */}
      <div className="absolute top-12 left-0 w-full z-20 flex flex-col items-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-heading font-light text-white mb-8 tracking-wide"
        >
          Confused about what to choose?
        </motion.h1>

        <div className="w-full max-w-2xl flex flex-col md:flex-row gap-4 items-center">
          <button
            onClick={() => navigate("/app/quiz")}
            className="px-8 py-4 bg-white text-black rounded-full font-medium hover:bg-gray-100 transition-colors flex items-center gap-2 shadow-[0_0_30px_rgba(255,255,255,0.2)] whitespace-nowrap"
          >
            <Sparkles className="w-5 h-5" />
            Take Interest Quiz
          </button>

          <div className="text-gray-400 font-light text-sm">OR</div>

          <form onSubmit={handleSearch} className="w-full relative">
            <input
              type="text"
              value={interestText}
              onChange={(e) => setInterestText(e.target.value)}
              placeholder="I enjoy solving logical problems..."
              className="w-full bg-white/10 border border-white/20 text-white rounded-full px-6 py-4 pl-12 focus:outline-none focus:border-white/40 focus:bg-white/15 transition-all placeholder:text-gray-500 font-light"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          </form>
        </div>
      </div>

      {/* Visualization Canvas */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        {/* Central Light Source */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white rounded-full blur-[60px] opacity-80 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-[0_0_50px_20px_rgba(255,255,255,0.8)] z-20"></div>

        {/* Domains and Strings */}
        <div className="relative w-full max-w-4xl aspect-square">
          {domains.map((domain) => {
            const isHovered = hoveredDomain === domain.id;
            const isDimmed = hoveredDomain && !isHovered;

            // Calculate line from center (50,50) to node (x,y)
            const length = Math.sqrt(
              Math.pow(domain.x - 50, 2) + Math.pow(domain.y - 50, 2),
            );
            const angle =
              Math.atan2(domain.y - 50, domain.x - 50) * (180 / Math.PI);

            return (
              <div key={domain.id}>
                {/* Fiber Optic String */}
                <div
                  className={cn(
                    "absolute top-1/2 left-1/2 h-[2px] origin-left transition-all duration-500",
                    isHovered
                      ? "opacity-100 shadow-[0_0_15px_rgba(255,255,255,0.8)]"
                      : isDimmed
                        ? "opacity-10"
                        : "opacity-40",
                  )}
                  style={{
                    width: `${length}%`,
                    transform: `rotate(${angle}deg)`,
                    background: `linear-gradient(90deg, rgba(255,255,255,0.8) 0%, ${domain.color} 100%)`,
                  }}
                />

                {/* Domain Node */}
                <motion.div
                  className={cn(
                    "absolute w-4 h-4 rounded-full -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300 z-30",
                    isHovered
                      ? "scale-150"
                      : isDimmed
                        ? "opacity-30 scale-75"
                        : "opacity-80 hover:scale-125",
                  )}
                  style={{
                    left: `${domain.x}%`,
                    top: `${domain.y}%`,
                    backgroundColor: domain.color,
                    boxShadow: `0 0 20px ${domain.color}`,
                  }}
                  onMouseEnter={() => setHoveredDomain(domain.id)}
                  onMouseLeave={() => setHoveredDomain(null)}
                  onClick={() => navigate(`/app/domain/${domain.id}`)}
                >
                  {/* Label */}
                  <div
                    className={cn(
                      "absolute top-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-sm font-medium transition-all duration-300",
                      isHovered
                        ? "opacity-100 text-white"
                        : "opacity-0 text-gray-400",
                    )}
                  >
                    {domain.name}
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
