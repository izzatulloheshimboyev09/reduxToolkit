import React from "react";
import {
  LayoutDashboard,
  Car,
  Heart,
  BadgeCheck,
  Bookmark,
  BarChart3,
  Settings,
  HelpCircle,
  LogOut,
} from "lucide-react";

export const Sidebar = () => {
  return (
    <div className="w-64 bg-[#0B0F17] text-gray-400 p-5 flex flex-col justify-between h-screen border-r border-gray-800 sticky top-0">
      <div>
        {/* Logo */}
        <div className="mb-8">
          <h1 className="text-white font-bold text-xl tracking-wide">
            AutoPremium
          </h1>
          <p className="text-xs text-gray-500">Elite Fleet Management</p>
        </div>

        {/* Menu Items */}
        <nav className="space-y-2">
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-800/50 hover:text-white transition"
          >
            <LayoutDashboard size={20} />
            <span className="text-sm font-medium">Dashboard</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gray-800/80 text-white font-medium"
          >
            <Car size={20} />
            <span className="text-sm">Cars</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-800/50 hover:text-white transition"
          >
            <Heart size={20} />
            <span className="text-sm">Favorites</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-800/50 hover:text-white transition"
          >
            <BadgeCheck size={20} />
            <span className="text-sm">Sold Cars</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-800/50 hover:text-white transition"
          >
            <Bookmark size={20} />
            <span className="text-sm">Reserved Cars</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-800/50 hover:text-white transition"
          >
            <BarChart3 size={20} />
            <span className="text-sm">Analytics</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-800/50 hover:text-white transition"
          >
            <Settings size={20} />
            <span className="text-sm">Settings</span>
          </a>
        </nav>
      </div>

      {/* Bottom Menu */}
      <div className="space-y-2 border-t border-gray-800 pt-4">
        <a
          href="#"
          className="flex items-center gap-3 px-4 py-2 hover:text-white transition"
        >
          <HelpCircle size={18} />
          <span className="text-sm">Support</span>
        </a>
        <a
          href="#"
          className="flex items-center gap-3 px-4 py-2 hover:text-white transition"
        >
          <LogOut size={18} />
          <span className="text-sm">Sign Out</span>
        </a>
      </div>
    </div>
  );
};
