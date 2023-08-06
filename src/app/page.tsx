import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Courses from "./components/Our-courses";
import About from "./components/About";
import Trainers from "./components/Trainers";
import Pricing from "./components/Pricing";
import Testimonial from "./components/Testimonial";
import Contact_us from "./components/Contact-us";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Courses />
      <Pricing />
      <Trainers />
      <Testimonial />
      <Contact_us />
      <Footer />
    </>
  );
}
