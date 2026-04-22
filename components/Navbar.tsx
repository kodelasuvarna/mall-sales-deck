"use client";

export default function Navbar() {
  return (
    <div className="fixed top-0 w-full z-50 bg-black/70 backdrop-blur-lg text-white">
      <div className="flex justify-between px-10 py-4">
        <h1 className="text-xl font-bold">Dubai Mall</h1>

        <div className="space-x-6">
          <a href="#why">Opportunity</a>
          <a href="#retail">Retail</a>
          <a href="#entertainment">Experience</a>
          <a href="#events">Platform</a>
        </div>
      </div>
    </div>
  );
}