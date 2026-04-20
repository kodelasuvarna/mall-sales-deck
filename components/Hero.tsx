"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">

      {/* 🎥 Background Video */}
      <video
        autoPlay
        loop
        muted
        style={{ transform: `translateY(${offset * 0.3}px)` }}
        className="absolute w-full h-full object-cover"
      >
        <source src="/videos/dubai-mall.mp4" type="video/mp4" />
      </video>

      {/* 🔥 Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black" />

      {/* ✨ TEXT CONTENT (FIX IS HERE) */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center px-6"
        >

          {/* ✅ UPDATED TEXT */}
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
            The World’s Most Visited Destination
          </h1>

          <p className="mt-4 text-lg text-gray-300">
            100+ million visitors annually. 1,200+ global brands. One iconic destination.
          </p>

        </motion.div>
      </div>

    </div>
  );
}