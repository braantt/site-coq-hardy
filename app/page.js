import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Cocktails from "@/components/Cocktails";
import Brasserie from "@/components/Brasserie";
import Ambiance from "@/components/Ambiance";
import Events from "@/components/Events";
import Reviews from "@/components/Reviews";
import Reservation from "@/components/Reservation";
import MapSection from "@/components/MapSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Cocktails />
      <Brasserie />
      <Ambiance />
      <Events />
      <Reviews />
      <Reservation />
      <MapSection />
      <Footer />
    </main>
  );
}
