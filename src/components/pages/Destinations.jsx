import React, { useState, useEffect } from "react";
import validation from "../validation";
import { Link } from "react-router-dom";
import axios from "axios";
import Footer from "../Footer";

const Destinations = ({ history }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-destiny-img bg-fixed bg-contain bg-opacity-90 py-12 px-4 sm:px-6 lg:px-8">
      <div>
        <div className=" max-w-7xl bg-white bg-opacity-90  mt-16 pt-6 py-4 px-4 rounded-2xl border-4 border-white">
          {" "}
          <div className="container mx-auto px-4 mb-16 h-auto object-center ">
            <div className="max-w-md w-full space-y-8  bg-white px-10 pb-6 pt-3 rounded-2xl">
              <h2 className="mt-6 text-center text-3xl font-extrabold text-blue-600">
                Destination Ideas
              </h2>
            </div>
          </div>
          <div className="rounded my-4 py-4 px-4 border-4 border-green-700 bg-red-800 bg-opacity-80 text-white">
            <div className="text-3xl mb-4 text-center">Mexico</div>
            <div className="text-2xl mb-2">Swim In A Cenote</div>
            <div className="text-l mb-2">
              Cenotes are natural sinkholes, filled with water, where the cave
              ceiling has collapsed. Mexico has thousands of cenotes – most are
              in the Yucatan Peninsula. Some cenotes are like small lakes in the
              jungle, where you can enjoy cliff jumping. Others are wondrous
              caverns with stalactites and stalagmites. You can snorkel and even
              dive in many of these, spotting fish and sometimes small turtles
              too.
            </div>

            <div className="text-2xl mb-2 mt-10">Swim With Whale Sharks</div>

            <div className="text-l mb-2">
              Mexico is one of the few places in the world where you can swim
              with whale sharks. They’re not actually sharks but fish – the
              largest fish in the world. And swimming with these enormous but
              gentle creatures is one of the bucket-list things to do in Mexico
              you won’t want to miss. You can swim with whale sharks in La Paz
              on the Baja Peninsula from October to February, as well as at Isla
              Holbox (near Cancun) from mid-May to July.
            </div>
          </div>
          {/* brazil ideas */}
          <div className="rounded my-4 py-4 px-4 border-4 border-yellow-200 bg-green-600 bg-opacity-80 text-white">
            <div className="text-3xl mb-4 text-center">Brazil</div>

            <div className="text-2xl mb-2">Get soaked by Iguazu Falls</div>

            <div className="text-l mb-2">
              Brazil is one of few destinations on the planet that can satisfy
              every type of traveler—and luckily, the same can be said for its
              attractions. On a budget? Don’t worry, you’re set. Looking for
              luxury? Oh, you’ll find it, all right. History buffs, outdoorsmen,
              adrenaline junkies, shopaholics, beachcombers, and everyone in
              between will bask in the Brazil sights to see.
            </div>

            <div className="text-2xl mb-2 mt-10">
              Hang ten at Florianópolis Beaches
            </div>

            <div className="text-l mb-2">
              There’s 42 of them, after all! Don’t hesitate to grab a board and
              ride the waves at Floripa. Praia Mole is a frequent location for
              the ASP World Tour surfing competition. If you’re around the area
              roundabouts 40 days after Easter, be sure to check out the Holy
              Spirit Feast.
            </div>
          </div>
          <div className="rounded my-4 py-4 px-4 border-4 border-white bg-blue-700 bg-opacity-80 text-white">
            <div className="text-3xl mb-4 text-center">Greece</div>

            <div className="text-2xl mb-2">Mount Olympus</div>

            <div className="text-l mb-2">
              Of all the places to visit, few are as amazing as Greece. Located
              in the Mediterranean, Greece's 6,000 islands and islets are
              birthplace to some of the world's most significant historical
              figures and cultural movements. It is set against a backdrop of
              beautiful beaches, fantastic architecture and archaeological
              wonders. Greece’s historical value is only matched by the beauty
              that surrounds it. It’s little wonder this country was considered
              a worthy home for the gods. With so many things to do in Greece,
              it’s been a popular travel destination throughout history. Mount
              Olympus is the highest mountain in Greece. At its top was the
              mythical home of several gods in ancient Greek religion. Because
              of that, you can’t help but feel a confident swagger while
              climbing toward its 52 peaks. Along the way, you will enjoy
              beautiful flora and diverse fauna. There are many waterfalls for
              swimming. Paraglide through the sky from any of the landings on
              the mountain made just for that. Hike, bike or climb one of the
              trails. In addition, you can visit the museum there. With so much
              to offer, this is undoubtedly one of the neatest things to do in
              Greece.
            </div>

            <div className="text-2xl mb-2 mt-10">The Caves of Greece</div>

            <div className="text-l mb-2">
              Visiting the many caves throughout the country is a definite
              must-see among things to do in Greece. There are over 8,500 of
              them, including the famous Melissani, Perama, Paiania and Mega
              Spilaion caves, to name a few. You will be amazed at the
              architecture used to create worship areas within them, and how it
              mixes so well with the caves’ natural beauty.
            </div>

            <br />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destinations;
