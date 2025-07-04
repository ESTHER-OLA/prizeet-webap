"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Search, TrendingUp } from "lucide-react";
import { Carousel } from "./Carousel ";

export function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [priceRange, setPriceRange] = useState("");

  const handleSearch = () => {
    console.log("Search:", { query: searchQuery, priceRange });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#FDF8F3] via-white to-[#FFF0E6] py-20 sm:py-28 lg:py-36">
      {/* Background Gradient Bubbles */}
      <div className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] bg-[#1468B2]/20 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-[#FD9B4D]/20 rounded-full blur-3xl z-0" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* LEFT: Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center lg:text-left max-w-xl mx-auto lg:mx-0"
          >
            <Badge className="mb-6 bg-[#FD9B4D]/10 text-[#FD9B4D] border border-[#FD9B4D] px-3 py-1 text-sm font-medium">
              <TrendingUp className="h-4 w-4 mr-2" />
              Nigeria&apos;s #1 Smartphone Marketplace
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-slate-900">
              Find Your Perfect{" "}
              <span className="block bg-gradient-to-r from-[#1468B2] to-[#FD9B4D] text-transparent bg-clip-text">
                Smartphone Deal
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 mb-10 leading-relaxed">
              Compare prices, discover exclusive deals, and shop from trusted
              vendors — all in one place. Your next smartphone upgrade starts
              here.
            </p>

            {/* Search bar */}
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-slate-100">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
                  <Input
                    placeholder="Search for smartphones, brands, or models..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 h-12 text-base border-slate-200 focus:border-[#1468B2] focus:ring-[#1468B2]"
                  />
                </div>

                <Select value={priceRange} onValueChange={setPriceRange}>
                  <SelectTrigger className="w-full sm:w-48 h-12 border-slate-200 focus:border-[#FD9B4D] focus:ring-[#FD9B4D]">
                    <SelectValue placeholder="Price Range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0-50000">₦0 - ₦50,000</SelectItem>
                    <SelectItem value="50000-100000">
                      ₦50,000 - ₦100,000
                    </SelectItem>
                    <SelectItem value="100000-200000">
                      ₦100,000 - ₦200,000
                    </SelectItem>
                    <SelectItem value="200000-500000">
                      ₦200,000 - ₦500,000
                    </SelectItem>
                    <SelectItem value="500000+">₦500,000+</SelectItem>
                  </SelectContent>
                </Select>

                <Button
                  onClick={handleSearch}
                  className="h-12 px-8 bg-[#FD9B4D] hover:bg-[#e2883d] text-white font-semibold"
                >
                  <Search className="h-4 w-4 mr-2" />
                  Search
                </Button>
              </div>

              {/* Popular Searches */}
              <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-slate-100">
                <span className="text-sm text-slate-500 mr-2">Popular:</span>
                {[
                  "iPhone 15",
                  "Samsung Galaxy",
                  "Affordable phones",
                  "Premium phones",
                ].map((term) => (
                  <Button
                    key={term}
                    variant="ghost"
                    size="sm"
                    className="text-sm text-[#1468B2] hover:bg-[#1468B2]/10 h-8 px-3"
                    onClick={() => setSearchQuery(term)}
                  >
                    {term}
                  </Button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Animated Phone Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="hidden lg:flex justify-center"
          >
            <Carousel />
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="grid grid-cols-2 sm:grid-cols-3 gap-8 max-w-2xl mx-auto mt-16"
        >
          {[
            { value: "10,000+", label: "Smartphones Listed" },
            { value: "500+", label: "Trusted Vendors" },
            { value: "50,000+", label: "Happy Customers" },
          ].map((item, idx) => (
            <div key={idx} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-[#1468B2] mb-1 animate-pulse">
                {item.value}
              </div>
              <div className="text-sm text-slate-600">{item.label}</div>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-20 text-center"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-800 mb-4">
            Ready to find your next smartphone?
          </h2>
          <Button
            className="bg-[#1468B2] hover:bg-[#125899] text-white px-6 py-3 text-lg font-semibold"
            onClick={handleSearch}
          >
            Start Exploring
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
