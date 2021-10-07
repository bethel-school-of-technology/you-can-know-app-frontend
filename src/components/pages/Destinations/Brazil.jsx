import React, { useState, useEffect } from "react";
// import validation from "../validation";
import { Link } from "react-router-dom";
import axios from "axios";
import { format } from "date-fns";

// import image from "../../images/LOGO.png";
// import { handleSubmit } from "@tailwindcss/forms";

const Brazil = ({ history }) => {
  const [pic, setPic] = useState("");
  // const [picMessage, setpicMessage] = useState("");
  // const [userInfo, setUserInfo] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userPosts, setUserPosts] = useState([]); // change null to array, because you're adding multiple posts
  const [createdAt, setCreatedAt] = useState("");
  const [errors, setErrors] = useState({});

  const baseUrl = "http://localhost:3002/users";
  console.log(userPosts);

  useEffect(() => {
    let ykHeader = {
      authorization: "Bearer " + localStorage.getItem("ykToken"),
    };
    axios
      .get(baseUrl + "/brazil", { headers: ykHeader })
      .then((currentUser) => {
        setUserPosts(currentUser.data.myPosts);
        setPic(currentUser.data.user.img);

        history.push("/brazil");
      })
      .catch((e) => console.error(e));
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-brazil-img bg-fixed bg-cover py-12 px-4 sm:px-6 lg:px-8">
      <div>
        <div className="mx-auto max-w-2xl   bg-green-600 bg-opacity-80  mt-16 pt-6 py-4 px-4 rounded-lg border-4 border-white">
          {" "}
          <div className="container mx-auto px-4 mb-16 h-auto object-center ">
            <div className="max-w-md w-full space-y-8 mt-16 bg-blue-600 bg-opacity-90 px-10 pb-6 pt-4 rounded-lg border-4 border-white">
              <h2 className="mt-6 text-center text-3xl font-extrabold text-yellow-200">
                All Travel Posts About Brazil!
              </h2>
            </div>
          </div>
          <div>
            {userPosts
              ? userPosts.map(({ user, ...post }) => (
                  <div className="bg-white text-center rounded my-4 py-4 px-4">
                    <span className="px-2 font-semibold text-red-700 text-xl">
                      {format(new Date(post.createdAt), `MMMM dd, yyyy`)}
                    </span>
                    <span className="px-2 font-semibold text-red-700 text-xl">
                      {" "}
                      {post.PostTitle}
                    </span>
                    <span className="sr-only">{post.Country}</span>
                    <div>
                      <span className="px-3 py-3 space-y-1">
                        {post.PostBody}
                      </span>
                    </div>
                  </div>
                ))
              : `No posts to show yet`}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brazil;
