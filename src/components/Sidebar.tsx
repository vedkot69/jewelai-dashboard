"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
  ChevronLeft,
  ChevronRight,
  Gem,
  TrendingUp,
} from "lucide-react";

const navigationItems = [
  { id: "/", label: "Dashboard", icon: LayoutDashboard },
  { id: "/inventory", label: "Inventory", icon: Box },
  { id: "/pricing", label: "Pricing Engine", icon: DollarSign },
  { id: "/crm", label: "CRM", icon: Users },
  { id: "/whatsapp", label: "WhatsApp", icon: MessageCircle, badge: 4 },
  { id: "/suppliers", label: "Suppliers", icon: Truck },
  { id: "/schemes", label: "Gold Schemes", icon: Gift },
  { id: "/reports", label: "MIS Reports", icon: BarChart3 },
  { id: "/compliance", label: "Compliance", icon: Shield, badge: 2 },
  { id: "/receivables", label: "Receivables", icon: HandshakeIcon },
  { id: "/sales-team", label: "Sales Team", icon: Users2 },
  { id: "/design-tool", label: "Design Tool", icon: Wand2 },
  { id: "/portal", label: "Online Portal", icon: Globe },
  { id: "/settings", label: "Settings", icon: Settings },
];

export default function Sidebar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();

  // Close mobile sidebar on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  const sidebarContent = (
    <>
      {/* Logo */}
      <div className="p-5 border-b border-white/[0.06]">
        <div className="flex items-center gap-3">
          <div
            className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, #F5A623 0%, #E8930C 100%)" }}
          >
            <Gem size={20} color="#fff" />
          </div>
          {!collapsed && (
            <div>
              <div className="text-[15px] font-bold text-white tracking-tight">JewelAI</div>
              <div className="text-[10px] font-semibold text-[#F5A623] tracking-widest uppercase">
                by CaratSense
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-0.5 scroll-hide">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.id);

          return (
            <Link
              key={item.id}
              href={item.id}
              className={`group flex items-center gap-3 px-3 py-2.5 rounded-xl text-[13px] font-medium transition-all duration-200 no-underline ${
                active
                  ? "bg-[#F5A623]/[0.12] text-[#F5A623]"
                  : "text-[#9CA3AF] hover:text-white hover:bg-white/[0.04]"
              } ${collapsed ? "justify-center" : ""}`}
              title={collapsed ? item.label : undefined}
            >
              <Icon
                size={18}
                className={`flex-shrink-0 ${
                  active ? "text-[#F5A623]" : "text-[#6B7280] group-hover:text-white"
                }`}
              />
              {!collapsed && (
                <>
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="ml-auto flex items-center justify-center min-w-[20px] h-5 rounded-full text-[10px] font-bold bg-[#EF4444] text-white px-1.5">
                      {item.badge}
                    </span>
                  )}
                </>
              )}
              {collapsed && item.badge && (
                <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-[#EF4444]" />
              )}
            </Link>
          );
        })}
      </nav>

      {/* Collapse Toggle (desktop only) */}
      <div className="hidden lg:block px-3 py-2 border-t border-white/[0.06]">
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-xl text-[12px] text-[#6B7280] hover:text-white hover:bg-white/[0.04] transition-all"
        >
          {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
          {!collapsed && <span>Collapse</span>}
        </button>
      </div>

      {/* Gold Price Ticker */}
      {!collapsed && (
        <div className="p-3 border-t border-white/[0.06]">
          <div className="rounded-xl p-4" style={{ background: "rgba(245, 166, 35, 0.06)", border: "1px solid rgba(245, 166, 35, 0.1)" }}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-semibold text-[#F5A623] uppercase tracking-wider">
                Live Gold 24K
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#4ADE80] animate-pulse" />
            </div>
            <div className="text-xl font-bold text-white">₹7,356</div>
            <div className="flex items-center gap-1 mt-1.5">
              <TrendingUp size={12} className="text-[#4ADE80]" />
              <span className="text-[11px] font-semibold text-[#4ADE80]">+₹89 (+1.22%)</span>
            </div>
            <div className="text-[10px] text-[#6B7280] mt-2">MCX per gram</div>
          </div>
        </div>
      )}
    </>
  );

  return (
    <>
      {/* Mobile hamburger */}
      <button
        onClick={() => setMobileOpen(true)}
        className="lg:hidden fixed top-5 left-5 z-50 p-2 rounded-xl bg-[#111111] border border-white/[0.08] shadow-lg"
        aria-label="Open menu"
      >
        <Menu size={20} color="#fff" />
      </button>

      {/* Mobile backdrop */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-[260px] bg-[#0C0C0F] z-50 flex flex-col transition-transform duration-300 ease-out lg:hidden ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          onClick={() => setMobileOpen(false)}
          className="absolute top-5 right-4 p-1.5 rounded-lg text-[#6B7280] hover:text-white hover:bg-white/[0.06]"
        >
          <X size={18} />
        </button>
        {sidebarContent}
      </aside>

      {/* Desktop sidebar */}
      <aside
        className={`hidden lg:flex flex-col flex-shrink-0 h-full bg-[#0C0C0F] rounded-2xl transition-all duration-300 ease-out ${
          collapsed ? "w-[72px]" : "w-[240px]"
        }`}
      >
        {sidebarContent}
      </aside>
    </>
  );
}
