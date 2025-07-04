"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Menu, X, User, ShoppingCart } from "lucide-react";
import Image from "next/image";
import clsx from "clsx";
import { usePathname } from "next/navigation";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-8">
            {/* Mobile Hamburger */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              aria-label="Toggle Menu"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>

            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/prizeet-transparent.svg"
                width={100}
                height={100}
                alt="prizeet-icon"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-10">
              <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLSdeognUfGQs28lrATNNDfXZUnQSh0MEslbpFC8VGDvt4iFSgg/viewform"
                className={clsx(
                  "text-sm font-medium transition-colors px-2 py-1",
                  pathname === "/vendors"
                    ? "text-[#1468B2] bg-[#FD9B4D] rounded-sm"
                    : "text-[#000000] hover:text-#FD9B4D hover:underline"
                )}
              >
                Become a Vendor
              </Link>
              <Link
                href="/about"
                className={clsx(
                  "text-sm font-medium transition-colors px-2 py-1",
                  pathname === "/"
                    ? "text-[#1468B2] bg-[#FD9B4D] rounded-sm"
                    : "text-[#000000] hover:text-#FD9B4D hover:underline"
                )}
              >
                About
              </Link>
              <Link
                href="/"
                className={clsx(
                  "text-sm font-medium transition-colors px-2 py-1",
                  pathname === "/contact"
                    ? "text-[#1468B2] bg-[#FD9B4D] rounded-sm"
                    : "text-[#000000] hover:text-#FD9B4D hover:underline"
                )}
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Right side: Icons */}
          <div className="flex items-center space-x-2">
            <Button
              aria-label="User Profile"
              variant="ghost"
              className="text-slate-600"
            >
              <User className="!h-6 !w-6" />
            </Button>
            <Button
              aria-label="Shopping Cart"
              variant="ghost"
              className="text-slate-600 relative"
            >
              <ShoppingCart className="!h-6 !w-6" />
              <Badge
                variant="destructive"
                className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
              >
                0
              </Badge>
            </Button>
          </div>
        </div>

        {/* Slide-in Mobile Navigation */}
        <div
          className={clsx(
            "md:hidden fixed top-16 left-0 w-3/4 max-w-xs h-screen bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out",
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <nav className="flex flex-col p-4 space-y-10">
            <Link
              href="/"
              onClick={() => setIsMenuOpen(false)}
              className={clsx(
                "text-lg font-medium transition-colors px-2 py-1",
                pathname === "/"
                  ? "text-[#1468B2] bg-[#FD9B4D] rounded-sm"
                  : "text-[#000000] hover:text-#FD9B4D hover:underline"
              )}
            >
              Home
            </Link>
            <Link
              href="/"
              onClick={() => setIsMenuOpen(false)}
              className={clsx(
                "text-lg font-medium transition-colors px-2 py-1",
                pathname === "/about"
                  ? "text-[#1468B2] bg-[#FD9B4D] rounded-sm"
                  : "text-[#000000] hover:text-#FD9B4D hover:underline"
              )}
            >
              About
            </Link>
            <Link
              href="/"
              onClick={() => setIsMenuOpen(false)}
              className={clsx(
                "text-lg font-medium transition-colors px-2 py-1",
                pathname === "/contact"
                  ? "text-[#1468B2] bg-[#FD9B4D] rounded-sm"
                  : "text-[#000000] hover:text-#FD9B4D hover:underline"
              )}
            >
              Contact
            </Link>
            <Link
              href="/"
              onClick={() => setIsMenuOpen(false)}
              className={clsx(
                "text-lg font-medium transition-colors px-2 py-1",
                pathname === "/products"
                  ? "text-[#1468B2] bg-[#FD9B4D] rounded-sm"
                  : "text-[#000000] hover:text-#FD9B4D hover:underline"
              )}
            >
              Products
            </Link>
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSdeognUfGQs28lrATNNDfXZUnQSh0MEslbpFC8VGDvt4iFSgg/viewform"
              onClick={() => setIsMenuOpen(false)}
              className={clsx(
                "text-lg font-medium transition-colors px-2 py-1",
                pathname === "/vendors"
                  ? "text-[#1468B2] bg-[#FD9B4D] rounded-sm"
                  : "text-[#000000] hover:text-#FD9B4D hover:underline"
              )}
            >
              Become a Vendor
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
