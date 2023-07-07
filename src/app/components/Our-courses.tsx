import Image from "next/image";
import image1 from "../images/hero-area.jpg";
import image2 from "../images/hero-area1.jpg";
import image3 from "../images/hero-area2.jpg";

function Our_courses(){
    return (
      <section
        id="courses"
        className="courses_area pt-105"
        style={{ backgroundColor: "#f3f4f3" }}
      >
        <div className="container">
          <div className="flex flex-row justify-center items-center">
            <div className="lg:col-span-6 sm:col-span-8">
              <div className="section_title text-center pb-16">
                <h3 className="title">Our Courses</h3>
                <p>
                  Explore our diverse range of courses tailored to meet various
                  fitness interests and skill levels, providing you <br />
                  with expert guidance and an opportunity to enhance your
                  workout experience.
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 pb-0.5">
            <div className="">
              <div className="single_courses mt-30">
                <Image src={image1} alt="courses" className="course-image" />
                <h4 className="title">
                  <a href="javascript:void(0)">Fitness</a>
                </h4>
                <p>
                  Explore our diverse range of fitness courses designed to cater
                  to all levels, helping you reach your fitness goals and
                  unleash your full potential.
                </p>
              </div>
            </div>
            <div className="">
              <div className="single_courses mt-30">
                <Image src={image2} alt="courses" className="course-image" />
                <h4 className="title">
                  <a href="javascript:void(0)">Body Building</a>
                </h4>
                <p>
                  Build and define your physique with our dedicated bodybuilding
                  courses, designed to help you maximize muscle growth and
                  achieve your ultimate strength goals.
                </p>
              </div>
            </div>
            <div className="">
              <div className="single_courses mt-30">
                <Image src={image3} alt="courses" className="course-image" />
                <h4 className="title">
                  <a href="javascript:void(0)">Yoga & Meditation</a>
                </h4>
                <p>
                  Discover tranquility and harmony within through our
                  rejuvenating Yoga & Meditation courses, crafted to nurture
                  your mind, body, and soul for holistic well-being.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Our_courses;