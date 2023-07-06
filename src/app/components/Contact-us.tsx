"use client";
import React from "react";
import { useState } from "react";

function Contact_Us() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

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
                  <textArea
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
                    onChange={(e) => setMessage(e.targer.value)}
                    style={{ height: "150px" }}
                  />
                </div>
                <div className="main-btn">Submit</div>
              </form>
            </div>
          </div>

          <div className="contact_map">
            <div className="gmap_canvas">
              <iframe
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=Mission%20District%2C%20San%20Francisco%2C%20CA%2C%20USA&t=&z=13&ie=UTF8&iwloc=&output=embed"
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
