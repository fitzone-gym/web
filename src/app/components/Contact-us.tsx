"use client";
import React from "react";
import { useState } from "react";

import axios from "axios";

function Contact_Us() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e:ReactFormEvent) =>{
    console.log("call here")
    e.preventDefault();

    //send data to the backend
    axios.post("http://localhost:5400/landingPage/contactUsFormSubmition", {name, email, subject, message})
    .then((response)=>{
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      console.log("Data submit successfully to backend", response.data);
      
    })
    .catch((error)=>{
      console.log("Error submitting data", error);
    })

  }

  return (
    <section id="contact" className="contact_area pt-0">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="pr-8">
            <div className="contact_form pt-40">
              <div className="section_title pb-16">
                <h3 className="title">Get in Touch</h3>
              </div>

              <form>
                <div className="">
                  {/* <label htmlFor="name">Name</label> */}
                  <input
                    required
                    className="mt-0
                    mb-8
                    block
                    w-full
                    border-0 border-2 border-gray-500
                    focus:ring-0 focus:border-gray-500
                    p-3
                    rounded-md"
                    type="text"
                    id="name"
                    placeholder="Name"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="">
                  {/* <label htmlFor="email">Email</label> */}
                  <input
                    required
                    className="mt-0
                    mb-8
                    block
                    w-full
                    border-0 border-2 border-gray-500
                    focus:ring-0 focus:border-gray-500
                    p-3
                    rounded-md"
                    type="email"
                    id="email"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="">
                  {/* <label hemlFor="subject">Subject</label> */}
                  <input
                    required
                    className="mt-0
                    mb-8
                    block
                    w-full
                    border-0 border-2 border-gray-500
                    focus:ring-0 focus:border-gray-500
                    p-3
                    rounded-md
                    "
                    type="text"
                    id="subject"
                    placeholder="Subject"
                    onChange={(e) => setSubject(e.target.value)}
                  />
                </div>

                <div className="">
                  <input
                    className="mt-0
                    mb-8
                    block
                    w-full
                    border-0 border-2 border-gray-500
                    focus:ring-0 focus:border-gray-500
                    p-3
                    rounded-md"
                    type="text"
                    id="message"
                    placeholder="Message"
                    onChange={(e) => setMessage(e.target.value)}
                    style={{ height: "150px" }}
                  />
                </div>
                <button className="main-btn" onClick={handleSubmit}>
                  Submit
                </button>
              </form>
            </div>
          </div>

          <div className="contact_map">
            <div className="gmap_canvas">
              <iframe
                id="gmap_canvas"
                src="https://www.google.com/maps/place/Fitness+Zone+by+by+Dharmapala+Wijesiri/@6.8672651,79.8903374,17z/data=!3m1!4b1!4m6!3m5!1s0x3ae25b292ace74b5:0x7be8fde7aeb03297!8m2!3d6.8672598!4d79.8929177!16s%2Fg%2F11rlvg7w4d?entry=ttu"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact_Us;
