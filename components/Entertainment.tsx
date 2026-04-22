"use client";

export default function Entertainment() {
  return (
    <>
      {/* TEXT */}
      <section className="h-screen flex items-center justify-center text-white bg-black px-6 text-center">
        <div>
          <h2 className="text-5xl font-bold mb-6">Experience Layer</h2>
          <p className="text-gray-300">
            Immersive attractions that drive engagement.
          </p>
        </div>
      </section>

      {/* IMAGE */}
      <section className="h-screen">
        <img
          src="/images/aquarium.jpg"
          className="w-full h-full object-cover"
          alt="Experience"
        />
      </section>
    </>
  );
}