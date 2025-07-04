import Image from "next/image";
import { motion } from "framer-motion";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Oluwatobi A.",
    role: "First-time Buyer",
    avatar: "/images/user1.jpg",
    quote:
      "I was blown away by how easy it was to compare phones and checkout. Prizeet makes shopping fun again!",
    badge: "Verified Buyer",
  },
  {
    name: "Chisom E.",
    role: "Vendor on Prizeet",
    avatar: "/images/user2.jpg",
    quote:
      "Since joining Prizeet, my monthly sales have doubled. The vendor support is top-notch!",
    badge: "Verified Vendor",
  },
  {
    name: "Mariam O.",
    role: "Repeat Customer",
    avatar: "/images/user3.jpg",
    quote:
      "Fast delivery, real-time tracking, and excellent customer service. I'm officially a loyal fan!",
    badge: "Verified Buyer",
  },
  {
    name: "Chisom E.",
    role: "Vendor on Prizeet",
    avatar: "/images/user2.jpg",
    quote:
      "Since joining Prizeet, my monthly sales have doubled. The vendor support is top-notch!",
    badge: "Verified Vendor",
  },
  {
    name: "Mariam O.",
    role: "Repeat Customer",
    avatar: "/images/user3.jpg",
    quote:
      "Fast delivery, real-time tracking, and excellent customer service. I'm officially a loyal fan!",
    badge: "Verified Buyer",
  },
  {
    name: "Chisom E.",
    role: "Vendor on Prizeet",
    avatar: "/images/user2.jpg",
    quote:
      "Since joining Prizeet, my monthly sales have doubled. The vendor support is top-notch!",
    badge: "Verified Vendor",
  },
];

export function Testimonial() {
  return (
    <div className="py-20">
      {/* Testimonials */}
      <div className="text-center mx-12 py-5">
        <h3 className="text-2xl font-bold text-[#1468B2] mb-2">
          What Our Users Are Saying
        </h3>
        <p className="text-slate-600 text-base max-w-xl mx-auto">
          Real stories from customers and vendors using Prizeet every day.
        </p>
      </div>

      <Carousel
        plugins={[Autoplay({ delay: 4000, stopOnInteraction: false })]}
        opts={{ align: "center", loop: true }}
        className="w-full max-w-5xl mx-auto"
      >
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem
              key={index}
              className="md:basis-1/2 lg:basis-1/3 px-2"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-md border border-slate-100 flex flex-col h-full"
              >
                <p className="text-slate-700 text-sm mb-4 leading-relaxed">
                  “{testimonial.quote}”
                </p>
                <div className="flex items-center mt-auto pt-4 border-t border-slate-200">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={50}
                    height={50}
                    className="w-10 h-10 rounded-full mr-3 object-cover"
                  />
                  <div>
                    <div className="font-semibold text-[#FD9B4D]">
                      {testimonial.name}
                    </div>
                    <div className="text-xs text-slate-500">
                      {testimonial.role}
                    </div>
                    <span className="inline-block mt-1 text-[10px] bg-[#e9f7ff] text-[#1468B2] px-2 py-0.5 rounded-full">
                      {testimonial.badge}
                    </span>
                  </div>
                </div>
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
