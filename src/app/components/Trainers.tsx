/*backend */
"use client";
import { useEffect, useState } from "react";
import axios from "axios";

interface Trainer {
  id: string;
  first_name: string;
  last_name: string;
}
import Image from "next/image";

// export const importImage = async (imageName) => {
//   try {
//     const image = await import(`../images/user-images/${imageName}`);
//     return image.default; // Return the default export from the dynamically imported module
//   } catch (error) {
//     console.error('Error importing image:', error);
//     return null;
//   }
// };



function Trainers() {
  const [trainerDetail, setTrainerDetails] = useState<Trainer[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:5400/landingPage/getTrainerDetails")
      .then((response) => {
        setTrainerDetails(response.data.data);
        console.log(trainerDetail);
      })
      .catch((error) => console.error("error fetching trainer details"));
  }, []);


  // const [trainerImages, setTrainerImages] = useState({});

  // console.log("trainers",trainerDetail);

  // useEffect(() => {
  //   // Load trainer images dynamically when the component mounts
  //   const fetchImages = async () => {
  //     const images = {};
  //     for (const trainer of trainerDetail) {
  //       const image = await importImage(trainer.profile_picture);
  //       if (image) {
  //         images[trainer.id] = image;
  //       }
  //     }
  //     setTrainerImages(images);
  //   };

  //   fetchImages();
  // }, [trainerDetail]);


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
                Meet Our Experts: Discover our team of dedicated fitness
                professionals who are here to <br />
                support and inspire you on your fitness journey.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 pb-0.5">
          {trainerDetail.length > 0 ? (
            // console.log(trainerDetail.length),
            trainerDetail.map((trainer) => (
              <div className="" key={trainer.id}>
                <div className="single_team text-center">
                  <div className="team_image">
                    {/* {console.log(trainer.id)} */}
                    {/* {const image = await importImage(trainer.profile_picture);} */}
                    {/* console.log("image name",image) */}
                    {/* {import trainer_img from "../images/users/trainer.profile_picture"} */}
                    {/* {const image = await import(`../images/user-images/${trainer.profile_picture}`);return image.default;} */}
                    <Image
                      src={`/images/user-images/${trainer.profile_picture}`}
                      alt="team"
                      onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                      width="450"
                      height="45"
                    />
                  </div>
                  <div className="team_content pt-5">
                    <h5 className="team_name">
                      {trainer.first_name}&nbsp;{trainer.last_name}
                    </h5>
                    {console.log(trainer.first_name)}
                    <p>{trainer.expert_area}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No data</p>
          )}
        </div>
      </div>
    </section>
  );
}

export default Trainers;
