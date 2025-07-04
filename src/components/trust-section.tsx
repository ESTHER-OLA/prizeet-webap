"use client";

import { Shield, Clock, Search, Package, ShoppingBag } from "lucide-react";
import { IoMailUnreadOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { Testimonial } from "./testimonial";

const trustFeatures = [
  {
    icon: Shield,
    title: "Trusted Payment",
    description:
      "Pay with ease through WhatsApp! Once your invoice is ready, complete your purchase securely via direct chat — fast, safe, and personal. For your protection, you'll also receive a two-factor authentication code from team.prizeet@gmail.com to confirm that the invoice was legitimately issued by Prizeet. Always ensure the email is from team.prizeet@gmail.com before proceeding with any payment.",
  },
  {
    icon: Clock,
    title: "24/7 Customer Support",
    description:
      "Enjoy peace of mind with our 24/7 Customer Support, ready to assist you anytime, any day. Need help?.",
  },
  {
    icon: Search,
    title: "Advanced Search Filters",
    description:
      "Refine your shopping experience with our Advanced Search Filters, allowing you to easily find exactly what you're looking for by brand, price, features, and more!",
  },
  {
    icon: Package,
    title: "Real-Time Order Tracking",
    description:
      "Stay updated on your purchase with our real-time Order Tracking feature, ensuring you know exactly when your items will arrive!",
  },
  {
    icon: ShoppingBag,
    title: "Wishlist & Save for Later",
    description:
      "Save your favorite items for later and create your perfect wishlist to make shopping a breeze!",
  },
  {
    icon: IoMailUnreadOutline,
    title: "Back-in-Stock Alerts",
    description:
      "Sign up for Back-in-Stock Notifications and be the first to know when your favorite items are available again!",
  },
];

export function TrustSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#FFF4EB] to-[#F1F7FF]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1468B2] mb-4">
            Tailored features designed just for you
          </h2>
          <p className="text-lg text-slate-700">
            We’ve built Prizeet around your comfort, safety, and satisfaction
            delivering the smart way to shop online.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {trustFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-slate-100"
            >
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-12 h-12 flex items-center justify-center bg-[#FD9B4D]/20 rounded-xl">
                  <feature.icon className="w-6 h-6 text-[#FD9B4D]" />
                </div>
                <h3 className="text-lg font-semibold text-[#1468B2]">
                  {feature.title}
                </h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      <Testimonial />
    </section>
  );
}
