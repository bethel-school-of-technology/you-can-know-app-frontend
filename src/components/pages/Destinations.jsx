import React, { useState, useEffect } from "react";
import validation from "../validation";
import { Link } from "react-router-dom";
import axios from "axios";
import image from "../../images/LOGO.png";
import LOGO from "../../images/LOGO.png";
import LOGO2 from "../../images/LOGO.png";
import LOGO3 from "../../images/LOGO.png";
import LOGO4 from "../../images/LOGO.png";
import LOGO5 from "../../images/LOGO.png";
import LOGO6 from "../../images/LOGO.png";
import LOGO7 from "../../images/LOGO.png";

import { handleSubmit } from "@tailwindcss/forms";
import { LockClosedIcon } from "@heroicons/react/solid";
// import { Posts } from "../pages/Posts";
// import { UserPost } from "./Posts";
// import { PostTitle } from "./Posts";
// import { PostBody } from "./Posts";
// import { PostId } from "./Posts";
import { useHistory } from "react-router-dom";
// import Mexico from "./Destinations/Mexico";
import Footer from '../Footer';

const Destinations = ({ history }) => {
  
//   const baseUrl = "http://localhost:3002/users";
//   useEffect(() => {
//     let ykHeader = {
//       authorization: "Bearer " + localStorage.getItem("ykToken"),
    // };
    // axios
    //   .get(baseUrl + "/Destinations", { headers: ykHeader })
    //   .then((currentUser) => {
    //     console.log(currentUser);
  //   axios.get(`${baseUrl}/posts`, { headers: ykHeader }).then(({ data }) => {
  //     console.log(data);
      
  //   });
  //   if (!userInfo) {
  //     history.push("/Destinations");
  //   }
  // }, []);
  // //      history.push("/Destinations");
  // //  }
  // // }, []);
  // {
    
  // }

  return (
<>
    <div className="min-h-screen flex items-center justify-center bg-destinations-img bg-cover py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto px-4 mb-15 h-auto object-center ">
          <div className="max-w-lxg w-full space-y-4 bg-white bg-opacity-0 px-20 pb-6 pt-4 rounded-lg border-3 border-white">
            <div>
              <Link to="/Destinations">
                <img
                  className="mx-auto h-12 w-auto transform scale-250"
                  src={image}
                  alt="logo"
                />
              </Link>
              <h2 className="mt-6 text-center text-3xl font-extrabold text-red-700">
                  Destinations Featured On This App!
              </h2>
            </div>          
<br/>
<br/>  
      
{/* <img
                  className="mx-auto h-12 w-auto transform scale-250"
                  src={LOGO6}
                  alt=""
                /> */}
              
      {/* <img className="img src="> url="images/Brazil4.jpeg"</img> */}
<br/>
<br/>
 
      <div className="bg-white rounded my-4 py-4">
<br/>
<br/>
<span>Mexico: 
<br/>
<br/>
Just A Few Of The Fun Things You Can See In Mexio:
<br/>
<br/> 
1. Swim In A Cenote
<br/> 
<br/>

Cenotes are natural sinkholes, filled with water, where the cave ceiling has collapsed.

Mexico has thousands of cenotes – most are in the Yucatan Peninsula.

Some cenotes are like small lakes in the jungle, where you can enjoy cliff jumping. 

Others are wondrous caverns with stalactites and stalagmites.

You can snorkel and even dive in many of these, spotting fish and sometimes small turtles too.

<br/>
<br/> 

2. Swim With Whale Sharks: 
<br/> 
<br/> 

Mexico is one of the few places in the world where you can swim with whale sharks.

They’re not actually sharks but fish – the largest fish in the world. And swimming with these enormous but gentle creatures is one of the bucket-list things to do in Mexico you won’t want to miss.

You can swim with whale sharks in La Paz on the Baja Peninsula from October to February, as well as at Isla Holbox (near Cancun) from mid-May to July.
<br/>
By: AuthorJanice and George - September 28, 2021
</span>
<br/>
<br/>
</div>

<div className="bg-white rounded my-4 py-4">
<br/>
<br/>
<span>Brazil: 
<br/>
<br/>
Just A Few Of The Fun Things You Can See In Brazil:
<br/>
<br/> 
1. Get soaked by Iguazu Falls
<br/> 
<br/>

Brazil is one of few destinations on the planet that can satisfy every type of traveler—and luckily, the same can be said for its attractions. 

On a budget? Don’t worry, you’re set. Looking for luxury? Oh, you’ll find it, all right. 

History buffs, outdoorsmen, adrenaline junkies, shopaholics, beachcombers, and everyone in between will bask in the Brazil sights to see.

<br/>
<br/> 

2. Hang ten at Florianópolis Beaches: 
<br/> 
<br/> 

There’s 42 of them, after all! Don’t hesitate to grab a board and ride the waves at Floripa. 

Praia Mole is a frequent location for the ASP World Tour surfing competition.

If you’re around the area roundabouts 40 days after Easter, be sure to check out the Holy Spirit Feast.
<br/>
by CATHRYN FORTUNA -  April 29, 2021
</span>
<br/>
<br/>
</div>
<div className="bg-white rounded my-4 py-4">
<br/>
<br/>
<span>Greece: 
<br/>
<br/>
So Many Amazing Things For You to Do in Greece!
<br/>
<br/> 
1. Mount Olympus:
<br/> 
<br/>

Of all the places to visit, few are as amazing as Greece. Located in the Mediterranean, Greece's 6,000 islands and islets are birthplace to some of the world's most significant historical figures and cultural movements. 

It is set against a backdrop of beautiful beaches, fantastic architecture and archaeological wonders. 

Greece’s historical value is only matched by the beauty that surrounds it. It’s little wonder this country was considered a worthy home for the gods. 

With so many things to do in Greece, it’s been a popular travel destination throughout history.

Mount Olympus is the highest mountain in Greece. At its top was the mythical home of several gods in ancient Greek religion. 

Because of that, you can’t help but feel a confident swagger while climbing toward its 52 peaks. 

Along the way, you will enjoy beautiful flora and diverse fauna. There are many waterfalls for swimming. 

Paraglide through the sky from any of the landings on the mountain made just for that. Hike, bike or climb one of the trails. 

In addition, you can visit the museum there. With so much to offer, this is undoubtedly one of the neatest things to do in Greece.

<br/>
<br/> 

2. The Caves of Greece:
<br/> 
<br/> 

Visiting the many caves throughout the country is a definite must-see among things to do in Greece. 

There are over 8,500 of them, including the famous Melissani, Perama, Paiania and Mega Spilaion caves, to name a few. 

You will be amazed at the architecture used to create worship areas within them, and how it mixes so well with the caves’ natural beauty.
<br/>
by Isabel, The Getaway - Oct 15, 2019
</span>
<br/>
<br/>
</div>
      {/* <img className="img src="> url="images/Brazil4.jpeg"</img> */}
      
              <p className="mt-2 text-center text-sm text-gray-600">
                <a
                  href="/Destinations"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  ––––All Posts––––
                </a>
              </p>
          </div>
        </div>
      </div>
    
    <Footer />
    <div className="text-center mt-1 mb-1 text-gray-300">
            Y.C.K,Tsalach(c) 2021
        </div>
        </>  
  );
};

export default Destinations;
