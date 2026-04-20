"use client";

import { motion } from "framer-motion";

export default function Events() {
  return (
    <div
      id="events"
      className="py-32 px-6 md:px-20 text-center bg-black"
    >

      {/* 🔥 Animation Wrapper */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >

        {/* ✅ STRONG BUSINESS CTA (FIXED HERE) */}
        <h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6">
          Partner With a Global Icon
        </h2>

        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Launch your brand, host world-class events, and connect with millions of visitors in one of the most iconic destinations in the world.
        </p>

        <button className="bg-white text-black px-8 py-3 rounded-full font-bold hover:scale-105 transition">
          Start Partnership
        </button>

      </motion.div>

    </div>
  );
}