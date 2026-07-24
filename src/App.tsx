import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { StatsBand } from "@/components/StatsBand";
import { About } from "@/components/About";
import { FocusAreas } from "@/components/FocusAreas";
import { Approach } from "@/components/Approach";
import { Leadership } from "@/components/Leadership";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

function App() {
  return (
    <div className="min-h-screen">
      <Nav />
      <Hero />
      <StatsBand />
      <About />
      <FocusAreas />
      <Approach />
      <Leadership />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
