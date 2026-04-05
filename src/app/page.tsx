"use client";

import {
  AreaChart,
  Area,
  LineChart,
  Line,
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
import Card, { CardContent, CardHeader } from "@/components/ui/Card";
import { KPICard } from "@/components/ui/KPICard";
import {
  dashboardKPIs,
  revenueOverviewData,
  topSellingDesigns,
  storePerformance,
  goldPriceData,
  inventoryMixData,
  deadStockAlerts,
  quickPulseAlerts,
  receivablesAging,
  aiInsights,
} from "@/lib/data";

// Custom tooltip for charts
const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#000000] border border-gray-700 rounded-lg p-3 shadow-lg">
        {payload.map((entry: any, index: number) => (
          <p key={index} style={{ color: entry.color }} className="text-sm">
            {entry.name}: {typeof entry.value === "number" ? `₹${entry.value.toLocaleString()}` : entry.value}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

const GoldPriceTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#000000] border border-gray-700 rounded-lg p-3 shadow-lg">
        <p className="text-sm text-gray-300">{payload[0].payload.time}</p>
        <p style={{ color: payload[0].color }} className="text-sm font-semibold">
          ₹{payload[0].value.toLocaleString()}
        </p>
      </div>
    );
  }
  return null;
};

function Dashboard() {
  return (
    <div className="p-6 md:p-8 max-w-7xl mx-auto">
            {/* KPI Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <KPICard
                icon={dashboardKPIs.todayRevenue.icon}
                label={dashboardKPIs.todayRevenue.label}
                value={dashboardKPIs.todayRevenue.value}
                change={dashboardKPIs.todayRevenue.change}
                changeType="positive"
              />
              <KPICard
                icon={dashboardKPIs.inventoryValue.icon}
                label={dashboardKPIs.inventoryValue.label}
                value={dashboardKPIs.inventoryValue.value}
                subtitle={dashboardKPIs.inventoryValue.subtitle}
              />
              <KPICard
                icon={dashboardKPIs.activeCustomers.icon}
                label={dashboardKPIs.activeCustomers.label}
                value={dashboardKPIs.activeCustomers.value}
                subtitle={dashboardKPIs.activeCustomers.subtitle}
              />
              <KPICard
                icon={dashboardKPIs.goldSchemes.icon}
                label={dashboardKPIs.goldSchemes.label}
                value={dashboardKPIs.goldSchemes.value}
                subtitle={dashboardKPIs.goldSchemes.subtitle}
              />
            </div>

            {/* Two Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
              {/* LEFT COLUMN - Takes 2 cols on large screens */}
              <div className="lg:col-span-2 space-y-8">
                {/* Revenue Overview */}
                <Card>
                  <CardHeader title="Revenue Overview" subtitle="Last 6 months by metal type" />
                  <CardContent>
                    <div style={{ width: "100%", height: 320 }}>
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={revenueOverviewData} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                          <defs>
                            <linearGradient id="goldGradient" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="#F5A623" stopOpacity={0.3} />
                              <stop offset="95%" stopColor="#F5A623" stopOpacity={0} />
                            </linearGradient>
                            <linearGradient id="diamondGradient" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="#A78BFA" stopOpacity={0.3} />
                              <stop offset="95%" stopColor="#A78BFA" stopOpacity={0} />
                            </linearGradient>
                            <linearGradient id="silverGradient" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="#06B6D4" stopOpacity={0.3} />
                              <stop offset="95%" stopColor="#06B6D4" stopOpacity={0} />
                            </linearGradient>
                          </defs>
                          <CartesianGrid strokeDasharray="3 3" stroke="#333333" opacity={0.2} />
                          <XAxis dataKey="month" stroke="#999999" style={{ fontSize: "12px" }} />
                          <YAxis stroke="#999999" style={{ fontSize: "12px" }} />
                          <Tooltip content={<CustomTooltip />} />
                          <Legend
                            wrapperStyle={{ fontSize: "12px", paddingTop: "16px" }}
                            iconType="line"
                          />
                          <Area
                            type="monotone"
                            dataKey="gold"
                            stroke="#F5A623"
                            fillOpacity={1}
                            fill="url(#goldGradient)"
                            name="Gold"
                            strokeWidth={2}
                          />
                          <Area
                            type="monotone"
                            dataKey="diamond"
                            stroke="#A78BFA"
                            fillOpacity={1}
                            fill="url(#diamondGradient)"
                            name="Diamond"
                            strokeWidth={2}
                          />
                          <Area
                            type="monotone"
                            dataKey="silver"
                            stroke="#06B6D4"
                            fillOpacity={1}
                            fill="url(#silverGradient)"
                            name="Silver"
                            strokeWidth={2}
                          />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>

                {/* Top Selling Designs */}
                <Card>
                  <CardHeader title="Top Selling Designs" subtitle="Performance this month" />
                  <CardContent className="p-0">
                    <div className="divide-y divide-gray-800">
                      {topSellingDesigns.map((design, idx) => (
                        <div
                          key={idx}
                          className="px-6 py-4 hover:bg-gray-900 hover:bg-opacity-30 transition-colors"
                        >
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-4">
                              <span className="text-2xl">{design.emoji}</span>
                              <div>
                                <p className="text-white font-medium">{design.name}</p>
                                <p className="text-xs text-gray-400">
                                  {design.category}
                                </p>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="text-white font-semibold">
                                {design.revenue}
                              </p>
                              <p className="text-xs text-gray-400">
                                {design.sold} sold
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="w-32 bg-gray-800 rounded-full h-1.5">
                              <div
                                className="bg-gradient-to-r from-[#4ADE80] to-[#06B6D4] h-1.5 rounded-full"
                                style={{
                                  width: `${(design.sold / 350) * 100}%`,
                                }}
                              />
                            </div>
                            <span
                              className={`text-xs font-semibold flex items-center gap-1 ${
                                design.trend > 0
                                  ? "text-[#4ADE80]"
                                  : "text-[#EF4444]"
                              }`}
                            >
                              {design.trend > 0 ? "↑" : "↓"}{" "}
                              {Math.abs(design.trend)}%
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Store Performance */}
                <Card>
                  <CardHeader title="Store Performance" subtitle="Sales target vs actual" />
                  <CardContent className="p-0">
                    <div className="space-y-4 p-6">
                      {storePerformance.map((store, idx) => (
                        <div key={idx} className="border border-gray-800 rounded-lg p-4">
                          <div className="flex justify-between items-start mb-3">
                            <div>
                              <p className="text-white font-semibold">
                                {store.name}
                              </p>
                              <p className="text-2xl font-bold text-[#4ADE80] mt-1">
                                {store.sales}
                              </p>
                            </div>
                            <div className="text-right">
                              <p className="text-xs text-gray-400 mb-1">
                                Target Progress
                              </p>
                              <p className="text-lg font-bold text-white">
                                {store.targetPercent}%
                              </p>
                            </div>
                          </div>
                          <div className="w-full bg-gray-800 rounded-full h-2 mb-4">
                            <div
                              className="bg-gradient-to-r from-[#F5A623] to-[#A78BFA] h-2 rounded-full"
                              style={{ width: `${store.targetPercent}%` }}
                            />
                          </div>
                          <div className="grid grid-cols-2 gap-4 text-xs">
                            <div className="bg-gray-900 bg-opacity-50 rounded-lg p-2">
                              <p className="text-gray-400">Footfall</p>
                              <p className="text-white font-semibold">
                                {store.footfall.toLocaleString()}
                              </p>
                            </div>
                            <div className="bg-gray-900 bg-opacity-50 rounded-lg p-2">
                              <p className="text-gray-400">Conversion</p>
                              <p className="text-white font-semibold">
                                {store.conversion}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* RIGHT COLUMN */}
              <div className="space-y-8">
                {/* Live Gold Price */}
                <Card>
                  <CardHeader
                    title="Live Gold Price"
                    subtitle="Intraday movement"
                  />
                  <CardContent>
                    <div style={{ width: "100%", height: 240 }}>
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart
                          data={goldPriceData}
                          margin={{ top: 10, right: 20, left: 0, bottom: 0 }}
                        >
                          <CartesianGrid
                            strokeDasharray="3 3"
                            stroke="#333333"
                            opacity={0.2}
                          />
                          <XAxis
                            dataKey="time"
                            stroke="#999999"
                            style={{ fontSize: "11px" }}
                          />
                          <YAxis
                            stroke="#999999"
                            style={{ fontSize: "11px" }}
                          />
                          <Tooltip content={<GoldPriceTooltip />} />
                          <Line
                            type="monotone"
                            dataKey="price"
                            stroke="#F5A623"
                            dot={false}
                            strokeWidth={2}
                            isAnimationActive={false}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                    <div className="grid grid-cols-2 gap-3 mt-4 pt-4 border-t border-gray-800">
                      <div className="bg-gray-900 bg-opacity-50 rounded-lg p-2">
                        <p className="text-xs text-gray-400">Day High</p>
                        <p className="text-lg font-bold text-white">₹7282</p>
                      </div>
                      <div className="bg-gray-900 bg-opacity-50 rounded-lg p-2">
                        <p className="text-xs text-gray-400">Day Low</p>
                        <p className="text-lg font-bold text-white">₹7242</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Inventory Mix */}
                <Card>
                  <CardHeader title="Inventory Mix" subtitle="By metal composition" />
                  <CardContent>
                    <div style={{ width: "100%", height: 240 }}>
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={inventoryMixData}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={90}
                            paddingAngle={2}
                            dataKey="value"
                          >
                            {inventoryMixData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Pie>
                          <Tooltip
                            contentStyle={{
                              backgroundColor: "#000000",
                              border: "1px solid #444444",
                              borderRadius: "8px",
                            }}
                            formatter={(value) => `${value}%`}
                          />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                    <div className="space-y-2 mt-4 pt-4 border-t border-gray-800">
                      {inventoryMixData.map((item, idx) => (
                        <div key={idx} className="flex justify-between text-xs">
                          <div className="flex items-center gap-2">
                            <div
                              className="w-3 h-3 rounded-full"
                              style={{ backgroundColor: item.color }}
                            />
                            <span className="text-gray-300">{item.name}</span>
                          </div>
                          <span className="text-white font-semibold">
                            {item.value}%
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Dead Stock Alerts */}
                <Card>
                  <CardHeader
                    title="Dead Stock Alerts"
                    subtitle="Items aging in inventory"
                  />
                  <CardContent className="p-0">
                    <div className="divide-y divide-gray-800">
                      {deadStockAlerts.map((item, idx) => (
                        <div
                          key={idx}
                          className="px-6 py-3 hover:bg-gray-900 hover:bg-opacity-30 transition-colors"
                        >
                          <div className="flex items-start justify-between gap-2 mb-1">
                            <p className="text-sm text-white font-medium">
                              {item.name}
                            </p>
                            <span className="px-2 py-1 bg-[#EF4444] bg-opacity-20 text-[#EF4444] text-xs font-semibold rounded">
                              {item.agingDays}d
                            </span>
                          </div>
                          <div className="flex justify-between text-xs text-gray-400">
                            <span>{item.value}</span>
                            <span>{item.weight}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Pulse */}
                <Card>
                  <CardHeader title="Quick Pulse" subtitle="Compliance & aging" />
                  <CardContent className="space-y-4">
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wide mb-3">
                        Compliance Status
                      </p>
                      {quickPulseAlerts.compliance.map((alert, idx) => (
                        <div
                          key={idx}
                          className="flex items-center justify-between mb-2 pb-2 border-b border-gray-800 last:border-0"
                        >
                          <span className="text-sm text-gray-300">
                            {alert.label}
                          </span>
                          <div
                            className={`text-xs font-semibold px-2 py-1 rounded ${
                              alert.status === "clear"
                                ? "bg-[#4ADE80] bg-opacity-20 text-[#4ADE80]"
                                : alert.status === "warning"
                                  ? "bg-[#F5A623] bg-opacity-20 text-[#F5A623]"
                                  : "bg-[#A78BFA] bg-opacity-20 text-[#A78BFA]"
                            }`}
                          >
                            {alert.count}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4 border-t border-gray-800">
                      <p className="text-xs text-gray-400 uppercase tracking-wide mb-3">
                        Receivables Aging
                      </p>
                      <div className="space-y-2">
                        {receivablesAging.map((bucket, idx) => (
                          <div key={idx}>
                            <div className="flex justify-between text-xs mb-1">
                              <span className="text-gray-300">{bucket.bucket} days</span>
                              <span className="text-white font-semibold">
                                {bucket.amount}
                              </span>
                            </div>
                            <div className="w-full bg-gray-800 rounded-full h-1.5">
                              <div
                                className="bg-gradient-to-r from-[#06B6D4] to-[#4ADE80] h-1.5 rounded-full"
                                style={{ width: `${bucket.percent}%` }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* AI Insights */}
            <div className="mb-8">
              <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-[#A78BFA] from-0% via-[#4ADE80] via-50% to-[#06B6D4] to-100% p-px">
                <div className="bg-[#1a1a1a] rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-white tracking-tight mb-6">
                    AI Insights
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {aiInsights.map((insight, idx) => (
                      <div
                        key={idx}
                        className="bg-gradient-to-br from-gray-900 to-gray-950 rounded-xl p-4 border border-gray-800"
                      >
                        <p className="text-2xl mb-2">{insight.icon}</p>
                        <h4 className="text-sm font-semibold text-white mb-2">
                          {insight.title}
                        </h4>
                        <p className="text-xs text-gray-400">
                          {insight.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <footer className="text-center text-xs text-gray-500 py-8 border-t border-gray-800">
              <p>
                JewelAI Dashboard · Powered by CaratSense
              </p>
            </footer>
    </div>
  );
}

export default Dashboard;
