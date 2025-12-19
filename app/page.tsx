
"use client";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import { FadeInSection } from "@/components/FadeInSection";
import Pricing from "@/components/Pricing";
import { About } from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />

        <FadeInSection direction="left">
          <About />
        </FadeInSection>

        <FadeInSection direction="right">
          <Services />
        </FadeInSection>

        <FadeInSection direction="up">
          <Projects />
        </FadeInSection>
        
        <FadeInSection direction="left">
          <Testimonials />
        </FadeInSection>

        <FadeInSection direction="right">
          <Pricing />
        </FadeInSection>

        <FadeInSection direction="up">
          <Contact />
        </FadeInSection>
      </main>
      <Footer />
    </>
  );
}
