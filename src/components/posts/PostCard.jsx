import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import axios from "axios";

const PostCard = ({ postInfo }) => {
  const [hasBeenDeleted, setHasBeenDeleted] = useState(false);
  const [postBodyEdits, setPostBodyEdits] = useState(postInfo.PostBody || "");
  const [isEditingPostContent, setIsEditingPostContent] = useState(false);

  const onClickDeleteIcon = () => {
    let ykHeader = {
      authorization: "Bearer " + localStorage.getItem("ykToken"),
    };

    axios
      .post(
        `http://localhost:3002/posts/delete`,
        { postId: postInfo.PostId },
        { headers: ykHeader }
      )
      .then(() => {
        console.log("Post delete success");
        setHasBeenDeleted(true);
      })
      .catch(() => {
        console.log("Post delete fail");
      });
  };

  const onClickSaveEdits = () => {
    // Disable editing of postBody field
    setIsEditingPostContent(false);

    let ykHeader = {
      authorization: "Bearer " + localStorage.getItem("ykToken"),
    };

    axios
      .post(
        `http://localhost:3002/posts/update`,
        { postId: postInfo.PostId, postBody: postBodyEdits },
        { headers: ykHeader }
      )
      .then(() => {
        console.log("Post update success");
      })
      .catch(() => {
        console.log("Post update fail");
      });
  };

  return (
    <div
      className={`bg-white rounded my-4 py-4 px-4 ${
        hasBeenDeleted ? `sr-only` : ``
      }`}
    >
      {/* <pre>
        <code>{JSON.stringify(postInfo, null, 2)}</code>
      </pre> */}

      <span className="px-2 font-semibold text-red-700 text-xl">
        {format(new Date(postInfo.createdAt), `MMMM dd, yyyy`)}
      </span>
      <span className="sr-only">Post ID: {postInfo.PostId}</span>
      <span className="sr-only py-2">{postInfo.PostTitle}</span>
      <span className="px-2 py-2 text-2xl text-blue-600 font-semibold">
        {" "}
        {postInfo.Country}
      </span>
      <span className="px-2 py-3 font-semibold text-xl text-red-700">
        {postInfo.PostTitle}{" "}
      </span>

      {isEditingPostContent ? (
        <textarea
          // onClick={onClickSaveEdits}
          className=" text-black border-0 w-11/12 h-28 text-center hover:border-blue-600"
          value={postBodyEdits}
          onChange={(e) => setPostBodyEdits(e.target.value)}
        />
      ) : (
        <div>{postBodyEdits}</div>
      )}

      <div className="mt-3">
        <button
          className="bg-gray-400 bg-opacity-70 hover:bg-gray-600 text-white mr-2 w-16 px-2 py-1 rounded-full  mt-2 mb-4"
          onClick={() => setIsEditingPostContent(true)}
        >
          Edit
        </button>
        <button
          onClick={onClickSaveEdits}
          className="bg-gray-400 bg-opacity-70 hover:bg-gray-600 text-white mr-2 w-16 px-2 py-1 rounded-full  mt-2 mb-4"
        >
          Save
        </button>
        <button
          onClick={onClickDeleteIcon}
          className="bg-gray-400 bg-opacity-70 hover:bg-gray-600 text-white w-16 px-2 py-1 rounded-full  mt-2 mb-4"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default PostCard;
