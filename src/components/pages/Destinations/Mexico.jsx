import React from 'react';
import './mexico.css';
// import <img src="mexicof.jpg" alt=""/> from "./images";


function Mexico() {
      return (
    <div className="container-Mexico">
      <div className="container-1">
        <div className="Mexico">
          <h1>THE SPICE OF MEXICO!</h1>
          <div classname="Mexico">
          <img src={Image} height="auto" width="100" alt="./."/>
          </div>
          <h3 className="bio">A TASTE OF MEXICO!</h3>
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

export default Mexico
