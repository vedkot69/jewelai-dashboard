"use client";

import { useState } from "react";
import Card, { CardContent, CardHeader } from "@/components/ui/Card";
import { KPICard } from "@/components/ui/KPICard";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { AlertCircle, CheckCircle, Clock, TrendingUp } from "lucide-react";

const complianceData = {
  huidTracking: [
    { id: 1, item: "Gold Necklace Set", huid: "HUID-2025-0045", status: "registered", date: "Mar 25" },
    { id: 2, item: "Diamond Ring", huid: "HUID-2025-0046", status: "pending", date: "Apr 2" },
    { id: 3, item: "Kundan Bracelet", huid: "HUID-2025-0047", status: "expired", date: "Feb 15" },
    { id: 4, item: "Gold Earrings", huid: "HUID-2025-0048", status: "registered", date: "Apr 1" },
    { id: 5, item: "Silver Pendant", huid: "HUID-2025-0049", status: "pending", date: "Apr 3" },
  ],
  gstSummary: {
    currentQuarterLiability: 285000,
    inputCredit: 45000,
    netPayable: 240000,
    dueDate: "Apr 20, 2026",
  },
  ewayBills: [
    { id: 1, billNo: "EWB-2025-0450", status: "generated", date: "Apr 4" },
    { id: 2, billNo: "EWB-2025-0451", status: "pending", date: "Apr 5" },
    { id: 3, billNo: "EWB-2025-0452", status: "expired", date: "Mar 20" },
    { id: 4, billNo: "EWB-2025-0453", status: "generated", date: "Apr 3" },
  ],
  auditReadiness: [
    { category: "Financial Records", progress: 95 },
    { category: "Inventory Documentation", progress: 88 },
    { category: "Customer KYC", progress: 92 },
    { category: "Transaction Logs", progress: 85 },
    { category: "Tax Filings", progress: 78 },
  ],
  upcomingDeadlines: [
    { id: 1, task: "GST Return Filing", dueDate: "Apr 20", priority: "high" },
    { id: 2, task: "HUID Registration Batch", dueDate: "Apr 15", priority: "high" },
    { id: 3, task: "E-way Bill Renewal", dueDate: "Apr 25", priority: "medium" },
    { id: 4, task: "Annual Audit", dueDate: "May 31", priority: "medium" },
  ],
};

