"use client";
import React from "react";
import { useState } from "react";

// import { useRouter } from "next/router";
import { useSearchParams } from "next/navigation";

import Image from "next/image";
import logo from "../../images/fitzone_logo.png";

function RegisterForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [birthday, setBirthday] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [gender, setGender] = useState("");
  const [NIC, setNIC] = useState("");
  const [email, setEmail] = useState("");
  const [ecName, setEcName] = useState("");
  const [ecRelationship, setEcRelationship] = useState("");
  const [ecContactNo, setEcContactNo] = useState("");
  const [termsConditions, setTermsConditions] = useState(false);
  // const [termsModalOpen, setTermsModalOpen] = useState(false);

  const handleAcceptTerms = (e) => {
    const value = e.target.checked;
    if (value == true) {
      setTermsConditions(true);
    } else {
      setTermsConditions(false);
    }
  };

  type Package = {
    key: string;
    name: string;
    price: string;
    activities: string[];
  };

  type Packages = {
    [key: String]: Package;
  };

  const packages: Packages = {
    month_1: {
      key: "1month",
      name: "1 Month plan",
      price: "18,000",
      activities: [
        "1 Yoga pass",
        "1 Full body massage",
        "1 Foot massage",
        "Kitchen",
        "Washing room",
      ],
    },

    months_6: {
      key: "sixmonths",
      name: "6 Months plan",
      price: "64,000",
      activities: [
        "2 Yoga pass",
        "2 Full body massage",
        "3 Foot massage",
        "3 steam spa",
        "Kitchen",
        "Washing room",
      ],
    },

    year: {
      key: "year",
      name: "Annual plan",
      price: "95,000",
      activities: [
        "4 Yoga pass",
        "4 Full body massage",
        "5 Foot massage",
        "5 steam spa",
        "Pool pass",
        "Kitchen",
        "Washing room",
      ],
    },
  };

  const type_pack = useSearchParams();
  const type = type_pack.get("type");

  // const pack = Object.values(packages).filter(
  //   (Package) => Package.key === type
  // );

  const pack = packages[type];

  // const packagePrice = pack.map((Package) => Package.price);
  // const packageName = pack.map((Package) => Package.name);

  // const packageActivities = pack.map((Package) => Package.activities);
  // for (var i of packageActivities) {
  //   for (let j = 0; j < i.length; j++) {
  //     console.log(i[j]);
  //   }
  // }

  return (
    <>
      <section className="pb-0">
        <nav className="navbar navbar-expand-lg bg-inverse scrolling-navbar top-nav-collapse">
          <div className="container">
            <a href="/" className="navbar-brand">
              <Image src={logo} alt="" />
            </a>
          </div>
        </nav>
      </section>

      <section
        id=""
        className="contact_area pt-0"
        style={{ paddingTop: "0px" }}
      >
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="" style={{ paddingRight: "70px" }}>
              <h4 className="pb-12">{pack.name}</h4>
              <div className="packageActivities">
                <ul className="leading-9 pb-12">
                  {pack.activities.map((item, idx) => {
                    return (
                      <li key="idx">
                        <i
                          className="bi bi-check2-circle pr-3"
                          style={{ color: "var(--red)" }}
                        ></i>
                        {item}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <hr className="pb-10" />
              <div className="packageAmount grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8 pb-0.5">
                Total Amount
                <span className="amount">
                  <span className="">{pack.price}</span>{" "}
                  <span
                    className=""
                    style={{ fontSize: "13px", fontWeight: "200" }}
                  >
                    LKR
                  </span>
                </span>
              </div>
            </div>

            <div className="pr-8">
              <div className="contact_form ">
                <div className="section_title pb-12">
                  <h4 className="">Membership Application</h4>
                </div>

                <form className="">
                  <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    <div className="">
                      <label htmlFor="firstName">First name</label>
                      <input
                        required
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 mb-5"
                        type="text"
                        id="name"
                        placeholder=""
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                    </div>

                    <div className="">
                      <label htmlFor="lastName">Last name</label>
                      <input
                        required
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 mb-5"
                        type="text"
                        id="name"
                        placeholder=""
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="">
                    <label hemlFor="adress">Address</label>
                    <input
                      required
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 mb-5"
                      type="text"
                      id="subject"
                      placeholder=""
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </div>

                  <div className="">
                    <label htmlFor="email">Birth day</label>
                    <input
                      type="date"
                      id="birthday"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 mb-5"
                      value={birthday}
                      onChange={(e) => setBirthDay(e.target.value)}
                      required
                    />
                  </div>

                  <div className=" mb-5">
                    <label htmlFor="gender">Gender</label>
                    <br />

                    <div className="inline-flex items-center mt-2 gap-10">
                      <div>
                        <input
                          required
                          className="border mt-1"
                          type="radio"
                          id="male"
                          placeholder=""
                          onChange={(e) => setGender(e.target.value)}
                        />
                        <span style={{ fontSize: "13px" }}>&nbsp;Male</span>
                      </div>

                      <div>
                        <input
                          required
                          className="border mt-1"
                          type="radio"
                          id="male"
                          placeholder=""
                          onChange={(e) => setGender(e.target.value)}
                        />
                        <span style={{ fontSize: "13px" }}>&nbsp;Female</span>
                      </div>
                    </div>
                  </div>

                  <div className="">
                    <label htmlFor="email">Email</label>
                    <input
                      required
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 mb-5"
                      type="email"
                      id="email"
                      placeholder="member@gmail.com"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div className="">
                    <label htmlFor="NIC">NIC</label>
                    <input
                      required
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 mb-5"
                      type="text"
                      id="nic"
                      placeholder=""
                      onChange={(e) => setNIC(e.target.value)}
                    />
                  </div>

                  <div className=" mb-5">
                    <label htmlFor="emergency">Emergency contact</label>
                    <br />

                    <div className="inline-flex items-center mt-2 gap-4">
                      <input
                        required
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 mb-5"
                        type="text"
                        id="emergencyName"
                        placeholder="Name"
                        onChange={(e) => setEcName(e.target.value)}
                      />

                      <input
                        required
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 mb-5"
                        type="text"
                        id="emergencyRelation"
                        placeholder="Relationship"
                        onChange={(e) => setEcRelationship(e.target.value)}
                      />

                      <input
                        required
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 mb-5"
                        type="text"
                        id="contactNo"
                        placeholder="Contact-No"
                        onChange={(e) => setEcContactNo(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="mb-5">
                    <input
                      className="form-check-input terms-check-box"
                      type="checkbox"
                      onChange={handleAcceptTerms}
                      value="checked"
                      id="flexCheckDefault"
                      checked={termsConditions}
                      onClick={(e) => {
                        e.preventDefault();
                        // setTermsModalOpen(true)
                      }}
                    />
                    <label
                      className="form-check-label"
                      // onClick={() => setTermsModalOpen(true)}
                    >
                      Accept all terms & conditions.
                    </label>
                  </div>

                  <div className="pay-now-btn">Pay Now</div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default RegisterForm;
