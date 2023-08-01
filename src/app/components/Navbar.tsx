"use client";
import React from "react";
import Image from "next/image";
import logo from "../images/Logo.png";

import * as Scroll from "react-scroll";
import { Link } from "react-scroll";

/*icon */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";
import { useRouter } from "next/router";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-inverse fixed-top scrolling-navbar top-nav-collapse"
        style={{ height: isOpen ? "fit-content" : "84px" }}
      >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Image src={logo} className="navbar_logo" />
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm md:hidden"
            aria-controls="navbar-default"
            aria-expanded="false"
            onClick={() => setIsOpen(!isOpen)}
          >
            <FontAwesomeIcon icon={faBars} className="openCloseBar" />
          </button>

          <div
            className="w-full md:block md:w-auto"
            id="navbar-default"
            style={{ display: isOpen ? "block" : "none" }}
          >
            <ul className="font-medium flex flex-col p-4 md:p-0  md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white text-base ">
              <li>
                <Link
                  className="nav-link"
                  activeClass="active-link"
                  spy={true}
                  offset={-50}
                  to="hero-area"
                  duration={300}
                  smooth={true}
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="nav-link"
                  activeClass="active-link"
                  spy={true}
                  offset={-50}
                  to="about"
                  duration={300}
                  smooth={true}
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className="nav-link"
                  activeClass="active-link"
                  spy={true}
                  offset={-50}
                  to="courses"
                  duration={300}
                  smooth={true}
                  onClick={() => setIsOpen(false)}
                >
                  Activities
                </Link>
              </li>
              <li>
                <Link
                  className="nav-link"
                  activeClass="active-link"
                  spy={true}
                  offset={-50}
                  to="pricing"
                  duration={300}
                  smooth={true}
                  onClick={() => setIsOpen(false)}
                >
                  Packages
                </Link>
              </li>
              <li>
                <Link
                  className="nav-link"
                  activeClass="active-link"
                  spy={true}
                  offset={-50}
                  to="team"
                  duration={300}
                  smooth={true}
                  onClick={() => setIsOpen(false)}
                >
                  Trainers
                </Link>
              </li>
              <li>
                <Link
                  className="nav-link"
                  activeClass="active-link"
                  spy={true}
                  offset={-50}
                  to="contact"
                  duration={300}
                  smooth={true}
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
