"use client";

import { useState } from "react";
import Card, { CardContent, CardHeader } from "@/components/ui/Card";
import { KPICard } from "@/components/ui/KPICard";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
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
import { AlertCircle, TrendingUp, Calendar, Users } from "lucide-react";

const schemeData = {
  enrollmentTrend: [
    { month: "Oct", enrollments: 45 },
    { month: "Nov", enrollments: 58 },
    { month: "Dec", enrollments: 72 },
    { month: "Jan", enrollments: 85 },
    { month: "Feb", enrollments: 92 },
    { month: "Mar", enrollments: 105 },
  ],
  monthlyCollection: [
    { month: "Jan", collected: 450000, target: 500000 },
    { month: "Feb", collected: 480000, target: 500000 },
    { month: "Mar", collected: 520000, target: 500000 },
    { month: "Apr", collected: 490000, target: 500000 },
  ],
  schemePerformance: [
    { type: "Monthly", enrollments: 280, collection: 92, default: 2.1 },
    { type: "Quarterly", enrollments: 185, collection: 88, default: 1.8 },
    { type: "Annual", enrollments: 95, collection: 95, default: 0.5 },
  ],
  atRiskSchemes: [
    {
      id: 1,
      customer: "Rajesh Kumar",
      schemeType: "Monthly",
      missedPayments: 2,
      nextPaymentDue: "Apr 10",
      totalValue: "₹2,50,000",
      riskLevel: "high",
    },
    {
      id: 2,
      customer: "Priya Sharma",
      schemeType: "Quarterly",
      missedPayments: 1,
      nextPaymentDue: "Apr 15",
      totalValue: "₹5,00,000",
      riskLevel: "medium",
    },
    {
      id: 3,
      customer: "Anjali Patel",
      schemeType: "Monthly",
      missedPayments: 0,
      nextPaymentDue: "Apr 5",
      totalValue: "₹1,50,000",
      riskLevel: "low",
    },
  ],
  upcomingMaturities: [
    {
      id: 1,
      customer: "Vikram Singh",
      maturityDate: "Apr 8, 2026",
      schemeValue: "₹3,75,000",
      goldWeight: 45,
      suggestedFollowUp: "Call to confirm delivery",
    },
    {
      id: 2,
      customer: "Meera Iyer",
      maturityDate: "Apr 12, 2026",
      schemeValue: "₹2,80,000",
      goldWeight: 34,
      suggestedFollowUp: "Send WhatsApp reminder",
    },
    {
      id: 3,
      customer: "Deepak Verma",
      maturityDate: "Apr 18, 2026",
      schemeValue: "₹4,50,000",
      goldWeight: 55,
      suggestedFollowUp: "Email + SMS",
    },
    {
      id: 4,
      customer: "Sneha Gupta",
      maturityDate: "Apr 25, 2026",
      schemeValue: "₹1,95,000",
      goldWeight: 24,
      suggestedFollowUp: "Enroll in new scheme",
    },
  ],
  referralStats: {
    totalReferrals: 285,
    successfulReferrals: 142,
    pendingReferrals: 85,
    conversionRate: 49.8,
    topReferrer: "Rajesh Kumar",
    referralValue: "₹45,60,000",
  },
};

