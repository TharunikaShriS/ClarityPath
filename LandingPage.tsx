import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Compass,
  Brain,
  TrendingUp,
  Map,
  Calendar,
  Target,
  CheckCircle,
  Briefcase,
} from "lucide-react";

const features = [
  {
    icon: Compass,
    title: "Domain Discovery",
    desc: "Explore all tech fields visually",
    color: "bg-pastel-blue",
    textColor: "text-primary-blue",
  },
  {
    icon: Brain,
    title: "Interest Analysis",
    desc: "Psychological matching to domains",
    color: "bg-pastel-lavender",
    textColor: "text-primary-purple",
  },
  {
    icon: TrendingUp,
    title: "Market Demand",
    desc: "Real-time hiring trends & salaries",
    color: "bg-pastel-green",
    textColor: "text-primary-green",
  },
  {
    icon: Map,
    title: "Structured Roadmaps",
    desc: "Step-by-step learning paths",
    color: "bg-pastel-peach",
    textColor: "text-primary-orange",
  },
  {
    icon: Calendar,
    title: "Personal Schedule",
    desc: "Adapts to your daily routine",
    color: "bg-pastel-blue",
    textColor: "text-primary-blue",
  },
  {
    icon: Target,
    title: "Progress Tracking",
    desc: "Visual dashboards & streaks",
    color: "bg-pastel-lavender",
    textColor: "text-primary-purple",
  },
  {
    icon: CheckCircle,
    title: "Daily Assessments",
    desc: "MCQs & coding challenges",
    color: "bg-pastel-green",
    textColor: "text-primary-green",
  },
  {
    icon: Briefcase,
    title: "Opportunities",
    desc: "Internships & project ideas",
    color: "bg-pastel-peach",
    textColor: "text-primary-orange",
  },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] overflow-hidden relative font-sans">
      {/* Decorative Half Circle */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-pastel-beige rounded-bl-full -z-10 opacity-60 transform translate-x-1/4 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-pastel-blue rounded-tr-full -z-10 opacity-40 transform -translate-x-1/4 translate-y-1/4"></div>

      {/* Navigation */}
      <nav className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center relative z-10">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-pastel-blue flex items-center justify-center text-primary-blue font-bold text-2xl">
            C
          </div>
          <span className="font-heading font-semibold text-2xl tracking-tight text-ink-dark">
            ClarityPath
          </span>
        </div>
        <div className="flex gap-4">
          <Link
            to="/app"
            className="px-6 py-2.5 text-ink-medium hover:text-ink-dark font-medium transition-colors"
          >
            Log In
          </Link>
          <Link
            to="/app"
            className="px-6 py-2.5 bg-ink-dark text-white rounded-full font-medium hover:bg-gray-800 transition-all shadow-sm hover:shadow-md"
          >
            Sign Up
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-6 pt-20 pb-32 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-heading font-semibold text-ink-dark leading-[1.1] tracking-tight mb-8"
          >
            Stop guessing what to learn in technology.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-ink-medium mb-12 max-w-2xl mx-auto"
          >
            Discover your path and start learning with clarity. A smart
            navigator that aligns your interests with market demand.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link
              to="/app"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary-blue text-white rounded-full text-lg font-medium hover:bg-blue-600 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              Start Your Journey
            </Link>
          </motion.div>
        </div>

        {/* Floating Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-all group"
            >
              <div
                className={`w-12 h-12 rounded-2xl ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
              >
                <feature.icon className={`w-6 h-6 ${feature.textColor}`} />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2 text-ink-dark">
                {feature.title}
              </h3>
              <p className="text-ink-medium text-sm leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </main>

      {/* Sections */}
      <section className="bg-white py-24 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-16">
          <div>
            <h2 className="font-heading font-semibold text-2xl mb-4 text-ink-dark">
              What ClarityPath does
            </h2>
            <p className="text-ink-medium leading-relaxed">
              We analyze your psychological traits, problem-solving style, and
              interests to match you with the perfect technology domain. Then,
              we provide a structured, day-by-day learning schedule tailored to
              your exact routine.
            </p>
          </div>
          <div>
            <h2 className="font-heading font-semibold text-2xl mb-4 text-ink-dark">
              Why students struggle
            </h2>
            <p className="text-ink-medium leading-relaxed">
              The tech landscape is overwhelming. With hundreds of frameworks,
              languages, and conflicting advice online, students often jump from
              tutorial to tutorial without a clear end goal or understanding of
              market demand.
            </p>
          </div>
          <div>
            <h2 className="font-heading font-semibold text-2xl mb-4 text-ink-dark">
              How we help
            </h2>
            <p className="text-ink-medium leading-relaxed">
              We replace confusion with clarity. By providing visual roadmaps,
              real-time doubt resolution, and daily assessments, we ensure you
              stay on track and build skills that actually matter to employers.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
