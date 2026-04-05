// Sales Data by Metal Type (6 months)
export const salesData = [
  { month: 'January', gold: 45000, diamond: 32000, silver: 18000, platinum: 12000 },
  { month: 'February', gold: 52000, diamond: 38000, silver: 22000, platinum: 15000 },
  { month: 'March', gold: 48000, diamond: 35000, silver: 20000, platinum: 14000 },
  { month: 'April', gold: 61000, diamond: 42000, silver: 25000, platinum: 18000 },
  { month: 'May', gold: 55000, diamond: 39000, silver: 23000, platinum: 16000 },
  { month: 'June', gold: 68000, diamond: 45000, silver: 28000, platinum: 20000 },
];

// Gold Price Data (24-hour intraday)
export const goldPriceData = [
  { time: '12:00 AM', price: 7340 },
  { time: '1:00 AM', price: 7338 },
  { time: '2:00 AM', price: 7342 },
  { time: '3:00 AM', price: 7335 },
  { time: '4:00 AM', price: 7339 },
  { time: '5:00 AM', price: 7341 },
  { time: '6:00 AM', price: 7345 },
  { time: '7:00 AM', price: 7348 },
  { time: '8:00 AM', price: 7352 },
  { time: '9:00 AM', price: 7356 },
  { time: '10:00 AM', price: 7354 },
  { time: '11:00 AM', price: 7358 },
  { time: '12:00 PM', price: 7360 },
  { time: '1:00 PM', price: 7356 },
  { time: '2:00 PM', price: 7351 },
  { time: '3:00 PM', price: 7348 },
  { time: '4:00 PM', price: 7346 },
  { time: '5:00 PM', price: 7344 },
  { time: '6:00 PM', price: 7342 },
  { time: '7:00 PM', price: 7340 },
  { time: '8:00 PM', price: 7338 },
  { time: '9:00 PM', price: 7336 },
  { time: '10:00 PM', price: 7334 },
  { time: '11:00 PM', price: 7336 },
];

// 30-day Gold Price History
export const goldPriceHistory = [
  { date: 'Mar 6', price: 7298 },
  { date: 'Mar 7', price: 7302 },
  { date: 'Mar 8', price: 7305 },
  { date: 'Mar 9', price: 7308 },
  { date: 'Mar 10', price: 7312 },
  { date: 'Mar 11', price: 7315 },
  { date: 'Mar 12', price: 7320 },
  { date: 'Mar 13', price: 7318 },
  { date: 'Mar 14', price: 7322 },
  { date: 'Mar 15', price: 7325 },
  { date: 'Mar 16', price: 7328 },
  { date: 'Mar 17', price: 7332 },
  { date: 'Mar 18', price: 7335 },
  { date: 'Mar 19', price: 7338 },
  { date: 'Mar 20', price: 7340 },
  { date: 'Mar 21', price: 7345 },
  { date: 'Mar 22', price: 7348 },
  { date: 'Mar 23', price: 7350 },
  { date: 'Mar 24', price: 7348 },
  { date: 'Mar 25', price: 7352 },
  { date: 'Mar 26', price: 7356 },
  { date: 'Mar 27', price: 7358 },
  { date: 'Mar 28', price: 7360 },
  { date: 'Mar 29', price: 7358 },
  { date: 'Mar 30', price: 7362 },
  { date: 'Mar 31', price: 7365 },
  { date: 'Apr 1', price: 7363 },
  { date: 'Apr 2', price: 7360 },
  { date: 'Apr 3', price: 7358 },
  { date: 'Apr 4', price: 7356 },
];

// Inventory by Type (Pie chart data)
export const inventoryByType = [
  { name: 'Gold Jewellery', value: 42, color: '#F5A623' },
  { name: 'Diamond Jewellery', value: 28, color: '#A78BFA' },
  { name: 'Silver Jewellery', value: 18, color: '#B0B0AC' },
  { name: 'Platinum Jewellery', value: 12, color: '#3B82F6' },
];

