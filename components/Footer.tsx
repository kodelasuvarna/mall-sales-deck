"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center bg-black relative">

      {/* 🌫️ Background (FIXED z-index) */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent z-0" />

      {/* ✨ Content (ON TOP) */}
      <motion.div
        initial={{ opacity: 1 }}
        whileInView={{ opacity: 1 }}
        className="relative z-10 text-center px-6 text-white"
      >
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Dubai Mall Experience
        </h2>

        <p className="text-gray-400 mb-6">
          A premium interactive sales deck built for modern retail destinations.
        </p>

        <button className="bg-white text-black px-6 py-3 rounded-full font-semibold">
          Explore Opportunities
        </button>

        <p className="text-gray-500 text-sm mt-10">
          © 2026 Dubai Mall | Interactive Experience
        </p>
      </motion.div>

    </section>
  );
}