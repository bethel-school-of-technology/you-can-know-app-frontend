import React, { useState, useEffect } from "react";
// import validation from "../validation";
import { Link } from "react-router-dom";
import axios from "axios";
// import image from "../../images/LOGO.png";
// import { handleSubmit } from "@tailwindcss/forms";


const Posts = ({ history }) => {
  const [pic, setPic] = useState("");
  const [username, setUsername] = useState("");
  const [picMessage, setpicMessage] = useState("");

  
  const [userPosts, setUserPosts] = useState([]); // change null to array, becasue you're adding multiple posts
  const [errors, setErrors] = useState({});


  const baseUrl = "http://localhost:3002/users";
  console.log(userPosts);

  useEffect(() => {
    let ykHeader = {
      authorization: "Bearer " + localStorage.getItem("ykToken"),
    };
    axios
      .get(baseUrl + "/posts", { headers: ykHeader })
      .then((currentUser) => {
        // console.log(currentUser);
        setUserPosts(currentUser.data.myPosts);
        setPic(currentUser.data.user.img);
        setpicMessage(currentUser.data.user.picMessage);
        
        history.push("/posts")
      }).catch((e) => console.error(e));
  }, []);

  return (

    <div className="min-h-screen flex items-center justify-center bg-posts-img bg-cover py-12 px-4 sm:px-6 lg:px-8">
    <div>
      {/* <p>Greece Picture: {pic}</p>
      <img src={image} alt="" /> */}
      <br />
      <p className="text-xl text-gray-100">Picture Message: {picMessage}</p>
      <br />
      <div className="space-y-4">
        {userPosts
          ? userPosts.map((post) => (
            <>
              {/* <p className="text-xl">{post.Username}</p> */}
              <p className="text-xl text-gray-100">{post.Country}</p>
              <p className="text-xl text-gray-100">{post.PostTitle}</p>
              <p className="text-normal text-gray-100">{post.PostBody}</p>


            </>
          ))
          : `No posts to show yet`}
      </div>
      <img src="images/posts.jpg" />
        <div className="container mx-auto px-4 mb-15 h-auto object-center ">
          <div className="max-w-md w-full space-y-8 bg-white bg-opacity-90 px-10 pb-6 pt-4 rounded-lg border-4 border-white">
            <div>
              <Link to="/Posts">
                <img
                  className="mx-auto h-12 w-auto transform scale-250"
                  // src={image}
                  alt="logo"
                />
              </Link>
              <h2 className="mt-6 text-center text-3xl font-extrabold text-red-700">
              All Posts AboutCountries Featured!
              </h2>
            </div>
            {/* <form
              className="mt-8 space-y-6"
              action="#"
              method="POST"
              onSubmit={handleSubmit}
            > */}
            <div className="mt-8 space-y-6">
              <input type="hidden" name="remember" defaultValue="true" />
              <div className="rounded-md shadow-sm -space-y-px">
                <div>
                  
                </div>
              </div>
              
              <p className="mt-2 text-center text-sm text-gray-600">
                <Link
                  to="/Posts"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  ––––All Posts About All Travel Destinations!––––
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;



// import React, { useState, useEffect } from "react";
// import validation from "../validation";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import image from "../../images/LOGO.png";
// // import { LockClosedIcon } from "@heroicons/react/solid";
// // import { handleSubmit } from '@tailwindcss/forms';

// // import { Form, Button, Row, Col } from "react-bootstrap";

// // import { updatePosts } from "../../actions/UserActions";
// // import Loading from "../../components/Loading";
// // import ErrorMessage from "../../components/ErrorMessage";
// import { useHistory } from "react-router-dom";

// const Posts = ({ history }) => {
//   // const [picMessage, setpicMessage] = useState("");
//   const [UserId, setUserId] = useState();
//   const [postId, setPostId] = useState("");
//   const [Country, setCountry] = useState("");
//   const [postTitle, setPostTitle] = useState("");
//   const [postBody, setPostBody] = useState("");

//   const [currentPost, setUserPost] = useState({});
//   const [userInfo, setUserInfo] = useState();
//   const [postInfo, setPostInfo] = useState();

//   // const { loading, error, success } = username;
//   const baseUrl = "http://localhost:3002/posts";
//   const [errors, setErrors] = useState({});

//   useEffect(() => {
//     let ykHeader = {
//       authorization: "Bearer " + localStorage.getItem("ykToken"),
//     };
//     axios.get(baseUrl + "/posts", { headers: ykHeader }).then((UserPost) => {
//       console.log(UserPost);
//       <usersInfo />;
//       setPostId(UserPost.data.user.PostId);
//       setCountry(UserPost.data.user.Country);
//       setPostTitle(UserPost.data.user.PostTitle);
//       setPostBody(UserPost.data.user.PostBody);
//     });

//     if (!userInfo) {
//     }
//   }, []);

//   function handleSubmit(event) {
//     event.preventDefault();

//     axios
//       .post(
//         `http://localhost:3002/posts/create`,
//         {
//           country: Country,
//           postTitle: postTitle,
//           postBody: postBody,
//         },
//         {
//           headers: {
//             authorization: "Bearer " + localStorage.getItem("ykToken"),
//           },
//         }
//       )
//       .then((response) => {
//         console.log("Success creating new post");
//       })
//       .catch(() => {
//         console.log("Something went wrong");
//       });
//   }

//   return (
    
//     <>
//       <div className="min-h-screen flex items-center justify-center bg-posts-img bg-cover py-12 px-4 sm:px-6 lg:px-8">

//       <h1> Posts </h1>
//       <br />
//       <div>
//       {/* <p className="text-xl text-gray-100">First Name: {firstName}</p>
      
//       <p className="text-xl text-gray-100">Last Name: {lastName}</p>
      
//       <p className="text-xl text-gray-100">Username: {username}</p>
      
//       <p className="text-xl text-gray-100">Profile Picture: {pic}</p> */}
//       <img src={image} alt="" />
      
//       <p className="space-y-6" className="text-xl text-gray-100">Country: {Country}</p>
//       <p className="space-y-6" className="text-xl text-gray-100">Post Title: {postTitle}</p>
//       <p className="space-y-6" className="text-xl text-gray-100">Post Body: {postBody}</p>
//       </div>

//         <div className="container mx-auto px-4 mb-15 h-auto object-center ">
//           <div className="max-w-md w-full space-y-8 bg-white bg-opacity-90 px-10 pb-6 pt-4 rounded-lg border-4 border-white">
//             <div>
//               <Link to="/home">
//                 <img
//                   className="mx-auto h-12 w-auto transform scale-250"
//                   src={image}
//                   alt="logo"
//                 />
//               </Link>
//               <h2 className="mt-6 text-center text-3xl font-extrabold text-red-700">
//                 Post About Your Favorite Travel Spots!
//               </h2>
//             </div>
//             <form
//               className="mt-8 space-y-6"
//               action="#"
//               method="POST"
//               onSubmit={handleSubmit}
//             >
//               <input type="hidden" name="remember" defaultValue="true" />
//               <div className="rounded-md shadow-sm -space-y-px">
//                 <div>
//                   <label htmlFor="postTitle" className="sr-only">
//                     Post Title
//                   </label>
//                   <input
//                     name="postTitle"
//                     type="postTitle"
//                     className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
//                     placeholder="Post Title"
//                     value={postTitle}
//                     onChange={(e) => setPostTitle(e.target.value)}
//                   />
//                   {errors.PostTitle && (
//                     <p style={{ color: "red" }}>{errors.PostTitle}</p>
//                   )}
//                 </div>
//               </div>
//               <div>
//                 <label htmlFor="postBody" className="sr-only">
//                   Post Body
//                 </label>
//                 <input
//                   name="postBody"
//                   type="postBody"
//                   className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
//                   placeholder="Post Body"
//                   value={postBody}
//                   onChange={(e) => setPostBody(e.target.value)}
//                 />
//                 {errors.PostBody && (
//                   <p style={{ color: "red" }}>{errors.PostBody}</p>
//                 )}
//               </div>
//               <button
//                 type="submit"
//                 onClick={Posts}
//                 className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//               >
//               <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
//                   {/* <LockClosedIcon
//                     className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
//                     aria-hidden="true"
//                   /> */}
//                 {/* </span> */}
//                 Create A Post
//               </button>

//               <br></br>

//               <p className="mt-2 text-center text-sm text-gray-600">
//                 <a
//                   href="/Posts"
//                   className="font-medium text-indigo-600 hover:text-indigo-500"
//                 >
//                   ––––Create A Post––––
//                 </a>
//               </p>
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Posts;