// Top Selling Designs
export const topSellingDesigns = [
  {
    id: 1,
    emoji: '👑',
    name: 'Kundan Bridal Set',
    category: 'Bridal',
    sold: 156,
    revenue: 845000,
    trend: 12,
  },
  {
    id: 2,
    emoji: '💍',
    name: 'Gold Bangles Pair',
    category: 'Bangles',
    sold: 423,
    revenue: 623400,
    trend: 8,
  },
  {
    id: 3,
    emoji: '✨',
    name: 'Diamond Solitaire Ring',
    category: 'Rings',
    sold: 89,
    revenue: 1234000,
    trend: 15,
  },
  {
    id: 4,
    emoji: '🔗',
    name: 'Temple Necklace',
    category: 'Necklaces',
    sold: 234,
    revenue: 567800,
    trend: -3,
  },
  {
    id: 5,
    emoji: '💎',
    name: 'Gold Earrings - Studs',
    category: 'Earrings',
    sold: 512,
    revenue: 456200,
    trend: 5,
  },
];

// Dead Stock Items
export const deadStockItems = [
  {
    id: 1,
    name: 'Vintage Filigree Pendant',
    agingDays: 187,
    weight: 12.5,
    value: 45600,
    riskLevel: 'High',
  },
  {
    id: 2,
    name: 'Old Design Bangle Set',
    agingDays: 156,
    weight: 89.2,
    value: 324500,
    riskLevel: 'High',
  },
  {
    id: 3,
    name: 'Antique Ring Collection',
    agingDays: 134,
    weight: 34.8,
    value: 127400,
    riskLevel: 'Medium',
  },
  {
    id: 4,
    name: 'Ethnic Silver Necklace',
    agingDays: 112,
    weight: 56.3,
    value: 89200,
    riskLevel: 'Medium',
  },
];

// Customer Segments
export const customerSegments = [
  { name: 'VIP Customers', count: 234, revenue: 8900000, color: '#F5A623' },
  { name: 'Wedding Season', count: 1240, revenue: 4560000, color: '#A78BFA' },
  { name: 'Festival Buyers', count: 3200, revenue: 2340000, color: '#4ADE80' },
  { name: 'Gold Scheme', count: 4500, revenue: 1890000, color: '#3B82F6' },
  { name: 'Dormant', count: 2100, revenue: 120000, color: '#666666' },
];

// Gold Scheme Performance (Monthly data)
export const goldSchemeData = [
  { month: 'January', active: 4200, collection: 89, defaulted: 2 },
  { month: 'February', active: 4350, collection: 91, defaulted: 1 },
  { month: 'March', active: 4500, collection: 88, defaulted: 3 },
  { month: 'April', active: 4800, collection: 92, defaulted: 2 },
  { month: 'May', active: 5100, collection: 90, defaulted: 2 },
  { month: 'June', active: 5400, collection: 93, defaulted: 1 },
];

// Karigar Performance
export const karigarPerformance = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    specialty: 'Bridal Kundan',
    pieces: 245,
    wastage: 2.1,
    quality: 9.6,
  },
  {
    id: 2,
    name: 'Vikram Singh',
    specialty: 'Temple Designs',
    pieces: 189,
    wastage: 3.4,
    quality: 8.9,
  },
  {
    id: 3,
    name: 'Amit Patel',
    specialty: 'Modern Rings',
    pieces: 312,
    wastage: 1.8,
    quality: 9.8,
  },
  {
    id: 4,
    name: 'Pradeep Verma',
    specialty: 'Meenakari Work',
    pieces: 156,
    wastage: 4.2,
    quality: 9.4,
  },
];

// Recent WhatsApp Orders
export const recentWhatsAppOrders = [
  {
    id: 1,
    customer: 'Priya Sharma',
    item: 'Gold Bangles Pair',
    weight: 45.2,
    time: '2 hours ago',
    status: 'Confirmed',
  },
  {
    id: 2,
    customer: 'Amit Desai',
    item: 'Diamond Ring',
    weight: 8.5,
    time: '4 hours ago',
    status: 'Completed',
  },
  {
    id: 3,
    customer: 'Neha Gupta',
    item: 'Gold Necklace',
    weight: 32.8,
    time: '1 day ago',
    status: 'Pending',
  },
  {
    id: 4,
    customer: 'Rajiv Reddy',
    item: 'Earrings Set',
    weight: 12.1,
    time: '2 days ago',
    status: 'Completed',
  },
];

