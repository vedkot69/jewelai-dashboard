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
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  MessageCircle,
  TrendingUp,
  Send,
  CheckCircle,
  Clock,
  Zap,
} from "lucide-react";

const whatsappData = {
  orderStatistics: {
    today: 45,
    confirmed: 32,
    pending: 10,
    processing: 3,
  },
  liveOrders: [
    {
      id: 1,
      customer: "Rajesh Kumar",
      item: "Gold Coins - 10g",
      price: "₹76,500",
      time: "5 mins ago",
      status: "pending",
    },
    {
      id: 2,
      customer: "Priya Sharma",
      item: "Earrings Set",
      price: "₹45,250",
      time: "12 mins ago",
      status: "confirmed",
    },
    {
      id: 3,
      customer: "Vikram Singh",
      item: "Ring - 22K",
      price: "₹28,900",
      time: "18 mins ago",
      status: "confirmed",
    },
    {
      id: 4,
      customer: "Neha Patel",
      item: "Necklace",
      price: "₹125,000",
      time: "25 mins ago",
      status: "processing",
    },
    {
      id: 5,
      customer: "Anjali Desai",
      item: "Bangles Set",
      price: "₹65,400",
      time: "35 mins ago",
      status: "confirmed",
    },
  ],
  automatedSequence: {
    active: 24,
    deliveryRate: "94%",
    responseRate: "68%",
    conversionRate: "12.5%",
  },
  cataloguePerformance: [
    { item: "Gold Coins", views: 450, shares: 145, orders: 38 },
    { item: "Earrings", views: 380, shares: 120, orders: 32 },
    { item: "Rings", views: 320, shares: 95, orders: 28 },
    { item: "Necklaces", views: 280, shares: 85, orders: 18 },
    { item: "Bangles", views: 210, shares: 68, orders: 12 },
  ],
  messageAnalytics: [
    { day: "Mon", sent: 340, received: 280, converted: 42 },
    { day: "Tue", sent: 380, received: 315, converted: 48 },
    { day: "Wed", sent: 420, received: 340, converted: 52 },
    { day: "Thu", sent: 390, received: 325, converted: 44 },
    { day: "Fri", sent: 450, received: 380, converted: 58 },
    { day: "Sat", sent: 520, received: 420, converted: 68 },
    { day: "Sun", sent: 480, received: 390, converted: 62 },
  ],
  activeConversations: [
    {
      id: 1,
      name: "Rajesh Kumar",
      lastMessage: "Hi, do you have gold coins in stock?",
      time: "1 min ago",
      status: "online",
    },
    {
      id: 2,
      name: "Sneha Iyer",
      lastMessage: "Can you send photos of the new collection?",
      time: "5 mins ago",
      status: "online",
    },
    {
      id: 3,
      name: "Vikram Singh",
      lastMessage: "When will the ring be ready?",
      time: "12 mins ago",
      status: "away",
    },
    {
      id: 4,
      name: "Pooja Gupta",
      lastMessage: "Is there a discount on bulk orders?",
      time: "18 mins ago",
      status: "offline",
    },
    {
      id: 5,
      name: "Arun Patel",
      lastMessage: "Can I exchange the item?",
      time: "23 mins ago",
      status: "online",
    },
  ],
  broadcastCampaign: {
    lastCampaign: "Diwali Gold Offer 2025",
    audience: 2450,
    delivered: 2380,
    clicked: 485,
    converted: 78,
  },
};

const chartColors = ["#4ADE80", "#A78BFA", "#06B6D4", "#F5A623"];

