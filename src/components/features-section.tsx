"use-client";
import { Shield, Search, Headphones, Package } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Trusted Payment",
    description:
      "Secure transactions with multiple payment options including WhatsApp payments and bank transfers.",
  },
  {
    icon: Search,
    title: "Advanced Search",
    description:
      "Find exactly what you need with powerful filters by brand, price, features, and specifications.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description:
      "Round-the-clock customer support ready to assist you with any questions or concerns.",
  },
  {
    icon: Package,
    title: "Order Tracking",
    description:
      "Real-time tracking from purchase to delivery, so you always know where your order is.",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-[#F1F9FF] via-white to-[#FFF4EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16 max-w-2xl mx-auto px-2">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1468B2] mb-4 leading-snug">
            Why Choose <span className="text-[#FD9B4D]">Prizeet</span>?
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            We’ve built a platform that puts your needs first, with features
            designed to make smartphone shopping simple, secure, and satisfying.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 text-center p-6 flex flex-col items-center"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-[#1468B2]/10 to-[#FD9B4D]/10 rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transform transition-transform duration-300">
                <feature.icon className="w-6 h-6 sm:w-8 sm:h-8 text-[#1468B2]" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-slate-600 text-center leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
