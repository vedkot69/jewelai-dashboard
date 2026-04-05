"use client";

import { useState, useEffect } from "react";

export interface GoldPriceData {
  gold: {
    perGram24K: number;
    perGram22K: number;
    perGram18K: number;
    per10Gram24K: number;
    per10Gram22K: number;
    perOz: number;
    currency: string;
    symbol: string;
  };
  silver: {
    perGram: number;
    currency: string;
    symbol: string;
  };
  exchangeRate: number;
  updatedAt: string;
  updatedAtReadable: string;
  source: string;
  success: boolean;
}

const CACHE_KEY = "goldPriceCache";
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes

export function useGoldPrice() {
  const [data, setData] = useState<GoldPriceData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPrice() {
      try {
        setLoading(true);
        const res = await fetch("/api/gold-price");
        const json = await res.json();
        if (json.success) {
          setData(json);
          setError(null);
        } else {
          setError(json.error || "Failed to fetch");
        }
      } catch (err: any) {
        setError(err.message || "Network error");
      } finally {
        setLoading(false);
      }
    }

    fetchPrice();

    // Refresh every 5 minutes
    const interval = setInterval(fetchPrice, CACHE_TTL);
    return () => clearInterval(interval);
  }, []);

  return { data, loading, error };
}
