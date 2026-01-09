"use client";

import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import { FadeInSection } from "@/components/FadeInSection";
import Pricing from "@/components/Pricing";
import About from "@/components/About";
import Benefits from "@/components/Benefits";
import Footer from "@/components/Footer";
import Process from "@/components/Process";
import Navbar from "@/components/Navbar";
import CarePlans from "@/components/CarePlans";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FadeInSection direction="up">
          <About />
        </FadeInSection>
        <FadeInSection direction="left">
          <Services />
        </FadeInSection>

        <FadeInSection direction="right">
          <Process />
        </FadeInSection>


        <FadeInSection direction="up">
          <Benefits />
        </FadeInSection>

        <FadeInSection direction="left">
          <Projects />
        </FadeInSection>

        <FadeInSection direction="right">
          <Pricing />
        </FadeInSection>

        <FadeInSection direction="up">
          <CarePlans />
        </FadeInSection>

        <FadeInSection direction="up">
          <Contact />
        </FadeInSection>
      </main>
      <Footer />
    </>
  );
}
