"use client";

import { useState } from "react";
import Card, { CardContent, CardHeader } from "@/components/ui/Card";
import { KPICard } from "@/components/ui/KPICard";
import {
  PieChart,
  Pie,
  Cell,
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
import { AlertCircle, Heart, TrendingDown, MessageCircle } from "lucide-react";

const crmData = {
  segments: [
    { name: "VIP", value: 450, revenue: "₹4.5Cr" },
    { name: "Regular", value: 2180, revenue: "₹8.2Cr" },
    { name: "New", value: 340, revenue: "₹85L" },
    { name: "Dormant", value: 820, revenue: "₹2.1Cr" },
  ],
  churnRisks: [
    {
      id: 1,
      name: "Priya Sharma",
      phone: "+91-98765-43210",
      lastPurchase: "180 days ago",
      ltv: 450000,
      riskScore: 92,
      lastItem: "Gold Necklace",
    },
    {
      id: 2,
      name: "Anjali Patel",
      phone: "+91-97654-32109",
      lastPurchase: "165 days ago",
      ltv: 320000,
      riskScore: 88,
      lastItem: "Diamond Ring",
    },
    {
      id: 3,
      name: "Meera Singh",
      phone: "+91-96543-21098",
      lastPurchase: "145 days ago",
      ltv: 285000,
      riskScore: 75,
      lastItem: "Gold Bangles",
    },
    {
      id: 4,
      name: "Neha Gupta",
      phone: "+91-95432-10987",
      lastPurchase: "120 days ago",
      ltv: 195000,
      riskScore: 68,
      lastItem: "Earrings Set",
    },
  ],
  activityFeed: [
    {
      id: 1,
      customer: "Rajesh Kumar",
      action: "Purchased Gold Coin",
      amount: "₹85,000",
      time: "2 hours ago",
    },
    {
      id: 2,
      customer: "Sneha Iyer",
      action: "Viewed Bridal Collection",
      amount: "-",
      time: "4 hours ago",
    },
    {
      id: 3,
      customer: "Vikram Singh",
      action: "Completed Payment",
      amount: "₹125,000",
      time: "6 hours ago",
    },
    {
      id: 4,
      customer: "Pooja Desai",
      action: "Returned Item",
      amount: "₹45,000",
      time: "1 day ago",
    },
  ],
  topCustomers: [
    {
      id: 1,
      name: "Rajesh Kumar",
      spent: 1250000,
      lastVisit: "5 days ago",
      nextOccasion: "Son's Wedding",
    },
    {
      id: 2,
      name: "Priya Bhat",
      spent: 890000,
      lastVisit: "12 days ago",
      nextOccasion: "Birthday",
    },
    {
      id: 3,
      name: "Deepak Verma",
      spent: 750000,
      lastVisit: "8 days ago",
      nextOccasion: "Anniversary",
    },
    {
      id: 4,
      name: "Anjali Mishra",
      spent: 620000,
      lastVisit: "15 days ago",
      nextOccasion: "Engagement",
    },
    {
      id: 5,
      name: "Sanjay Chopra",
      spent: 580000,
      lastVisit: "10 days ago",
      nextOccasion: "Diwali",
    },
    {
      id: 6,
      name: "Meera Nair",
      spent: 520000,
      lastVisit: "3 days ago",
      nextOccasion: "Baby Shower",
    },
    {
      id: 7,
      name: "Vikram Iyer",
      spent: 485000,
      lastVisit: "18 days ago",
      nextOccasion: "Housewarming",
    },
    {
      id: 8,
      name: "Neha Sharma",
      spent: 450000,
      lastVisit: "6 days ago",
      nextOccasion: "Graduation",
    },
    {
      id: 9,
      name: "Rohit Patel",
      spent: 420000,
      lastVisit: "14 days ago",
      nextOccasion: "Festival",
    },
    {
      id: 10,
      name: "Sneha Gupta",
      spent: 385000,
      lastVisit: "9 days ago",
      nextOccasion: "Wedding",
    },
  ],
  clvDistribution: [
    { range: "0-1L", count: 340 },
    { range: "1L-5L", count: 820 },
    { range: "5L-10L", count: 450 },
    { range: "10L-25L", count: 280 },
    { range: "25L+", count: 45 },
  ],
  dormantRecovery: [
    {
      id: 1,
      segment: "Used to buy monthly",
      count: 120,
      action: "Send festival offers",
    },
    {
      id: 2,
      segment: "Occasional buyer",
      count: 340,
      action: "Birthday special",
    },
    {
      id: 3,
      segment: "Last visited 6m+ ago",
      count: 180,
      action: "Win-back campaign",
    },
  ],
};

const chartColors = ["#4ADE80", "#A78BFA", "#06B6D4", "#F5A623"];

export default function CRMPage() {
  const [selectedSegment, setSelectedSegment] = useState<string | null>(null);

  return (
    <div className="p-6 md:p-8 max-w-7xl mx-auto">
      <div className="space-y-6 pb-8">
            {/* Page Header */}
            <div>
              <h1 className="text-3xl font-bold text-[#2D2D2D] tracking-tight">
                Unified CRM
              </h1>
              <p className="text-gray-600 mt-1">
                Customer intelligence and lifecycle management
              </p>
            </div>

            {/* Customer Count Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              <KPICard
                icon="👥"
                label="Total Customers"
                value="3,790"
                change={8}
                changeType="positive"
                subtitle="Active records"
              />
              <KPICard
                icon="💎"
                label="VIP Customers"
                value="450"
                change={12}
                changeType="positive"
                subtitle="High value"
              />
              <KPICard
                icon="⚡"
                label="Active This Month"
                value="1,240"
                change={15}
                changeType="positive"
                subtitle="Recent activity"
              />
              <KPICard
                icon="😴"
                label="Dormant"
                value="820"
                change={2}
                changeType="negative"
                subtitle="No activity"
              />
              <KPICard
                icon="⭐"
                label="New This Month"
                value="185"
                change={22}
                changeType="positive"
                subtitle="Fresh leads"
              />
            </div>

            {/* Customer Segments & CLV Distribution */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Segments Donut */}
              <Card className="lg:col-span-1">
                <CardHeader title="Customer Segments" />
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={crmData.segments}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={100}
                        paddingAngle={2}
                        dataKey="value"
                        onClick={(entry) => setSelectedSegment(entry.name || null)}
                        cursor="pointer"
                      >
                        {crmData.segments.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={chartColors[index % chartColors.length]}
                            opacity={
                              selectedSegment === null ||
                              selectedSegment === entry.name
                                ? 1
                                : 0.4
                            }
                          />
                        ))}
                      </Pie>
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "#1a1a1a",
                          border: "1px solid #333",
                          borderRadius: "8px",
                          color: "#fff",
                        }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="mt-4 space-y-2">
                    {crmData.segments.map((item, idx) => (
                      <div key={idx} className="flex justify-between text-sm">
                        <span className="text-gray-400">{item.name}</span>
                        <span className="text-white font-semibold">
                          {item.revenue}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* CLV Distribution */}
              <Card className="lg:col-span-2">
                <CardHeader title="Customer Lifetime Value Distribution" />
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={crmData.clvDistribution}>
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
                      <Bar
                        dataKey="count"
                        fill="#06B6D4"
                        radius={[8, 8, 0, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            {/* Churn Prediction */}
            <Card>
              <CardHeader
                title="Churn Prediction"
                subtitle="Customers likely to lapse soon"
              />
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-800">
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-300">
                          Customer Name
                        </th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-300">
                          Contact
                        </th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-300">
                          Last Purchase
                        </th>
                        <th className="text-right py-3 px-4 text-sm font-semibold text-gray-300">
                          Lifetime Value
                        </th>
                        <th className="text-center py-3 px-4 text-sm font-semibold text-gray-300">
                          Risk Score
                        </th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-300">
                          Last Item Bought
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-800">
                      {crmData.churnRisks.map((customer) => (
                        <tr key={customer.id} className="hover:bg-gray-800/20">
                          <td className="py-3 px-4 text-sm text-white font-semibold">
                            {customer.name}
                          </td>
                          <td className="py-3 px-4 text-sm text-gray-400">
                            {customer.phone}
                          </td>
                          <td className="py-3 px-4 text-sm text-gray-400">
                            {customer.lastPurchase}
                          </td>
                          <td className="py-3 px-4 text-sm text-white font-semibold text-right">
                            ₹{customer.ltv.toLocaleString()}
                          </td>
                          <td className="py-3 px-4 text-center">
                            <div className="flex items-center justify-center gap-2">
                              <span
                                className={`inline-block w-2 h-2 rounded-full ${
                                  customer.riskScore >= 80
                                    ? "bg-[#EF4444]"
                                    : "bg-[#F5A623]"
                                }`}
                              />
                              <span
                                className={`text-sm font-semibold ${
                                  customer.riskScore >= 80
                                    ? "text-[#EF4444]"
                                    : "text-[#F5A623]"
                                }`}
                              >
                                {customer.riskScore}%
                              </span>
                            </div>
                          </td>
                          <td className="py-3 px-4 text-sm text-gray-400">
                            {customer.lastItem}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity Feed & Top Customers Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Activity Feed */}
              <Card className="lg:col-span-1">
                <CardHeader title="Recent Activity Feed" />
                <CardContent>
                  <div className="space-y-4">
                    {crmData.activityFeed.map((activity) => (
                      <div key={activity.id} className="border-l-2 border-[#4ADE80] pl-4 pb-4">
                        <p className="text-sm font-semibold text-white">
                          {activity.customer}
                        </p>
                        <p className="text-sm text-gray-400 mt-1">
                          {activity.action}
                        </p>
                        {activity.amount !== "-" && (
                          <p className="text-sm font-semibold text-[#4ADE80] mt-1">
                            {activity.amount}
                          </p>
                        )}
                        <p className="text-xs text-gray-500 mt-2">
                          {activity.time}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Top Customers Table */}
              <Card className="lg:col-span-2">
                <CardHeader title="Top 10 Customers" />
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-gray-800">
                          <th className="text-left py-2 px-3 font-semibold text-gray-300">
                            Customer
                          </th>
                          <th className="text-right py-2 px-3 font-semibold text-gray-300">
                            Lifetime Spend
                          </th>
                          <th className="text-left py-2 px-3 font-semibold text-gray-300">
                            Last Visit
                          </th>
                          <th className="text-left py-2 px-3 font-semibold text-gray-300">
                            Next Occasion
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-800">
                        {crmData.topCustomers.map((customer) => (
                          <tr key={customer.id} className="hover:bg-gray-800/20">
                            <td className="py-2 px-3 text-white font-semibold">
                              {customer.name}
                            </td>
                            <td className="py-2 px-3 text-right text-white">
                              ₹{customer.spent.toLocaleString()}
                            </td>
                            <td className="py-2 px-3 text-gray-400">
                              {customer.lastVisit}
                            </td>
                            <td className="py-2 px-3 text-gray-400">
                              {customer.nextOccasion}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Duplicate Detection & Customer 360 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Duplicate Detection */}
              <Card>
                <CardHeader title="Duplicate Detection Alerts" />
                <CardContent>
                  <div className="space-y-3">
                    <div className="p-4 bg-amber-500/10 border border-amber-500/30 rounded-lg">
                      <div className="flex gap-3">
                        <AlertCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm font-semibold text-white">
                            Priya Sharma - Duplicate Entry
                          </p>
                          <p className="text-xs text-gray-400 mt-1">
                            Mobile +91-98765-43210 appears in 2 profiles
                          </p>
                          <button className="mt-2 px-2 py-1 text-xs bg-amber-500/20 text-amber-400 rounded hover:bg-amber-500/30">
                            Merge Records
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 bg-amber-500/10 border border-amber-500/30 rounded-lg">
                      <div className="flex gap-3">
                        <AlertCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm font-semibold text-white">
                            Rajesh Kumar - Possible Duplicate
                          </p>
                          <p className="text-xs text-gray-400 mt-1">
                            Similar phone number pattern detected (98% match)
                          </p>
                          <button className="mt-2 px-2 py-1 text-xs bg-amber-500/20 text-amber-400 rounded hover:bg-amber-500/30">
                            Review
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Customer 360 Preview */}
              <Card>
                <CardHeader title="Customer 360 - Priya Sharma" />
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-3 bg-gray-800/20 rounded-lg">
                      <p className="text-xs text-gray-400 mb-1">Total Spend</p>
                      <p className="text-lg font-bold text-white">₹8,50,000</p>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-3 bg-gray-800/20 rounded-lg">
                        <p className="text-xs text-gray-400 mb-1">Purchases</p>
                        <p className="text-lg font-bold text-white">24</p>
                      </div>
                      <div className="p-3 bg-gray-800/20 rounded-lg">
                        <p className="text-xs text-gray-400 mb-1">Avg Order</p>
                        <p className="text-lg font-bold text-white">₹35K</p>
                      </div>
                    </div>
                    <div className="border-t border-gray-800 pt-4">
                      <p className="text-xs text-gray-400 mb-2">Family Info</p>
                      <p className="text-sm text-white">
                        Married, 2 kids. Prefers traditional designs.
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 mb-2">Taste Profile</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-[#4ADE80]/20 text-[#4ADE80] rounded text-xs">
                          Traditional
                        </span>
                        <span className="px-2 py-1 bg-[#A78BFA]/20 text-[#A78BFA] rounded text-xs">
                          Gold
                        </span>
                        <span className="px-2 py-1 bg-[#06B6D4]/20 text-[#06B6D4] rounded text-xs">
                          Occasion
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Dormant Customer Recovery */}
            <Card>
              <CardHeader
                title="Dormant Customer Recovery"
                subtitle="Re-engagement strategies by segment"
              />
              <CardContent>
                <div className="space-y-4">
                  {crmData.dormantRecovery.map((segment) => (
                    <div
                      key={segment.id}
                      className="p-4 bg-gray-800/20 rounded-lg flex items-center justify-between"
                    >
                      <div>
                        <p className="text-sm font-semibold text-white">
                          {segment.segment}
                        </p>
                        <p className="text-xs text-gray-400 mt-1">
                          {segment.count} customers
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-sm text-gray-400">
                          {segment.action}
                        </span>
                        <button className="px-4 py-2 bg-[#4ADE80] text-black rounded-lg font-semibold text-sm hover:bg-green-400 transition-colors">
                          Launch
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
      </div>
    </div>
  );
}
