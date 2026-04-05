"use client";

import { useState } from "react";
import {
  TrendingUp,
  BarChart3,
  Calendar,
  Zap,
  ArrowUpRight,
  ArrowDownRight,
  AlertTriangle,
  CheckCircle,
  Clock,
  Sun,
  Target,
} from "lucide-react";
import {
  AreaChart,
  Area,
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ComposedChart,
  ReferenceLine,
} from "recharts";
import {
  salesForecastData,
  categoryTrends,
  seasonalPatterns,
  designLifecycle,
  weddingSeasonForecast,
  goldPriceForecast,
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
            {p.name}: {typeof p.value === "number" ? `₹${(p.value / 100000).toFixed(1)}L` : p.value}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

const SeasonalTooltip = ({ active, payload, label }: any) => {
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
            {p.name}: {p.value} (index)
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export default function MLForecastingPage() {
  const [forecastRange, setForecastRange] = useState<"3m" | "6m">("3m");

  return (
    <div className="space-y-5">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <h2 className="text-2xl font-bold text-[#111111] flex items-center gap-2.5">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, #4ADE80, #22C55E)",
              }}
            >
              <TrendingUp size={20} color="#fff" />
            </div>
            Sales Forecasting &amp; Trends
          </h2>
          <p className="text-[13px] text-[#6B7280] mt-1">
            ML-driven demand prediction, seasonal patterns &amp; design
            lifecycle analysis
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div
            className="flex rounded-lg overflow-hidden"
            style={{ border: "1px solid rgba(255,255,255,0.1)" }}
          >
            {(["3m", "6m"] as const).map((range) => (
              <button
                key={range}
                onClick={() => setForecastRange(range)}
                className={`px-4 py-2 text-[12px] font-semibold transition-all ${
                  forecastRange === range
                    ? "text-white"
                    : "text-[#6B7280] hover:text-white"
                }`}
                style={{
                  background:
                    forecastRange === range ? "#111111" : "transparent",
                }}
              >
                {range === "3m" ? "3 Months" : "6 Months"}
              </button>
            ))}
          </div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-semibold bg-[#4ADE80]/10 text-[#4ADE80] border border-[#4ADE80]/20">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4ADE80] animate-pulse" />
            MAPE 6.8%
          </span>
        </div>
      </div>

      {/* KPI Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          {
            icon: TrendingUp,
            label: "Predicted Revenue (Apr)",
            value: "₹24.5L",
            sub: "+14% vs Mar",
            color: "#4ADE80",
            positive: true,
          },
          {
            icon: Calendar,
            label: "Peak Season In",
            value: "10 days",
            sub: "May wedding muhurts",
            color: "#F5A623",
            positive: true,
          },
          {
            icon: Zap,
            label: "Hot Category",
            value: "Kundan Sets",
            sub: "+88.9% predicted growth",
            color: "#A78BFA",
            positive: true,
          },
          {
            icon: AlertTriangle,
            label: "Declining",
            value: "Silver Anklets",
            sub: "-11.3% expected",
            color: "#EF4444",
            positive: false,
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
            <div className="flex items-center gap-1 mt-1">
              {kpi.positive ? (
                <ArrowUpRight size={12} className="text-[#4ADE80]" />
              ) : (
                <ArrowDownRight size={12} className="text-[#EF4444]" />
              )}
              <span
                className="text-[11px] font-medium"
                style={{ color: kpi.positive ? "#4ADE80" : "#EF4444" }}
              >
                {kpi.sub}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Sales Forecast Chart */}
      <div className="rounded-2xl p-5" style={{ background: "#111111" }}>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-[15px] font-bold text-white">
              Revenue Forecast with Confidence Bands
            </h3>
            <p className="text-[11px] text-[#6B7280] mt-1">
              Actual sales (solid) vs ML prediction (dashed) with 90% confidence
              interval
            </p>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={340}>
          <ComposedChart data={salesForecastData}>
            <CartesianGrid stroke="rgba(255,255,255,0.04)" />
            <XAxis
              dataKey="month"
              tick={{ fill: "#6B7280", fontSize: 11 }}
              axisLine={false}
            />
            <YAxis
              tick={{ fill: "#6B7280", fontSize: 11 }}
              axisLine={false}
              tickFormatter={(v) => `₹${(v / 100000).toFixed(0)}L`}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend wrapperStyle={{ fontSize: 11, color: "#9CA3AF" }} />
            {/* Confidence band */}
            <Area
              type="monotone"
              dataKey="upper"
              stroke="none"
              fill="#4ADE80"
              fillOpacity={0.08}
              name="Upper Bound"
            />
            <Area
              type="monotone"
              dataKey="lower"
              stroke="none"
              fill="#111111"
              fillOpacity={1}
              name="Lower Bound"
            />
            <Line
              type="monotone"
              dataKey="actual"
              stroke="#F5A623"
              strokeWidth={2.5}
              dot={{ fill: "#F5A623", r: 4 }}
              name="Actual"
              connectNulls={false}
            />
            <Line
              type="monotone"
              dataKey="predicted"
              stroke="#4ADE80"
              strokeWidth={2}
              strokeDasharray="6 3"
              dot={{ fill: "#4ADE80", r: 3 }}
              name="Predicted"
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      {/* Category Trends + Seasonal Patterns */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Category Demand Predictions */}
        <div className="rounded-2xl p-5" style={{ background: "#111111" }}>
          <h3 className="text-[15px] font-bold text-white mb-1">
            Category Demand Predictions
          </h3>
          <p className="text-[11px] text-[#6B7280] mb-4">
            Current vs predicted demand with growth rates
          </p>
          <div className="space-y-3">
            {categoryTrends.map((cat) => (
              <div
                key={cat.category}
                className="rounded-xl p-3.5"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <span className="text-[13px] font-semibold text-white">
                      {cat.category}
                    </span>
                    <span className="text-[10px] text-[#6B7280] ml-2">
                      {cat.season}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-[12px] font-bold flex items-center gap-0.5 ${
                        cat.growth >= 0 ? "text-[#4ADE80]" : "text-[#EF4444]"
                      }`}
                    >
                      {cat.growth >= 0 ? (
                        <ArrowUpRight size={12} />
                      ) : (
                        <ArrowDownRight size={12} />
                      )}
                      {cat.growth >= 0 ? "+" : ""}
                      {cat.growth}%
                    </span>
                    <span
                      className="text-[10px] font-medium px-2 py-0.5 rounded-md"
                      style={{
                        background:
                          cat.confidence >= 90
                            ? "rgba(74,222,128,0.1)"
                            : cat.confidence >= 80
                            ? "rgba(245,166,35,0.1)"
                            : "rgba(239,68,68,0.1)",
                        color:
                          cat.confidence >= 90
                            ? "#4ADE80"
                            : cat.confidence >= 80
                            ? "#F5A623"
                            : "#EF4444",
                      }}
                    >
                      {cat.confidence}% conf.
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex-1">
                    <div className="flex items-center justify-between text-[10px] text-[#6B7280] mb-1">
                      <span>Current: {cat.currentDemand}</span>
                      <span>Predicted: {cat.predictedDemand}</span>
                    </div>
                    <div className="h-2 rounded-full bg-white/[0.06] overflow-hidden relative">
                      <div
                        className="absolute h-full rounded-full"
                        style={{
                          width: `${(cat.currentDemand / 700) * 100}%`,
                          background: "#6B7280",
                          opacity: 0.5,
                        }}
                      />
                      <div
                        className="absolute h-full rounded-full"
                        style={{
                          width: `${(cat.predictedDemand / 700) * 100}%`,
                          background:
                            cat.growth >= 0 ? "#4ADE80" : "#EF4444",
                          opacity: 0.7,
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Seasonal Pattern Chart */}
        <div className="rounded-2xl p-5" style={{ background: "#111111" }}>
          <h3 className="text-[15px] font-bold text-white mb-1">
            Seasonal Demand Patterns
          </h3>
          <p className="text-[11px] text-[#6B7280] mb-4">
            Indexed demand (100 = average) — identify peak buying windows
          </p>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={seasonalPatterns}>
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
              <Tooltip content={<SeasonalTooltip />} />
              <Legend wrapperStyle={{ fontSize: 11 }} />
              <ReferenceLine
                y={100}
                stroke="rgba(255,255,255,0.15)"
                strokeDasharray="4 4"
                label={{ value: "Avg", fill: "#6B7280", fontSize: 10 }}
              />
              <Area
                type="monotone"
                dataKey="gold"
                stroke="#F5A623"
                fill="#F5A623"
                fillOpacity={0.15}
                strokeWidth={2}
                name="Gold"
              />
              <Area
                type="monotone"
                dataKey="diamond"
                stroke="#A78BFA"
                fill="#A78BFA"
                fillOpacity={0.15}
                strokeWidth={2}
                name="Diamond"
              />
              <Area
                type="monotone"
                dataKey="silver"
                stroke="#B0B0AC"
                fill="#B0B0AC"
                fillOpacity={0.1}
                strokeWidth={2}
                name="Silver"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Design Lifecycle + Wedding Season + Gold Price Forecast */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Design Lifecycle */}
        <div
          className="lg:col-span-2 rounded-2xl p-5"
          style={{ background: "#111111" }}
        >
          <h3 className="text-[15px] font-bold text-white mb-1 flex items-center gap-2">
            <Target size={16} className="text-[#F5A623]" />
            Design Lifecycle Predictions
          </h3>
          <p className="text-[11px] text-[#6B7280] mb-4">
            Where each design sits in its demand curve — act before the decline
          </p>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/[0.06]">
                  <th className="text-left text-[11px] text-[#6B7280] font-medium pb-3 pr-4">
                    Design
                  </th>
                  <th className="text-left text-[11px] text-[#6B7280] font-medium pb-3 pr-4">
                    Phase
                  </th>
                  <th className="text-left text-[11px] text-[#6B7280] font-medium pb-3 pr-4">
                    Demand Index
                  </th>
                  <th className="text-left text-[11px] text-[#6B7280] font-medium pb-3 pr-4">
                    Months Left
                  </th>
                  <th className="text-left text-[11px] text-[#6B7280] font-medium pb-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {designLifecycle.map((d) => {
                  const phaseColor =
                    d.phase === "Peak"
                      ? "#4ADE80"
                      : d.phase === "Growing"
                      ? "#F5A623"
                      : d.phase === "Revival"
                      ? "#3B82F6"
                      : "#EF4444";
                  const PhaseIcon =
                    d.phase === "Peak"
                      ? CheckCircle
                      : d.phase === "Growing"
                      ? ArrowUpRight
                      : d.phase === "Revival"
                      ? Sun
                      : AlertTriangle;

                  return (
                    <tr
                      key={d.design}
                      className="border-b border-white/[0.04] hover:bg-white/[0.02] transition-colors"
                    >
                      <td className="py-3.5 pr-4">
                        <span className="text-[13px] font-semibold text-white">
                          {d.design}
                        </span>
                      </td>
                      <td className="py-3.5 pr-4">
                        <span
                          className="inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-1 rounded-md"
                          style={{
                            background: `${phaseColor}15`,
                            color: phaseColor,
                          }}
                        >
                          <PhaseIcon size={12} />
                          {d.phase}
                        </span>
                      </td>
                      <td className="py-3.5 pr-4">
                        <div className="flex items-center gap-2">
                          <div className="w-20 h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
                            <div
                              className="h-full rounded-full"
                              style={{
                                width: `${d.demandIndex}%`,
                                background: phaseColor,
                              }}
                            />
                          </div>
                          <span className="text-[12px] font-medium text-white">
                            {d.demandIndex}
                          </span>
                        </div>
                      </td>
                      <td className="py-3.5 pr-4">
                        <span
                          className="text-[12px] font-medium flex items-center gap-1"
                          style={{
                            color:
                              d.monthsLeft <= 3 ? "#EF4444" : "#9CA3AF",
                          }}
                        >
                          <Clock size={12} />
                          {d.monthsLeft}mo
                        </span>
                      </td>
                      <td className="py-3.5">
                        <span className="text-[11px] text-[#9CA3AF]">
                          {d.recommendation}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Wedding Season + Gold Price */}
        <div className="space-y-4">
          {/* Wedding Season Forecast */}
          <div className="rounded-2xl p-5" style={{ background: "#111111" }}>
            <h3 className="text-[15px] font-bold text-white mb-1 flex items-center gap-2">
              <Calendar size={16} className="text-[#F5A623]" />
              Wedding Season Forecast
            </h3>
            <p className="text-[11px] text-[#6B7280] mb-3">
              Upcoming muhurt-based demand windows
            </p>
            <div className="space-y-2.5">
              {weddingSeasonForecast.map((w) => {
                const intensityColor =
                  w.intensity === "Peak"
                    ? "#EF4444"
                    : w.intensity === "High"
                    ? "#F5A623"
                    : w.intensity === "Medium"
                    ? "#3B82F6"
                    : "#6B7280";
                return (
                  <div
                    key={w.period}
                    className="rounded-xl p-3.5"
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[12px] font-semibold text-white">
                        {w.period}
                      </span>
                      <span
                        className="text-[10px] font-bold px-2 py-0.5 rounded"
                        style={{
                          background: `${intensityColor}15`,
                          color: intensityColor,
                        }}
                      >
                        {w.intensity}
                      </span>
                    </div>
                    <div className="text-[11px] text-[#6B7280]">
                      {w.muhurtDays} muhurt days · {w.expectedOrders} orders
                    </div>
                    <div className="text-[14px] font-bold text-[#F5A623] mt-1">
                      ₹{(w.expectedRevenue / 100000).toFixed(1)}L
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Gold Price Forecast */}
          <div className="rounded-2xl p-5" style={{ background: "#111111" }}>
            <h3 className="text-[15px] font-bold text-white mb-1 flex items-center gap-2">
              <BarChart3 size={16} className="text-[#F5A623]" />
              Gold Price Forecast
            </h3>
            <p className="text-[11px] text-[#6B7280] mb-3">
              4-week prediction per gram (24K)
            </p>
            <div className="space-y-2.5">
              {goldPriceForecast.map((g) => (
                <div
                  key={g.week}
                  className="flex items-center justify-between rounded-lg px-3 py-2.5"
                  style={{ background: "rgba(255,255,255,0.03)" }}
                >
                  <div>
                    <div className="text-[12px] font-medium text-white">
                      {g.week}
                    </div>
                    <div className="text-[10px] text-[#6B7280]">
                      ₹{g.lower} – ₹{g.upper}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[14px] font-bold text-[#F5A623]">
                      ₹{g.predicted}
                    </div>
                    <div
                      className="text-[10px] font-medium"
                      style={{
                        color:
                          g.confidence >= 80
                            ? "#4ADE80"
                            : g.confidence >= 70
                            ? "#F5A623"
                            : "#EF4444",
                      }}
                    >
                      {g.confidence}% conf.
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
