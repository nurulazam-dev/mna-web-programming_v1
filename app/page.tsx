import AboutUs from "./components/AboutUs";
import Blog from "./components/Blog";
import ContactUs from "./components/ContactUs";
import FAQ from "./components/Home/FAQ";
import Hero from "./components/Home/Hero";
import Portfolio from "./components/Projects";
import Services from "./components/Home/Services";
import TechnologyWeUse from "./components/Home/TechnologyWeUse";
import Testimonials from "./components/Home/Testimonials";
import Workflow from "./components/Home/Workflow";
import WhyWeAre from "./components/Home/WhyWeAre";
import OurCourses from "./components/OurCourses";
import ImageGallery from "./components/Home/ImageGallery";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <WhyWeAre />
      <Services />
      <Portfolio />
      <TechnologyWeUse />
      <Workflow />
      <Testimonials />
      <AboutUs />
      <OurCourses />
      <FAQ />
      <Blog />
      <ImageGallery />
      <ContactUs />
    </main>
  );
}
