import { Outlet, Link, useLocation } from "react-router-dom";
import {
  Compass,
  LayoutDashboard,
  Map,
  Calendar,
  MessageSquare,
  LogOut,
} from "lucide-react";
import { cn } from "../lib/utils";

export default function AppLayout() {
  const location = useLocation();

  const navItems = [
    { icon: Compass, label: "Discover", path: "/app/discover" },
    { icon: LayoutDashboard, label: "Dashboard", path: "/app/dashboard" },
    { icon: Map, label: "My Roadmap", path: "/app/roadmap/current" },
    { icon: Calendar, label: "Schedule", path: "/app/schedule" },
  ];

  return (
    <div className="flex h-screen bg-[#FAFAFA] overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-100 flex flex-col shadow-sm z-10">
        <div className="p-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-pastel-blue flex items-center justify-center text-primary-blue font-bold text-xl">
              C
            </div>
            <span className="font-heading font-semibold text-xl tracking-tight">
              ClarityPath
            </span>
          </Link>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-2">
          {navItems.map((item) => {
            const isActive = location.pathname.startsWith(item.path);
            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200",
                  isActive
                    ? "bg-pastel-blue text-primary-blue font-medium"
                    : "text-ink-medium hover:bg-gray-50 hover:text-ink-dark",
                )}
              >
                <item.icon
                  className={cn(
                    "w-5 h-5",
                    isActive ? "text-primary-blue" : "text-gray-400",
                  )}
                />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-gray-100">
          <Link
            to="/"
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-ink-medium hover:bg-red-50 hover:text-red-600 transition-colors"
          >
            <LogOut className="w-5 h-5" />
            Sign Out
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 relative overflow-y-auto">
        <Outlet />
      </main>

      {/* Floating Doubt Assistant Button */}
      <button className="fixed bottom-6 right-6 w-14 h-14 bg-primary-blue text-white rounded-full shadow-lg flex items-center justify-center hover:bg-blue-600 hover:scale-105 transition-all z-50">
        <MessageSquare className="w-6 h-6" />
      </button>
    </div>
  );
}
