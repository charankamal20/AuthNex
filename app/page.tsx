import { Poppins } from "next/font/google";
import Navbar from '../components/navbar';
import LandingPage from "@/components/LandingPage";
import Footer from '../components/Footer';
import { BackgroundBeams } from "@/components/ui/background-beams";
import FeaturesSection from "@/components/FeaturesSection";

const font = Poppins({
  subsets: ["latin-ext"],
  weight: ["600"],
});

export default function Home() {
  return (
    <main className="overflow-x-hidden overflow-y-scroll w-full bg-neutral-950 relative flex flex-col items-center antialiased">
      <BackgroundBeams className="fixed scale-125 sm:scale-100"/>
      <Navbar />
      <LandingPage />
      <FeaturesSection />
      <Footer />
    </main>
  );
}
