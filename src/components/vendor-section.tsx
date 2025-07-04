"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Package, Bell, CreditCard, Zap } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const vendorSteps = [
  {
    icon: Package,
    title: "Get your products listed",
    description: "Add your gadgets, set prices, and showcase your best deals.",
    step: "1",
  },
  {
    icon: Bell,
    title: "Receive purchase orders",
    description: "Get notified when customers place orders for your products.",
    step: "2",
  },
  {
    icon: CreditCard,
    title: "Process purchase orders",
    description: "Confirm, package, and hand over to Prizeet's delivery team.",
    step: "3",
  },
  {
    icon: Zap,
    title: "Get paid instantly",
    description: "Enjoy fast payouts as soon as orders are fulfilled.",
    step: "4",
  },
];

export function VendorSection() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-[#FFF4EB] to-[#F1F7FF]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Image */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-[#FDEDD3] to-[#EDF6FF]">
              <Image
                width={500}
                height={500}
                src="/images/imgi_20_seller-image-banner.png"
                alt="Happy vendors and customers"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Cards */}
            <Card className="absolute -top-4 -right-4 w-32 shadow-lg border-0 bg-white rounded-lg">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-[#1468B2]">500+</div>
                <div className="text-xs text-slate-600">Active Vendors</div>
              </CardContent>
            </Card>

            <Card className="absolute -bottom-4 -left-4 w-36 shadow-lg border-0 bg-white rounded-lg">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-[#FD9B4D]">₦2M+</div>
                <div className="text-xs text-slate-600">Monthly Sales</div>
              </CardContent>
            </Card>
          </div>

          {/* Right Content */}
          <div className="order-1 lg:order-2">
            <div className="mb-8">
              <span className="text-[#FD9B4D] font-semibold text-sm uppercase tracking-widest">
                For Vendors
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1468B2] mt-2 mb-4">
                Start selling in 4 simple steps
              </h2>
              <p className="text-lg text-slate-700 leading-relaxed">
                Join hundreds of successful vendors on Prizeet. Reach more
                customers, increase your sales, and grow your business with ease.
              </p>
            </div>

            <div className="space-y-6 mt-10">
              {vendorSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  <div className="relative">
                    <div className="w-12 h-12 bg-[#FD9B4D]/20 rounded-full flex items-center justify-center">
                      <step.icon className="h-5 w-5 text-[#FD9B4D]" />
                    </div>
                    <div className="absolute -top-1 -right-1 text-xs bg-white text-[#FD9B4D] border border-[#FD9B4D] rounded-full px-1.5 font-bold shadow-sm">
                      {step.step}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">{step.title}</h3>
                    <p className="text-slate-600 text-sm">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-10">
              <Button
                size="lg"
                variant="outline"
                className="border-[#FD9B4D] text-[#FD9B4D] hover:bg-[#FD9B4D]/10 text-base font-semibold"
              >
                Discover Prizeet for Vendors
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
