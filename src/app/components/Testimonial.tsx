"use client";
import React from "react";
import ReactDOM from "react-dom";
const { useState, useEffect } = React;

import axios from "axios";

interface Testimonial {
  first_name: string;
  last_name: string;
  feedback_description: string;
  user_role:number;
}



import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Image from "next/image";


function TestimonialsSlider() {
  

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const [testimonials, setTestimonials]=useState<Testimonial[]>([]);

   useEffect(() => {
    axios
      .get("http://localhost:5400/landingPage/getUserFeedbacksForTestimonial")
      .then((response) => {
        setTestimonials(response.data.data);
        console.log(testimonials);
      })
      .catch((error) => console.error("error fetching testimonials."));
  }, []);
  // const testimonials = [
  //   {
  //     id: 1,
  //     image: "/../images/trainer-01.jpg",
  //     name: "John Doe",
  //     position: "Traineer",
  //     testimonial:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac lacus tempus, accumsan lorem a, dapibus lorem.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac lacus tempus, accumsan lorem a, dapibus lorem.",
  //   },
  //   {
  //     id: 2,
  //     image: "/../images/trainer-02.jpg",
  //     name: "Jane Smith",
  //     position: "Traineer",
  //     testimonial:
  //       "Sed vitae justo sit amet nisl efficitur placerat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac lacus tempus, accumsan lorem a, dapibus lorem.",
  //   },
  //   {
  //     id: 3,
  //     image: "/../images/trainer-03.jpg",
  //     name: "Jane Smith",
  //     position: "Traineer",
  //     testimonial:
  //       "Sed vitae justo sit amet nisl efficitur placerat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac lacus tempus, accumsan lorem a, dapibus lorem.",
  //   },
    // Add more testimonials as needed
  // ];

  return (
    <section id="testimonial" className="counter_area pt-0  bg_cover">
      <div className="container">
        <div className="justify-center">
          <div className="testimonials-slider">
            <Slider {...sliderSettings}>
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="testimonial-item">
                  <div
                    className="testimonial-image"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItem: "center",
                      paddingBottom: "30px",
                    }}
                  >
                    <Image
                      src={`/images/user-images/${testimonial.profile_picture}`}
                      width="150"
                      height="150"
                      alt="Trainer"
                      style={{
                        borderRadius: "10px",
                      }}
                    />
                  </div>
                  <div className="testimonial-text">
                    <h4 className="name">
                      {testimonial.first_name}&nbsp;{testimonial.last_name}
                    </h4>
                    <span className="position">
                      {testimonial.user_role === 1 ? "member" : "trainer"}
                    </span>
                    <p className="testimonial">
                      {testimonial.feedback_description}
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSlider;