export default function CompliancePage() {
  return (
    <div className="p-6 md:p-8 max-w-7xl mx-auto">
      <div className="space-y-6 pb-8">
            {/* Page Header */}
            <div>
              <h1 className="text-3xl font-bold text-[#2D2D2D] tracking-tight">
                Compliance Engine
              </h1>
              <p className="text-gray-600 mt-1">
                HUID tracking, GST, E-way bills, and audit readiness
              </p>
            </div>

            {/* Top KPIs */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <KPICard
                icon="✅"
                label="Compliance Score"
                value="92/100"
                subtitle="Overall health"
              />
              <KPICard
                icon="📋"
                label="HUID Registered"
                value="2,450"
                change={8}
                changeType="positive"
                subtitle="This month"
              />
              <KPICard
                icon="💰"
                label="GST Liability"
                value="₹2,40,000"
                subtitle="Net payable"
              />
              <KPICard
                icon="📦"
                label="Audit Readiness"
                value="89%"
                change={5}
                changeType="positive"
                subtitle="Documentation"
              />
            </div>

            {/* Compliance Health Score */}
            <Card>
              <CardHeader title="Compliance Health Score" />
              <CardContent>
                <div className="flex items-center justify-center py-8">
                  <div className="relative w-40 h-40">
                    <svg
                      className="transform -rotate-90 w-40 h-40"
                      viewBox="0 0 160 160"
                    >
                      <circle
                        cx="80"
                        cy="80"
                        r="70"
                        fill="none"
                        stroke="#333"
                        strokeWidth="12"
                      />
                      <circle
                        cx="80"
                        cy="80"
                        r="70"
                        fill="none"
                        stroke="#4ADE80"
                        strokeWidth="12"
                        strokeDasharray={`${(92 / 100) * 2 * Math.PI * 70} ${
                          2 * Math.PI * 70
                        }`}
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-4xl font-bold text-white">92</div>
                        <div className="text-sm text-gray-400 mt-1">
                          Excellent
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3 mt-6">
                  <div className="p-3 bg-gray-800/30 rounded-lg text-center">
                    <p className="text-xs text-gray-400">No Issues</p>
                    <p className="text-lg font-bold text-[#4ADE80] mt-1">18</p>
                  </div>
                  <div className="p-3 bg-gray-800/30 rounded-lg text-center">
                    <p className="text-xs text-gray-400">Warnings</p>
                    <p className="text-lg font-bold text-[#F5A623] mt-1">5</p>
                  </div>
                  <div className="p-3 bg-gray-800/30 rounded-lg text-center">
                    <p className="text-xs text-gray-400">Critical</p>
                    <p className="text-lg font-bold text-[#EF4444] mt-1">2</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* HUID & GST Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* HUID Tracking */}
              <Card>
                <CardHeader
                  title="HUID Tracking"
                  subtitle="Precious metal identification"
                />
                <CardContent>
                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between items-center p-3 bg-gray-800/30 rounded-lg">
                      <span className="text-gray-300">Items Registered</span>
                      <span className="text-xl font-bold text-[#4ADE80]">
                        2,450
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-800/30 rounded-lg">
                      <span className="text-gray-300">Pending Registration</span>
                      <span className="text-xl font-bold text-[#F5A623]">45</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-800/30 rounded-lg">
                      <span className="text-gray-300">Expired HUIDs</span>
                      <span className="text-xl font-bold text-[#EF4444]">8</span>
                    </div>
                  </div>
                  <button className="w-full px-4 py-2 bg-[#4ADE80] text-black rounded-lg font-semibold hover:bg-green-400 transition-colors text-sm">
                    Bulk Register HUIDs
                  </button>
                </CardContent>
              </Card>

              {/* GST Summary */}
              <Card>
                <CardHeader title="GST Summary - Q1 2025" />
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-gradient-to-br from-blue-500/10 to-transparent rounded-lg border border-blue-500/30">
                      <p className="text-xs text-gray-400 mb-1">
                        Current Quarter Liability
                      </p>
                      <p className="text-2xl font-bold text-blue-400">
                        ₹{complianceData.gstSummary.currentQuarterLiability.toLocaleString()}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-3 bg-gray-800/30 rounded-lg">
                        <p className="text-xs text-gray-400">Input Credit</p>
                        <p className="text-lg font-bold text-white">
                          ₹{complianceData.gstSummary.inputCredit.toLocaleString()}
                        </p>
                      </div>
                      <div className="p-3 bg-gray-800/30 rounded-lg">
                        <p className="text-xs text-gray-400">Net Payable</p>
                        <p className="text-lg font-bold text-[#EF4444]">
                          ₹{complianceData.gstSummary.netPayable.toLocaleString()}
                        </p>
                      </div>
                    </div>

                    <div className="border-t border-gray-800 pt-3">
                      <p className="text-xs text-gray-400">Due Date</p>
                      <p className="text-sm font-bold text-white">
                        {complianceData.gstSummary.dueDate}
                      </p>
                    </div>

                    <button className="w-full px-4 py-2 bg-[#4ADE80] text-black rounded-lg font-semibold hover:bg-green-400 transition-colors text-sm">
                      File Return
                    </button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* HUID Tracking Table */}
            <Card>
              <CardHeader title="HUID Details" />
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-800">
                        <th className="text-left py-2 px-3 font-semibold text-gray-300">
                          Item
                        </th>
                        <th className="text-left py-2 px-3 font-semibold text-gray-300">
                          HUID
                        </th>
                        <th className="text-center py-2 px-3 font-semibold text-gray-300">
                          Status
                        </th>
                        <th className="text-left py-2 px-3 font-semibold text-gray-300">
                          Date
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-800">
                      {complianceData.huidTracking.map((item) => (
                        <tr key={item.id} className="hover:bg-gray-800/20">
                          <td className="py-2 px-3 text-white font-semibold">
                            {item.item}
                          </td>
                          <td className="py-2 px-3 text-gray-400 font-mono text-xs">
                            {item.huid}
                          </td>
                          <td className="py-2 px-3 text-center">
                            <span
                              className={`inline-block px-2 py-0.5 rounded text-xs font-semibold ${
                                item.status === "registered"
                                  ? "bg-[#4ADE80]/20 text-[#4ADE80]"
                                  : item.status === "pending"
                                    ? "bg-[#F5A623]/20 text-[#F5A623]"
                                    : "bg-[#EF4444]/20 text-[#EF4444]"
                              }`}
                            >
                              {item.status.toUpperCase()}
                            </span>
                          </td>
                          <td className="py-2 px-3 text-gray-400">{item.date}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* E-Way Bill Status */}
            <Card>
              <CardHeader title="E-Way Bill Status" />
              <CardContent>
                <div className="space-y-3">
                  {complianceData.ewayBills.map((bill) => (
                    <div
                      key={bill.id}
                      className="p-4 bg-gray-800/20 rounded-lg flex items-center justify-between"
                    >
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-white">
                          {bill.billNo}
                        </p>
                        <p className="text-xs text-gray-400 mt-1">{bill.date}</p>
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          bill.status === "generated"
                            ? "bg-[#4ADE80]/20 text-[#4ADE80]"
                            : bill.status === "pending"
                              ? "bg-[#F5A623]/20 text-[#F5A623]"
                              : "bg-[#EF4444]/20 text-[#EF4444]"
                        }`}
                      >
                        {bill.status.toUpperCase()}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Audit Readiness */}
            <Card>
              <CardHeader
                title="Audit Readiness Checker"
                subtitle="Documentation completion status"
              />
              <CardContent>
                <div className="space-y-4">
                  {complianceData.auditReadiness.map((item, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between items-center mb-2">
                        <p className="text-sm font-semibold text-white">
                          {item.category}
                        </p>
                        <span className="text-sm font-bold text-[#4ADE80]">
                          {item.progress}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-3">
                        <div
                          className={`h-3 rounded-full transition-all ${
                            item.progress >= 90
                              ? "bg-[#4ADE80]"
                              : item.progress >= 75
                                ? "bg-[#06B6D4]"
                                : "bg-[#F5A623]"
                          }`}
                          style={{ width: `${item.progress}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Upcoming Deadlines Timeline */}
            <Card>
              <CardHeader title="Upcoming Compliance Deadlines" />
              <CardContent>
                <div className="space-y-3">
                  {complianceData.upcomingDeadlines.map((deadline) => (
                    <div
                      key={deadline.id}
                      className="p-4 bg-gray-800/20 rounded-lg border-l-4 border-gray-800"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <p className="text-sm font-semibold text-white">
                            {deadline.task}
                          </p>
                          <div className="flex items-center gap-2 mt-2">
                            <Clock className="w-3 h-3 text-gray-400" />
                            <p className="text-xs text-gray-400">
                              Due: {deadline.dueDate}
                            </p>
                          </div>
                        </div>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold flex-shrink-0 ${
                            deadline.priority === "high"
                              ? "bg-[#EF4444]/20 text-[#EF4444]"
                              : "bg-[#F5A623]/20 text-[#F5A623]"
                          }`}
                        >
                          {deadline.priority.toUpperCase()}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Auto-Reconciliation Status */}
            <Card>
              <CardHeader title="Auto-Reconciliation Status" />
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-gradient-to-br from-green-500/10 to-transparent rounded-lg border border-green-500/30">
                    <div className="flex gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-white">
                          Bank Reconciliation
                        </p>
                        <p className="text-xs text-gray-400 mt-1">
                          Last reconciled: 2 hours ago
                        </p>
                        <p className="text-xs text-green-400 font-semibold mt-2">
                          ✓ All transactions matched
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-gradient-to-br from-blue-500/10 to-transparent rounded-lg border border-blue-500/30">
                    <div className="flex gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-white">
                          Inventory Reconciliation
                        </p>
                        <p className="text-xs text-gray-400 mt-1">
                          Last reconciled: 4 hours ago
                        </p>
                        <p className="text-xs text-blue-400 font-semibold mt-2">
                          ✓ Variance: 0.3% (within tolerance)
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-gradient-to-br from-amber-500/10 to-transparent rounded-lg border border-amber-500/30">
                    <div className="flex gap-3">
                      <AlertCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-white">
                          Tax Reconciliation
                        </p>
                        <p className="text-xs text-gray-400 mt-1">
                          Last reconciled: 1 day ago
                        </p>
                        <p className="text-xs text-amber-400 font-semibold mt-2">
                          ⚠ 3 items pending manual review
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
      </div>
    </div>
  );
}
