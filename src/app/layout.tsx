import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "JewelAI Dashboard | CaratSense",
  description: "AI-Powered Jewellery Retail Intelligence — Inventory, Pricing, CRM & ML Tools for Indian Jewellers",
  keywords: ["jewellery", "dashboard", "inventory", "pricing", "CRM", "gold schemes", "AI", "ML"],
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "JewelAI Dashboard | CaratSense",
    description: "AI-Powered Jewellery Retail Intelligence — Inventory, Pricing, CRM & ML Tools for Indian Jewellers",
    url: "https://jewelai-dashboard.vercel.app",
    siteName: "JewelAI by CaratSense",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "JewelAI Dashboard by CaratSense",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JewelAI Dashboard | CaratSense",
    description: "AI-Powered Jewellery Retail Intelligence",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="h-full bg-[#F0F0EC] text-[#2D2D2D]">
        <div className="flex h-full gap-4 p-4">
          {/* Sidebar */}
          <Sidebar />

          {/* Main Content */}
          <div className="flex-1 flex flex-col gap-4 overflow-hidden">
            {/* Header */}
            <Header />

            {/* Page Content */}
            <main className="flex-1 overflow-y-auto scroll-smooth">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