// Store Performance
export const storePerformance = [
  {
    id: 1,
    name: 'Delhi Main Store',
    sales: 2340000,
    target: 2500000,
    targetPercent: 94,
    footfall: 4560,
    conversion: 18.5,
  },
  {
    id: 2,
    name: 'Mumbai Flagship',
    sales: 2890000,
    target: 2800000,
    targetPercent: 103,
    footfall: 5200,
    conversion: 21.2,
  },
  {
    id: 3,
    name: 'Bangalore Outlet',
    sales: 1560000,
    target: 1800000,
    targetPercent: 87,
    footfall: 3400,
    conversion: 15.8,
  },
];

// Compliance Alerts
export const complianceAlerts = [
  {
    id: 1,
    type: 'HUID',
    title: 'HUID Update Required',
    count: 234,
    severity: 'High',
    dueDate: '2026-04-08',
  },
  {
    id: 2,
    type: 'GST',
    title: 'GST Return Filing',
    count: 1,
    severity: 'Critical',
    dueDate: '2026-04-10',
  },
  {
    id: 3,
    type: 'E-Way Bill',
    title: 'E-Way Bills Pending',
    count: 45,
    severity: 'Medium',
    dueDate: '2026-04-05',
  },
];

// Receivables Data (Aging Buckets)
export const receivablesData = [
  { bucket: '0-30 Days', amount: 456200, count: 23, trend: 5 },
  { bucket: '31-60 Days', amount: 234100, count: 12, trend: -2 },
  { bucket: '61-90 Days', amount: 156700, count: 8, trend: 8 },
  { bucket: '90+ Days', amount: 89500, count: 4, trend: -5 },
];

// Sales Team Performance
export const salesTeamData = [
  {
    id: 1,
    name: 'Meera Patel',
    conversion: 22.5,
    ticketSize: 45600,
    upsell: 34,
    target: 2500000,
    achieved: 2650000,
  },
  {
    id: 2,
    name: 'Arun Mehta',
    conversion: 19.8,
    ticketSize: 38900,
    upsell: 28,
    target: 2000000,
    achieved: 1890000,
  },
  {
    id: 3,
    name: 'Sneha Verma',
    conversion: 24.2,
    ticketSize: 52100,
    upsell: 42,
    target: 2800000,
    achieved: 2950000,
  },
  {
    id: 4,
    name: 'Rohan Singh',
    conversion: 18.6,
    ticketSize: 35400,
    upsell: 22,
    target: 1800000,
    achieved: 1650000,
  },
  {
    id: 5,
    name: 'Divya Joshi',
    conversion: 21.3,
    ticketSize: 48700,
    upsell: 38,
    target: 2400000,
    achieved: 2520000,
  },
];

// Scheme Maturity Data
export const schemeMaturityData = [
  { month: 'April 2026', maturing: 245, amount: 1234000 },
  { month: 'May 2026', maturing: 312, amount: 1567000 },
  { month: 'June 2026', maturing: 198, amount: 998500 },
  { month: 'July 2026', maturing: 156, amount: 789200 },
];

// Exhibition Leads
export const exhibitionLeads = [
  {
    id: 1,
    event: 'Delhi Jewellery Expo 2026',
    date: 'Apr 15-17',
    leads: 324,
    conversion: 18,
    revenue: 567800,
  },
  {
    id: 2,
    event: 'Mumbai Fashion Week',
    date: 'Apr 22-24',
    leads: 456,
    conversion: 12,
    revenue: 423500,
  },
  {
    id: 3,
    event: 'Bangalore Bridal Fair',
    date: 'May 5-7',
    leads: 289,
    conversion: 22,
    revenue: 687200,
  },
];

