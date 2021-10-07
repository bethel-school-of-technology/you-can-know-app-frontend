import React from "react";
import "../../App.css";
import Header from "../Header";
import Footer from "../Footer";

const Home = (props) => {
  return (
    <>
      <Header />
      <Footer />

      <div className="text-center mt-1 mb-1 text-gray-300">
        Y.C.K,Tsalach(c) 2021
      </div>
    </>
  );
};

export default Home;
