import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import { Briefcase, TrendingUp, Users, Code, ArrowRight } from "lucide-react";

const jobRolesData = [
  { name: "Machine Learning Engineer", value: 40 },
  { name: "Data Scientist", value: 30 },
  { name: "AI Researcher", value: 15 },
  { name: "NLP Engineer", value: 15 },
];

const COLORS = ["#9B59B6", "#4A90E2", "#50C878", "#F39C12"];

const demandData = [
  { year: "2020", demand: 4000 },
  { year: "2021", demand: 5500 },
  { year: "2022", demand: 8000 },
  { year: "2023", demand: 12000 },
  { year: "2024", demand: 18000 },
];

export default function DomainInfo() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock data for AI domain (in a real app, fetch based on id)
  const domain = {
    name: "Artificial Intelligence",
    desc: "The simulation of human intelligence processes by machines, especially computer systems. It involves learning, reasoning, and self-correction.",
    whatTheyDo:
      "AI professionals build algorithms that allow computers to learn from data, make decisions, and solve complex problems without explicit programming.",
    industries: [
      "Healthcare",
      "Finance",
      "Automotive",
      "E-commerce",
      "Cybersecurity",
    ],
    skills: [
      "Python",
      "Mathematics",
      "Machine Learning",
      "Deep Learning",
      "TensorFlow/PyTorch",
      "Data Structures",
    ],
    salary: {
      entry: "$85,000 - $110,000",
      experienced: "$140,000 - $250,000+",
    },
    suits:
      "Highly analytical thinkers who enjoy mathematics, statistics, and solving abstract logical problems.",
  };

  return (
    <div className="min-h-full p-8 md:p-12 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
        <div>
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-pastel-lavender text-primary-purple text-sm font-medium mb-4">
            92% Match
          </div>
          <h1 className="text-4xl font-heading font-semibold text-ink-dark mb-4">
            {domain.name}
          </h1>
          <p className="text-ink-medium text-lg max-w-2xl leading-relaxed">
            {domain.desc}
          </p>
        </div>
        <button
          onClick={() => navigate(`/app/roadmap/${id}`)}
          className="px-8 py-4 bg-ink-dark text-white rounded-full font-medium hover:bg-gray-800 transition-all shadow-md flex items-center gap-2"
        >
          Generate My Roadmap <ArrowRight className="w-5 h-5" />
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {/* Left Column: Info Cards */}
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              <Briefcase className="w-6 h-6 text-primary-blue" />
              <h2 className="text-xl font-heading font-semibold text-ink-dark">
                What Professionals Do
              </h2>
            </div>
            <p className="text-ink-medium leading-relaxed">
              {domain.whatTheyDo}
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <Code className="w-6 h-6 text-primary-green" />
              <h2 className="text-xl font-heading font-semibold text-ink-dark">
                Required Skills
              </h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {domain.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-ink-dark text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-pastel-blue/30 p-8 rounded-3xl border border-pastel-blue">
              <h3 className="font-heading font-semibold text-ink-dark mb-2">
                Entry Level Salary
              </h3>
              <p className="text-2xl font-bold text-primary-blue">
                {domain.salary.entry}
              </p>
            </div>
            <div className="bg-pastel-lavender/50 p-8 rounded-3xl border border-pastel-lavender">
              <h3 className="font-heading font-semibold text-ink-dark mb-2">
                Experienced Salary
              </h3>
              <p className="text-2xl font-bold text-primary-purple">
                {domain.salary.experienced}
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Charts & Stats */}
        <div className="space-y-8">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <Users className="w-6 h-6 text-primary-purple" />
              <h2 className="text-xl font-heading font-semibold text-ink-dark">
                Job Roles Distribution
              </h2>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={jobRolesData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {jobRolesData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-2 mt-4">
              {jobRolesData.map((role, i) => (
                <div key={role.name} className="flex items-center text-sm">
                  <div
                    className="w-3 h-3 rounded-full mr-2"
                    style={{ backgroundColor: COLORS[i] }}
                  />
                  <span className="text-ink-medium flex-1">{role.name}</span>
                  <span className="font-medium text-ink-dark">
                    {role.value}%
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="w-6 h-6 text-primary-orange" />
              <h2 className="text-xl font-heading font-semibold text-ink-dark">
                Hiring Demand Trend
              </h2>
            </div>
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={demandData}>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    vertical={false}
                    stroke="#E5E7EB"
                  />
                  <XAxis
                    dataKey="year"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#9CA3AF", fontSize: 12 }}
                  />
                  <Tooltip cursor={{ fill: "#F3F4F6" }} />
                  <Bar dataKey="demand" fill="#4A90E2" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-xs text-ink-light mt-4 text-center">
              Data sourced from LinkedIn Hiring Trends 2024
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
