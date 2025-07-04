"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const products = [
  {
    id: 1,
    name: "TECNO SPARK 30 PRO",
    model: "128GB+8GB (KL7)",
    price: "₦231,100",
    originalPrice: "₦280,000",
    image: "/images/imgi_3_image.png",
    colors: ["Obsidian Edge", "Arctic Glow", "Optimus Pro"],
    rating: 4.5,
    reviews: 128,
    discount: 18,
  },
  {
    id: 2,
    name: "TECNO PHANTOM X",
    model: "256GB+8GB (AC8)",
    price: "₦220,200",
    originalPrice: "₦250,000",
    image: "/images/imgi_4_image.png",
    colors: ["Starry Night Blue", "Monet Summer"],
    rating: 4.7,
    reviews: 89,
    discount: 12,
  },
  {
    id: 3,
    name: "INFINIX X6525 SMART 8",
    model: "64GB+2GB (4G)",
    price: "₦82,600",
    originalPrice: "₦97,700",
    isNew: "true",
    image: "/images/imgi_5_image.png",
    colors: ["Timber Black", "Shiny Gold", "Crystal Green"],
    rating: 4.3,
    reviews: 156,
    discount: 15,
  },
  {
    id: 4,
    name: "TECNO SPARK 20C",
    model: "128GB+4GB",
    price: "₦161,400",
    originalPrice: "₦180,000",
    image: "/images/imgi_6_image.png",
    colors: ["Orbit Black", "Magic Skin"],
    rating: 4.4,
    reviews: 203,
    discount: 10,
  },
  {
    id: 5,
    name: "TECNO SPARK 20C",
    model: "128GB+4GB",
    price: "₦161,400",
    originalPrice: "₦180,000",
    image: "/images/imgi_3_image.png",
    colors: ["Orbit Black", "Magic Skin"],
    rating: 4.4,
    reviews: 203,
    discount: 10,
  },
  {
    id: 6,
    name: "TECNO SPARK 20C",
    model: "128GB+4GB",
    isNew: "true",
    price: "₦161,400",
    originalPrice: "₦180,000",
    image: "/images/imgi_4_image.png",
    colors: ["Orbit Black", "Magic Skin"],
    rating: 4.4,
    reviews: 203,
    discount: 10,
  },
  {
    id: 7,
    name: "TECNO SPARK 20C",
    model: "128GB+4GB",
    price: "₦161,400",
    originalPrice: "₦180,000",
    image: "/images/imgi_5_image.png",
    colors: ["Orbit Black", "Magic Skin"],
    rating: 4.4,
    reviews: 203,
    discount: 10,
  },
  {
    id: 8,
    name: "TECNO SPARK 20C",
    isNew: "true",
    model: "128GB+4GB",
    price: "₦161,400",
    originalPrice: "₦180,000",
    image: "/images/imgi_6_image.png",
    colors: ["Orbit Black", "Magic Skin"],
    rating: 4.4,
    reviews: 203,
    discount: 10,
  },
];

const PRODUCTS_PER_PAGE = 4;

export function ProductShowcase() {
  const [page, setPage] = useState(0);
  const direction = useRef(0); // 1 = next, -1 = prev

  const totalPages = Math.ceil(products.length / PRODUCTS_PER_PAGE);

  const paginate = (newDirection: number) => {
    direction.current = newDirection;
    setPage((prev) => (prev + newDirection + totalPages) % totalPages);
  };

  const currentProducts = products.slice(
    page * PRODUCTS_PER_PAGE,
    page * PRODUCTS_PER_PAGE + PRODUCTS_PER_PAGE
  );

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const delta = touchStartX.current - touchEndX.current;
    if (delta > 50) paginate(1); // swipe left
    else if (delta < -50) paginate(-1); // swipe right
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-[#F1F7FF] to-[#FFF4EB]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-12 text-center sm:text-left">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1468B2] mb-2">
              Latest Smartphones
            </h2>
            <p className="text-base sm:text-lg text-slate-600">
              Discover top-rated devices with exclusive deals and verified
              reviews
            </p>
          </div>
          <div className="flex gap-2">
            <Button
              aria-label="Next products"
              onClick={() => paginate(1)}
              className="h-10 w-10 p-0"
              variant="outline"
              size="sm"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>

            <Button
              aria-label="Next products"
              onClick={() => paginate(1)}
              className="h-10 w-10 p-0"
              variant="outline"
              size="sm"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Swipeable Animated Products */}
        <div
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className="overflow-hidden"
        >
          <AnimatePresence initial={false} custom={direction.current}>
            <motion.div
              key={page}
              custom={direction.current}
              initial={{ x: direction.current > 0 ? 300 : -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: direction.current > 0 ? -300 : 300, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {currentProducts.map((product) => (
                <Card
                  key={product.id}
                  className="group overflow-hidden rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.03] transition-all duration-300 bg-white"
                >
                  <CardContent className="p-0">
                    <div className="relative">
                      <Image
                        src={product.image}
                        width={500}
                        height={500}
                        alt={product.name}
                        className="w-full h-64 object-cover rounded-t-2xl"
                      />
                      {product.discount > 0 && (
                        <Badge className="absolute top-3 left-3 bg-[#FD9B4D] text-white">
                          -{product.discount}%
                        </Badge>
                      )}
                      {product.isNew && (
                        <Badge className="absolute top-3 right-3 bg-[#1468B2] text-white">
                          New Arrival
                        </Badge>
                      )}
                    </div>

                    <div className="p-5">
                      <h3 className="text-lg font-semibold text-slate-900 mb-1 group-hover:text-[#FD9B4D] transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-sm text-slate-500 mb-3">
                        {product.model}
                      </p>

                      <div className="flex items-center text-sm text-slate-700 mb-3">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="ml-1 font-medium">
                          {product.rating}
                        </span>
                        <span className="ml-2 text-slate-500">
                          ({product.reviews} reviews)
                        </span>
                      </div>

                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xl font-bold text-[#1468B2]">
                          {product.price}
                        </span>
                        <span className="text-sm text-slate-400 line-through">
                          {product.originalPrice}
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-1 mb-4">
                        {product.colors.slice(0, 2).map((color, index) => (
                          <Badge
                            key={index}
                            className="text-xs bg-[#F0F4F8] text-[#1468B2]"
                          >
                            {color}
                          </Badge>
                        ))}
                        {product.colors.length > 2 && (
                          <Badge className="text-xs bg-[#F0F4F8] text-[#1468B2]">
                            +{product.colors.length - 2} more
                          </Badge>
                        )}
                      </div>

                      <Button className="w-full bg-[#FD9B4D] hover:bg-[#e2883d] text-white text-sm font-semibold">
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dot Pagination */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => {
                direction.current = index > page ? 1 : -1;
                setPage(index);
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === page
                  ? "bg-[#FD9B4D] scale-125"
                  : "bg-gray-300 hover:bg-[#FD9B4D]/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-[#FD9B4D] text-[#FD9B4D] hover:bg-[#FD9B4D]/10"
          >
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
}
