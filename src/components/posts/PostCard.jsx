import React, { useState, useEffect } from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import axios from "axios";

const PostCard = ({ postInfo }) => {

    const [hasBeenDeleted, setHasBeenDeleted] = useState(false);
    const [postBodyEdits, setPostBodyEdits] = useState(postInfo.PostBody || "");

    const onClickDeleteIcon = () => {
        let ykHeader = {
            authorization: "Bearer " + localStorage.getItem("ykToken"),
        };

        axios.post(`http://localhost:3002/posts/delete`,
            { postId: postInfo.PostId },
            { headers: ykHeader })
            .then(() => {
                console.log('Post delete success');
                setHasBeenDeleted(true);
            }).catch(() => {
                console.log('Post delete fail')
            })
    }


    const onClickSaveEdits = () => {
        let ykHeader = {
            authorization: "Bearer " + localStorage.getItem("ykToken"),
        };

        axios.post(`http://localhost:3002/posts/update`,
            { postId: postInfo.PostId, postBody: postBodyEdits },
            { headers: ykHeader })
            .then(() => {
                console.log('Post update success');
            }).catch(() => {
                console.log('Post update fail')
            })
    }

    return (
        <div className={`bg-white rounded my-4 py-4 ${hasBeenDeleted ? `sr-only` : ``}`}>

            {/* <pre>
                <code>
                    {
                        JSON.stringify(postInfo, null, 2)
                    }
                </code>
            </pre> */}

            <span className="px-3 py-3">{postInfo.firstName}  {postInfo.lastName}   posted: {postInfo.PostTitle} </span>

            <span className="sr-only">Post ID: {postInfo.PostId}</span>
            <span className="sr-only px-3 py-2">{postInfo.PostTitle}</span>
            <span className="px-3 py-2">Country: {postInfo.Country}</span>
            <br></br>
            <textarea className="px-3 py-2 space-y-1" value={postBodyEdits} onChange={e => setPostBodyEdits(e.target.value)} />

            <div>
                <AiFillDelete onClick={onClickDeleteIcon} />
                <button onClick={onClickSaveEdits} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Save edit
                </button>
            </div>
        </div>
    );
}

export default PostCard;