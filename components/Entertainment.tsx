"use client";

import { motion } from "framer-motion";

export default function Entertainment() {
  return (
    <div
      id="entertainment"
      className="py-32 px-6 md:px-20 bg-gradient-to-b from-black to-gray-900"
    >

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >

        <h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6">
  Destination Beyond Shopping
</h2>

        <p className="text-gray-300 max-w-xl">
          Experience world-class entertainment including aquariums, VR parks, and ice rinks.
        </p>

        {/* 🔥 IMAGE FIX HERE */}
        <img
          src="/images/aquarium.jpg"
          className="rounded-xl mt-8 w-full object-cover"
          alt="Aquarium"
        />

      </motion.div>

    </div>
  );
}