import Image from "next/image";
import image1 from "../images/hero-area.jpg";

function Counter() {
  return (
    <section id="about-counter" className="counter_area pt-0 pb-120 bg_cover">
      <div className="container">
        <div
          className="grid grid-cols-2 gap-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-0.5"
          style={{ position: "relative" }}
        >
          <div className="">
            <div className="single_counter text-center mt-40">
              <i class="bi bi-people"></i>
              <span className="count counter">5345</span>
              <p>Satisfied Trainee</p>
            </div>
          </div>
          <div className="">
            <div className="single_counter text-center mt-40">
              <i class="bi bi-hand-thumbs-up"></i>
              <heartFill />
              <span className="count counter">345</span>
              <p>Courses Completed</p>
            </div>
          </div>
          <div className="">
            <div className="single_counter text-center mt-40">
              <i class="bi bi-stopwatch"></i>
              <span className="count counter">13</span>
              <p>Trainers</p>
            </div>
          </div>
          <div className="">
            <div className="single_counter text-center mt-40">
              <i class="bi bi-trophy"></i>
              <span className="count counter">45</span>
              <p>Awards Won</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Counter;
