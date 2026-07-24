import { Hero } from "@/components/Hero";
import { StatsBand } from "@/components/StatsBand";
import { About } from "@/components/About";
import { FocusAreas } from "@/components/FocusAreas";
import { Approach } from "@/components/Approach";
import { Projects } from "@/components/Projects";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";

export function Home() {
  return (
    <>
      <Hero />
      <StatsBand />
      <About />
      <FocusAreas />
      <Approach />
      <Projects />
      <Testimonials />
      <Contact />
    </>
  );
}
