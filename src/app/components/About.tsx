import Image from "next/image";
import image1 from "../images/about-us.jpg";
// import image2 from "../images/about-image-1.jpg";
import Counter from "./Counter";


function About() {
  return (
    <>
      <section id="about" className="courses_area pt-75 bg-red-10">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="">
              <div className=" mt-30" style={{ borderRadius: "35px" }}>
                <Image
                  src={image1}
                  alt="courses"
                  className="about-image  rounded-2xl"
                  style={{ height: "480px", width: "90%" }}
                />
              </div>
            </div>
            <div className=" ">
              <div className="flex flex-row justify-center items-center">
                <div className="lg:col-span-6 sm:col-span-8">
                  <div className="section_title text-center pb-8">
                    <h3 className="title">About Us</h3>
                    <p>
                      Meet the dedicated fitness professionals
                      behind our gym management system, committed
                      to guiding and supporting you on your fitness journey.
                    </p>
                  </div>
                </div>
              </div>
              <div className="single_courses  text-justify leading-10">
                
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
