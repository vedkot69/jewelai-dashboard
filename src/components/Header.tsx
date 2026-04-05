"use client";

import { useState, useEffect } from "react";
import { Search, Bell, ChevronDown, Menu } from "lucide-react";

export default function Header() {
  const [greeting, setGreeting] = useState("Good Morning");
  const [dateStr, setDateStr] = useState("");
  const [showUserMenu, setShowUserMenu] = useState(false);

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting("Good Morning");
    else if (hour < 18) setGreeting("Good Afternoon");
    else setGreeting("Good Evening");

    setDateStr(
      new Date().toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    );
  }, []);

  return (
    <header className="sticky top-0 z-20 rounded-2xl overflow-hidden" style={{ background: "#111111" }}>
      <div className="flex items-center justify-between gap-4 px-6 py-5">
        {/* Left: Greeting */}
        <div className="flex-1 min-w-0 pl-10 lg:pl-0">
          <h1 className="text-xl font-bold text-white tracking-tight m-0 leading-tight">
            {greeting}, Vedant
          </h1>
          <p className="text-[13px] text-[#9CA3AF] mt-1 m-0">{dateStr}</p>
        </div>

        {/* Center: Search */}
        <div className="hidden md:flex items-center flex-1 max-w-sm">
          <div
            className="flex items-center gap-3 w-full rounded-xl px-4 py-2.5"
            style={{ background: "#1A1A2E", border: "1px solid rgba(255,255,255,0.06)" }}
          >
            <Search size={16} className="text-[#6B7280] flex-shrink-0" />
            <input
              type="text"
              placeholder="Search orders, items, customers..."
              className="bg-transparent text-[13px] text-white placeholder-[#6B7280] outline-none w-full border-0 p-0 ring-0 focus:ring-0"
            />
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-2.5">
          {/* Bell */}
          <button
            className="relative p-2.5 rounded-xl transition-colors"
            style={{ background: "#1A1A2E" }}
          >
            <Bell size={18} className="text-[#9CA3AF]" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-[#EF4444] rounded-full" />
          </button>

          {/* User */}
          <div className="relative">
            <button
              onClick={() => setShowUserMenu(!showUserMenu)}
              className="flex items-center gap-2.5 px-3 py-2 rounded-xl transition-colors"
              style={{ background: "#1A1A2E" }}
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold text-white"
                style={{ background: "linear-gradient(135deg, #F5A623, #E8930C)" }}
              >
                V
              </div>
              <div className="hidden sm:flex flex-col items-start">
                <span className="text-[13px] font-semibold text-white">Vedant</span>
                <span className="text-[10px] text-[#6B7280]">Manager</span>
              </div>
              <ChevronDown size={14} className="text-[#6B7280]" />
            </button>

            {showUserMenu && (
              <div
                className="absolute right-0 mt-2 w-48 rounded-xl py-2 z-50 shadow-2xl"
                style={{ background: "#1A1A2E", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <button className="w-full text-left px-4 py-2 text-[13px] text-[#9CA3AF] hover:text-[#F5A623] hover:bg-white/[0.04] transition-colors">
                  Profile Settings
                </button>
                <button className="w-full text-left px-4 py-2 text-[13px] text-[#9CA3AF] hover:text-[#F5A623] hover:bg-white/[0.04] transition-colors">
                  Preferences
                </button>
                <div className="my-1.5 mx-3 border-t border-white/[0.06]" />
                <button className="w-full text-left px-4 py-2 text-[13px] text-[#EF4444] hover:bg-white/[0.04] transition-colors">
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