// AI Insights
export const aiInsights = [
  {
    id: 1,
    title: 'Demand Surge Predicted',
    description:
      'Gold demand expected to increase 23% in next week due to upcoming wedding season',
    type: 'Opportunity',
    icon: 'TrendingUp',
    action: 'Increase Gold Stock',
  },
  {
    id: 2,
    title: 'Dead Stock Alert',
    description:
      '42 SKUs aging over 6 months. Recommend 15% discount to clear inventory',
    type: 'Alert',
    icon: 'AlertTriangle',
    action: 'Create Campaign',
  },
  {
    id: 3,
    title: 'Customer Pattern Detected',
    description:
      'VIP customers show 67% higher upsell rate for diamond designs with gold bases',
    type: 'Insight',
    icon: 'Lightbulb',
    action: 'Update Recommendations',
  },
];

// Demand Forecast (Next 3 months)
export const demandForecast = [
  { month: 'April', predicted: 6800, actual: 6200 },
  { month: 'May', predicted: 7200, actual: null },
  { month: 'June', predicted: 8100, actual: null },
];

// Regional Preferences (Top designs by region)
export const regionalPreferences = [
  {
    region: 'North India',
    topDesign: 'Kundan Bridal Set',
    demand: 2340,
    trend: 12,
  },
  {
    region: 'South India',
    topDesign: 'Temple Necklace',
    demand: 1856,
    trend: 8,
  },
  {
    region: 'West India',
    topDesign: 'Diamond Solitaire Ring',
    demand: 1456,
    trend: 15,
  },
  {
    region: 'East India',
    topDesign: 'Gold Bangles Pair',
    demand: 1234,
    trend: 5,
  },
];

// Dashboard Summary Stats
export const dashboardStats = {
  totalRevenue: 18900000,
  revenueGrowth: 12.5,
  totalOrders: 1245,
  ordersGrowth: 8.3,
  totalCustomers: 8940,
  customersGrowth: 15.2,
  avgTicketSize: 15180,
  ticketGrowth: -2.1,
  goldInventory: 2340,
  diamondInventory: 1560,
  schemeActiveMembers: 5400,
  complianceAlerts: 2,
};

// Dashboard KPIs
export const dashboardKPIs = {
  todayRevenue: { icon: '💰', label: "Today's Revenue", value: '₹2,34,000', change: 12.5, changeType: 'positive' },
  inventoryValue: { icon: '📦', label: 'Inventory Value', value: '₹1.2Cr', subtitle: '2,340 items' },
  activeCustomers: { icon: '👥', label: 'Active Customers', value: '1,240', subtitle: 'this month' },
  goldSchemes: { icon: '✨', label: 'Gold Schemes', value: '5,400', subtitle: 'active members' },
};

// Revenue Overview Data (alias for salesData with proper formatting)
export const revenueOverviewData = salesData;

// Inventory Mix Data (alias for inventoryByType)
export const inventoryMixData = inventoryByType;

// Dead Stock Alerts (transformed from deadStockItems)
export const deadStockAlerts = deadStockItems.map(item => ({
  name: item.name,
  agingDays: item.agingDays,
  weight: `${item.weight} g`,
  value: `₹${(item.value / 1000).toFixed(0)}k`,
}));

// Quick Pulse Alerts
export const quickPulseAlerts = {
  compliance: [
    { label: 'HUID Updates', status: 'warning', count: '234' },
    { label: 'GST Filing', status: 'alert', count: '1' },
    { label: 'Hallmark Pending', status: 'clear', count: '0' },
  ],
};

// Receivables Aging (transformed from receivablesData)
export const receivablesAging = [
  { bucket: '0-30', amount: '₹45,60,000', percent: 45 },
  { bucket: '30-60', amount: '₹28,90,000', percent: 28 },
  { bucket: '60-90', amount: '₹16,70,000', percent: 17 },
  { bucket: '90+', amount: '₹8,80,000', percent: 10 },
];
