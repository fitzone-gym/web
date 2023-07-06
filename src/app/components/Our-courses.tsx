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
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy <br />
                  eirmod tempor invidunt ut labore.
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
                  Lorem ipsum dolor sit amet, consetetur thedn bsadipscing
                  elitr, sedsd diam nonumy eirmod tempor invidunt ut labore.
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
                  Lorem ipsum dolor sit amet, consetetur thedn bsadipscing
                  elitr, sedsd diam nonumy eirmod tempor invidunt ut labore.
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
                  Lorem ipsum dolor sit amet, consetetur thedn bsadipscing
                  elitr, sedsd diam nonumy eirmod tempor invidunt ut labore.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Our_courses;