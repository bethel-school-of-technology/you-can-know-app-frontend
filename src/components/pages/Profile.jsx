import React from 'react';
import './profile.css';
import image from "../../images/img_avatar.png";


function Profile() {
      return (
    <div className="container-profile">
      <div className="container-1">
        <div className="pic-1">
          <h1>John Doe</h1>
          <div classname="john">
          <img src={image} height="auto" width="100" alt="Avatar"/>
          </div>
          <h3 className="bio">About Me</h3>
        </div>
          
      </div>
      <div className="row-new">
          <div className="container-2">
             <form className="pic-2">
               <h2>Wall Post</h2>
                <div>
                <textarea className="postBox" name="comments" id="comments"
                  placeholder="Hey... say something!">
                </textarea>
                </div>
                <button className="pro3">Post</button>
              </form>
          </div>
      </div>

      <div className="row-old">
        This is where my posts go
      </div>
    </div>
   
  )
}

export default Profile

