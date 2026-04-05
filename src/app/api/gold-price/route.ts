import { NextResponse } from "next/server";

const TROY_OZ_TO_GRAM = 31.1035;

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET() {
  try {
    const res = await fetch("https://api.gold-api.com/price/XAU/INR", {
      next: { revalidate: 0 },
      headers: { "Accept": "application/json" },
    });

    if (!res.ok) {
      throw new Error(`Gold API returned ${res.status}`);
    }

    const data = await res.json();

    // data.price is per troy ounce in INR
    const pricePerOz = data.price;
    const pricePerGram = pricePerOz / TROY_OZ_TO_GRAM;
    const pricePerGram24K = Math.round(pricePerGram);
    const pricePerGram22K = Math.round(pricePerGram * 0.9167);
    const pricePerGram18K = Math.round(pricePerGram * 0.75);
    const pricePer10Gram24K = pricePerGram24K * 10;
    const pricePer10Gram22K = pricePerGram22K * 10;

    // Silver price too
    let silverPerGram = 0;
    try {
      const silverRes = await fetch("https://api.gold-api.com/price/XAG/INR", {
        next: { revalidate: 0 },
        headers: { "Accept": "application/json" },
      });
      if (silverRes.ok) {
        const silverData = await silverRes.json();
        silverPerGram = Math.round(silverData.price / TROY_OZ_TO_GRAM);
      }
    } catch {
      // Silver price optional
    }

    return NextResponse.json({
      success: true,
      gold: {
        perGram24K: pricePerGram24K,
        perGram22K: pricePerGram22K,
        perGram18K: pricePerGram18K,
        per10Gram24K: pricePer10Gram24K,
        per10Gram22K: pricePer10Gram22K,
        perOz: Math.round(pricePerOz),
        currency: "INR",
        symbol: "₹",
      },
      silver: {
        perGram: silverPerGram,
        currency: "INR",
        symbol: "₹",
      },
      exchangeRate: data.exchangeRate,
      updatedAt: data.updatedAt,
      updatedAtReadable: data.updatedAtReadable,
      source: "gold-api.com",
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        error: error.message || "Failed to fetch gold price",
        // Fallback prices so UI doesn't break
        gold: {
          perGram24K: 0,
          perGram22K: 0,
          perGram18K: 0,
          per10Gram24K: 0,
          per10Gram22K: 0,
          perOz: 0,
          currency: "INR",
          symbol: "₹",
        },
        silver: { perGram: 0, currency: "INR", symbol: "₹" },
      },
      { status: 502 }
    );
  }
}
