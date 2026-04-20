"use client";

import { motion } from "framer-motion";

export default function Why() {
  return (
    <div
      id="why"
      className="py-32 px-6 md:px-20 text-center bg-gradient-to-b from-black to-gray-900"
    >
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-12">
  Why Brands Choose Dubai Mall
</h2>

        {/* 🔥 CARDS SECTION */}
        <div className="grid md:grid-cols-3 gap-10">

          {/* ✅ CARD 1 (GLOW FIX HERE) */}
          <div className="p-6 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition">
            <h3 className="text-3xl font-bold">100M+</h3>
            <p className="text-gray-300 mt-2">Visitors</p>
          </div>

          {/* ✅ CARD 2 (GLOW FIX HERE) */}
          <div className="p-6 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition">
            <h3 className="text-3xl font-bold">1200+</h3>
            <p className="text-gray-300 mt-2">Stores</p>
          </div>

          {/* ✅ CARD 3 (GLOW FIX HERE) */}
          <div className="p-6 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition">
            <h3 className="text-3xl font-bold">Global</h3>
            <p className="text-gray-300 mt-2">Reach</p>
          </div>

        </div>
      </motion.div>
    </div>
  );
}