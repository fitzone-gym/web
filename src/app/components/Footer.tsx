"use client";
import React from "react";
import * as Scroll from "react-scroll";
import { Link } from "react-scroll";

function Footer() {
  return (
    <section id="footer" className="footer_area pb-0">
      <div className="footer_widget pt-70 pb-120">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 pb-8">
            <div className="">
              <div className="footer_info mt-45">
                <h4 className="footer_title">Contact</h4>
                <ul className="info">
                  <li>Phone: 011 - 2818080</li>
                  <li>
                    Email:{" "}
                    <a
                      href="/cdn-cgi/l/email-protection"
                      className="__cf_email__"
                      data-cfemail="d6beb3babab996b1b7bbbfbaf8b5b9bb"
                    >
                      fitZone@gmail.com
                    </a>
                  </li>
                  <li>Location: 228A 2/1, Highlevel Road, Nugegoda.</li>
                </ul>
              </div>
            </div>
            <div className="">
              <div className="footer_link mt-45">
                <h4 className="footer_title">Course</h4>
                <ul className="link">
                  <li>
                    <Link
                      spy={true}
                      offset={-50}
                      to="courses"
                      duration={300}
                      smooth={true}
                      style={{ cursor: "pointer" }}
                    >
                      Fitness
                    </Link>
                  </li>
                  <li>
                    <Link
                      spy={true}
                      offset={-50}
                      to="courses"
                      duration={300}
                      smooth={true}
                      style={{ cursor: "pointer" }}
                    >
                      Body Building
                    </Link>
                  </li>
                  <li>
                    <Link
                      spy={true}
                      offset={-50}
                      to="courses"
                      duration={300}
                      smooth={true}
                      style={{ cursor: "pointer" }}
                    >
                      Yoga & Meditation
                    </Link>
                  </li>
                  <li>
                    <Link
                      spy={true}
                      offset={-50}
                      to="pricing"
                      duration={300}
                      smooth={true}
                      style={{ cursor: "pointer" }}
                    >
                      Registration
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="">
              <div className="footer_link mt-45">
                <h4 className="footer_title">Quick Link</h4>
                <ul className="link">
                  <li>
                    <Link
                      spy={true}
                      offset={-50}
                      // to=""
                      duration={300}
                      smooth={true}
                      style={{ cursor: "pointer" }}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      spy={true}
                      offset={-50}
                      to="courses"
                      duration={300}
                      smooth={true}
                      style={{ cursor: "pointer" }}
                    >
                      Courses
                    </Link>
                  </li>
                  <li>
                    <Link
                      spy={true}
                      offset={-50}
                      to="about"
                      duration={300}
                      smooth={true}
                      style={{ cursor: "pointer" }}
                    >
                      About
                    </Link>
                  </li>
                  {/* <li>
                    <Link
                      spy={true}
                      offset={-50}
                      to="courses"
                      duration={300}
                      smooth={true}
                      style={{ cursor: "pointer" }}
                    >
                      Shedule
                    </Link>
                    <a href="javascript:void(0)">Schedules</a>
                  </li> */}
                </ul>
              </div>
            </div>
            <div className="">
              {/* <div className="footer_social mt-45">
                <h4 className="footer_title">Follow Us On</h4>
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
                      <i className="lni lni-instagram-original"></i>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <i className="lni lni-linkedin-original"></i>
                    </a>
                  </li>
                </ul>
              </div> */}

              <div className="footer_download_app">
                <h4 className="footer_title">Get the App</h4>
                <ul className="download-app flex gap-1 mt-4">
                  <li>
                    <a
                      href="https://expostore.pk"
                      className="flex gap-4"
                      style={{
                        border: "1px solid #e5e7eb",
                        padding: "10px",
                        width: "120px",
                      }}
                    >
                      <i class="bi bi-google-play"></i>
                      <p style={{ color: "white" }}>Android</p>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://expostore.pk"
                      className="flex gap-4"
                      style={{
                        border: "1px solid #e5e7eb",
                        padding: "10px",
                        width: "120px",
                      }}
                    >
                      <i class="bi bi-apple"></i>
                      <p style={{ color: "white" }}>Iphone</p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_copyright">
        <div className="container">
          <div className="copyright text-center">
            <p>Copyright &copy; 2023. Designed and Developed by XXXX.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
