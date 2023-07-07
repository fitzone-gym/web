import Image from "next/image";
import image1 from "../images/hero-area.jpg";
import image2 from "../images/hero-area1.jpg";
import Counter from "./Counter";


function About() {
  return (
    <>
      <section id="about" className="courses_area pt-105">
        <div className="container">
          <div className="flex flex-row justify-center items-center">
            <div className="lg:col-span-6 sm:col-span-8">
              <div className="section_title text-center pb-16">
                <h3 className="title">About Us</h3>
                <p>
                  Our Expert Team: Meet the dedicated fitness professionals
                  behind our gym management system, committed <br />
                  to guiding and supporting you on your fitness journey.
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="">
              <div className="single_courses mt-30">
                <Image src={image2} alt="courses" className="about-image" />
              </div>
            </div>
            <div className=" ">
              <div className="single_courses mt-30 text-justify leading-10">
                <p>
                  Welcome to Fit Zone! We are more than just a gym – we are a
                  community dedicated to helping individuals of all fitness
                  levels achieve their health and wellness goals. With a passion
                  for fitness and a commitment to excellence, our experienced
                  team of trainers and staff are here to guide and support you
                  every step of the way.
                </p>
                <p>
                  At Fit Zone, we believe in creating a welcoming and inclusive
                  environment where everyone feels motivated and empowered to
                  prioritize their fitness journey. Our state-of-the-art
                  facilities are equipped with the latest exercise equipment,
                  offering a wide range of workout options to suit various
                  preferences and interests. Whether you're a beginner or an
                  experienced athlete, our extensive selection of group classes,
                  personal training sessions, and specialized programs cater to
                  your individual needs and aspirations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Counter />
    </>
  );
}

export default About;
