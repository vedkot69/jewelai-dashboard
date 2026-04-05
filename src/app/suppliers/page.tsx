"use client";

import { useState } from "react";
import Card, { CardContent, CardHeader } from "@/components/ui/Card";
import { KPICard } from "@/components/ui/KPICard";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
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
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts";
import {
  AlertCircle,
  TrendingUp,
  Package,
  Clock,
  CheckCircle,
} from "lucide-react";

const supplierData = {
  karigars: [
    {
      id: 1,
      name: "Arun Sharma",
      specialty: "Bridal Designs",
      piecesMonth: 45,
      wastagePercent: 2.1,
      qualityScore: 9.2,
      status: "active",
      goldBalance: 250,
    },
    {
      id: 2,
      name: "Rajesh Patel",
      specialty: "Traditional",
      piecesMonth: 38,
      wastagePercent: 2.8,
      qualityScore: 8.8,
      status: "active",
      goldBalance: 180,
    },
    {
      id: 3,
      name: "Vikram Singh",
      specialty: "Modern",
      piecesMonth: 52,
      wastagePercent: 3.2,
      qualityScore: 8.5,
      status: "active",
      goldBalance: 320,
    },
    {
      id: 4,
      name: "Mohit Gupta",
      specialty: "Kundan Work",
      piecesMonth: 28,
      wastagePercent: 4.1,
      qualityScore: 8.2,
      status: "flagged",
      goldBalance: 95,
    },
    {
      id: 5,
      name: "Deepak Kumar",
      specialty: "Antique Designs",
      piecesMonth: 32,
      wastagePercent: 2.5,
      qualityScore: 9.0,
      status: "active",
      goldBalance: 210,
    },
  ],
  goldReconciliation: [
    { month: "Jan", issued: 4500, returned: 4380, wastage: 120 },
    { month: "Feb", issued: 4200, returned: 4050, wastage: 150 },
    { month: "Mar", issued: 4800, returned: 4620, wastage: 180 },
    { month: "Apr", issued: 5100, returned: 4920, wastage: 180 },
  ],
  wastageAnomalies: [
    {
      id: 1,
      karigar: "Mohit Gupta",
      expectedWastage: 2.5,
      actualWastage: 4.1,
      variance: "+64%",
      action: "Review process",
    },
    {
      id: 2,
      karigar: "Vikram Singh",
      expectedWastage: 2.5,
      actualWastage: 3.2,
      variance: "+28%",
      action: "Monitor",
    },
  ],
  paymentSchedule: [
    { karigar: "Arun Sharma", nextPayment: "Apr 10", amount: "₹85,000" },
    { karigar: "Rajesh Patel", nextPayment: "Apr 12", amount: "₹62,000" },
    { karigar: "Vikram Singh", nextPayment: "Apr 15", amount: "₹98,000" },
  ],
  supplierScoring: [
    { category: "Quality", score: 88 },
    { category: "Timeliness", score: 85 },
    { category: "Wastage", score: 78 },
    { category: "Reliability", score: 92 },
    { category: "Communication", score: 80 },
  ],
  goldInTransit: [
    {
      id: 1,
      from: "Arun Sharma",
      item: "Bridal Necklace Set",
      weight: 125,
      value: "₹9,56,250",
      shippedOn: "Apr 4",
      eta: "Apr 8",
      status: "in_transit",
    },
    {
      id: 2,
      from: "Rajesh Patel",
      item: "Gold Bangles",
      weight: 80,
      value: "₹6,12,000",
      shippedOn: "Apr 3",
      eta: "Apr 6",
      status: "in_transit",
    },
    {
      id: 3,
      from: "Deepak Kumar",
      item: "Antique Ring Set",
      weight: 45,
      value: "₹3,44,250",
      shippedOn: "Apr 2",
      eta: "Apr 5",
      status: "out_for_delivery",
    },
  ],
  qualityLogs: [
    {
      id: 1,
      date: "Apr 5",
      karigar: "Arun Sharma",
      item: "Bridal Necklace",
      rating: "Excellent",
      notes: "Perfect finish, no rework needed",
    },
    {
      id: 2,
      date: "Apr 4",
      karigar: "Vikram Singh",
      item: "Modern Ring",
      rating: "Good",
      notes: "Minor polish required",
    },
    {
      id: 3,
      date: "Apr 3",
      karigar: "Mohit Gupta",
      item: "Kundan Set",
      rating: "Average",
      notes: "Stone setting needs adjustment",
    },
  ],
};

