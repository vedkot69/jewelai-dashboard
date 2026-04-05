"use client";

import { useState } from "react";
import {
  Brain,
  Users,
  Target,
  Sparkles,
  ArrowUpRight,
  ArrowDownRight,
  MapPin,
  ShoppingBag,
  Heart,
  Send,
  Filter,
  Eye,
} from "lucide-react";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  customerTasteProfiles,
  designAffinityData,
  purchasePatternData,
  clvDistribution,
  aiRecommendations,
  regionalTasteMap,
} from "@/lib/data";

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div
        className="rounded-xl px-4 py-3 shadow-2xl border"
        style={{
          background: "#1A1A2E",
          borderColor: "rgba(255,255,255,0.08)",
        }}
      >
        <p className="text-[12px] text-[#9CA3AF] mb-1">{label}</p>
        {payload.map((p: any, i: number) => (
          <p key={i} className="text-[13px] font-semibold" style={{ color: p.color }}>
            {p.name}: {p.value}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export default function MLPreferencesPage() {
  const [selectedSegment, setSelectedSegment] = useState("Traditional Bridal");

  const radarData = designAffinityData.map((d) => {
    const segmentKey =
      selectedSegment === "Traditional Bridal"
        ? "traditional"
        : selectedSegment === "Modern Minimalist"
        ? "modern"
        : selectedSegment === "Temple Devotee"
        ? "temple"
        : selectedSegment === "Trendy Everyday"
        ? "trendy"
        : "investment";
    return { design: d.design, score: d[segmentKey as keyof typeof d] as number };
  });

  const selectedProfile = customerTasteProfiles.find(
    (p) => p.segment === selectedSegment
  );

  return (
    <div className="space-y-5">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <h2 className="text-2xl font-bold text-[#111111] flex items-center gap-2.5">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, #A78BFA, #7C3AED)",
              }}
            >
              <Brain size={20} color="#fff" />
            </div>
            Customer Preference Analysis
          </h2>
          <p className="text-[13px] text-[#6B7280] mt-1">
            ML-powered taste profiling from past sales data — use insights
            in-store &amp; for online personalisation
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-semibold bg-[#4ADE80]/10 text-[#4ADE80] border border-[#4ADE80]/20">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4ADE80] animate-pulse" />
            Model Accuracy 94.2%
          </span>
        </div>
      </div>

      {/* KPI Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          {
            icon: Users,
            label: "Profiled Customers",
            value: "6,570",
            sub: "across 5 segments",
            color: "#F5A623",
          },
          {
            icon: Target,
            label: "Recommendation Hit Rate",
            value: "87.3%",
            sub: "+4.2% vs last month",
            color: "#4ADE80",
          },
          {
            icon: ShoppingBag,
            label: "Avg Basket Match",
            value: "3.8 items",
            sub: "predicted correctly",
            color: "#A78BFA",
          },
          {
            icon: Heart,
            label: "Personalisation ROI",
            value: "+₹12.4L",
            sub: "incremental revenue",
            color: "#EF4444",
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
              <span className="text-[12px] text-[#6B7280] font-medium">
                {kpi.label}
              </span>
            </div>
            <div className="text-2xl font-bold text-white">{kpi.value}</div>
            <div className="text-[11px] text-[#6B7280] mt-1">{kpi.sub}</div>
          </div>
        ))}
      </div>

      {/* Segment Selector + Radar Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Segment Cards */}
        <div className="rounded-2xl p-5 space-y-3" style={{ background: "#111111" }}>
          <h3 className="text-[15px] font-bold text-white flex items-center gap-2">
            <Filter size={16} className="text-[#F5A623]" />
            Customer Segments
          </h3>
          <p className="text-[11px] text-[#6B7280]">
            ML-clustered from purchase history, browse behaviour &amp; demographics
          </p>
          <div className="space-y-2 mt-3">
            {customerTasteProfiles.map((seg) => (
              <button
                key={seg.segment}
                onClick={() => setSelectedSegment(seg.segment)}
                className={`w-full text-left px-4 py-3 rounded-xl transition-all ${
                  selectedSegment === seg.segment
                    ? "ring-1"
                    : "hover:bg-white/[0.04]"
                }`}
                style={{
                  background:
                    selectedSegment === seg.segment
                      ? `${seg.color}12`
                      : "rgba(255,255,255,0.02)",
                  ...(selectedSegment === seg.segment
                    ? { ringColor: seg.color, borderColor: seg.color, border: `1px solid ${seg.color}30` }
                    : {}),
                }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[13px] font-semibold text-white">
                      {seg.segment}
                    </div>
                    <div className="text-[11px] text-[#6B7280] mt-0.5">
                      {seg.customers.toLocaleString()} customers · Avg ₹
                      {(seg.avgSpend / 1000).toFixed(0)}K
                    </div>
                  </div>
                  <div
                    className="text-[11px] font-bold px-2 py-1 rounded-md"
                    style={{
                      background: `${seg.color}15`,
                      color: seg.color,
                    }}
                  >
                    {seg.preference}%
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Radar Chart: Design Affinity */}
        <div
          className="lg:col-span-2 rounded-2xl p-5"
          style={{ background: "#111111" }}
        >
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-[15px] font-bold text-white">
                Design Affinity — {selectedSegment}
              </h3>
              <p className="text-[11px] text-[#6B7280] mt-1">
                ML-predicted preference scores for each design category
              </p>
            </div>
            {selectedProfile && (
              <div className="text-right">
                <div className="text-[11px] text-[#6B7280]">Top Category</div>
                <div className="text-[13px] font-semibold text-[#F5A623]">
                  {selectedProfile.topCategory}
                </div>
              </div>
            )}
          </div>
          <ResponsiveContainer width="100%" height={320}>
            <RadarChart data={radarData}>
              <PolarGrid stroke="rgba(255,255,255,0.06)" />
              <PolarAngleAxis
                dataKey="design"
                tick={{ fill: "#9CA3AF", fontSize: 11 }}
              />
              <PolarRadiusAxis
                angle={30}
                domain={[0, 100]}
                tick={{ fill: "#6B7280", fontSize: 10 }}
              />
              <Radar
                name="Affinity Score"
                dataKey="score"
                stroke={selectedProfile?.color || "#F5A623"}
                fill={selectedProfile?.color || "#F5A623"}
                fillOpacity={0.2}
                strokeWidth={2}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Purchase Patterns + CLV Distribution */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Purchase Pattern Trends */}
        <div className="rounded-2xl p-5" style={{ background: "#111111" }}>
          <h3 className="text-[15px] font-bold text-white mb-1">
            Purchase Pattern Trends
          </h3>
          <p className="text-[11px] text-[#6B7280] mb-4">
            Category-wise monthly sales volume from past 6 months
          </p>
          <ResponsiveContainer width="100%" height={280}>
            <AreaChart data={purchasePatternData}>
              <CartesianGrid stroke="rgba(255,255,255,0.04)" />
              <XAxis
                dataKey="month"
                tick={{ fill: "#6B7280", fontSize: 11 }}
                axisLine={false}
              />
              <YAxis
                tick={{ fill: "#6B7280", fontSize: 11 }}
                axisLine={false}
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend
                wrapperStyle={{ fontSize: 11, color: "#9CA3AF" }}
              />
              <Area
                type="monotone"
                dataKey="bangles"
                stackId="1"
                stroke="#F5A623"
                fill="#F5A623"
                fillOpacity={0.3}
                name="Bangles"
              />
              <Area
                type="monotone"
                dataKey="necklaces"
                stackId="1"
                stroke="#A78BFA"
                fill="#A78BFA"
                fillOpacity={0.3}
                name="Necklaces"
              />
              <Area
                type="monotone"
                dataKey="rings"
                stackId="1"
                stroke="#4ADE80"
                fill="#4ADE80"
                fillOpacity={0.3}
                name="Rings"
              />
              <Area
                type="monotone"
                dataKey="earrings"
                stackId="1"
                stroke="#3B82F6"
                fill="#3B82F6"
                fillOpacity={0.3}
                name="Earrings"
              />
              <Area
                type="monotone"
                dataKey="chains"
                stackId="1"
                stroke="#EF4444"
                fill="#EF4444"
                fillOpacity={0.3}
                name="Chains"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* CLV Distribution */}
        <div className="rounded-2xl p-5" style={{ background: "#111111" }}>
          <h3 className="text-[15px] font-bold text-white mb-1">
            Customer Lifetime Value Distribution
          </h3>
          <p className="text-[11px] text-[#6B7280] mb-4">
            How customers are distributed across CLV brackets
          </p>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={clvDistribution} layout="vertical">
              <CartesianGrid
                stroke="rgba(255,255,255,0.04)"
                horizontal={false}
              />
              <XAxis
                type="number"
                tick={{ fill: "#6B7280", fontSize: 11 }}
                axisLine={false}
              />
              <YAxis
                dataKey="range"
                type="category"
                tick={{ fill: "#9CA3AF", fontSize: 11 }}
                axisLine={false}
                width={80}
              />
              <Tooltip content={<CustomTooltip />} />
              <Bar
                dataKey="count"
                name="Customers"
                radius={[0, 8, 8, 0]}
                fill="#F5A623"
                fillOpacity={0.8}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Regional Taste Map */}
      <div className="rounded-2xl p-5" style={{ background: "#111111" }}>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-[15px] font-bold text-white flex items-center gap-2">
              <MapPin size={16} className="text-[#F5A623]" />
              Regional Taste Map
            </h3>
            <p className="text-[11px] text-[#6B7280] mt-1">
              Design style preferences by region — use for targeted inventory
              allocation &amp; marketing
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {regionalTasteMap.map((r) => (
            <div
              key={r.region}
              className="rounded-xl p-4"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <div className="text-[13px] font-semibold text-white mb-3">
                {r.region}
              </div>
              <div className="space-y-2">
                {[
                  { label: "Kundan", value: r.kundan, color: "#F5A623" },
                  { label: "Temple", value: r.temple, color: "#4ADE80" },
                  { label: "Modern", value: r.modern, color: "#A78BFA" },
                  { label: "Antique", value: r.antique, color: "#3B82F6" },
                ].map((style) => (
                  <div key={style.label}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[11px] text-[#6B7280]">
                        {style.label}
                      </span>
                      <span
                        className="text-[11px] font-semibold"
                        style={{ color: style.color }}
                      >
                        {style.value}%
                      </span>
                    </div>
                    <div className="h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all"
                        style={{
                          width: `${style.value}%`,
                          background: style.color,
                          opacity: 0.7,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-3 pt-2 border-t border-white/[0.06]">
                <span className="text-[10px] text-[#6B7280]">
                  Preferred Weight:{" "}
                </span>
                <span className="text-[11px] text-white font-medium">
                  {r.weight}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* AI Recommendations Table */}
      <div className="rounded-2xl p-5" style={{ background: "#111111" }}>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-[15px] font-bold text-white flex items-center gap-2">
              <Sparkles size={16} className="text-[#F5A623]" />
              AI-Powered Recommendations
            </h3>
            <p className="text-[11px] text-[#6B7280] mt-1">
              Personalised product suggestions for top customers — ready to send
              via WhatsApp or in-store
            </p>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/[0.06]">
                <th className="text-left text-[11px] text-[#6B7280] font-medium pb-3 pr-4">
                  Customer
                </th>
                <th className="text-left text-[11px] text-[#6B7280] font-medium pb-3 pr-4">
                  Segment
                </th>
                <th className="text-left text-[11px] text-[#6B7280] font-medium pb-3 pr-4">
                  Recommended
                </th>
                <th className="text-left text-[11px] text-[#6B7280] font-medium pb-3 pr-4">
                  Confidence
                </th>
                <th className="text-left text-[11px] text-[#6B7280] font-medium pb-3 pr-4">
                  Reason
                </th>
                <th className="text-left text-[11px] text-[#6B7280] font-medium pb-3">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {aiRecommendations.map((rec) => (
                <tr
                  key={rec.id}
                  className="border-b border-white/[0.04] hover:bg-white/[0.02] transition-colors"
                >
                  <td className="py-3.5 pr-4">
                    <span className="text-[13px] font-semibold text-white">
                      {rec.customer}
                    </span>
                  </td>
                  <td className="py-3.5 pr-4">
                    <span
                      className="text-[11px] font-medium px-2.5 py-1 rounded-md"
                      style={{
                        background: "rgba(167,139,250,0.1)",
                        color: "#A78BFA",
                      }}
                    >
                      {rec.segment}
                    </span>
                  </td>
                  <td className="py-3.5 pr-4">
                    <span className="text-[13px] text-[#F5A623] font-medium">
                      {rec.recommended}
                    </span>
                  </td>
                  <td className="py-3.5 pr-4">
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
                        <div
                          className="h-full rounded-full"
                          style={{
                            width: `${rec.confidence}%`,
                            background:
                              rec.confidence >= 90
                                ? "#4ADE80"
                                : rec.confidence >= 80
                                ? "#F5A623"
                                : "#EF4444",
                          }}
                        />
                      </div>
                      <span className="text-[12px] font-semibold text-white">
                        {rec.confidence}%
                      </span>
                    </div>
                  </td>
                  <td className="py-3.5 pr-4">
                    <span className="text-[11px] text-[#9CA3AF] leading-tight">
                      {rec.reason}
                    </span>
                  </td>
                  <td className="py-3.5">
                    <div className="flex items-center gap-1.5">
                      <button
                        className="p-2 rounded-lg hover:bg-white/[0.06] transition-colors"
                        title="Send via WhatsApp"
                      >
                        <Send size={14} className="text-[#4ADE80]" />
                      </button>
                      <button
                        className="p-2 rounded-lg hover:bg-white/[0.06] transition-colors"
                        title="View profile"
                      >
                        <Eye size={14} className="text-[#3B82F6]" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
