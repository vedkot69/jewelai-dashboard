"use client";

import { useState } from "react";
import {
  AreaChart,
  Area,
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {
  Brain,
  Zap,
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  Lightbulb,
  Activity,
  Target,
  Users,
  ShoppingBag,
  Send,
  CheckCircle,
  Clock,
  AlertCircle,
  ArrowUpRight,
  ArrowDownRight,
  Sparkles,
  Eye,
  Shield,
  Package,
  Bot,
  Radio,
} from "lucide-react";
import {
  dashboardKPIs,
  revenueOverviewData,
  goldPriceData,
  inventoryMixData,
  aiModelStatus,
  revenueAttribution,
  aiActionsFeed,
  anomalyAlerts,
  customerIntelligence,
  inventoryHeatmap,
  aiConfidenceTimeline,
  aiInsights,
} from "@/lib/data";

// Shared tooltip
const DarkTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div
        className="rounded-xl px-4 py-3 shadow-2xl border"
        style={{ background: "#1A1A2E", borderColor: "rgba(255,255,255,0.08)" }}
      >
        <p className="text-[12px] text-[#9CA3AF] mb-1">{label}</p>
        {payload.map((p: any, i: number) => (
          <p key={i} className="text-[13px] font-semibold" style={{ color: p.color }}>
            {p.name}:{" "}
            {typeof p.value === "number"
              ? p.value > 10000
                ? `₹${(p.value / 100000).toFixed(1)}L`
                : p.value
              : p.value}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

function Dashboard() {
  const [feedFilter, setFeedFilter] = useState<string>("all");

  const filteredFeed =
    feedFilter === "all"
      ? aiActionsFeed
      : aiActionsFeed.filter((a) => a.status === feedFilter);

  return (
    <div className="space-y-5">
      {/* ── AI NERVE CENTER HEADER ── */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <h2 className="text-2xl font-bold text-[#111111] flex items-center gap-2.5">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #F5A623, #FFC95F)" }}
            >
              <Brain size={20} color="#111" />
            </div>
            AI Command Center
          </h2>
          <p className="text-[13px] text-[#6B7280] mt-1">
            Every metric is ML-powered. Every action is AI-recommended. Real-time.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-semibold bg-[#4ADE80]/10 text-[#4ADE80] border border-[#4ADE80]/20">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4ADE80] animate-pulse" />
            4 Models Live
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-semibold bg-[#F5A623]/10 text-[#F5A623] border border-[#F5A623]/20">
            <Radio size={12} />
            7,630 predictions today
          </span>
        </div>
      </div>

      {/* ── AI MODEL STATUS STRIP ── */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {aiModelStatus.map((m, i) => (
          <div
            key={i}
            className="rounded-2xl p-4 relative overflow-hidden"
            style={{ background: "#111111" }}
          >
            <div className="absolute top-0 right-0 w-20 h-20 rounded-full opacity-[0.04]"
              style={{
                background: i === 0 ? "#4ADE80" : i === 1 ? "#EF4444" : i === 2 ? "#F5A623" : "#A78BFA",
                transform: "translate(30%, -30%)",
              }}
            />
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full bg-[#4ADE80] animate-pulse" />
              <span className="text-[11px] text-[#6B7280] font-medium uppercase tracking-wider">
                {m.model}
              </span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-white">{m.accuracy}%</span>
              <span className="text-[10px] text-[#4ADE80] font-semibold">accuracy</span>
            </div>
            <div className="flex items-center justify-between mt-2">
              <span className="text-[10px] text-[#6B7280]">
                {m.predictions.toLocaleString()} predictions
              </span>
              <span className="text-[10px] text-[#6B7280]">{m.lastRun}</span>
            </div>
          </div>
        ))}
      </div>

      {/* ── ROW 2: Revenue KPIs (AI-attributed) ── */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {[
          {
            icon: TrendingUp,
            label: "AI-Driven Revenue",
            value: "₹17.2L",
            sub: "59% of total revenue",
            color: "#4ADE80",
            change: "+23%",
            positive: true,
          },
          {
            icon: Users,
            label: "Customers Profiled by AI",
            value: `${(customerIntelligence.totalProfiled / 1000).toFixed(1)}K`,
            sub: `${customerIntelligence.aiEngaged.toLocaleString()} actively engaged`,
            color: "#A78BFA",
            change: `+${customerIntelligence.conversionLift}%`,
            positive: true,
          },
          {
            icon: Shield,
            label: "Churn Prevented",
            value: customerIntelligence.churnPrevented.toString(),
            sub: `₹${(customerIntelligence.revenueProtected / 100000).toFixed(1)}L protected`,
            color: "#EF4444",
            change: "this month",
            positive: true,
          },
          {
            icon: Bot,
            label: "Auto Actions Today",
            value: customerIntelligence.nextBestActions.toString(),
            sub: `${customerIntelligence.autoSent} sent autonomously`,
            color: "#F5A623",
            change: "real-time",
            positive: true,
          },
        ].map((kpi, i) => (
          <div
            key={i}
            className="rounded-2xl p-5"
            style={{ background: "#111111" }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center"
                style={{ background: `${kpi.color}15` }}
              >
                <kpi.icon size={18} style={{ color: kpi.color }} />
              </div>
              <span className="text-[12px] text-[#6B7280] font-medium">{kpi.label}</span>
            </div>
            <div className="text-2xl font-bold text-white">{kpi.value}</div>
            <div className="flex items-center gap-1.5 mt-1">
              {kpi.positive && <ArrowUpRight size={12} className="text-[#4ADE80]" />}
              <span className="text-[11px] text-[#4ADE80] font-medium">{kpi.change}</span>
              <span className="text-[11px] text-[#6B7280]">{kpi.sub}</span>
            </div>
          </div>
        ))}
      </div>

      {/* ── ROW 3: LIVE AI ACTIONS FEED + ANOMALY DETECTION ── */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Live AI Actions Feed */}
        <div className="lg:col-span-2 rounded-2xl p-5" style={{ background: "#111111" }}>
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-[15px] font-bold text-white flex items-center gap-2">
                <Activity size={16} className="text-[#F5A623]" />
                Live AI Actions Feed
              </h3>
              <p className="text-[11px] text-[#6B7280] mt-1">
                What your AI models are doing right now — autonomously
              </p>
            </div>
            <div className="flex gap-1">
              {["all", "sent", "alert", "pending", "done"].map((f) => (
                <button
                  key={f}
                  onClick={() => setFeedFilter(f)}
                  className={`px-2.5 py-1 rounded-md text-[10px] font-semibold transition-all ${
                    feedFilter === f
                      ? "bg-[#F5A623]/15 text-[#F5A623]"
                      : "text-[#6B7280] hover:text-white"
                  }`}
                >
                  {f.charAt(0).toUpperCase() + f.slice(1)}
                </button>
              ))}
            </div>
          </div>
          <div className="space-y-2 max-h-[340px] overflow-y-auto scroll-hide">
            {filteredFeed.map((action) => {
              const statusConfig: Record<string, { color: string; icon: any; bg: string }> = {
                sent: { color: "#4ADE80", icon: Send, bg: "rgba(74,222,128,0.08)" },
                pending: { color: "#F5A623", icon: Clock, bg: "rgba(245,166,35,0.08)" },
                alert: { color: "#EF4444", icon: AlertCircle, bg: "rgba(239,68,68,0.08)" },
                done: { color: "#A78BFA", icon: CheckCircle, bg: "rgba(167,139,250,0.08)" },
              };
              const cfg = statusConfig[action.status] || statusConfig.sent;
              const StatusIcon = cfg.icon;
              return (
                <div
                  key={action.id}
                  className="rounded-xl p-3.5 transition-all hover:bg-white/[0.02]"
                  style={{ background: cfg.bg, border: "1px solid rgba(255,255,255,0.04)" }}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: `${cfg.color}15` }}
                    >
                      <StatusIcon size={14} style={{ color: cfg.color }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[12px] text-white leading-relaxed">
                        {action.action}
                      </p>
                      <div className="flex items-center gap-3 mt-1.5">
                        <span className="text-[10px] text-[#6B7280]">{action.time}</span>
                        <span
                          className="text-[10px] font-medium px-1.5 py-0.5 rounded"
                          style={{ background: "rgba(167,139,250,0.1)", color: "#A78BFA" }}
                        >
                          {action.model}
                        </span>
                        <span
                          className="text-[10px] font-semibold"
                          style={{ color: cfg.color }}
                        >
                          {action.impact}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Anomaly Detection */}
        <div className="rounded-2xl p-5" style={{ background: "#111111" }}>
          <h3 className="text-[15px] font-bold text-white flex items-center gap-2 mb-1">
            <Zap size={16} className="text-[#EF4444]" />
            Anomaly Detection
          </h3>
          <p className="text-[11px] text-[#6B7280] mb-4">
            AI-detected unusual patterns — requires your attention
          </p>
          <div className="space-y-3">
            {anomalyAlerts.map((a) => {
              const sevColor =
                a.severity === "critical"
                  ? "#EF4444"
                  : a.severity === "warning"
                  ? "#F5A623"
                  : "#3B82F6";
              return (
                <div
                  key={a.id}
                  className="rounded-xl p-4"
                  style={{
                    background: `${sevColor}08`,
                    border: `1px solid ${sevColor}20`,
                  }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[13px] font-semibold text-white">
                      {a.metric}
                    </span>
                    <span
                      className="text-[12px] font-bold"
                      style={{ color: sevColor }}
                    >
                      {a.change}
                    </span>
                  </div>
                  <p className="text-[11px] text-[#9CA3AF] leading-relaxed">
                    {a.reason}
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <span
                      className="text-[9px] font-bold uppercase px-2 py-0.5 rounded"
                      style={{ background: `${sevColor}15`, color: sevColor }}
                    >
                      {a.severity}
                    </span>
                    <span className="text-[10px] text-[#6B7280]">
                      {a.period}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── ROW 4: AI REVENUE ATTRIBUTION + PREDICTIVE INVENTORY ── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Revenue: AI vs Manual */}
        <div className="rounded-2xl p-5" style={{ background: "#111111" }}>
          <h3 className="text-[15px] font-bold text-white mb-1">
            Revenue Attribution: AI vs Manual
          </h3>
          <p className="text-[11px] text-[#6B7280] mb-4">
            Track how much revenue your AI models are driving vs traditional sales
          </p>
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={revenueAttribution}>
              <CartesianGrid stroke="rgba(255,255,255,0.04)" />
              <XAxis dataKey="month" tick={{ fill: "#6B7280", fontSize: 11 }} axisLine={false} />
              <YAxis
                tick={{ fill: "#6B7280", fontSize: 11 }}
                axisLine={false}
                tickFormatter={(v) => `₹${(v / 100000).toFixed(0)}L`}
              />
              <Tooltip content={<DarkTooltip />} />
              <Legend wrapperStyle={{ fontSize: 11 }} />
              <Bar dataKey="aiDriven" name="AI-Driven" fill="#4ADE80" radius={[6, 6, 0, 0]} />
              <Bar dataKey="manual" name="Manual" fill="#6B7280" radius={[6, 6, 0, 0]} opacity={0.4} />
            </BarChart>
          </ResponsiveContainer>
          <div className="flex items-center justify-center gap-4 mt-3 pt-3 border-t border-white/[0.06]">
            <div className="text-center">
              <div className="text-[18px] font-bold text-[#4ADE80]">59%</div>
              <div className="text-[10px] text-[#6B7280]">AI-attributed revenue</div>
            </div>
            <div className="w-px h-8 bg-white/[0.08]" />
            <div className="text-center">
              <div className="text-[18px] font-bold text-white">+153%</div>
              <div className="text-[10px] text-[#6B7280]">AI revenue growth (6mo)</div>
            </div>
            <div className="w-px h-8 bg-white/[0.08]" />
            <div className="text-center">
              <div className="text-[18px] font-bold text-[#F5A623]">2.4x</div>
              <div className="text-[10px] text-[#6B7280]">ROI on AI investment</div>
            </div>
          </div>
        </div>

        {/* Predictive Inventory Heatmap */}
        <div className="rounded-2xl p-5" style={{ background: "#111111" }}>
          <h3 className="text-[15px] font-bold text-white flex items-center gap-2 mb-1">
            <Package size={16} className="text-[#F5A623]" />
            Predictive Inventory Gap
          </h3>
          <p className="text-[11px] text-[#6B7280] mb-4">
            AI predicts demand for next 30 days vs current stock — act before you miss sales
          </p>
          <div className="space-y-2.5">
            {inventoryHeatmap.map((item) => {
              const urgencyColor: Record<string, string> = {
                critical: "#EF4444",
                warning: "#F5A623",
                ok: "#4ADE80",
                overstock: "#3B82F6",
              };
              const color = urgencyColor[item.urgency] || "#6B7280";
              const fillPercent = Math.min((item.current / item.predicted) * 100, 100);
              return (
                <div
                  key={item.category}
                  className="rounded-xl p-3.5"
                  style={{
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.05)",
                  }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div
                        className="w-2 h-2 rounded-full"
                        style={{ background: color }}
                      />
                      <span className="text-[12px] font-semibold text-white">
                        {item.category}
                      </span>
                    </div>
                    <span
                      className="text-[10px] font-bold uppercase px-2 py-0.5 rounded"
                      style={{ background: `${color}15`, color }}
                    >
                      {item.urgency === "overstock" ? "overstock" : item.gap < 0 ? `${item.gap} units` : "OK"}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex-1">
                      <div className="h-2 rounded-full bg-white/[0.06] overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all"
                          style={{
                            width: `${fillPercent}%`,
                            background: color,
                            opacity: 0.7,
                          }}
                        />
                      </div>
                    </div>
                    <span className="text-[10px] text-[#6B7280] whitespace-nowrap">
                      {item.current}/{item.predicted}
                    </span>
                  </div>
                  <p className="text-[10px] mt-1.5" style={{ color }}>
                    {item.action}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── ROW 5: MODEL CONFIDENCE + GOLD PRICE + INVENTORY MIX ── */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* AI Model Confidence Over Time */}
        <div className="lg:col-span-2 rounded-2xl p-5" style={{ background: "#111111" }}>
          <h3 className="text-[15px] font-bold text-white mb-1">
            Model Confidence Trajectory
          </h3>
          <p className="text-[11px] text-[#6B7280] mb-4">
            All 4 models improving week-over-week as they learn from your data
          </p>
          <ResponsiveContainer width="100%" height={260}>
            <LineChart data={aiConfidenceTimeline}>
              <CartesianGrid stroke="rgba(255,255,255,0.04)" />
              <XAxis dataKey="week" tick={{ fill: "#6B7280", fontSize: 11 }} axisLine={false} />
              <YAxis
                domain={[82, 96]}
                tick={{ fill: "#6B7280", fontSize: 11 }}
                axisLine={false}
                tickFormatter={(v) => `${v}%`}
              />
              <Tooltip content={<DarkTooltip />} />
              <Legend wrapperStyle={{ fontSize: 11 }} />
              <Line
                type="monotone"
                dataKey="demand"
                stroke="#4ADE80"
                strokeWidth={2}
                dot={{ fill: "#4ADE80", r: 3 }}
                name="Demand"
              />
              <Line
                type="monotone"
                dataKey="pricing"
                stroke="#F5A623"
                strokeWidth={2}
                dot={{ fill: "#F5A623", r: 3 }}
                name="Pricing"
              />
              <Line
                type="monotone"
                dataKey="churn"
                stroke="#EF4444"
                strokeWidth={2}
                dot={{ fill: "#EF4444", r: 3 }}
                name="Churn"
              />
              <Line
                type="monotone"
                dataKey="recommendation"
                stroke="#A78BFA"
                strokeWidth={2}
                dot={{ fill: "#A78BFA", r: 3 }}
                name="Recommender"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Gold Price with AI Prediction */}
        <div className="rounded-2xl p-5" style={{ background: "#111111" }}>
          <h3 className="text-[15px] font-bold text-white flex items-center gap-2 mb-1">
            <Sparkles size={14} className="text-[#F5A623]" />
            Gold Price + AI Forecast
          </h3>
          <p className="text-[11px] text-[#6B7280] mb-3">
            Live price with ML prediction overlay
          </p>
          <ResponsiveContainer width="100%" height={180}>
            <AreaChart data={goldPriceData.slice(-12)}>
              <defs>
                <linearGradient id="goldAreaGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#F5A623" stopOpacity={0.25} />
                  <stop offset="95%" stopColor="#F5A623" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid stroke="rgba(255,255,255,0.04)" />
              <XAxis dataKey="time" tick={{ fill: "#6B7280", fontSize: 9 }} axisLine={false} />
              <YAxis domain={["auto", "auto"]} tick={{ fill: "#6B7280", fontSize: 9 }} axisLine={false} />
              <Tooltip content={<DarkTooltip />} />
              <Area
                type="monotone"
                dataKey="price"
                stroke="#F5A623"
                fill="url(#goldAreaGrad)"
                strokeWidth={2}
                name="₹/gram"
              />
            </AreaChart>
          </ResponsiveContainer>
          <div className="grid grid-cols-2 gap-2 mt-3 pt-3 border-t border-white/[0.06]">
            <div className="rounded-lg p-2.5" style={{ background: "rgba(255,255,255,0.03)" }}>
              <div className="text-[10px] text-[#6B7280]">AI Predicted (Next Week)</div>
              <div className="text-[16px] font-bold text-[#4ADE80]">₹7,420</div>
            </div>
            <div className="rounded-lg p-2.5" style={{ background: "rgba(255,255,255,0.03)" }}>
              <div className="text-[10px] text-[#6B7280]">Confidence</div>
              <div className="text-[16px] font-bold text-[#F5A623]">82%</div>
            </div>
          </div>
        </div>
      </div>

      {/* ── ROW 6: AI INSIGHTS (redesigned) ── */}
      <div
        className="rounded-2xl overflow-hidden"
        style={{
          background: "linear-gradient(135deg, rgba(167,139,250,0.08), rgba(74,222,128,0.08), rgba(245,166,35,0.08))",
          border: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div className="p-5">
          <div className="flex items-center gap-2 mb-4">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #A78BFA, #4ADE80)" }}
            >
              <Lightbulb size={16} color="#fff" />
            </div>
            <div>
              <h3 className="text-[15px] font-bold text-[#111111]">AI Insights Engine</h3>
              <p className="text-[11px] text-[#6B7280]">
                Autonomous intelligence — things your AI discovered this hour
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {aiInsights.map((insight, idx) => {
              const iconMap: Record<string, any> = {
                TrendingUp,
                AlertTriangle,
                Lightbulb,
              };
              const IconComponent = iconMap[insight.icon];
              const cardColors = [
                { bg: "#111111", accent: "#4ADE80", border: "rgba(74,222,128,0.15)" },
                { bg: "#111111", accent: "#F5A623", border: "rgba(245,166,35,0.15)" },
                { bg: "#111111", accent: "#A78BFA", border: "rgba(167,139,250,0.15)" },
              ];
              const c = cardColors[idx] || cardColors[0];
              return (
                <div
                  key={idx}
                  className="rounded-xl p-5 transition-all hover:scale-[1.02]"
                  style={{
                    background: c.bg,
                    border: `1px solid ${c.border}`,
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
                    style={{ background: `${c.accent}15` }}
                  >
                    {IconComponent && (
                      <IconComponent size={20} style={{ color: c.accent }} />
                    )}
                  </div>
                  <h4 className="text-[13px] font-semibold text-white mb-2">
                    {insight.title}
                  </h4>
                  <p className="text-[11px] text-[#9CA3AF] leading-relaxed mb-3">
                    {insight.description}
                  </p>
                  <button
                    className="text-[11px] font-semibold px-3 py-1.5 rounded-lg transition-colors"
                    style={{
                      background: `${c.accent}12`,
                      color: c.accent,
                      border: `1px solid ${c.accent}30`,
                    }}
                  >
                    {insight.action}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── FOOTER ── */}
      <footer className="text-center text-[11px] text-[#9CA3AF] py-6 border-t border-[#E8ECE4]">
        JewelAI Dashboard · Powered by CaratSense AI
      </footer>
    </div>
  );
}

export default Dashboard;
