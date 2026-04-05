"use client";

import { useState } from "react";
import Card, { CardContent, CardHeader } from "@/components/ui/Card";
import { KPICard } from "@/components/ui/KPICard";
import {
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
} from "recharts";
import {
  Download,
  TrendingUp,
  TrendingDown,
  MessageSquare,
} from "lucide-react";

const reportData = {
  salesByStore: [
    { store: "Mumbai HQ", current: 2450000, previous: 2100000 },
    { store: "Delhi Central", current: 1850000, previous: 1680000 },
    { store: "Bangalore East", current: 1620000, previous: 1450000 },
    { store: "Hyderabad Main", current: 1280000, previous: 1150000 },
    { store: "Pune Downtown", current: 980000, previous: 850000 },
  ],
  salesByCategory: [
    { month: "Jan", rings: 450000, necklaces: 680000, earrings: 520000, bangles: 380000 },
    { month: "Feb", rings: 520000, necklaces: 720000, earrings: 580000, bangles: 420000 },
    { month: "Mar", rings: 580000, necklaces: 850000, earrings: 620000, bangles: 480000 },
    { month: "Apr", rings: 620000, necklaces: 920000, earrings: 680000, bangles: 520000 },
  ],
  yoyComparison: [
    { category: "Gold Coins", y2024: 850000, y2025: 950000 },
    { category: "Rings", y2024: 1200000, y2025: 1450000 },
    { category: "Necklaces", y2024: 1800000, y2025: 2100000 },
    { category: "Earrings", y2024: 950000, y2025: 1150000 },
    { category: "Bangles", y2024: 680000, y2025: 850000 },
  ],
  salespersonPerformance: [
    {
      rank: 1,
      name: "Rajesh Kumar",
      sales: "₹28,50,000",
      target: "₹25,00,000",
      achievement: "114%",
    },
    {
      rank: 2,
      name: "Priya Sharma",
      sales: "₹24,20,000",
      target: "₹25,00,000",
      achievement: "97%",
    },
    {
      rank: 3,
      name: "Vikram Singh",
      sales: "₹22,80,000",
      target: "₹25,00,000",
      achievement: "91%",
    },
    {
      rank: 4,
      name: "Anjali Patel",
      sales: "₹21,50,000",
      target: "₹25,00,000",
      achievement: "86%",
    },
    {
      rank: 5,
      name: "Deepak Verma",
      sales: "₹19,80,000",
      target: "₹25,00,000",
      achievement: "79%",
    },
  ],
  aiInsights: [
    {
      icon: "📈",
      title: "Necklaces Momentum",
      description:
        "Necklace sales up 34% YoY, driven by bridal collection. Spring season is peak demand.",
      confidence: "High",
    },
    {
      icon: "💰",
      title: "Gold Coin Surge",
      description:
        "Gold coins consistently strong. Consider expanding inventory for summer festival season.",
      confidence: "High",
    },
    {
      icon: "⚠️",
      title: "Earring Growth Plateau",
      description:
        "Earrings growing slower than expected. Recommend new designs targeting 18-25 age group.",
      confidence: "Medium",
    },
  ],
};

