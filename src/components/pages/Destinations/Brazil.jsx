import React from 'react';
import './brazil.css';
// import image from "../../images/athens.jpg";


function Brazil() {
      return (
    <div className="container-Brazil">
      <div className="container-1">
        <div className="Brazil">
          <h1>A TASTE OF Brazil!</h1>
          <div classname="Brazil">
          <img src={Image} height="auto" width="100" alt="./."/>
          </div>
          <h3 className="bio">A TASTE OF Brazil!</h3>
        </div>
      </div>
      <div className="row-new">
          <div className="container-2">
             <form className="Food">
               <h2>Places To Eat</h2>
                <div>
                <textarea className="textBody" name="Food" id="Food"
                  placeholder="Places !">
                </textarea>
                </div>
                <button className="pro3">OH TASTE AND SEE!</button>
              </form>
          </div>
      </div>

      <div className="row-old">
        This is where my posts go
      </div>
    </div>
  )
}

export default Brazil
