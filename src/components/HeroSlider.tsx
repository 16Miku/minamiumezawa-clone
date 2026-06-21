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

export default function HeroSlider({ autoPlayInterval = 4000 }: HeroSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState(1);

  const goToNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, []);

  const goToPrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(goToNext, autoPlayInterval);
    return () => clearInterval(timer);
  }, [isPaused, autoPlayInterval, goToNext]);

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? "-100%" : "100%",
      opacity: 0,
    }),
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Slides */}
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "tween", duration: 0.8, ease: "easeInOut" },
            opacity: { duration: 0.5 },
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

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[#0a0a0a] pointer-events-none" />

      {/* Title Overlay */}
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        <div className="text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-light text-white tracking-[0.3em] mb-4"
          >
            MINAMI UMEZAWA
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-white/70 text-lg md:text-xl tracking-[0.5em] font-light"
          >
            OFFICIAL WEBSITE
          </motion.p>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 text-white/50 hover:text-white transition-colors p-2"
        aria-label="Previous slide"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 text-white/50 hover:text-white transition-colors p-2"
        aria-label="Next slide"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Pause/Play Button */}
      <button
        onClick={() => setIsPaused(!isPaused)}
        className="absolute bottom-8 right-8 z-20 text-white/50 hover:text-white transition-colors"
        aria-label={isPaused ? "Play slideshow" : "Pause slideshow"}
      >
        {isPaused ? (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
          </svg>
        )}
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-white w-6"
                : "bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-8 z-20 hidden md:block"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex flex-col items-center"
        >
          <span className="text-white/40 text-xs tracking-widest mb-2 rotate-90 origin-center translate-x-4">
            SCROLL
          </span>
          <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent" />
        </motion.div>
      </motion.div>
    </div>
  );
}
