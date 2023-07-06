"use client";
import React from "react";
import * as Scroll from "react-scroll";
import { Link } from "react-scroll";

function Hero() {
  return (
    <div id="hero-area" className="hero-area-bg" style={{ height: "100dvh" }}>
      <div className="overlay"></div>
      <div className="container">
        <div
          className="flex flex-row justify-center items-center "
          style={{ paddingTop: "200px", position: "relative" }}
        >
          <div className="lg:col-span-9 sm:col-span-12">
            <div
              className="contents text-center"
              style={{ position: "relative", zIndex: "2" }}
            >
              <p className="banner-info">Transform Your Lifestyle Today!</p>
              <h2 className="head-title">
                Join us for a revoding fitness experince
              </h2>
              <div className="banner-btn">
                <Link
                  className="btn btn-common"
                  spy={true}
                  to="pricing"
                  offset={-80}
                  duration={300}
                  smooth={true}
                >
                  Register Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
