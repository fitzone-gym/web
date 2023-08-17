import Image from "next/image";
import image1 from "../images/hero-area.jpg";

/* backend */
"use client";
import { useEffect, useState } from "react";
import axios from "axios";


function Counter() {

  /*define member count variable */
  const [memberCount, setMemberCount] = useState<number>(0);
  const [courseCompleteMemberCount, setCourseCompleteMemberCount] =useState<number>(0);
  const [trainerCount, setTrainerCount] =useState<number>(0);
  const [complaintCount, setComplaintCount] = useState<number>(0);

  /*set member count to the variable */
  useEffect(() => {
    axios
      .get("http://localhost:5400/landingPage")
      .then((response) => {
        const data = response.data.data;       
        if (data ) {
          setMemberCount(data.workingMembers);
          setCourseCompleteMemberCount(data.courseCompleteMembers);
          setTrainerCount(data.workingTrainers);
          setComplaintCount(data.feedbackCount);
        }
      })
      .catch((error) => console.error("Error fetching members:", error));
  }, []);


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
              <span className="count counter">{memberCount}</span>
              <p>Members</p>
            </div>
          </div>
          <div className="">
            <div className="single_counter text-center mt-40">
              <i class="bi bi-hand-thumbs-up"></i>
              <heartFill />
              <span className="count counter">{courseCompleteMemberCount}</span>
              <p>Courses Completed</p>
            </div>
          </div>
          <div className="">
            <div className="single_counter text-center mt-40">
              <i class="bi bi-stopwatch"></i>
              <span className="count counter">{trainerCount}</span>
              <p>Trainers</p>
            </div>
          </div>
          <div className="">
            <div className="single_counter text-center mt-40">
              <i class="bi bi-alarm"></i>
              <span className="count counter">{complaintCount}</span>
              <p>Complaints</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Counter;
