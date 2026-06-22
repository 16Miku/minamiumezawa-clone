"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    desktop: "/images/slider/slide01.jpg",
    mobile: "/images/slider/slide01-sp.jpg",
    alt: "MINAMI UMEZAWA - Slide 1",
  },
  {
    desktop: "/images/slider/slide02.jpg",
    mobile: "/images/slider/slide02-sp.jpg",
    alt: "MINAMI UMEZAWA - Slide 2",
  },
  {
    desktop: "/images/slider/slide03.jpg",
    mobile: "/images/slider/slide03-sp.jpg",
    alt: "MINAMI UMEZAWA - Slide 3",
  },
  {
    desktop: "/images/slider/slide04.jpg",
    mobile: "/images/slider/slide04-sp.jpg",
    alt: "MINAMI UMEZAWA - Slide 4",
  },
];

interface HeroSliderProps {
  autoPlayInterval?: number;
}

export default function HeroSlider({ autoPlayInterval = 5000 }: HeroSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(goToNext, autoPlayInterval);
    return () => clearInterval(timer);
  }, [autoPlayInterval, goToNext]);

  const variants = {
    enter: {
      opacity: 0,
      scale: 1.05,
    },
    center: {
      opacity: 1,
      scale: 1,
    },
    exit: {
      opacity: 0,
      scale: 1,
    },
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Slides */}
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            opacity: { duration: 1.2, ease: "easeInOut" },
            scale: { duration: 8, ease: "linear" },
          }}
          className="absolute inset-0"
        >
          {/* Desktop Image */}
          <div className="hidden md:block w-full h-full relative">
            <Image
              src={slides[currentIndex].desktop}
              alt={slides[currentIndex].alt}
              fill
              className="object-cover"
              priority={currentIndex === 0}
              sizes="100vw"
            />
          </div>
          {/* Mobile Image */}
          <div className="block md:hidden w-full h-full relative">
            <Image
              src={slides[currentIndex].mobile}
              alt={slides[currentIndex].alt}
              fill
              className="object-cover"
              priority={currentIndex === 0}
              sizes="100vw"
            />
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Gradient Overlay - 使用 CSS 变量实现主题感知 */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-background pointer-events-none" />

      {/* Title Overlay - 按照官网结构优化 */}
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        <div className="text-center px-4">
          <motion.h1
            key={`title-${currentIndex}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="text-white"
          >
            <span className="block text-4xl md:text-6xl lg:text-7xl font-thin tracking-[0.35em] mb-4" style={{ fontWeight: 200 }}>
              MINAMI UMEZAWA
            </span>
            <span className="block text-xs md:text-sm tracking-[0.5em] font-light opacity-80" style={{ fontWeight: 300 }}>
              OFFICIAL WEBSITE
            </span>
          </motion.h1>
        </div>
      </div>

      {/* Dots Indicator - 简化样式 */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`transition-all duration-500 ${
              index === currentIndex
                ? "w-8 h-1.5 bg-white rounded-full"
                : "w-1.5 h-1.5 bg-white/40 hover:bg-white/60 rounded-full"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator - 优化动画 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-8 z-20 hidden md:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          className="flex flex-col items-center"
        >
          <span className="text-white/30 text-xs tracking-[0.3em] mb-2 rotate-90 origin-center translate-x-4">
            SCROLL
          </span>
          <div className="w-px h-16 bg-gradient-to-b from-white/40 to-transparent" />
        </motion.div>
      </motion.div>
    </div>
  );
}
