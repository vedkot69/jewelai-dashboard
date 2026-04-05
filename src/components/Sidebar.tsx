"use client";

import { useState } from "react";
import {
  LayoutDashboard,
  Box,
  DollarSign,
  Users,
  MessageCircle,
  Truck,
  Gift,
  BarChart3,
  Shield,
  HandshakeIcon,
  Users2,
  Wand2,
  Globe,
  Settings,
  Menu,
  X,
} from "lucide-react";

const navigationItems = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "inventory", label: "Inventory", icon: Box },
  { id: "pricing", label: "Pricing Engine", icon: DollarSign },
  { id: "crm", label: "CRM", icon: Users },
  { id: "whatsapp", label: "WhatsApp", icon: MessageCircle, badge: 4 },
  { id: "suppliers", label: "Suppliers", icon: Truck },
  { id: "schemes", label: "Gold Schemes", icon: Gift },
  { id: "reports", label: "MIS Reports", icon: BarChart3 },
  { id: "compliance", label: "Compliance", icon: Shield, badge: 2 },
  { id: "receivables", label: "Receivables", icon: HandshakeIcon },
  { id: "sales-team", label: "Sales Team", icon: Users2 },
  { id: "design-tool", label: "Design Tool", icon: Wand2 },
  { id: "portal", label: "Online Portal", icon: Globe },
  { id: "settings", label: "Settings", icon: Settings },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("dashboard");

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-color-card-dark-alt rounded-lg border border-color-border-dark hover:bg-color-card-dark transition-colors"
        aria-label="Toggle sidebar"
      >
        {isOpen ? (
          <X className="w-5 h-5 text-color-text-primary" />
        ) : (
          <Menu className="w-5 h-5 text-color-text-primary" />
        )}
      </button>

      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-30 lg:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:relative w-64 h-full bg-color-card-dark border-r border-color-border-dark flex flex-col z-40 transition-transform duration-300 lg:translate-x-0 overflow-hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Logo Section */}
        <div className="p-6 border-b border-color-border-dark">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg gold-gradient flex items-center justify-center">
              <span className="text-sm font-bold text-color-card-dark">J</span>
            </div>
            <div>
              <h1 className="text-lg font-bold text-color-text-primary">
                JewelAI
              </h1>
              <p className="text-xs text-color-text-secondary">by CaratSense</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-1 scroll-hide">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeNav === item.id;

            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveNav(item.id);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all relative group ${
                  isActive
                    ? "nav-item-active"
                    : "text-color-text-secondary hover:bg-color-border-dark"
                }`}
              >
                <Icon className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm font-medium">{item.label}</span>
                {item.badge && (
                  <span className="ml-auto flex items-center justify-center w-5 h-5 rounded-full text-xs font-bold bg-color-accent-red text-white">
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Gold Price Ticker */}
        <div className="p-4 border-t border-color-border-dark">
          <div className="card-dark-alt p-4">
            <p className="text-xs text-color-text-secondary mb-2 uppercase tracking-wider font-semibold">
              Gold Price
            </p>
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-bold text-color-text-primary">
                ₹7,356
              </span>
              <span className="text-xs text-color-accent-green font-semibold">
                +1.22%
              </span>
            </div>
            <p className="text-xs text-color-text-secondary mt-2">per gram</p>
          </div>
        </div>
      </aside>
    </>
  );
}
