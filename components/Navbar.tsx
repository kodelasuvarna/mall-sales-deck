"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const sections = ["why", "retail", "entertainment", "events"];

    const handleScroll = () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop - 100;
          if (window.scrollY >= top) {
            setActive(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 w-full z-50 bg-black/70 backdrop-blur-lg">
      <div className="flex justify-between items-center px-10 py-4">
        <h1 className="text-xl font-bold">Dubai Mall</h1>

        <div className="space-x-6 hidden md:block">
          {["why", "retail", "entertainment", "events"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className={`capitalize ${
                active === item ? "text-white font-bold" : "text-gray-400"
              }`}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}