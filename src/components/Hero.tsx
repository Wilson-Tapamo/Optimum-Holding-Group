/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "/images/arrangement-finances-elements-graph.jpg",
  "/images/premium_photo-1679922390184-2e21a7e06bdf.avif",
  "/images/ill.jpg",
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="relative w-full min-h-[90vh] flex flex-col justify-center overflow-hidden">
      {/* Background Carousel */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImage}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0"
          >
            <Image
              src={images[currentImage]}
              alt="Hero background"
              fill
              className="object-cover brightness-[0.4]"
              priority
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center flex flex-col items-center">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-card max-w-4xl w-full flex flex-col items-center gap-6 py-12 px-6 sm:px-12 backdrop-blur-xl bg-white/5 border-white/20"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-2">
            OPTIMUM JURIDIS FINANCE
          </h1>
          <p className="text-xl sm:text-2xl text-blue-100 font-light">
            Ingénierie juridique & gestion des titres
          </p>
          <div className="mt-8 flex gap-4">
            <a
              href="#contact"
              className="px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(37,99,235,0.4)]"
            >
              CONTACT
            </a>
          </div>
        </motion.div>
      </div>

      {/* Marquee */}
      <div className="absolute bottom-0 w-full overflow-hidden bg-black/40 backdrop-blur-sm border-t border-white/10 py-4 z-10 w-full">
        <motion.div
          animate={{ x: ["100%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: 15,
            ease: "linear",
          }}
          className="whitespace-nowrap flex"
        >
          <span className="text-xl font-medium tracking-wide text-white/90">
            "L’ingénierie juridique et financière au service du développement"
          </span>
          {/* Duplicate to create a perfect loop effect if needed */}
        </motion.div>
      </div>
    </section>
  );
}
