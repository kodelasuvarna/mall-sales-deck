"use client";

export default function Why() {
  return (
    <section className="h-screen flex items-center justify-center text-white bg-black px-6">
      <div className="text-center max-w-5xl">

        <h2 className="text-5xl font-bold mb-10">Market Opportunity</h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="p-6 border rounded-xl">
            <h3 className="text-3xl font-bold">100M+</h3>
            <p className="text-gray-300">Annual Visitors</p>
          </div>

          <div className="p-6 border rounded-xl">
            <h3 className="text-3xl font-bold">1,200+</h3>
            <p className="text-gray-300">Global Brands</p>
          </div>

          <div className="p-6 border rounded-xl">
            <h3 className="text-3xl font-bold">Global</h3>
            <p className="text-gray-300">Audience Reach</p>
          </div>

        </div>

      </div>
    </section>
  );
}