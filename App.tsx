import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Signup from "./pages/Signup";
import AppLayout from "./layouts/AppLayout";
import DomainVisualization from "./pages/DomainVisualization";
import InterestQuiz from "./pages/InterestQuiz";
import DomainInfo from "./pages/DomainInfo";
import Roadmap from "./pages/Roadmap";
import RoutineInput from "./pages/RoutineInput";
import Schedule from "./pages/Schedule";
import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/app" element={<AppLayout />}>
          <Route index element={<Navigate to="/app/discover" replace />} />
          <Route path="discover" element={<DomainVisualization />} />
          <Route path="quiz" element={<InterestQuiz />} />
          <Route path="domain/:id" element={<DomainInfo />} />
          <Route path="roadmap/:id" element={<Roadmap />} />
          <Route path="routine" element={<RoutineInput />} />
          <Route path="schedule" element={<Schedule />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
