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
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy <br />
                  eirmod tempor invidunt ut labore.
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam sed sagittis nulla. Vivamus tempus, nulla eu fermentum
                  luctus, nisl velit pharetra justo, ut congue neque nisi nec
                  nisi. Integer commodo, tortor id fermentum dapibus, justo
                  mauris tristique lorem, eget facilisis dui enim vel urna. In
                  hac habitasse platea dictumst. Phasellus non purus nec velit
                  aliquam lacinia. Quisque varius urna vitae eros convallis, non
                  rhoncus neque lacinia.Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Nullam sed sagittis nulla. Vivamus tempus,
                  nulla eu fermentum luctus,
                </p>
                <p>
                  nisl velit pharetra justo, ut congue neque nisi nec nisi.
                  Integer commodo, tortor id fermentum dapibus, justo mauris
                  tristique lorem, eget facilisis dui enim vel urna. In hac
                  habitasse platea dictumst. Phasellus non purus nec velit
                  aliquam lacinia. Quisque varius urna vitae eros convallis, non
                  rhoncus neque lacinia.
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
