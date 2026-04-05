"use client";

import { useState } from "react";
import Card, { CardContent, CardHeader } from "@/components/ui/Card";
import { KPICard } from "@/components/ui/KPICard";
import {
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
  ComposedChart,
} from "recharts";
import {
  AlertCircle,
  TrendingUp,
  Package,
  Zap,
  ArrowRight,
} from "lucide-react";

const inventoryData = {
  metalTypeData: [
    { name: "Gold 22K", value: 2450, amount: "₹4.9Cr" },
    { name: "Gold 18K", value: 1850, amount: "₹3.2Cr" },
    { name: "Silver", value: 980, amount: "₹28L" },
    { name: "Platinum", value: 320, amount: "₹1.8Cr" },
  ],
  storeInventory: [
    { store: "Mumbai HQ", value: 4200, weight: 890 },
    { store: "Delhi Central", value: 3850, weight: 750 },
    { store: "Bangalore East", value: 3450, weight: 680 },
    { store: "Hyderabad Main", value: 2890, weight: 580 },
    { store: "Pune Downtown", value: 2340, weight: 460 },
  ],
  stockAging: [
    { period: "0-30d", current: 2100, previous: 1800 },
    { period: "30-90d", current: 1850, previous: 2100 },
    { period: "90-180d", current: 1340, previous: 1500 },
    { period: "180d+", current: 580, previous: 720 },
  ],
  deadStockItems: [
    {
      id: 1,
      name: "Antique Mangalsutra",
      weight: 45,
      value: 85000,
      daysAging: 187,
      risk: "high",
      action: "Promote or transfer",
    },
    {
      id: 2,
      name: "Kundan Necklace Set",
      weight: 32,
      value: 125000,
      daysAging: 156,
      risk: "high",
      action: "Price adjustment",
    },
    {
      id: 3,
      name: "Vintage Bracelet",
      weight: 18,
      value: 42000,
      daysAging: 142,
      risk: "medium",
      action: "Bundle offer",
    },
    {
      id: 4,
      name: "Temple Jewelry",
      weight: 26,
      value: 95000,
      daysAging: 118,
      risk: "medium",
      action: "Festival campaign",
    },
    {
      id: 5,
      name: "Filigree Ring",
      weight: 8,
      value: 28000,
      daysAging: 98,
      risk: "low",
      action: "Monitor",
    },
  ],
  fastMoving: [
    { name: "Gold Coins", fast: 450, slow: 120 },
    { name: "Earrings", fast: 680, slow: 95 },
    { name: "Rings", fast: 520, slow: 140 },
    { name: "Necklaces", fast: 380, slow: 280 },
    { name: "Bangles", fast: 620, slow: 105 },
  ],
  interStoreTransfers: [
    {
      id: 1,
      from: "Mumbai HQ",
      to: "Pune Downtown",
      item: "Gold Earrings Set",
      qty: 25,
      reason: "High demand",
    },
    {
      id: 2,
      from: "Delhi Central",
      to: "Bangalore East",
      item: "Silver Jewelry",
      qty: 40,
      reason: "Inventory balance",
    },
    {
      id: 3,
      from: "Hyderabad Main",
      to: "Mumbai HQ",
      item: "Platinum Rings",
      qty: 12,
      reason: "Low movement",
    },
  ],
};

const chartColors = ["#4ADE80", "#A78BFA", "#06B6D4", "#F5A623", "#F97316"];

