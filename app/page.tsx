import AboutUs from "./components/AboutUs";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import TechnologyWeUse from "./components/TechnologyWeUse";
import Testimonials from "./components/Testimonials";
import Workflow from "./components/Workflow";
import WhyWeAre from "./components/WhyWeAre";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <WhyWeAre />
      <Services />
      <TechnologyWeUse />
      <Portfolio />
      <Workflow />
      <Testimonials />
      <AboutUs />
      <FAQ />
      <Blog />
      <Contact />
    </main>
  );
}
