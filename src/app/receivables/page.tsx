"use client";

import { useState } from "react";
import Card, { CardContent, CardHeader } from "@/components/ui/Card";
import { KPICard } from "@/components/ui/KPICard";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {
  AlertCircle,
  TrendingDown,
  Phone,
  DollarSign,
} from "lucide-react";

const receivablesData = {
  totalOutstanding: {
    amount: 4850000,
    trend: -8.5,
    daysOutstanding: 34,
  },
  agingAnalysis: [
    { range: "0-30", days0to30: 1200000, days30to60: 0, days60to90: 0, days90plus: 0 },
    { range: "30-60", days0to30: 1200000, days30to60: 850000, days60to90: 0, days90plus: 0 },
    { range: "60-90", days0to30: 1200000, days30to60: 850000, days60to90: 620000, days90plus: 0 },
    { range: "90+", days0to30: 1200000, days30to60: 850000, days60to90: 620000, days90plus: 1180000 },
  ],
  creditScoreDistribution: [
    { range: "800+", count: 85, percentage: 35 },
    { range: "700-799", count: 52, percentage: 21 },
    { range: "600-699", count: 48, percentage: 20 },
    { range: "<600", count: 59, percentage: 24 },
  ],
  topDebtors: [
    {
      id: 1,
      retailer: "Sharma Jewelry Store",
      outstanding: 450000,
      daysOverdue: 85,
      paymentProbability: 35,
      suggestedAction: "Follow-up call + SMS",
    },
    {
      id: 2,
      retailer: "Patel Enterprises",
      outstanding: 380000,
      daysOverdue: 72,
      paymentProbability: 48,
      suggestedAction: "Email reminder",
    },
    {
      id: 3,
      retailer: "Singh Gold House",
      outstanding: 320000,
      daysOverdue: 65,
      paymentProbability: 62,
      suggestedAction: "Call to negotiate",
    },
    {
      id: 4,
      retailer: "Gupta Designs",
      outstanding: 280000,
      daysOverdue: 58,
      paymentProbability: 71,
      suggestedAction: "Gentle reminder",
    },
    {
      id: 5,
      retailer: "Iyer Collections",
      outstanding: 250000,
      daysOverdue: 48,
      paymentProbability: 82,
      suggestedAction: "Payment confirmation",
    },
  ],
  automatedReminderStatus: [
    {
      id: 1,
      retailer: "Sharma Jewelry Store",
      sent: 5,
      responded: 1,
      collected: 0,
      lastAttempt: "Apr 3",
    },
    {
      id: 2,
      retailer: "Patel Enterprises",
      sent: 4,
      responded: 2,
      collected: 1,
      lastAttempt: "Apr 4",
    },
    {
      id: 3,
      retailer: "Singh Gold House",
      sent: 3,
      responded: 3,
      collected: 1,
      lastAttempt: "Apr 5",
    },
  ],
  dynamicCreditLimits: [
    {
      id: 1,
      retailer: "Sharma Jewelry Store",
      currentLimit: 500000,
      recommendedLimit: 300000,
      change: "-40%",
      reason: "Poor payment history",
    },
    {
      id: 2,
      retailer: "Patel Enterprises",
      currentLimit: 800000,
      recommendedLimit: 650000,
      change: "-18%",
      reason: "Missed payments",
    },
    {
      id: 3,
      retailer: "Singh Gold House",
      currentLimit: 600000,
      recommendedLimit: 800000,
      change: "+33%",
      reason: "Consistent payments",
    },
  ],
  collectionTrendData: [
    { month: "Jan", outstanding: 5200000, collected: 1250000 },
    { month: "Feb", outstanding: 5150000, collected: 1380000 },
    { month: "Mar", outstanding: 5050000, collected: 1420000 },
    { month: "Apr", outstanding: 4850000, collected: 1580000 },
  ],
};

