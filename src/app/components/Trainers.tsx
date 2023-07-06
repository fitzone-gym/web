import Image from "next/image";
import trainer1 from "../images/trainer-01.jpg";
import trainer2 from "../images/trainer-02.jpg";
import trainer3 from "../images/trainer-03.jpg";
import trainer4 from "../images/trainer-04.jpg";

function Trainers() {
  return (
    <section
      id="team"
      className="team_area pt-105"
      style={{ backgroundColor: "#f3f4f3" }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8">
            <div className="section_title text-center pb-16">
              <h3 className="title">Our Team</h3>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 pb-0.5">
          <div className="">
            <div className="single_team text-center">
              <div className="team_image">
                <Image
                  src={trainer1}
                  alt="team"
                  onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                  style={{ height: "300px" }}
                />
              </div>
              <div className="team_content">
                <ul className="social">
                  <li>
                    <a href="javascript:void(0)">
                      <i className="lni lni-facebook-filled"></i>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <i className="lni lni-twitter-original"></i>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <i className="lni lni-linkedin-original"></i>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <i className="lni lni-instagram-original"></i>
                    </a>
                  </li>
                </ul>
                <h5 className="team_name">Sarah Clerk</h5>
                <p>Fitness Trainer and CEO</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="single_team text-center">
              <div className="team_image">
                <Image
                  src={trainer2}
                  alt="team"
                  onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                  style={{ height: "300px" }}
                />
              </div>
              <div className="team_content">
                <ul className="social">
                  <li>
                    <a href="javascript:void(0)">
                      <i className="lni lni-facebook-filled"></i>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <i className="lni lni-twitter-original"></i>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <i className="lni lni-linkedin-original"></i>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <i className="lni lni-instagram-original"></i>
                    </a>
                  </li>
                </ul>
                <h5 className="team_name">Sarah Clerk</h5>
                <p>Fitness Trainer and CEO</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="single_team text-center">
              <div className="team_image">
                <Image
                  src={trainer3}
                  alt="team"
                  onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                  style={{ height: "300px" }}
                />
              </div>
              <div className="team_content">
                <ul className="social">
                  <li>
                    <a href="javascript:void(0)">
                      <i className="lni lni-facebook-filled"></i>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <i className="lni lni-twitter-original"></i>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <i className="lni lni-linkedin-original"></i>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <i className="lni lni-instagram-original"></i>
                    </a>
                  </li>
                </ul>
                <h5 className="team_name">Sarah Clerk</h5>
                <p>Fitness Trainer and CEO</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="single_team text-center">
              <div className="team_image">
                <Image
                  src={trainer4}
                  alt="team"
                  onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                  style={{ height: "300px" }}
                />
              </div>
              <div className="team_content">
                <ul className="social">
                  <li>
                    <a href="javascript:void(0)">
                      <i className="lni lni-facebook-filled"></i>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <i className="lni lni-twitter-original"></i>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <i className="lni lni-linkedin-original"></i>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <i className="lni lni-instagram-original"></i>
                    </a>
                  </li>
                </ul>
                <h5 className="team_name">Sarah Clerk</h5>
                <p>Fitness Trainer and CEO</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Trainers;
