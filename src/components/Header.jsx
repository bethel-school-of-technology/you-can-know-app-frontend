import React from "react";
// import "../App.css";
// import images from "react-router-dom";
import { Link } from "react-router-dom";
import image from "../images/brazil.jpg";
import image2 from "../images/greece.jpg";
import image3 from "../images/mexico-B.jpg";
import image11 from "../images/LOGO.png";

function Header() {
  return (
    <>
      <div className="min-h-full min-w-full container flex items-center justify-center bg-fixed bg-home-img bg-cover pt-16">
        <section className="container mx-auto px-4 h-auto object-center ">
          <div className="pb-4 pt-4 mt-4 lg:mt-0 md:mt-0">
            <img
              alt="..."
              src={image11}
              className="max-w-l h-auto md:max-w-xl md:h-auto lg:max-w-3xl lg:h-auto lg:py-0"
            />
          </div>

          <div className="w-screen md:w-full lg:w-full lg:h-auto flex flex-wrap justify-center mt-0 lg:mt-0 bg-opacity-70 md:rounded-3xl lg:rounded-3xl bg-white px-6 ">
            <div className=" pb-6 pt-4 mt-6 rounded-lg">
              <p className="text-3xl md:text-5xl lg:text-7xl font-semibold leading-relaxed m-4 text-center">
                See what people are posting about in our featured countries
              </p>
            </div>

            <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4 ">
              <h5 className="text-3xl mb-4 font-semibold  w-auto text-red-700 text-center">
                Brazil{" "}
              </h5>
              <div className="px-6">
                <Link to="/brazil">
                  <img
                    alt="..."
                    src={image}
                    className="mx-auto w-40 h-40 md:w-32 md:h-32 lg:w-60 lg:h-60 rounded-full"
                  />
                </Link>
                <div className="pt-6 text-center">
                  <p className="mt-1 text-sm font-bold text-blue-600">
                    Brazil has more animal and plant species than any other
                    country in the world.
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4 ">
              <h5 className="text-3xl mb-4 font-semibold text-red-700 text-center">
                Greece{" "}
              </h5>
              <div className="px-6">
                <Link to="/greece">
                  <img
                    alt="..."
                    src={image2}
                    className="mx-auto w-40 h-40 md:w-32 md:h-32 lg:w-60 lg:h-60 rounded-full"
                  />
                </Link>
                <div className="pt-6 text-center">
                  <p className="mt-1 text-sm font-bold text-blue-600">
                    Greece has about 9,000 miles of coastline.{" "}
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4 pb-2">
              <h5 className="text-3xl mb-4 font-semibold text-red-700 text-center">
                Mexico{" "}
              </h5>
              <div className="px-6">
                <Link to="/mexico">
                  <img
                    alt="..."
                    src={image3}
                    className="mx-auto w-40 h-40 md:w-32 md:h-32 lg:w-60 lg:h-60 rounded-full"
                  />
                </Link>
                <div className="pt-6 text-center">
                  <p className="mt-1 text-sm font-bold text-blue-600">
                    Mexico City is the second city of the world with the largest
                    number of museums
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="container max-w-full mt-20 pb-20 mx-auto h-auto bg-white ">
          <div className=" md:w-full lg:w-full lg:h-auto   mt-0 lg:mt-0 bg-opacity-70  px-6 ">
            <div className=" pb-6 pt-4 mt-6 rounded-lg">
              <p className="text-3xl md:text-5xl lg:text-5xl text-blue-600 font-semibold leading-relaxed m-4 text-right">
                Explore new ideas on our Destinations page!
              </p>
            </div>

            <div className="rounded my-4 py-4 px-4 bg-blue-700  text-white">
              <div className="text-4xl mb-4 text-right">Did you know?</div>

              <div className="text-l mb-2 text-right">
                Of all the places to visit, few are as amazing as Greece.
                Located in the Mediterranean, Greece's 6,000 islands and islets
                are birthplace to some of the world's most significant
                historical figures and cultural movements. It is set against a
                backdrop of beautiful beaches, fantastic architecture and
                archaeological wonders. Greece’s historical value is only
                matched by the beauty that surrounds it. It’s little wonder this
                country was considered a worthy home for the gods. With so many
                things to do in Greece, it’s been a popular travel destination
                throughout history. Mount Olympus is the highest mountain in
                Greece. At its top was the mythical home of several gods in
                ancient Greek religion. Because of that, you can’t help but feel
                a confident swagger while climbing toward its 52 peaks. Along
                the way, you will enjoy beautiful flora and diverse fauna. There
                are many waterfalls for swimming. Paraglide through the sky from
                any of the landings on the mountain made just for that. Hike,
                bike or climb one of the trails. In addition, you can visit the
                museum there. With so much to offer, this is undoubtedly one of
                the neatest things to do in Greece.
              </div>

              <br />
              <br />
            </div>
          </div>
        </div>

        <div className="container max-w-full mx-auto h-auto bg-red-700">
          <div className=" md:w-full lg:w-full lg:h-auto   mt-0 lg:mt-0 bg-opacity-70  px-6 ">
            <div className=" pb-6 pt-4 mt-6 rounded-lg">
              <p className="text-5xl md:text-5xl lg:text-7xl text-white font-semibold leading-relaxed m-4 text-left">
                Get to know the creators!
              </p>
              <Link to="/about">
                <button className="border-blue-600 bg-white border-4 px-3 py-3 mx-5 text-3xl text-blue-600 rounded-full text-left hover:bg-blue-600 hover:text-white">
                  Check them out >>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
