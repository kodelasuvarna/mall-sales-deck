import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Why from "@/components/Why";
import Retail from "@/components/Retail";
import Entertainment from "@/components/Entertainment";
import Events from "@/components/Events";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Why />
      <Retail />
      <Entertainment />
      <Events />
      <div className="h-20" /> 
      <Footer />
    </main>
  );
}