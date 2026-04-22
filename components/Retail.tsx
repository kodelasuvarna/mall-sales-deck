"use client";

export default function Retail() {
  return (
    <>
      {/* TEXT */}
      <section className="h-screen flex items-center justify-center text-white bg-black px-6 text-center">
        <div>
          <h2 className="text-5xl font-bold mb-6">Retail Ecosystem</h2>
          <p className="text-gray-300">
            A curated mix of global brands and luxury retail experiences.
          </p>
        </div>
      </section>

      {/* IMAGE */}
      <section className="h-screen">
        <img
          src="/images/retail.jpg"
          className="w-full h-full object-cover"
          alt="Retail"
        />
      </section>
    </>
  );
}