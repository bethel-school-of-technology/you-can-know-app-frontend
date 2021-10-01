import React from "react";
import "../App.css";

function Footer() {
  return (
    <div className="grid-flow-row flex justify-center">
      <a
        href="/terms"
        className="font-medium text-gray-300 hover:text-blue-600 px-3"
      >
        Terms and Conditions
      </a>
      <a
        href="/about"
        className="font-medium text-gray-300 hover:text-blue-600 px-3"
      >
        About
      </a>
      <a
        href="/disclaimer"
        className="font-medium text-gray-300 hover:text-blue-600 px-3"
      >
        Disclaimer
      </a>
    </div>
  );
}

export default Footer;
