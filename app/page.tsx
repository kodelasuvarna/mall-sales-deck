import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Why from "@/components/Why";
import Retail from "@/components/Retail";
import Entertainment from "@/components/Entertainment";
import Events from "@/components/Events";
import Footer from "@/components/Footer";   // ✅ FIX HERE

export default function Home() {
  return (
    <main className="bg-black text-white">

      <Navbar />
      <Hero />

      <div className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent my-10"></div>

      <Why />

      <div className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent my-10"></div>

      <Retail />

      <div className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent my-10"></div>

      <Entertainment />

      <div className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent my-10"></div>

      <Events />

      {/* ✅ FOOTER FIX HERE */}
      <Footer />

    </main>
  );
}