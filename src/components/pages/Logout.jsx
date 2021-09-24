import React, { useState } from 'react';
import validation from "../validation";
import {Link} from "react-router-dom";
import axios from 'axios';
import image from "../../images/LOGO.png";


const Logout= () => {


  return ( 
      
      <div className="min-h-screen flex items-center justify-center bg-logout-img bg-cover py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto px-4 mb-15 h-auto object-center ">
      <div className="max-w-md w-full space-y-8 bg-white bg-opacity-90 px-10 pb-6 pt-4 rounded-lg border-4 border-white">
        <div>
        <Link to="/home">
        <img
            className="mx-auto h-12 w-auto transform scale-250"
            src={image}
            alt="logo"
          />
          </Link>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-red-700">Safe Travels</h2>
          
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" defaultValue="true" />
          

         

          <div>
              <Link to="/login">
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
             
             Return to Login
            </button>
            </Link>
           

          </div>
        </form>
      </div>
    </div>
    </div>
  )  
};

export default Logout;


