export default function ReportsPage() {
  const [selectedReport, setSelectedReport] = useState<string | null>(null);

  return (
    <div className="p-6 md:p-8 max-w-7xl mx-auto">
      <div className="space-y-6 pb-8">
            {/* Page Header */}
            <div>
              <h1 className="text-3xl font-bold text-[#2D2D2D] tracking-tight">
                MIS Reports
              </h1>
              <p className="text-gray-600 mt-1">
                Executive intelligence and business analytics
              </p>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <KPICard
                icon="💹"
                label="Total Sales"
                value="₹8.18 Cr"
                change={18}
                changeType="positive"
                subtitle="This month"
              />
              <KPICard
                icon="🎯"
                label="Target Achievement"
                value="102%"
                change={2}
                changeType="positive"
                subtitle="Monthly goal"
              />
              <KPICard
                icon="📊"
                label="Avg Transaction"
                value="₹45,280"
                change={8}
                changeType="positive"
                subtitle="Per order"
              />
              <KPICard
                icon="🏪"
                label="Store Performance"
                value="5/5 Stores"
                subtitle="All performing"
              />
            </div>

            {/* Report Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  icon: "📋",
                  title: "Daily Summary",
                  description: "Real-time sales & inventory",
                },
                {
                  icon: "📅",
                  title: "Weekly Digest",
                  description: "Weekly performance review",
                },
                {
                  icon: "📊",
                  title: "Monthly P&L",
                  description: "Revenue & expenses",
                },
                {
                  icon: "📈",
                  title: "Quarterly Review",
                  description: "Trend & growth analysis",
                },
              ].map((report, idx) => (
                <div
                  key={idx}
                  className="cursor-pointer transition-colors"
                  onClick={() => setSelectedReport(report.title)}
                >
                  <Card className="hover:border-[#4ADE80] transition-colors h-full">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="text-3xl mb-3">{report.icon}</div>
                      <h3 className="text-lg font-semibold text-white">
                        {report.title}
                      </h3>
                      <p className="text-sm text-gray-400 mt-1">
                        {report.description}
                      </p>
                      <button className="mt-auto pt-4 px-4 py-2 bg-[#4ADE80] text-black rounded-lg font-semibold text-sm hover:bg-green-400 transition-colors w-full">
                        Download
                      </button>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>

            {/* Sales by Store */}
            <Card>
              <CardHeader title="Sales by Store Comparison" />
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart
                    data={reportData.salesByStore}
                    layout="vertical"
                    margin={{ top: 5, right: 30, left: 150, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                    <XAxis type="number" stroke="#666" />
                    <YAxis dataKey="store" type="category" stroke="#666" width={140} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#1a1a1a",
                        border: "1px solid #333",
                        borderRadius: "8px",
                        color: "#fff",
                      }}
                    />
                    <Legend />
                    <Bar
                      dataKey="current"
                      fill="#4ADE80"
                      radius={[0, 8, 8, 0]}
                      name="Current"
                    />
                    <Bar
                      dataKey="previous"
                      fill="#A78BFA"
                      radius={[0, 8, 8, 0]}
                      name="Previous"
                      opacity={0.6}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Sales by Category Trend */}
            <Card>
              <CardHeader title="Sales by Category Trend" />
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={reportData.salesByCategory}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                    <XAxis dataKey="month" stroke="#666" />
                    <YAxis stroke="#666" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#1a1a1a",
                        border: "1px solid #333",
                        borderRadius: "8px",
                        color: "#fff",
                      }}
                    />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="rings"
                      stroke="#4ADE80"
                      strokeWidth={2}
                      dot={{ fill: "#4ADE80", r: 4 }}
                    />
                    <Line
                      type="monotone"
                      dataKey="necklaces"
                      stroke="#A78BFA"
                      strokeWidth={2}
                      dot={{ fill: "#A78BFA", r: 4 }}
                    />
                    <Line
                      type="monotone"
                      dataKey="earrings"
                      stroke="#06B6D4"
                      strokeWidth={2}
                      dot={{ fill: "#06B6D4", r: 4 }}
                    />
                    <Line
                      type="monotone"
                      dataKey="bangles"
                      stroke="#F5A623"
                      strokeWidth={2}
                      dot={{ fill: "#F5A623", r: 4 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* YoY Comparison */}
            <Card>
              <CardHeader title="Year-on-Year Comparison" />
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={reportData.yoyComparison}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                    <XAxis dataKey="category" stroke="#666" />
                    <YAxis stroke="#666" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#1a1a1a",
                        border: "1px solid #333",
                        borderRadius: "8px",
                        color: "#fff",
                      }}
                    />
                    <Legend />
                    <Bar
                      dataKey="y2024"
                      fill="#A78BFA"
                      radius={[8, 8, 0, 0]}
                      name="2024"
                    />
                    <Bar
                      dataKey="y2025"
                      fill="#4ADE80"
                      radius={[8, 8, 0, 0]}
                      name="2025"
                    />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Salesperson Performance */}
            <Card>
              <CardHeader title="Salesperson Performance Leaderboard" />
              <CardContent>
                <div className="space-y-3">
                  {reportData.salespersonPerformance.map((person) => (
                    <div
                      key={person.rank}
                      className="p-4 bg-gray-800/20 rounded-lg"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 flex-1">
                          <div className="w-8 h-8 rounded-full bg-[#4ADE80] flex items-center justify-center font-bold text-black text-sm">
                            {person.rank}
                          </div>
                          <div className="flex-1">
                            <p className="text-sm font-semibold text-white">
                              {person.name}
                            </p>
                            <div className="flex gap-3 mt-1 text-xs">
                              <span className="text-gray-400">
                                Target: {person.target}
                              </span>
                              <span className="text-gray-400">
                                Actual: {person.sales}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <span
                            className={`inline-block px-3 py-1 rounded-full text-sm font-bold ${
                              parseFloat(person.achievement) >= 100
                                ? "bg-[#4ADE80]/20 text-[#4ADE80]"
                                : parseFloat(person.achievement) >= 90
                                  ? "bg-[#06B6D4]/20 text-[#06B6D4]"
                                  : "bg-[#F5A623]/20 text-[#F5A623]"
                            }`}
                          >
                            {person.achievement}
                          </span>
                        </div>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-2 mt-3">
                        <div
                          className="bg-[#4ADE80] h-2 rounded-full"
                          style={{
                            width: `${Math.min(
                              parseFloat(person.achievement),
                              100
                            )}%`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* AI-Generated Insights */}
            <Card>
              <CardHeader title="AI-Generated Insights" />
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                  {reportData.aiInsights.map((insight, idx) => (
                    <div
                      key={idx}
                      className="p-4 bg-gradient-to-br from-gray-800/30 to-gray-800/10 rounded-lg border border-gray-800"
                    >
                      <div className="text-2xl mb-2">{insight.icon}</div>
                      <h3 className="text-sm font-semibold text-white mb-2">
                        {insight.title}
                      </h3>
                      <p className="text-xs text-gray-400 mb-3">
                        {insight.description}
                      </p>
                      <span
                        className={`inline-block px-2 py-1 rounded text-xs font-semibold ${
                          insight.confidence === "High"
                            ? "bg-[#4ADE80]/20 text-[#4ADE80]"
                            : "bg-[#F5A623]/20 text-[#F5A623]"
                        }`}
                      >
                        {insight.confidence} Confidence
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Export & NLQ */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Export Buttons */}
              <Card>
                <CardHeader title="Export Reports" />
                <CardContent>
                  <div className="space-y-3">
                    <button className="w-full px-4 py-3 bg-gradient-to-r from-[#4ADE80] to-green-400 text-black rounded-lg font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2">
                      <Download className="w-4 h-4" />
                      Download as PDF
                    </button>
                    <button className="w-full px-4 py-3 bg-gradient-to-r from-[#A78BFA] to-purple-400 text-white rounded-lg font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2">
                      <Download className="w-4 h-4" />
                      Download as Excel
                    </button>
                    <button className="w-full px-4 py-3 bg-gradient-to-r from-[#06B6D4] to-cyan-400 text-black rounded-lg font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2">
                      <MessageSquare className="w-4 h-4" />
                      Share as WhatsApp Digest
                    </button>
                  </div>
                </CardContent>
              </Card>

              {/* Natural Language Query */}
              <Card>
                <CardHeader title="Natural Language Query" />
                <CardContent>
                  <div className="space-y-3">
                    <p className="text-xs text-gray-400">
                      Ask questions about your data in plain English
                    </p>
                    <input
                      type="text"
                      placeholder="e.g., How did Diwali sales compare to last year?"
                      className="w-full px-4 py-2 rounded-lg bg-gray-800/30 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-[#4ADE80] text-sm"
                    />
                    <div className="text-xs text-gray-400 p-3 bg-gray-800/20 rounded-lg">
                      <p className="font-semibold text-white mb-2">
                        Example queries:
                      </p>
                      <ul className="space-y-1">
                        <li>
                          • What's our top performing product category this year?
                        </li>
                        <li>• Which store needs inventory replenishment?</li>
                        <li>• Show me customer acquisition cost by channel.</li>
                      </ul>
                    </div>
                    <button className="w-full px-4 py-2 bg-[#4ADE80] text-black rounded-lg font-semibold hover:bg-green-400 transition-colors">
                      Ask
                    </button>
                  </div>
                </CardContent>
              </Card>
            </div>
      </div>
    </div>
  );
}
