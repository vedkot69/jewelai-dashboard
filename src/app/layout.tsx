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
  description: "Advanced jewellery inventory, pricing, and business intelligence dashboard for Indian jewellers",
  keywords: ["jewellery", "dashboard", "inventory", "pricing", "CRM", "gold schemes"],
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
