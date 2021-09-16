import React from 'react';
import './greece.css';
// import image from "../../images/athens.jpg";


function Greece() {
      return (
    <div className="container-Greece">
      <div className="container-1">
        <div className="greece">
          <h1>A TASTE OF GREECE!</h1>
          <div classname="Greece">
          <img src={Image} height="auto" width="100" alt="./."/>
          </div>
          <h3 className="bio">A TASTE OF GREECE!</h3>
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

export default Greece
