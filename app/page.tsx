import Blog from "./components/Blog";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";

export default function HomePage() {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <Portfolio />
      <Testimonials />
      <FAQ />
      <Blog />
      <Contact />
      <Footer />
    </main>
  );
}
