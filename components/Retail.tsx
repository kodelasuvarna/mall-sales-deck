"use client";

import { motion } from "framer-motion";

export default function Retail() {
  return (
    <div id="retail" className="py-32 px-6 md:px-20">

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >

       <h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6">
  A Global Retail Powerhouse
</h2>

        <p className="text-gray-300 max-w-xl">
          Home to 1,200+ world-class brands, offering unmatched shopping experiences.
        </p>

        {/* 🔥 IMAGE FIX HERE */}
        <img
          src="/images/retail.jpg"
          className="rounded-xl mt-8 w-full object-cover"
          alt="Retail"
        />

      </motion.div>

    </div>
  );
}