export default function SuppliersPage() {
  const [selectedKarigar, setSelectedKarigar] = useState<string | null>(null);

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
                Karigar & Supplier Intelligence
              </h1>
              <p className="text-gray-600 mt-1">
                Manage artisans, track gold, and optimize production
              </p>
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <KPICard
                icon="👨‍🏭"
                label="Active Karigars"
                value="5"
                subtitle="Full capacity"
              />
              <KPICard
                icon="⚖️"
                label="Gold Issued"
                value="4,250g"
                subtitle="Under management"
              />
              <KPICard
                icon="⏳"
                label="Pending Returns"
                value="280g"
                subtitle="Follow up needed"
              />
              <KPICard
                icon="📊"
                label="Avg Wastage"
                value="3.1%"
                change={0.4}
                changeType="positive"
                subtitle="Industry avg 3.5%"
              />
            </div>

            {/* Karigar Performance Table */}
            <Card>
              <CardHeader title="Karigar Performance" />
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-800">
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-300">
                          Name
                        </th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-300">
                          Specialty
                        </th>
                        <th className="text-center py-3 px-4 text-sm font-semibold text-gray-300">
                          Pieces/Month
                        </th>
                        <th className="text-center py-3 px-4 text-sm font-semibold text-gray-300">
                          Wastage %
                        </th>
                        <th className="text-center py-3 px-4 text-sm font-semibold text-gray-300">
                          Quality Score
                        </th>
                        <th className="text-center py-3 px-4 text-sm font-semibold text-gray-300">
                          Status
                        </th>
                        <th className="text-right py-3 px-4 text-sm font-semibold text-gray-300">
                          Gold Balance
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-800">
                      {supplierData.karigars.map((karigar) => (
                        <tr
                          key={karigar.id}
                          className="hover:bg-gray-800/20 cursor-pointer"
                          onClick={() =>
                            setSelectedKarigar(
                              selectedKarigar === karigar.name ? null : karigar.name
                            )
                          }
                        >
                          <td className="py-3 px-4 text-sm font-semibold text-white">
                            {karigar.name}
                          </td>
                          <td className="py-3 px-4 text-sm text-gray-400">
                            {karigar.specialty}
                          </td>
                          <td className="py-3 px-4 text-sm text-white text-center">
                            {karigar.piecesMonth}
                          </td>
                          <td className="py-3 px-4 text-sm text-center">
                            <span
                              className={`font-semibold ${
                                karigar.wastagePercent > 3.5
                                  ? "text-[#EF4444]"
                                  : "text-[#4ADE80]"
                              }`}
                            >
                              {karigar.wastagePercent}%
                            </span>
                          </td>
                          <td className="py-3 px-4 text-sm text-white text-center font-semibold">
                            {karigar.qualityScore}/10
                          </td>
                          <td className="py-3 px-4 text-center">
                            <span
                              className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                                karigar.status === "active"
                                  ? "bg-[#4ADE80]/20 text-[#4ADE80]"
                                  : "bg-[#EF4444]/20 text-[#EF4444]"
                              }`}
                            >
                              {karigar.status === "active" ? "ACTIVE" : "FLAGGED"}
                            </span>
                          </td>
                          <td className="py-3 px-4 text-sm text-white text-right font-semibold">
                            {karigar.goldBalance}g
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* Gold Reconciliation & Wastage Anomalies */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Gold Reconciliation */}
              <Card>
                <CardHeader title="Gold Reconciliation Tracker" />
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={supplierData.goldReconciliation}>
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
                      <Bar dataKey="issued" fill="#4ADE80" radius={[8, 8, 0, 0]} />
                      <Bar dataKey="returned" fill="#A78BFA" radius={[8, 8, 0, 0]} />
                      <Bar dataKey="wastage" fill="#EF4444" radius={[8, 8, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Wastage Anomaly Detection */}
              <Card>
                <CardHeader title="Wastage Anomaly Detection" />
                <CardContent>
                  <div className="space-y-4">
                    {supplierData.wastageAnomalies.map((anomaly) => (
                      <div
                        key={anomaly.id}
                        className="p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg"
                      >
                        <div className="flex gap-3">
                          <AlertCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                          <div className="flex-1">
                            <p className="text-sm font-semibold text-white">
                              {anomaly.karigar}
                            </p>
                            <p className="text-xs text-gray-400 mt-1">
                              Expected: {anomaly.expectedWastage}% | Actual:{" "}
                              <span className="text-yellow-400 font-semibold">
                                {anomaly.actualWastage}%
                              </span>{" "}
                              {anomaly.variance}
                            </p>
                            <p className="text-xs text-yellow-400 mt-2">
                              Action: {anomaly.action}
                            </p>
                          </div>
                          <button className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded text-xs font-semibold hover:bg-yellow-500/30">
                            Review
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Payment Schedule & Supplier Scoring */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Payment Schedule */}
              <Card>
                <CardHeader title="Payment Schedule Timeline" />
                <CardContent>
                  <div className="space-y-4">
                    {supplierData.paymentSchedule.map((payment, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between p-4 bg-gray-800/20 rounded-lg"
                      >
                        <div>
                          <p className="text-sm font-semibold text-white">
                            {payment.karigar}
                          </p>
                          <p className="text-xs text-gray-400 mt-1">
                            Due: {payment.nextPayment}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-bold text-white">
                            {payment.amount}
                          </p>
                          <button className="mt-2 px-3 py-1 bg-[#4ADE80] text-black rounded text-xs font-semibold hover:bg-green-400 transition-colors">
                            Process
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Supplier Scoring Radar */}
              <Card>
                <CardHeader title="Supplier Performance Radar" />
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <RadarChart data={supplierData.supplierScoring}>
                      <PolarGrid stroke="#333" />
                      <PolarAngleAxis dataKey="category" stroke="#666" />
                      <PolarRadiusAxis angle={90} domain={[0, 100]} stroke="#666" />
                      <Radar
                        name="Performance"
                        dataKey="score"
                        stroke="#4ADE80"
                        fill="#4ADE80"
                        fillOpacity={0.3}
                      />
                    </RadarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            {/* Gold-in-Transit Tracker */}
            <Card>
              <CardHeader title="Gold-in-Transit Tracker" />
              <CardContent>
                <div className="space-y-4">
                  {supplierData.goldInTransit.map((shipment) => (
                    <div
                      key={shipment.id}
                      className="p-4 bg-gray-800/20 rounded-lg"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <p className="text-sm font-semibold text-white">
                            {shipment.item}
                          </p>
                          <p className="text-xs text-gray-400 mt-1">
                            From: {shipment.from}
                          </p>
                        </div>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            shipment.status === "in_transit"
                              ? "bg-blue-500/20 text-blue-400"
                              : "bg-amber-500/20 text-amber-400"
                          }`}
                        >
                          {shipment.status === "in_transit"
                            ? "IN TRANSIT"
                            : "OUT FOR DELIVERY"}
                        </span>
                      </div>

                      <div className="grid grid-cols-4 gap-2 text-xs mb-3">
                        <div>
                          <p className="text-gray-400">Weight</p>
                          <p className="text-white font-bold">{shipment.weight}g</p>
                        </div>
                        <div>
                          <p className="text-gray-400">Value</p>
                          <p className="text-white font-bold">{shipment.value}</p>
                        </div>
                        <div>
                          <p className="text-gray-400">Shipped</p>
                          <p className="text-white font-bold">{shipment.shippedOn}</p>
                        </div>
                        <div>
                          <p className="text-gray-400">ETA</p>
                          <p className="text-white font-bold">{shipment.eta}</p>
                        </div>
                      </div>

                      <div className="w-full bg-gray-800 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full ${
                            shipment.status === "out_for_delivery"
                              ? "bg-amber-400"
                              : "bg-blue-400"
                          }`}
                          style={{
                            width:
                              shipment.status === "out_for_delivery" ? "85%" : "60%",
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quality Inspection Log */}
            <Card>
              <CardHeader title="Quality Inspection Log" />
              <CardContent>
                <div className="space-y-3">
                  {supplierData.qualityLogs.map((log) => (
                    <div
                      key={log.id}
                      className="p-4 border-l-4 border-gray-800 bg-gray-800/20 rounded-r-lg"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <p className="text-sm font-semibold text-white">
                              {log.item}
                            </p>
                            <span
                              className={`px-2 py-0.5 rounded text-xs font-semibold ${
                                log.rating === "Excellent"
                                  ? "bg-[#4ADE80]/20 text-[#4ADE80]"
                                  : log.rating === "Good"
                                    ? "bg-[#06B6D4]/20 text-[#06B6D4]"
                                    : "bg-[#F5A623]/20 text-[#F5A623]"
                              }`}
                            >
                              {log.rating}
                            </span>
                          </div>
                          <p className="text-xs text-gray-400">
                            By: {log.karigar}
                          </p>
                          <p className="text-xs text-gray-400 mt-1">
                            {log.notes}
                          </p>
                        </div>
                        <p className="text-xs text-gray-500 ml-4">{log.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
