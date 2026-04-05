"use client";

import { useState, useEffect } from "react";
import { Search, Bell, ChevronDown } from "lucide-react";

export default function Header() {
  const [greeting, setGreeting] = useState("Good Morning");
  const [dateStr, setDateStr] = useState("");
  const [showUserMenu, setShowUserMenu] = useState(false);

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) {
      setGreeting("Good Morning");
    } else if (hour < 18) {
      setGreeting("Good Afternoon");
    } else {
      setGreeting("Good Evening");
    }

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
    <header className="sticky top-0 z-30 bg-background rounded-[20px] p-6 border border-color-border-dark">
      <div className="flex items-center justify-between gap-4">
        {/* Greeting & Date */}
        <div className="flex-1 min-w-0">
          <h1 className="text-2xl font-bold text-color-text-primary">
            {greeting}, Vedant
          </h1>
          <p className="text-sm text-color-text-secondary mt-1">{dateStr}</p>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex items-center gap-2 flex-1 max-w-sm">
          <div className="flex items-center gap-3 flex-1 input-dark">
            <Search className="w-4 h-4 text-color-text-secondary flex-shrink-0" />
            <input
              type="text"
              placeholder="Search orders, items, customers..."
              className="bg-transparent text-sm text-color-text-primary placeholder-color-text-secondary outline-none w-full"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          {/* Notification Bell */}
          <button className="relative p-2.5 rounded-lg bg-color-card-dark-alt hover:bg-color-border-dark transition-colors">
            <Bell className="w-5 h-5 text-color-text-secondary" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-color-accent-red rounded-full" />
          </button>

          {/* User Profile Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowUserMenu(!showUserMenu)}
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-color-card-dark-alt hover:bg-color-border-dark transition-colors"
            >
              <div className="w-8 h-8 rounded-lg gold-gradient flex items-center justify-center text-sm font-bold text-color-card-dark">
                V
              </div>
              <div className="hidden sm:flex flex-col items-start">
                <span className="text-sm font-semibold text-color-text-primary">
                  Vedant
                </span>
                <span className="text-xs text-color-text-secondary">Manager</span>
              </div>
              <ChevronDown className="w-4 h-4 text-color-text-secondary" />
            </button>

            {/* Dropdown Menu */}
            {showUserMenu && (
              <div className="absolute right-0 mt-2 w-48 card-dark-alt py-2 z-50">
                <button className="w-full text-left px-4 py-2 text-sm text-color-text-secondary hover:text-color-accent-gold transition-colors">
                  Profile Settings
                </button>
                <button className="w-full text-left px-4 py-2 text-sm text-color-text-secondary hover:text-color-accent-gold transition-colors">
                  Preferences
                </button>
                <div className="border-t border-color-border-dark my-2" />
                <button className="w-full text-left px-4 py-2 text-sm text-color-accent-red hover:text-color-accent-gold transition-colors">
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
