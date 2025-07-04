"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, Users, ShoppingCart, Truck, CheckCircle } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

const steps = [
  {
    icon: Search,
    title: "Tell us what you need",
    description:
      "Search by brand, price, or deals we'll help you narrow it down.",
    step: "1",
  },
  {
    icon: Users,
    title: "Choose a vendor",
    description:
      "Select based on pricing, ratings, or exclusive deals from trusted sellers.",
    step: "2",
  },
  {
    icon: ShoppingCart,
    title: "Order through Prizeet",
    description:
      "Enjoy a smooth, transparent checkout process with secure payment options.",
    step: "3",
  },
  {
    icon: Truck,
    title: "Leave it to us",
    description:
      "We handle delivery right to your doorstep hassle-free and trackable.",
    step: "4",
  },
];

export function BuyerJourney() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <>
      {/* WHAT WE OFFER — Standalone Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="mb-10 text-center">
            <motion.h2
              className="text-3xl sm:text-4xl font-bold text-[#1468B2] mb-4"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              What We Offer
            </motion.h2>
            <motion.p
              className="text-base sm:text-lg text-slate-700 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              We bring together a wide range of smartphones from verified
              vendors. Easily compare features, prices, and deals to make
              confident choices. Enjoy convenience, transparency, and great
              value all in one place.
            </motion.p>
          </div>

          <motion.div
            className="grid sm:grid-cols-2 gap-6"
            initial="hidden"
            whileInView="visible"
            transition={{ staggerChildren: 0.2 }}
            viewport={{ once: true }}
          >
            {[
              "Wide selection of verified smartphones from trusted vendors.",
              "Real-time comparison of features, prices, and offers.",
              "Transparent checkout and secure multiple payment options.",
              "Seamless delivery and order tracking to your doorstep.",
            ].map((item, i) => (
              <motion.div
                key={i}
                className="flex items-start space-x-3"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <CheckCircle className="w-5 h-5 text-[#FD9B4D] mt-1 flex-shrink-0" />
                <p className="text-slate-700 text-base leading-relaxed">
                  {item}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4 STEPS JOURNEY */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-[#F1F7FF] to-[#FFF4EB]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div>
              <span className="text-[#FD9B4D] font-semibold text-sm uppercase tracking-widest">
                For Buyers
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1468B2] mt-2 mb-4">
                Find your perfect gadget in 4 simple steps
              </h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-8">
                Our streamlined process makes smartphone shopping effortless.
                From search to delivery, we've got you covered every step of the
                way.
              </p>

              {/* Steps */}
              <div ref={ref} className="space-y-6">
                {steps.map((step, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-4"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{
                      delay: index * 0.2,
                      duration: 0.6,
                      ease: "easeOut",
                    }}
                  >
                    <div className="flex-shrink-0 relative">
                      <div className="w-12 h-12 bg-[#FD9B4D]/20 rounded-full flex items-center justify-center">
                        <step.icon className="h-5 w-5 text-[#FD9B4D]" />
                      </div>
                      <div className="absolute -top-1 -right-1 text-xs bg-white text-[#FD9B4D] border border-[#FD9B4D] rounded-full px-1.5 font-bold shadow-sm">
                        {step.step}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">
                        {step.title}
                      </h3>
                      <p className="text-slate-600 text-sm">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-10">
                <Button
                  size="lg"
                  className="bg-[#FD9B4D] hover:bg-[#e2883d] text-white text-base font-semibold"
                >
                  Discover Prizeet for Buyers
                </Button>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-[#FFE5D4] to-[#F0F8FF]">
                <Image
                  src="/images/imgi_19_buyer-image-banner.png"
                  width={500}
                  height={500}
                  alt="Happy customer using smartphone"
                  className="w-full h-full object-cover"
                />
              </div>

              <Card className="absolute -top-4 -left-4 w-32 shadow-lg border-0 bg-white rounded-lg">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-[#1468B2]">4.8★</div>
                  <div className="text-xs text-slate-600">Customer Rating</div>
                </CardContent>
              </Card>

              <Card className="absolute -bottom-4 -right-4 w-36 shadow-lg border-0 bg-white rounded-lg">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-[#1468B2]">24h</div>
                  <div className="text-xs text-slate-600">Fast Delivery</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