export default function InventoryPage() {
  const [selectedMetal, setSelectedMetal] = useState<string | null>(null);

  return (
    <div className="p-6 md:p-8 max-w-7xl mx-auto">
      <div className="space-y-6 pb-8">
            {/* Page Header */}
            <div>
              <h1 className="text-3xl font-bold text-[#2D2D2D] tracking-tight">
                Inventory Management
              </h1>
              <p className="text-gray-600 mt-1">
                Real-time inventory intelligence and stock optimization
              </p>
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <KPICard
                icon="📦"
                label="Total Items"
                value="8,870"
                change={12}
                changeType="positive"
                subtitle="Last 30 days"
              />
              <KPICard
                icon="⚖️"
                label="Total Weight"
                value="4,240 kg"
                change={8}
                changeType="positive"
                subtitle="Gold equivalent"
              />
              <KPICard
                icon="💰"
                label="Total Value"
                value="₹14.8 Cr"
                change={15}
                changeType="positive"
                subtitle="Current valuation"
              />
              <KPICard
                icon="⏰"
                label="Aging Items"
                value="580"
                change={5}
                changeType="negative"
                subtitle="180+ days old"
              />
            </div>

            {/* Main Charts Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Inventory by Metal Type */}
              <Card className="lg:col-span-1">
                <CardHeader title="Inventory by Metal Type" />
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={inventoryData.metalTypeData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={100}
                        paddingAngle={2}
                        dataKey="value"
                        onClick={(entry) => setSelectedMetal(entry.name || null)}
                        cursor="pointer"
                      >
                        {inventoryData.metalTypeData.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={chartColors[index % chartColors.length]}
                            opacity={
                              selectedMetal === null || selectedMetal === entry.name
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
                    {inventoryData.metalTypeData.map((item, idx) => (
                      <div key={idx} className="flex justify-between text-sm">
                        <span className="text-gray-400">{item.name}</span>
                        <span className="text-white font-semibold">
                          {item.amount}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Stock Aging Analysis */}
              <Card className="lg:col-span-2">
                <CardHeader title="Stock Aging Analysis" />
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <ComposedChart data={inventoryData.stockAging}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                      <XAxis dataKey="period" stroke="#666" />
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
                      <Bar dataKey="current" fill="#4ADE80" radius={[8, 8, 0, 0]} />
                      <Bar
                        dataKey="previous"
                        fill="#A78BFA"
                        radius={[8, 8, 0, 0]}
                        opacity={0.6}
                      />
                    </ComposedChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            {/* Inventory by Store Location */}
            <Card>
              <CardHeader title="Inventory by Store Location" />
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart
                    data={inventoryData.storeInventory}
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
                    <Bar
                      dataKey="value"
                      fill="#06B6D4"
                      radius={[0, 8, 8, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Fast Moving vs Slow Moving */}
            <Card>
              <CardHeader title="Fast Moving vs Slow Moving Items" />
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={inventoryData.fastMoving}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                    <XAxis dataKey="name" stroke="#666" />
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
                    <Bar dataKey="fast" fill="#4ADE80" radius={[8, 8, 0, 0]} />
                    <Bar dataKey="slow" fill="#EF4444" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Dead Stock Alert Table */}
            <Card>
              <CardHeader title="Dead Stock Alert" />
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-800">
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-300">
                          Item Name
                        </th>
                        <th className="text-right py-3 px-4 text-sm font-semibold text-gray-300">
                          Weight (g)
                        </th>
                        <th className="text-right py-3 px-4 text-sm font-semibold text-gray-300">
                          Value
                        </th>
                        <th className="text-right py-3 px-4 text-sm font-semibold text-gray-300">
                          Days Aging
                        </th>
                        <th className="text-center py-3 px-4 text-sm font-semibold text-gray-300">
                          Risk
                        </th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-300">
                          Recommended Action
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-800">
                      {inventoryData.deadStockItems.map((item) => (
                        <tr key={item.id} className="hover:bg-gray-800/20">
                          <td className="py-3 px-4 text-sm text-white">
                            {item.name}
                          </td>
                          <td className="py-3 px-4 text-sm text-gray-400 text-right">
                            {item.weight}
                          </td>
                          <td className="py-3 px-4 text-sm text-white text-right font-semibold">
                            ₹{item.value.toLocaleString()}
                          </td>
                          <td className="py-3 px-4 text-sm text-gray-400 text-right">
                            {item.daysAging}
                          </td>
                          <td className="py-3 px-4 text-center">
                            <span
                              className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                                item.risk === "high"
                                  ? "bg-[#EF4444]/20 text-[#EF4444]"
                                  : item.risk === "medium"
                                    ? "bg-[#F5A623]/20 text-[#F5A623]"
                                    : "bg-[#4ADE80]/20 text-[#4ADE80]"
                              }`}
                            >
                              {item.risk.toUpperCase()}
                            </span>
                          </td>
                          <td className="py-3 px-4 text-sm text-gray-400">
                            {item.action}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* RFID Integration Status */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader title="RFID Integration Status" />
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-gray-800/30 rounded-lg">
                      <span className="text-gray-300">Connected Devices</span>
                      <span className="text-2xl font-bold text-[#4ADE80]">
                        24/28
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-800/30 rounded-lg">
                      <span className="text-gray-300">Disconnected</span>
                      <span className="text-2xl font-bold text-[#EF4444]">4</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-800/30 rounded-lg">
                      <span className="text-gray-300">Last Scan</span>
                      <span className="text-sm text-gray-400">2 mins ago</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2 mt-4">
                      <div
                        className="bg-[#4ADE80] h-2 rounded-full"
                        style={{ width: "86%" }}
                      />
                    </div>
                    <p className="text-xs text-gray-500 text-center">86% devices connected</p>
                  </div>
                </CardContent>
              </Card>

              {/* Gold Utilization Score */}
              <Card>
                <CardHeader title="Gold Utilization Score" />
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
                          strokeDasharray={`${(78 / 100) * 2 * Math.PI * 54} ${
                            2 * Math.PI * 54
                          }`}
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-3xl font-bold text-white">78%</div>
                          <div className="text-xs text-gray-400 mt-1">Utilization</div>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-400 text-center mt-4">
                      Capital deployed efficiently across inventory
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Insights Card */}
              <Card>
                <CardHeader title="Quick Insights" />
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex gap-3 p-3 bg-blue-500/10 rounded-lg">
                      <Zap className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-300">
                        Inventory turnover improved 18% YoY
                      </span>
                    </div>
                    <div className="flex gap-3 p-3 bg-amber-500/10 rounded-lg">
                      <AlertCircle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-300">
                        5 items need urgent clearance
                      </span>
                    </div>
                    <div className="flex gap-3 p-3 bg-green-500/10 rounded-lg">
                      <TrendingUp className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-300">
                        Gold Coins trending up 45% MoM
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Inter-Store Transfer Recommendations */}
            <Card>
              <CardHeader title="Inter-Store Transfer Recommendations" />
              <CardContent>
                <div className="space-y-3">
                  {inventoryData.interStoreTransfers.map((transfer) => (
                    <div
                      key={transfer.id}
                      className="flex items-center justify-between p-4 bg-gray-800/20 rounded-lg hover:bg-gray-800/40 transition-colors"
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-semibold text-white">
                            {transfer.from}
                          </span>
                          <ArrowRight className="w-4 h-4 text-gray-500" />
                          <span className="text-sm font-semibold text-white">
                            {transfer.to}
                          </span>
                        </div>
                        <p className="text-sm text-gray-400 mt-1">
                          {transfer.item} ({transfer.qty} pcs) - {transfer.reason}
                        </p>
                      </div>
                      <button className="px-4 py-2 bg-[#4ADE80] text-black rounded-lg font-semibold text-sm hover:bg-green-400 transition-colors">
                        Approve
                      </button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Search & Filter Bar */}
            <Card>
              <CardHeader title="Inventory Search & Filter" />
              <CardContent>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Search by item name, SKU, or store..."
                    className="w-full px-4 py-2 rounded-lg bg-gray-800/30 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-[#4ADE80]"
                  />
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                    <select className="px-4 py-2 rounded-lg bg-gray-800/30 border border-gray-700 text-white focus:outline-none focus:border-[#4ADE80]">
                      <option>All Metal Types</option>
                      <option>Gold 22K</option>
                      <option>Gold 18K</option>
                      <option>Silver</option>
                      <option>Platinum</option>
                    </select>
                    <select className="px-4 py-2 rounded-lg bg-gray-800/30 border border-gray-700 text-white focus:outline-none focus:border-[#4ADE80]">
                      <option>All Locations</option>
                      <option>Mumbai HQ</option>
                      <option>Delhi Central</option>
                      <option>Bangalore East</option>
                      <option>Hyderabad Main</option>
                      <option>Pune Downtown</option>
                    </select>
                    <select className="px-4 py-2 rounded-lg bg-gray-800/30 border border-gray-700 text-white focus:outline-none focus:border-[#4ADE80]">
                      <option>All Age Groups</option>
                      <option>0-30 days</option>
                      <option>30-90 days</option>
                      <option>90-180 days</option>
                      <option>180+ days</option>
                    </select>
                    <button className="px-4 py-2 bg-[#4ADE80] text-black rounded-lg font-semibold hover:bg-green-400 transition-colors">
                      Search
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
      </div>
    </div>
  );
}
