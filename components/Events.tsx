"use client";

export default function Events() {
  return (
    <>
      {/* TEXT */}
      <section className="h-screen flex items-center justify-center text-white bg-black px-6 text-center">
        <div>
          <h2 className="text-5xl font-bold mb-6">Platform & Activation</h2>
          <p className="text-gray-300 mb-6">
            Launch your brand and engage millions.
          </p>

          <button className="bg-white text-black px-6 py-3 rounded-full font-bold">
            Start Partnership
          </button>
        </div>
      </section>

      {/* IMAGE */}
      <section className="h-screen">
        <img
          src="/images/events.jpg"
          className="w-full h-full object-cover"
          alt="Events"
        />
      </section>
    </>
  );
}