export default function SchemesPage() {
  return (
    <div className="flex h-full gap-4 p-4">
      <Sidebar />
      <div className="flex-1 flex flex-col gap-4 overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto scroll-smooth">
          <div className="space-y-6 pb-8">
            {/* Page Header */}
            <div>
              <h1 className="text-3xl font-bold text-[#2D2D2D] tracking-tight">
                Gold Scheme Management
              </h1>
              <p className="text-gray-600 mt-1">
                Enrollment tracking, collections, and maturity management
              </p>
            </div>

            {/* Scheme Overview Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <KPICard
                icon="📊"
                label="Active Schemes"
                value="560"
                change={12}
                changeType="positive"
                subtitle="Total enrolled"
              />
              <KPICard
                icon="💰"
                label="Total Value"
                value="₹8.5 Cr"
                change={18}
                changeType="positive"
                subtitle="AUM"
              />
              <KPICard
                icon="📈"
                label="Collection Rate"
                value="94.2%"
                change={2.1}
                changeType="positive"
                subtitle="On-time payments"
              />
              <KPICard
                icon="⏰"
                label="Maturing Soon"
                value="28"
                subtitle="Maturity alerts"
              />
            </div>

            {/* Enrollment Trend & Collection Rate */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Enrollment Trend */}
              <Card>
                <CardHeader title="Enrollment Trend (6 months)" />
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={schemeData.enrollmentTrend}>
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
                      <Line
                        type="monotone"
                        dataKey="enrollments"
                        stroke="#4ADE80"
                        strokeWidth={2}
                        dot={{ fill: "#4ADE80", r: 4 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Collection Rate Gauge */}
              <Card>
                <CardHeader title="Collection Rate Gauge" />
                <CardContent>
                  <div className="flex flex-col items-center justify-center py-6">
                    <div className="relative w-32 h-32 mb-4">
                      <svg
                        className="transform -rotate-90 w-32 h-32"
                        viewBox="0 0 120 120"
                      >
                        <circle
                          cx="60"
                          cy="60"
                          r="54"
                          fill="none"
                          stroke="#333"
                          strokeWidth="8"
                        />
                        <circle
                          cx="60"
                          cy="60"
                          r="54"
                          fill="none"
                          stroke="#4ADE80"
                          strokeWidth="8"
                          strokeDasharray={`${(94.2 / 100) * 2 * Math.PI * 54} ${
                            2 * Math.PI * 54
                          }`}
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-3xl font-bold text-white">94.2%</div>
                          <div className="text-xs text-gray-400 mt-1">
                            Collection
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-400 text-center mt-4">
                      94.2% of customers are paying on time
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Monthly Collection */}
            <Card>
              <CardHeader title="Monthly Collection vs Target" />
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={schemeData.monthlyCollection}>
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
                    <Bar
                      dataKey="collected"
                      fill="#4ADE80"
                      radius={[8, 8, 0, 0]}
                      name="Collected"
                    />
                    <Bar
                      dataKey="target"
                      fill="#A78BFA"
                      radius={[8, 8, 0, 0]}
                      name="Target"
                      opacity={0.6}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Scheme Performance by Type */}
            <Card>
              <CardHeader title="Scheme Performance by Type" />
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-800">
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-300">
                          Scheme Type
                        </th>
                        <th className="text-center py-3 px-4 text-sm font-semibold text-gray-300">
                          Enrollments
                        </th>
                        <th className="text-center py-3 px-4 text-sm font-semibold text-gray-300">
                          Collection Rate
                        </th>
                        <th className="text-center py-3 px-4 text-sm font-semibold text-gray-300">
                          Default Rate
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-800">
                      {schemeData.schemePerformance.map((scheme, idx) => (
                        <tr key={idx} className="hover:bg-gray-800/20">
                          <td className="py-3 px-4 text-sm font-semibold text-white">
                            {scheme.type}
                          </td>
                          <td className="py-3 px-4 text-sm text-white text-center">
                            {scheme.enrollments}
                          </td>
                          <td className="py-3 px-4 text-sm text-center">
                            <span className="text-[#4ADE80] font-semibold">
                              {scheme.collection}%
                            </span>
                          </td>
                          <td className="py-3 px-4 text-sm text-center">
                            <span className="text-[#EF4444] font-semibold">
                              {scheme.default}%
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* At-Risk Schemes */}
            <Card>
              <CardHeader title="At-Risk Schemes" subtitle="Missed or late payments" />
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-800">
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-300">
                          Customer
                        </th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-300">
                          Type
                        </th>
                        <th className="text-center py-3 px-4 text-sm font-semibold text-gray-300">
                          Missed Payments
                        </th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-300">
                          Next Payment Due
                        </th>
                        <th className="text-right py-3 px-4 text-sm font-semibold text-gray-300">
                          Total Value
                        </th>
                        <th className="text-center py-3 px-4 text-sm font-semibold text-gray-300">
                          Risk
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-800">
                      {schemeData.atRiskSchemes.map((scheme) => (
                        <tr key={scheme.id} className="hover:bg-gray-800/20">
                          <td className="py-3 px-4 text-sm font-semibold text-white">
                            {scheme.customer}
                          </td>
                          <td className="py-3 px-4 text-sm text-gray-400">
                            {scheme.schemeType}
                          </td>
                          <td className="py-3 px-4 text-sm text-center text-white">
                            {scheme.missedPayments}
                          </td>
                          <td className="py-3 px-4 text-sm text-gray-400">
                            {scheme.nextPaymentDue}
                          </td>
                          <td className="py-3 px-4 text-sm text-right text-white font-semibold">
                            {scheme.totalValue}
                          </td>
                          <td className="py-3 px-4 text-center">
                            <span
                              className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                                scheme.riskLevel === "high"
                                  ? "bg-[#EF4444]/20 text-[#EF4444]"
                                  : scheme.riskLevel === "medium"
                                    ? "bg-[#F5A623]/20 text-[#F5A623]"
                                    : "bg-[#4ADE80]/20 text-[#4ADE80]"
                              }`}
                            >
                              {scheme.riskLevel.toUpperCase()}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* Upcoming Maturities */}
            <Card>
              <CardHeader title="Upcoming Maturities" subtitle="Next 30 days" />
              <CardContent>
                <div className="space-y-3">
                  {schemeData.upcomingMaturities.map((maturity) => (
                    <div
                      key={maturity.id}
                      className="p-4 bg-gray-800/20 rounded-lg border-l-4 border-[#4ADE80]"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <p className="text-sm font-semibold text-white">
                            {maturity.customer}
                          </p>
                          <p className="text-xs text-gray-400 mt-0.5">
                            Matures on {maturity.maturityDate}
                          </p>
                        </div>
                        <span className="px-3 py-1 bg-[#4ADE80]/20 text-[#4ADE80] rounded-full text-xs font-semibold">
                          {maturity.goldWeight}g
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-3 mt-3 text-xs">
                        <div>
                          <p className="text-gray-400">Scheme Value</p>
                          <p className="text-white font-bold">
                            {maturity.schemeValue}
                          </p>
                        </div>
                        <div>
                          <p className="text-gray-400">Follow-up</p>
                          <p className="text-white font-bold">
                            {maturity.suggestedFollowUp}
                          </p>
                        </div>
                      </div>
                      <button className="mt-3 px-4 py-1 bg-[#4ADE80] text-black rounded text-xs font-semibold hover:bg-green-400 transition-colors">
                        Schedule Follow-up
                      </button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Default Prediction & Referral Stats */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Default Prediction AI */}
              <Card>
                <CardHeader title="Default Prediction AI" />
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-gradient-to-br from-orange-500/10 to-transparent rounded-lg border border-orange-500/30">
                      <div className="flex gap-3">
                        <AlertCircle className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                        <div className="flex-1">
                          <p className="text-sm font-semibold text-white">
                            Rajesh Kumar - HIGH RISK
                          </p>
                          <p className="text-xs text-gray-400 mt-2">
                            2 missed payments, income instability detected, seasonal
                            occupation. Default probability: 78%
                          </p>
                          <div className="mt-3 flex gap-2">
                            <button className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded text-xs font-semibold hover:bg-orange-500/30">
                              Reach Out
                            </button>
                            <button className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded text-xs font-semibold hover:bg-orange-500/30">
                              Defer
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 bg-gradient-to-br from-yellow-500/10 to-transparent rounded-lg border border-yellow-500/30">
                      <div className="flex gap-3">
                        <AlertCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                        <div className="flex-1">
                          <p className="text-sm font-semibold text-white">
                            Priya Sharma - MEDIUM RISK
                          </p>
                          <p className="text-xs text-gray-400 mt-2">
                            1 missed payment, late payment history. Default
                            probability: 42%
                          </p>
                          <div className="mt-3 flex gap-2">
                            <button className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded text-xs font-semibold hover:bg-yellow-500/30">
                              Monitor
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Referral Program Stats */}
              <Card>
                <CardHeader title="Referral Program Stats" />
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-gray-800/30 rounded-lg">
                      <span className="text-gray-300">Total Referrals</span>
                      <span className="text-2xl font-bold text-[#4ADE80]">
                        {schemeData.referralStats.totalReferrals}
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-800/30 rounded-lg">
                      <span className="text-gray-300">Successful</span>
                      <span className="text-2xl font-bold text-[#4ADE80]">
                        {schemeData.referralStats.successfulReferrals}
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-800/30 rounded-lg">
                      <span className="text-gray-300">Pending</span>
                      <span className="text-2xl font-bold text-[#F5A623]">
                        {schemeData.referralStats.pendingReferrals}
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-800/30 rounded-lg">
                      <span className="text-gray-300">Conversion Rate</span>
                      <span className="text-2xl font-bold text-[#06B6D4]">
                        {schemeData.referralStats.conversionRate}%
                      </span>
                    </div>

                    <div className="border-t border-gray-800 pt-4">
                      <p className="text-xs text-gray-400 mb-2">Top Referrer</p>
                      <p className="text-sm font-bold text-white">
                        {schemeData.referralStats.topReferrer}
                      </p>
                      <p className="text-xs text-gray-400 mt-2">
                        Referral Value: {schemeData.referralStats.referralValue}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
