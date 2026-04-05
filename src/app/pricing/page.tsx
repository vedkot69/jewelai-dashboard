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
  Area,
  AreaChart,
} from "recharts";
import { Lock, Zap, TrendingUp } from "lucide-react";

const pricingData = {
  goldPriceHistory: [
    { date: "Apr 1", price: 7245, intraday: 7245 },
    { date: "Apr 2", price: 7280, intraday: 7280 },
    { date: "Apr 3", price: 7195, intraday: 7195 },
    { date: "Apr 4", price: 7320, intraday: 7320 },
    { date: "Apr 5", price: 7410, intraday: 7410 },
    { date: "Apr 6", price: 7385, intraday: 7385 },
    { date: "Apr 7", price: 7450, intraday: 7450 },
    { date: "Apr 8", price: 7495, intraday: 7520 },
    { date: "Apr 9", price: 7560, intraday: 7580 },
    { date: "Apr 10", price: 7625, intraday: 7650 },
  ],
  makingChargeMatrix: [
    { category: "Daily Wear", light: "8%", medium: "12%", heavy: "15%" },
    { category: "Traditional", light: "12%", medium: "16%", heavy: "20%" },
    { category: "Bridal", light: "15%", medium: "20%", heavy: "25%" },
    { category: "Studded", light: "18%", medium: "24%", heavy: "30%" },
    { category: "Kundan", light: "20%", medium: "28%", heavy: "35%" },
  ],
  competitorPrices: [
    { jeweler: "Your Store", gold: 7650, silver: 95, platinum: 7420 },
    { jeweler: "Tanishq", gold: 7580, silver: 92, platinum: 7380 },
    { jeweler: "CaratLane", gold: 7620, silver: 98, platinum: 7450 },
    { jeweler: "Kalyan", gold: 7700, silver: 100, platinum: 7520 },
  ],
  priceForecasting: [
    { day: "Today", price: 7650, confidence_high: 7680, confidence_low: 7620 },
    { day: "Tomorrow", price: 7680, confidence_high: 7720, confidence_low: 7640 },
    { day: "Day 3", price: 7695, confidence_high: 7750, confidence_low: 7640 },
    { day: "Day 4", price: 7710, confidence_high: 7780, confidence_low: 7640 },
    { day: "Day 5", price: 7720, confidence_high: 7800, confidence_low: 7640 },
    { day: "Day 6", price: 7725, confidence_high: 7810, confidence_low: 7640 },
    { day: "Day 7", price: 7730, confidence_high: 7820, confidence_low: 7640 },
  ],
};