export default function WhatsAppPage() {
  const [expandedOrder, setExpandedOrder] = useState<number | null>(null);

  return (
    <div className="p-6 md:p-8 max-w-7xl mx-auto">
      <div className="space-y-6 pb-8">
            {/* Page Header */}
            <div>
              <h1 className="text-3xl font-bold text-[#2D2D2D] tracking-tight">
                WhatsApp Commerce
              </h1>
              <p className="text-gray-600 mt-1">
                Chatbot, automation, and commerce integration
              </p>
            </div>

            {/* Order Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <KPICard
                icon="📱"
                label="Today's Orders"
                value={whatsappData.orderStatistics.today.toString()}
                change={18}
                changeType="positive"
                subtitle="Real-time orders"
              />
              <KPICard
                icon="✅"
                label="Confirmed"
                value={whatsappData.orderStatistics.confirmed.toString()}
                subtitle="Ready to ship"
              />
              <KPICard
                icon="⏳"
                label="Pending"
                value={whatsappData.orderStatistics.pending.toString()}
                subtitle="Awaiting confirmation"
              />
              <KPICard
                icon="⚙️"
                label="Processing"
                value={whatsappData.orderStatistics.processing.toString()}
                subtitle="In preparation"
              />
            </div>

            {/* Live Order Feed */}
            <Card>
              <CardHeader title="Live Order Feed" subtitle="Real-time WhatsApp orders" />
              <CardContent>
                <div className="space-y-2">
                  {whatsappData.liveOrders.map((order) => (
                    <div
                      key={order.id}
                      className="p-4 bg-gray-800/20 rounded-lg hover:bg-gray-800/40 transition-colors cursor-pointer"
                      onClick={() =>
                        setExpandedOrder(expandedOrder === order.id ? null : order.id)
                      }
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-[#4ADE80]/20 flex items-center justify-center">
                              <MessageCircle className="w-5 h-5 text-[#4ADE80]" />
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-white">
                                {order.customer}
                              </p>
                              <p className="text-xs text-gray-400 mt-0.5">
                                {order.item}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-semibold text-white">
                            {order.price}
                          </p>
                          <span
                            className={`inline-block px-2 py-1 rounded text-xs font-semibold mt-1 ${
                              order.status === "pending"
                                ? "bg-yellow-500/20 text-yellow-400"
                                : order.status === "confirmed"
                                  ? "bg-[#4ADE80]/20 text-[#4ADE80]"
                                  : "bg-blue-500/20 text-blue-400"
                            }`}
                          >
                            {order.status.toUpperCase()}
                          </span>
                        </div>
                      </div>
                      <p className="text-xs text-gray-500 mt-2">{order.time}</p>
                      {expandedOrder === order.id && (
                        <div className="mt-4 pt-4 border-t border-gray-700">
                          <button className="px-4 py-2 bg-[#4ADE80] text-black rounded-lg text-sm font-semibold hover:bg-green-400 transition-colors mr-2">
                            Confirm
                          </button>
                          <button className="px-4 py-2 bg-gray-800/50 text-white rounded-lg text-sm font-semibold hover:bg-gray-800 transition-colors">
                            View Details
                          </button>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Automated Sequence Status & Catalogue Performance */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Automated Sequence */}
              <Card>
                <CardHeader title="Automated Sequence Status" />
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-gray-800/30 rounded-lg">
                      <span className="text-gray-300">Active Sequences</span>
                      <span className="text-2xl font-bold text-[#4ADE80]">
                        {whatsappData.automatedSequence.active}
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-800/30 rounded-lg">
                      <span className="text-gray-300">Delivery Rate</span>
                      <span className="text-2xl font-bold text-[#06B6D4]">
                        {whatsappData.automatedSequence.deliveryRate}
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-800/30 rounded-lg">
                      <span className="text-gray-300">Response Rate</span>
                      <span className="text-2xl font-bold text-[#A78BFA]">
                        {whatsappData.automatedSequence.responseRate}
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-800/30 rounded-lg">
                      <span className="text-gray-300">Conversion Rate</span>
                      <span className="text-2xl font-bold text-[#F5A623]">
                        {whatsappData.automatedSequence.conversionRate}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Catalogue Performance */}
              <Card>
                <CardHeader title="Catalogue Performance" />
                <CardContent>
                  <div className="space-y-3">
                    {whatsappData.cataloguePerformance.map((item, idx) => (
                      <div key={idx} className="p-3 bg-gray-800/20 rounded-lg">
                        <p className="text-sm font-semibold text-white mb-2">
                          {item.item}
                        </p>
                        <div className="grid grid-cols-3 gap-2 text-xs">
                          <div>
                            <p className="text-gray-400">Views</p>
                            <p className="text-white font-bold">{item.views}</p>
                          </div>
                          <div>
                            <p className="text-gray-400">Shares</p>
                            <p className="text-white font-bold">{item.shares}</p>
                          </div>
                          <div>
                            <p className="text-gray-400">Orders</p>
                            <p className="text-white font-bold">{item.orders}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Message Analytics */}
            <Card>
              <CardHeader title="Message Analytics" subtitle="Sent, received, and conversions" />
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={whatsappData.messageAnalytics}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                    <XAxis dataKey="day" stroke="#666" />
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
                    <Bar dataKey="sent" fill="#4ADE80" radius={[8, 8, 0, 0]} />
                    <Bar dataKey="received" fill="#A78BFA" radius={[8, 8, 0, 0]} />
                    <Bar dataKey="converted" fill="#06B6D4" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Active Conversations */}
            <Card>
              <CardHeader title="Active Conversations" subtitle="Real-time customer chats" />
              <CardContent>
                <div className="space-y-3">
                  {whatsappData.activeConversations.map((conv) => (
                    <div
                      key={conv.id}
                      className="p-4 bg-gray-800/20 rounded-lg hover:bg-gray-800/40 transition-colors"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-3 flex-1">
                          <div className="relative">
                            <div className="w-10 h-10 rounded-full bg-[#A78BFA]/20 flex items-center justify-center">
                              <MessageCircle className="w-5 h-5 text-[#A78BFA]" />
                            </div>
                            <span
                              className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border border-[#1a1a1a] ${
                                conv.status === "online"
                                  ? "bg-[#4ADE80]"
                                  : conv.status === "away"
                                    ? "bg-[#F5A623]"
                                    : "bg-gray-500"
                              }`}
                            />
                          </div>
                          <div className="flex-1">
                            <p className="text-sm font-semibold text-white">
                              {conv.name}
                            </p>
                            <p className="text-sm text-gray-400 mt-1">
                              {conv.lastMessage}
                            </p>
                            <p className="text-xs text-gray-500 mt-2">
                              {conv.time}
                            </p>
                          </div>
                        </div>
                        <button className="px-3 py-1 bg-[#4ADE80] text-black rounded text-xs font-semibold hover:bg-green-400 transition-colors">
                          Reply
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Broadcast Campaign & Smart Suggestion */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Broadcast Campaign */}
              <Card>
                <CardHeader title="Last Broadcast Campaign" />
                <CardContent>
                  <div className="space-y-4">
                    <div className="border-b border-gray-800 pb-4">
                      <p className="text-sm text-gray-400 mb-2">Campaign Name</p>
                      <p className="text-lg font-bold text-white">
                        {whatsappData.broadcastCampaign.lastCampaign}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-3 bg-gray-800/30 rounded-lg">
                        <p className="text-xs text-gray-400 mb-1">Audience</p>
                        <p className="text-lg font-bold text-white">
                          {whatsappData.broadcastCampaign.audience}
                        </p>
                      </div>
                      <div className="p-3 bg-gray-800/30 rounded-lg">
                        <p className="text-xs text-gray-400 mb-1">Delivered</p>
                        <p className="text-lg font-bold text-[#4ADE80]">
                          {whatsappData.broadcastCampaign.delivered}
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-3 bg-gray-800/30 rounded-lg">
                        <p className="text-xs text-gray-400 mb-1">Clicked</p>
                        <p className="text-lg font-bold text-[#06B6D4]">
                          {whatsappData.broadcastCampaign.clicked}
                        </p>
                      </div>
                      <div className="p-3 bg-gray-800/30 rounded-lg">
                        <p className="text-xs text-gray-400 mb-1">Converted</p>
                        <p className="text-lg font-bold text-[#A78BFA]">
                          {whatsappData.broadcastCampaign.converted}
                        </p>
                      </div>
                    </div>

                    <button className="w-full px-4 py-2 bg-[#4ADE80] text-black rounded-lg font-semibold hover:bg-green-400 transition-colors mt-4">
                      Create New Campaign
                    </button>
                  </div>
                </CardContent>
              </Card>

              {/* Smart Broadcast AI Suggestion */}
              <Card>
                <CardHeader title="Smart Broadcast AI Suggestion" />
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-gradient-to-br from-[#4ADE80]/20 to-transparent rounded-lg border border-[#4ADE80]/30">
                      <div className="flex gap-3">
                        <Zap className="w-5 h-5 text-[#4ADE80] flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm font-semibold text-white">
                            Festival Season Campaign
                          </p>
                          <p className="text-xs text-gray-400 mt-2">
                            Based on Diwali 2024 performance, send special offers
                            to 2,150 customers in Gold & Silver categories.
                          </p>
                          <div className="mt-3 flex gap-2">
                            <span className="px-2 py-1 bg-[#4ADE80]/20 text-[#4ADE80] rounded text-xs font-semibold">
                              Est. 18% conversion
                            </span>
                            <span className="px-2 py-1 bg-[#A78BFA]/20 text-[#A78BFA] rounded text-xs font-semibold">
                              High confidence
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-800 pt-4">
                      <p className="text-xs text-gray-400 mb-3">
                        Recommended Template
                      </p>
                      <div className="bg-gray-800/30 rounded-lg p-3 text-xs text-gray-300 border border-gray-800">
                        <p>Hi {'{'}Customer{'}'}, 🎉</p>
                        <p>
                          Special Diwali offer just for you! Get UP TO 25%
                          discount on selected gold items.
                        </p>
                        <p>📌 Offer valid till {'{'}Date{'}'}</p>
                      </div>
                    </div>

                    <button className="w-full px-4 py-2 bg-[#4ADE80] text-black rounded-lg font-semibold hover:bg-green-400 transition-colors">
                      Launch Campaign
                    </button>
                  </div>
                </CardContent>
              </Card>
            </div>
      </div>
    </div>
  );
}