export default function ReceivablesPage() {
  const [expandedDebtor, setExpandedDebtor] = useState<number | null>(null);

  return (
    <div className="p-6 md:p-8 max-w-7xl mx-auto">
      <div className="space-y-6 pb-8">
            {/* Page Header */}
            <div>
              <h1 className="text-3xl font-bold text-[#2D2D2D] tracking-tight">
                Receivables & Credit Management
              </h1>
              <p className="text-gray-600 mt-1">
                Outstanding tracking, aging analysis, and credit scoring
              </p>
            </div>

            {/* Top KPIs */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <KPICard
                icon="💰"
                label="Total Outstanding"
                value="₹48.5 L"
                change={8.5}
                changeType="positive"
                subtitle="All retailers"
              />
              <KPICard
                icon="📊"
                label="Avg Days Outstanding"
                value="34 days"
                change={3}
                changeType="positive"
                subtitle="Improving trend"
              />
              <KPICard
                icon="🏢"
                label="Active Credit Lines"
                value="245"
                change={12}
                changeType="positive"
                subtitle="This month"
              />
              <KPICard
                icon="📈"
                label="Collection Rate"
                value="87%"
                change={5}
                changeType="positive"
                subtitle="On-time collections"
              />
            </div>

            {/* Outstanding Summary & Trend */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Total Outstanding Card */}
              <Card>
                <CardHeader title="Outstanding Summary" />
                <CardContent>
                  <div className="text-center py-6">
                    <div className="text-4xl font-bold text-white mb-2">
                      ₹{(receivablesData.totalOutstanding.amount / 100000).toFixed(1)}L
                    </div>
                    <div className="flex items-center justify-center gap-2 mb-4">
                      <TrendingDown className="w-4 h-4 text-[#4ADE80]" />
                      <span className="text-sm font-semibold text-[#4ADE80]">
                        {receivablesData.totalOutstanding.trend}% this month
                      </span>
                    </div>
                    <div className="text-sm text-gray-400">
                      {receivablesData.totalOutstanding.daysOutstanding} days
                      average outstanding
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mt-6 pt-6 border-t border-gray-800">
                    <div className="text-center">
                      <p className="text-xs text-gray-400">Current Month</p>
                      <p className="text-lg font-bold text-white mt-1">₹1.58 Cr</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xs text-gray-400">Prev Month</p>
                      <p className="text-lg font-bold text-white mt-1">₹1.42 Cr</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Aging Analysis */}
              <Card className="lg:col-span-2">
                <CardHeader title="Aging Analysis" subtitle="Days overdue distribution" />
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={receivablesData.agingAnalysis}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                      <XAxis dataKey="range" stroke="#666" />
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
                        dataKey="days0to30"
                        fill="#4ADE80"
                        radius={[8, 8, 0, 0]}
                        name="0-30 days"
                      />
                      <Bar
                        dataKey="days30to60"
                        fill="#06B6D4"
                        radius={[8, 8, 0, 0]}
                        name="30-60 days"
                      />
                      <Bar
                        dataKey="days60to90"
                        fill="#F5A623"
                        radius={[8, 8, 0, 0]}
                        name="60-90 days"
                      />
                      <Bar
                        dataKey="days90plus"
                        fill="#EF4444"
                        radius={[8, 8, 0, 0]}
                        name="90+ days"
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            {/* Collection Trend */}
            <Card>
              <CardHeader title="Collection Trend" subtitle="Outstanding vs collections" />
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={receivablesData.collectionTrendData}>
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
                      dataKey="outstanding"
                      stroke="#EF4444"
                      strokeWidth={2}
                      dot={{ fill: "#EF4444", r: 4 }}
                      name="Outstanding"
                    />
                    <Line
                      type="monotone"
                      dataKey="collected"
                      stroke="#4ADE80"
                      strokeWidth={2}
                      dot={{ fill: "#4ADE80", r: 4 }}
                      name="Collected"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Credit Score Distribution */}
            <Card>
              <CardHeader title="Credit Score Distribution" />
              <CardContent>
                <div className="space-y-3">
                  {receivablesData.creditScoreDistribution.map((item, idx) => (
                    <div key={idx} className="p-3 bg-gray-800/20 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-semibold text-white">
                          {item.range}
                        </span>
                        <span className="text-sm text-gray-400">
                          {item.count} retailers ({item.percentage}%)
                        </span>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full ${
                            item.range === "800+"
                              ? "bg-[#4ADE80]"
                              : item.range === "700-799"
                                ? "bg-[#06B6D4]"
                                : item.range === "600-699"
                                  ? "bg-[#F5A623]"
                                  : "bg-[#EF4444]"
                          }`}
                          style={{ width: `${item.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Top Debtors */}
            <Card>
              <CardHeader
                title="Top Debtors"
                subtitle="Highest outstanding amounts"
              />
              <CardContent>
                <div className="space-y-3">
                  {receivablesData.topDebtors.map((debtor) => (
                    <div
                      key={debtor.id}
                      className="p-4 bg-gray-800/20 rounded-lg cursor-pointer hover:bg-gray-800/40 transition-colors"
                      onClick={() =>
                        setExpandedDebtor(
                          expandedDebtor === debtor.id ? null : debtor.id
                        )
                      }
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <p className="text-sm font-semibold text-white">
                            {debtor.retailer}
                          </p>
                          <div className="flex items-center gap-3 mt-2">
                            <span className="text-sm font-bold text-white">
                              ₹{debtor.outstanding.toLocaleString()}
                            </span>
                            <span
                              className={`text-xs px-2 py-1 rounded ${
                                debtor.daysOverdue > 90
                                  ? "bg-[#EF4444]/20 text-[#EF4444]"
                                  : debtor.daysOverdue > 60
                                    ? "bg-[#F5A623]/20 text-[#F5A623]"
                                    : "bg-[#06B6D4]/20 text-[#06B6D4]"
                              }`}
                            >
                              {debtor.daysOverdue} days overdue
                            </span>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-xs text-gray-400 mb-2">
                            Payment Probability
                          </p>
                          <div className="flex items-center gap-2">
                            <div className="w-16 bg-gray-800 rounded-full h-2">
                              <div
                                className={`h-2 rounded-full ${
                                  debtor.paymentProbability >= 70
                                    ? "bg-[#4ADE80]"
                                    : debtor.paymentProbability >= 50
                                      ? "bg-[#06B6D4]"
                                      : "bg-[#EF4444]"
                                }`}
                                style={{
                                  width: `${debtor.paymentProbability}%`,
                                }}
                              />
                            </div>
                            <span className="text-sm font-bold text-white w-12">
                              {debtor.paymentProbability}%
                            </span>
                          </div>
                        </div>
                      </div>

                      {expandedDebtor === debtor.id && (
                        <div className="mt-4 pt-4 border-t border-gray-700">
                          <p className="text-xs text-gray-400 mb-2">
                            Suggested Action
                          </p>
                          <p className="text-sm font-semibold text-white mb-3">
                            {debtor.suggestedAction}
                          </p>
                          <div className="flex gap-2">
                            <button className="flex-1 px-3 py-1 bg-[#4ADE80] text-black rounded text-xs font-semibold hover:bg-green-400 transition-colors">
                              Call Now
                            </button>
                            <button className="flex-1 px-3 py-1 bg-gray-800/50 text-white rounded text-xs font-semibold hover:bg-gray-800 transition-colors">
                              Send Reminder
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Automated Reminder Status */}
            <Card>
              <CardHeader title="Automated Reminder Status" />
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-800">
                        <th className="text-left py-2 px-3 font-semibold text-gray-300">
                          Retailer
                        </th>
                        <th className="text-center py-2 px-3 font-semibold text-gray-300">
                          Sent
                        </th>
                        <th className="text-center py-2 px-3 font-semibold text-gray-300">
                          Responded
                        </th>
                        <th className="text-center py-2 px-3 font-semibold text-gray-300">
                          Collected
                        </th>
                        <th className="text-left py-2 px-3 font-semibold text-gray-300">
                          Last Attempt
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-800">
                      {receivablesData.automatedReminderStatus.map((item) => (
                        <tr key={item.id} className="hover:bg-gray-800/20">
                          <td className="py-2 px-3 text-white font-semibold">
                            {item.retailer}
                          </td>
                          <td className="py-2 px-3 text-center text-white">
                            {item.sent}
                          </td>
                          <td className="py-2 px-3 text-center">
                            <span className="text-[#06B6D4] font-bold">
                              {item.responded}
                            </span>
                          </td>
                          <td className="py-2 px-3 text-center">
                            <span className="text-[#4ADE80] font-bold">
                              {item.collected}
                            </span>
                          </td>
                          <td className="py-2 px-3 text-gray-400">
                            {item.lastAttempt}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* Dynamic Credit Limit Recommendations */}
            <Card>
              <CardHeader title="Dynamic Credit Limit Recommendations" />
              <CardContent>
                <div className="space-y-3">
                  {receivablesData.dynamicCreditLimits.map((item) => (
                    <div key={item.id} className="p-4 bg-gray-800/20 rounded-lg">
                      <div className="flex items-start justify-between mb-3">
                        <p className="text-sm font-semibold text-white">
                          {item.retailer}
                        </p>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            item.change.includes("-")
                              ? "bg-[#EF4444]/20 text-[#EF4444]"
                              : "bg-[#4ADE80]/20 text-[#4ADE80]"
                          }`}
                        >
                          {item.change}
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-4 text-xs">
                        <div>
                          <p className="text-gray-400">Current Limit</p>
                          <p className="text-white font-bold mt-1">
                            ₹{(item.currentLimit / 100000).toFixed(1)}L
                          </p>
                        </div>
                        <div>
                          <p className="text-gray-400">Recommended Limit</p>
                          <p className="text-white font-bold mt-1">
                            ₹{(item.recommendedLimit / 100000).toFixed(1)}L
                          </p>
                        </div>
                      </div>

                      <p className="text-xs text-gray-400 mt-3">
                        Reason: {item.reason}
                      </p>

                      <button className="mt-3 px-4 py-2 bg-[#4ADE80] text-black rounded-lg text-xs font-semibold hover:bg-green-400 transition-colors w-full">
                        Update Limit
                      </button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
      </div>
    </div>
  );
}
