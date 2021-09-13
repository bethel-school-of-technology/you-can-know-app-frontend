import "./profile.css";
import '../../App.css';

//import Tpbar from "../../components/tpbar/Tpbar";
//import Sidebar from "../../components/sidebar/Sidebar";
// import Feed from "../../components/feed/Feed";
//import Rightbar from "../../components/rightbar/Rightbar";

function Profile() {
  return (
    <>
      <div className="userprofile">

              <img
                className="profileCoverImg"
                src="assets/post/3.jpeg"
                alt=""
              />
              <img
                className="profileUserImg"
                src="assets/person/Beach.jpg"
                alt=""
              />
            </div>
            <div className="userprofile-Info">
                <h4 className="userprofile-Info-Name">Ypu Can Know</h4>
                <span className="userprofile-Info-Desc">Time To Travel!</span>
            </div>
    </>
  );
}

export default Profile;


// // import React from 'react'
// import tProfilebar from '../../components/TProfilebar/tProfilebar'



// function Profile() {
//     return (
//         <tProfilebar/>
            
        
//     )
// }

// export default Profile




// import React from 'react';
// // import { Button } from './Button';
// import './Header.css';
// import '../App.css';
// import images from 'react-router-dom';
// import "./Navbar.css";

// function Profile() {
//     return (
//         <div className='navbar-container'>
//             <h1>
//                 Profile Page!
//             </h1>
//         </div>
//     )
// }

// export default Profile

