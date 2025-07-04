"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Send, ChevronUp } from "lucide-react";
import { FaFacebook } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const footerLinks = {
  products: [
    { name: "For Vendors", href: "/vendors" },
    { name: "For Buyers", href: "/buyers" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
};

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [showScroll, setShowScroll] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      toast.success("Thanks for subscribing to Prizeet deals!");
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  useEffect(() => {
    const toggleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };
    window.addEventListener("scroll", toggleScroll);
    return () => window.removeEventListener("scroll", toggleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-slate-900 text-white pt-24">
      {/* SVG wave background */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] z-0">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-24"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.82,22,103.6,29.31,158,17.39,70-15.56,136.87-57.64,207-55.41,103.36,3.39,185.27,71.57,289,71.57S907.74,2.76,1000,0c55.56-1.5,109.74,6.58,160,19.88V0Z"
            fill="#FD9B4D"
          />
        </svg>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Newsletter Section */}
        <div className="text-center max-w-xl mx-auto mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Get the best{" "}
            <span className="text-[#FD9B4D]">smartphone deals</span>
          </h2>
          <p className="text-slate-300 mb-6 text-base sm:text-lg">
            Join thousands of users getting updates on new arrivals, hot
            discounts, and trusted vendors weekly.
          </p>

          {subscribed ? (
            <p className="text-[#FD9B4D] font-medium">You're subscribed! 🎉</p>
          ) : (
            <form
              onSubmit={handleSubscribe}
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            >
              <Input
                type="email"
                placeholder="Enter your email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 bg-white text-slate-800 placeholder:text-slate-400"
              />
              <Button
                type="submit"
                className="h-12 px-6 bg-[#FD9B4D] hover:bg-orange-500 text-white flex items-center gap-2"
              >
                <Send className="w-4 h-4" />
                Subscribe
              </Button>
            </form>
          )}
        </div>

        {/* Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Social */}
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Image
                src="/prizeet-transparent.svg"
                width={100}
                height={100}
                alt="prizeet-icon"
              />
            </Link>
            <p className="text-slate-300 mb-6">
              Nigeria’s top smartphone marketplace smarter shopping starts here.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                aria-label="Facebook"
                className="hover:text-[#FD9B4D] transform hover:scale-110 transition-all duration-300"
              >
                <FaFacebook className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                aria-label="Instagram"
                className="hover:text-[#FD9B4D] transform hover:scale-110 transition-all duration-300"
              >
                <RiInstagramFill className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                aria-label="Twitter"
                className="hover:text-[#FD9B4D] transform hover:scale-110 transition-all duration-300"
              >
                <FaXTwitter className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold mb-4">Products</h3>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-white flex items-center group transition-all"
                  >
                    {link.name}
                    <ArrowUpRight className="ml-1 w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-white flex items-center group transition-all"
                  >
                    {link.name}
                    <ArrowUpRight className="ml-1 w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="mt-16 border-t border-slate-800 pt-6 flex flex-col sm:flex-row justify-between items-center text-sm text-slate-400">
          <p>© 2025 Prizeet. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">Made with ❤️ in Nigeria by Esther Ola</p>
        </div>
      </div>

      {/* Scroll-to-top button */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-[#FD9B4D] hover:bg-orange-500 text-white p-3 rounded-full shadow-lg z-50 transition-transform hover:scale-110"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      )}
    </footer>
  );
}
