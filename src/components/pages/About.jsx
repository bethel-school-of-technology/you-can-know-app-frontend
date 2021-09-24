import React from 'react'
import image2 from "../../images/ASH.png";
import image3 from "../../images/MANNY.png";
import image4 from "../../images/JOE.png";
import image5 from "../../images/GIT.png";
import image6 from "../../images/LINK.png";

function About() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-about-img bg-cover py-12 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto px-4 mb-15 h-auto object-center ">
           
            <div className="flex flex-wrap justify-center pt-8 bg-white bg-opacity-90 px-6 pb-6 pt-4 rounded-lg border-4 border-white">

            <div className="bg-white pb-6 pt-4 rounded-lg">
            <h2 className="text-3xl text-center font-extrabold text-red-700">You Can Know the Creators</h2>
            <p className="text-lg leading-relaxed m-4 text-blueGray-500 text-center">
                  These three classmates have two things in common: Full Stack Web Development and a love for
                  travel. Together, they did exactly that...they joined these two passions together and
                  created the perfect app for traveling secrets. It's a must-have for those of you that love to 
                  see the world! 
                </p>
            </div>
            
                
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4 py-6">
                <div className="px-6" >
                
                  <img
                    alt="..."
                    src={image2}
                    className="shadow-lg rounded-full mx-auto max-w-120-px transition duration-500 ease-in-out bg-white hover:bg-blue-600 transform hover:-translate-y-1 hover:scale-110"
                  />
                  
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-semibold text-red-700">Ashley Sherry </h5>
                    <p className="mt-1 text-sm font-bold">
                      Web Developer
                    </p>
                    <div className="mt-6">
                      <button
                        className="text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1 transition duration-500 ease-in-out bg-white hover:bg-blue-600 transform hover:-translate-y-1 hover:scale-110"
                        type="button"
                      >
                          <img
                      src={image5}
                      alt="github"
                      />
                      </button>
                      <button
                        className="text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1 transition duration-500 ease-in-out bg-white hover:bg-white transform hover:-translate-y-1 hover:scale-110"
                        type="button"
                      >
                          <img
                      src={image6}
                      alt="linkedin"
                      />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4 py-6">
                <div className="px-6">
                  <img
                    alt="..."
                    src={image3}
                    className="shadow-lg rounded-full mx-auto max-w-120-px transition duration-500 ease-in-out bg-white hover:bg-blue-600 transform hover:-translate-y-1 hover:scale-110"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-semibold text-red-700">Manuel Urbina</h5>
                    <p className="mt-1 text-sm  font-bold">
                      Web Developer
                    </p>
                    <div className="mt-6">
                      <button
                        className="text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1 transition duration-500 ease-in-out bg-white hover:bg-blue-600 transform hover:-translate-y-1 hover:scale-110"
                        type="button"
                      >
                          <img
                      src={image5}
                      alt="github"
                      />
                      </button>
                      <button
                        className="text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1 transition duration-500 ease-in-out bg-white hover:bg-white transform hover:-translate-y-1 hover:scale-110"
                        type="button"
                      >
                          <img
                      src={image6}
                      alt="linkedin"
                      />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4 py-6">
                <div className="px-6">
                  <img
                    alt="..."
                    src={image4}
                    className="shadow-lg rounded-full mx-auto max-w-120-px transition duration-500 ease-in-out bg-white hover:bg-blue-600 transform hover:-translate-y-1 hover:scale-110"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-semibold text-red-700">Joe Gartman</h5>
                    <p className="mt-1 text-sm font-bold">
                      Web Developer
                    </p>
                    <div className="mt-6">
                      <button
                        className="text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1 transition duration-500 ease-in-out bg-white hover:bg-blue-600 transform hover:-translate-y-1 hover:scale-140"
                        type="button"
                      >
                         <img
                      src={image5}
                      alt="github"
                      />
                      </button>
                      <button
                        className="text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1 transition duration-500 ease-in-out bg-white hover:bg-white transform hover:-translate-y-1 hover:scale-140"
                        type="button"
                      >
                          <img
                      src={image6}
                      alt="linkedin"
                      />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  )
}

export default About;

