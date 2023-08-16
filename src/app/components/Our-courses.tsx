import Image from "next/image";
import image1 from "../images/hero-area.jpg";
import image2 from "../images/hero-area1.jpg";
import image3 from "../images/hero-area2.jpg";




function Our_courses(){
    return (
      <section id="courses" className="courses_area">
        <div className="container">
          <div className="flex flex-row justify-center items-center">
            <div className="lg:col-span-6 sm:col-span-8">
              <div className="section_title text-center pb-16">
                <h3 className="title">Activities</h3>
                <p>
                  Explore our diverse range of courses tailored to meet various
                  fitness interests and skill levels, providing you <br />
                  with expert guidance and an opportunity to enhance your
                  workout experience.
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-0.5">
            {/* first one */}
            <div className="min-h-10 flex justify-center items-center">
              <div className="flex flex-col justify-between w-72 h-80 sm:w-96 h-96 bg-white bg-center text-gray-800 shadow-md overflow-hidden cursor-pointer activity1">
                <div className="flex justify-between items-center ml-4 pr-8">
                  <div className="bg-gray-800 text-white bg-opacity-95 shadow px-2 py-1 flex items-center font-bold text-xs rounded">
                    Our Activities
                  </div>
                  <div className="bg-red-600 w-10 h-12 shadow flex flex-col-reverse p-2 text-center font-bold text-white rounded-b-full">
                    01
                  </div>
                </div>
                <div className="bg-white bg-opacity-95 shadow-md rounded-r-xl p-4 flex flex-col mr-4 mb-8">
                  <h3 className="text-xl font-bold pb-2">Body Building</h3>
                  <p className=" text-gray-500 text-sm">
                    Build and define your physique with our dedicated
                    bodybuilding
                  </p>
                  <div className="flex justify-between items-center">
                    {/* <span className="text-gray-400 text-xs">
                      Have a nice year...
                    </span> */}
                  </div>
                </div>
              </div>
            </div>

            {/* second one */}
            <div className="min-h-10 flex justify-center items-center">
              <div className="flex flex-col justify-between w-72 h-80 sm:w-96 h-96 bg-white bg-center text-gray-800 shadow-md overflow-hidden cursor-pointer activity4">
                <div className="flex justify-between items-center ml-4 pr-8">
                  <div className="bg-gray-800 text-white bg-opacity-95 shadow px-2 py-1 flex items-center font-bold text-xs rounded">
                    Our Activities
                  </div>
                  <div className="bg-red-600 w-10 h-12 shadow flex flex-col-reverse p-2 text-center font-bold text-white rounded-b-full">
                    02
                  </div>
                </div>
                <div className="bg-white bg-opacity-95 shadow-md rounded-r-xl p-4 flex flex-col mr-4 mb-8">
                  <h3 className="text-xl font-bold pb-2">Fitness</h3>
                  <p className="text-gray-500 text-sm">
                    Build and define your physique with our dedicated
                    bodybuilding
                  </p>
                  <div className="flex justify-between items-center">
                    {/* <span className="text-gray-400 text-xs">
                      Have a nice year...
                    </span> */}
                  </div>
                </div>
              </div>
            </div>

            {/* third one */}
            <div className="min-h-10 flex justify-center items-center">
              <div className="flex flex-col justify-between w-72 h-80 sm:w-92 h-96 bg-white bg-center text-gray-800 shadow-md overflow-hidden cursor-pointer activity2">
                <div className="flex justify-between items-center ml-4 pr-8">
                  <div className="bg-gray-800 text-white bg-opacity-95 shadow px-2 py-1 flex items-center font-bold text-xs rounded">
                    Our Activities
                  </div>
                  <div className="bg-red-600 w-10 h-12 shadow flex flex-col-reverse p-2 text-center font-bold text-white rounded-b-full">
                    03
                  </div>
                </div>
                <div className="bg-white bg-opacity-95 shadow-md rounded-r-xl p-4 flex flex-col mr-4 mb-8">
                  <h3 className="text-xl font-bold pb-2">Yoga & Meditation</h3>
                  <p className=" text-gray-500 text-sm">
                    Build and define your physique with our dedicated
                    bodybuilding
                  </p>
                  <div className="flex justify-between items-center">
                    {/* <span className="text-gray-400 text-xs">
                      Have a nice year...
                    </span> */}
                  </div>
                </div>
              </div>
            </div>

            {/* third one */}
            <div className="min-h-10 flex justify-center items-center">
              <div className="flex flex-col justify-between w-72 h-80 sm:w-92 h-96 bg-white bg-center text-gray-800 shadow-md overflow-hidden cursor-pointer activity3">
                <div className="flex justify-between items-center ml-4 pr-8">
                  <div className="bg-gray-800 text-white bg-opacity-95 shadow px-2 py-1 flex items-center font-bold text-xs rounded">
                    Our Activities
                  </div>
                  <div className="bg-red-600 w-10 h-12 shadow flex flex-col-reverse p-2 text-center font-bold text-white rounded-b-full">
                    04
                  </div>
                </div>
                <div className="bg-white bg-opacity-95 shadow-md rounded-r-xl p-4 flex flex-col mr-4 mb-8">
                  <h3 className="text-xl font-bold pb-2">Zumba</h3>
                  <p className=" text-gray-500 text-sm">
                    Help to burn around 300 – 900
                    calories.
                  </p>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Our_courses;