export default function PricingPage() {
  const [weight, setWeight] = useState<number>(10);
  const [purity, setPurity] = useState<number>(22);
  const [makingChargePercent, setMakingChargePercent] = useState<number>(12);
  const [stoneCost, setStoneCost] = useState<number>(0);

  const basePricePerGram = 7650;
  const pureGold = (weight * purity) / 24;
  const goldCost = pureGold * basePricePerGram;
  const makingCharge = (goldCost * makingChargePercent) / 100;
  const subtotal = goldCost + makingCharge + stoneCost;
  const gst = (subtotal * 5) / 100;
  const finalPrice = subtotal + gst;

  const currentInventoryValue = 14800000;
  const priceChange = 5;
  const inventoryLossPercentage = (priceChange / 100) * currentInventoryValue;

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
                Pricing Engine
              </h1>
              <p className="text-gray-600 mt-1">
                Dynamic pricing with live gold feed and market analysis
              </p>
            </div>

            {/* Top KPIs */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <KPICard
                icon="🥇"
                label="Live Gold Price"
                value="₹7,650/g"
                change={2.8}
                changeType="positive"
                subtitle="Today's rate"
              />
              <KPICard
                icon="📊"
                label="30-Day Trend"
                value="+5.6%"
                change={5.6}
                changeType="positive"
                subtitle="Month-on-month"
              />
              <KPICard
                icon="💎"
                label="Avg Making Charge"
                value="15%"
                subtitle="Across categories"
              />
              <KPICard
                icon="⚡"
                label="Price Volatility"
                value="2.3%"
                change={1.2}
                changeType="positive"
                subtitle="7-day std dev"
              />
            </div>

            {/* Gold Price History */}
            <Card>
              <CardHeader
                title="Live Gold Price (30-Day History)"
                subtitle="Real-time intraday pricing included"
              />
              <CardContent>
                <ResponsiveContainer width="100%" height={350}>
                  <AreaChart data={pricingData.goldPriceHistory}>
                    <defs>
                      <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#4ADE80" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#4ADE80" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                    <XAxis dataKey="date" stroke="#666" />
                    <YAxis stroke="#666" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#1a1a1a",
                        border: "1px solid #333",
                        borderRadius: "8px",
                        color: "#fff",
                      }}
                    />
                    <Area
                      type="monotone"
                      dataKey="price"
                      stroke="#4ADE80"
                      strokeWidth={2}
                      fillOpacity={1}
                      fill="url(#colorPrice)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Price Calculator */}
            <Card>
              <CardHeader
                title="Price Calculator Tool"
                subtitle="Auto-calculate final price with GST"
              />
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Input Section */}
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">
                        Weight (grams)
                      </label>
                      <input
                        type="number"
                        value={weight}
                        onChange={(e) => setWeight(Number(e.target.value))}
                        className="w-full px-4 py-2 rounded-lg bg-gray-800/30 border border-gray-700 text-white focus:outline-none focus:border-[#4ADE80]"
                      />
                      <input
                        type="range"
                        min="1"
                        max="100"
                        value={weight}
                        onChange={(e) => setWeight(Number(e.target.value))}
                        className="w-full mt-2 accent-[#4ADE80]"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">
                        Purity (K)
                      </label>
                      <select
                        value={purity}
                        onChange={(e) => setPurity(Number(e.target.value))}
                        className="w-full px-4 py-2 rounded-lg bg-gray-800/30 border border-gray-700 text-white focus:outline-none focus:border-[#4ADE80]"
                      >
                        <option value="18">18K (75%)</option>
                        <option value="20">20K (83%)</option>
                        <option value="22">22K (92%)</option>
                        <option value="24">24K (99.9%)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">
                        Making Charge (%)
                      </label>
                      <input
                        type="number"
                        value={makingChargePercent}
                        onChange={(e) =>
                          setMakingChargePercent(Number(e.target.value))
                        }
                        className="w-full px-4 py-2 rounded-lg bg-gray-800/30 border border-gray-700 text-white focus:outline-none focus:border-[#4ADE80]"
                      />
                      <input
                        type="range"
                        min="5"
                        max="35"
                        value={makingChargePercent}
                        onChange={(e) =>
                          setMakingChargePercent(Number(e.target.value))
                        }
                        className="w-full mt-2 accent-[#4ADE80]"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">
                        Stone Cost (₹)
                      </label>
                      <input
                        type="number"
                        value={stoneCost}
                        onChange={(e) => setStoneCost(Number(e.target.value))}
                        className="w-full px-4 py-2 rounded-lg bg-gray-800/30 border border-gray-700 text-white focus:outline-none focus:border-[#4ADE80]"
                      />
                    </div>
                  </div>

                  {/* Output Section */}
                  <div className="bg-gradient-to-br from-gray-800/30 to-gray-800/10 rounded-lg p-6 space-y-4">
                    <div className="text-center py-4">
                      <p className="text-gray-400 text-sm mb-2">Final Price</p>
                      <h3 className="text-4xl font-bold text-[#4ADE80]">
                        ₹{Math.round(finalPrice).toLocaleString()}
                      </h3>
                    </div>

                    <div className="border-t border-gray-700 pt-4 space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Pure Gold Cost</span>
                        <span className="text-white">
                          ₹{Math.round(goldCost).toLocaleString()}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Making Charge</span>
                        <span className="text-white">
                          ₹{Math.round(makingCharge).toLocaleString()}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Stone Cost</span>
                        <span className="text-white">
                          ₹{stoneCost.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm border-t border-gray-700 pt-3">
                        <span className="text-gray-400">Subtotal</span>
                        <span className="text-white font-semibold">
                          ₹{Math.round(subtotal).toLocaleString()}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">GST (5%)</span>
                        <span className="text-white">
                          ₹{Math.round(gst).toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Making Charge Matrix */}
            <Card>
              <CardHeader title="Making Charge Matrix by Category" />
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-800">
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-300">
                          Design Category
                        </th>
                        <th className="text-center py-3 px-4 text-sm font-semibold text-gray-300">
                          Light
                        </th>
                        <th className="text-center py-3 px-4 text-sm font-semibold text-gray-300">
                          Medium
                        </th>
                        <th className="text-center py-3 px-4 text-sm font-semibold text-gray-300">
                          Heavy
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-800">
                      {pricingData.makingChargeMatrix.map((row, idx) => (
                        <tr key={idx} className="hover:bg-gray-800/20">
                          <td className="py-3 px-4 text-sm font-semibold text-white">
                            {row.category}
                          </td>
                          <td className="py-3 px-4 text-center text-sm text-gray-300">
                            {row.light}
                          </td>
                          <td className="py-3 px-4 text-center text-sm text-gray-300">
                            {row.medium}
                          </td>
                          <td className="py-3 px-4 text-center text-sm text-gray-300">
                            {row.heavy}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* Margin Simulator */}
            <Card>
              <CardHeader
                title="Margin Simulator"
                subtitle="See P&L impact with price changes"
              />
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Gold Price Change (%)
                    </label>
                    <input
                      type="range"
                      min="-5"
                      max="5"
                      step="0.5"
                      value={priceChange}
                      className="w-full accent-[#4ADE80]"
                    />
                    <div className="mt-4 text-center">
                      <span
                        className={`text-lg font-bold ${
                          priceChange >= 0 ? "text-[#4ADE80]" : "text-[#EF4444]"
                        }`}
                      >
                        {priceChange >= 0 ? "+" : ""}{priceChange}%
                      </span>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-gray-800/30 to-gray-800/10 rounded-lg p-6">
                    <div className="text-center">
                      <p className="text-gray-400 text-sm mb-2">
                        P&L Impact on Current Inventory
                      </p>
                      <h3
                        className={`text-3xl font-bold ${
                          inventoryLossPercentage >= 0
                            ? "text-[#4ADE80]"
                            : "text-[#EF4444]"
                        }`}
                      >
                        {inventoryLossPercentage >= 0 ? "+" : ""}₹
                        {Math.round(inventoryLossPercentage).toLocaleString()}
                      </h3>
                      <p className="text-gray-400 text-xs mt-2">
                        Based on ₹{(currentInventoryValue / 10000000).toFixed(1)}Cr
                        inventory value
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Price Comparison */}
            <Card>
              <CardHeader title="Price Comparison vs Competitors" />
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={pricingData.competitorPrices}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                    <XAxis dataKey="jeweler" stroke="#666" />
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
                    <Bar dataKey="gold" fill="#4ADE80" radius={[8, 8, 0, 0]} />
                    <Bar dataKey="silver" fill="#A78BFA" radius={[8, 8, 0, 0]} />
                    <Bar dataKey="platinum" fill="#06B6D4" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Price Forecast */}
            <Card>
              <CardHeader
                title="7-Day Gold Price Forecast"
                subtitle="With confidence band predictions"
              />
              <CardContent>
                <ResponsiveContainer width="100%" height={350}>
                  <AreaChart data={pricingData.priceForecasting}>
                    <defs>
                      <linearGradient id="colorForecast" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#A78BFA" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#A78BFA" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                    <XAxis dataKey="day" stroke="#666" />
                    <YAxis stroke="#666" domain={["dataMin - 50", "dataMax + 50"]} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#1a1a1a",
                        border: "1px solid #333",
                        borderRadius: "8px",
                        color: "#fff",
                      }}
                    />
                    <Legend />
                    <Area
                      type="monotone"
                      dataKey="confidence_high"
                      stroke="none"
                      fill="#A78BFA"
                      fillOpacity={0.1}
                      name="High Confidence"
                    />
                    <Area
                      type="monotone"
                      dataKey="confidence_low"
                      stroke="none"
                      fill="#A78BFA"
                      fillOpacity={0.1}
                      name="Low Confidence"
                    />
                    <Line
                      type="monotone"
                      dataKey="price"
                      stroke="#A78BFA"
                      strokeWidth={2}
                      dot={{ fill: "#A78BFA", r: 4 }}
                      name="Forecast"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Auto Price Tag Generator & Price Lock */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Auto Price Tag Generator */}
              <Card>
                <CardHeader title="Auto Price Tag Generator" />
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">
                        Select Items
                      </label>
                      <select
                        multiple
                        size={4}
                        className="w-full px-4 py-2 rounded-lg bg-gray-800/30 border border-gray-700 text-white focus:outline-none focus:border-[#4ADE80]"
                      >
                        <option selected>Gold Earrings Set (₹45,250)</option>
                        <option>Silver Ring (₹8,920)</option>
                        <option>Kundan Necklace (₹125,000)</option>
                        <option>Platinum Bracelet (₹78,450)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">
                        Print Format
                      </label>
                      <div className="space-y-2">
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="format"
                            defaultChecked
                            className="mr-2"
                          />
                          <span className="text-sm text-gray-300">
                            A4 Sheet (10 tags/page)
                          </span>
                        </label>
                        <label className="flex items-center">
                          <input type="radio" name="format" className="mr-2" />
                          <span className="text-sm text-gray-300">
                            Barcode Labels
                          </span>
                        </label>
                        <label className="flex items-center">
                          <input type="radio" name="format" className="mr-2" />
                          <span className="text-sm text-gray-300">
                            QR Code Tags
                          </span>
                        </label>
                      </div>
                    </div>
                    <button className="w-full px-4 py-2 bg-[#4ADE80] text-black rounded-lg font-semibold hover:bg-green-400 transition-colors flex items-center justify-center gap-2">
                      <Zap className="w-4 h-4" />
                      Generate & Print
                    </button>
                  </div>
                </CardContent>
              </Card>

              {/* Price Lock Feature */}
              <Card>
                <CardHeader title="Price Lock Feature" />
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-gradient-to-br from-[#4ADE80]/20 to-transparent rounded-lg border border-[#4ADE80]/30">
                      <div className="flex items-start gap-3">
                        <Lock className="w-5 h-5 text-[#4ADE80] mt-0.5" />
                        <div>
                          <p className="text-sm font-semibold text-white">
                            Price Lock Available
                          </p>
                          <p className="text-xs text-gray-400 mt-1">
                            Lock today's rate for customers for up to 48 hours
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Locked Price</span>
                        <span className="text-white font-semibold">
                          ₹7,650/gram
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Lock Duration</span>
                        <span className="text-white font-semibold">
                          48 Hours
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Expires</span>
                        <span className="text-white font-semibold">
                          Apr 11, 2026
                        </span>
                      </div>
                    </div>

                    <div className="border-t border-gray-800 pt-4">
                      <button className="w-full px-4 py-2 bg-[#06B6D4] text-black rounded-lg font-semibold hover:bg-cyan-400 transition-colors flex items-center justify-center gap-2">
                        <Lock className="w-4 h-4" />
                        Create Price Lock Token
                      </button>
                    </div>

                    <div className="text-xs text-gray-500 text-center">
                      Share lock code with customers to honor today's rates
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
