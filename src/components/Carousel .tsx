"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useCallback } from "react";

const phoneImages = [
  "/images/imgi_3_image.png",
  "/images/imgi_4_image.png",
  "/images/imgi_5_image.png",
  "/images/imgi_6_image.png",
];

export function Carousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  // Autoplay every 3.5 seconds
  const autoplay = useCallback(() => {
    if (!emblaApi) return;

    const interval = setInterval(() => {
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext();
      } else {
        emblaApi.scrollTo(0); // restart
      }
    }, 3500); // 3.5 seconds

    return () => clearInterval(interval);
  }, [emblaApi]);

  useEffect(() => {
    const stop = autoplay();
    return () => stop?.();
  }, [autoplay]);

  return (
    <div ref={emblaRef} className="overflow-hidden w-[400px] h-[400px]">
      <div className="flex">
        {phoneImages.map((src, index) => (
          <div
            className="min-w-full flex justify-center items-center px-4"
            key={index}
          >
            <Image
              src={src}
              alt={`Phone ${index + 1}`}
              width={300}
              height={300}
              className="rounded-xl shadow-xl w-[400px] h-[400px] border-4 border-white object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
