"use client";

export default function Hero() {
  return (
    <section className="relative h-screen w-full">

      {/* 🎥 Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/dubai-mall.mp4" type="video/mp4" />
      </video>

      {/* 🌑 Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* 📝 Text */}
      <div className="relative z-20 flex items-center justify-center h-full text-center px-6 text-white">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            A Global Destination at Unmatched Scale
          </h1>

          <p className="text-lg text-gray-300">
            100M+ visitors. 1,200+ brands. A global platform.
          </p>
        </div>
      </div>

    </section>
  );
}