import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import { Button } from "./Button";
import "./Navbar.css";


function Navbar () {
const [click, setClick] = useState(false);
const [Buttons, setButton] = useState(true);
const handleClick = () => setClick(!click);
const closeMobileMenu = () => setClick(false);

const showButton = () => {
  if (window.innerWidth <= 960) {
    setButton(false);
} else { 
    setButton(true);
    }
};

useEffect(() => {
    showButton();
  }, []);

window.addEventListener("resize", showButton);

return (
<>
<nav className="navbar">
<div className="navbar-container">
<Link to="/" className="navbar-logo">
Y.C.K. <i className="fab fa-typo3" />
</Link>
<div className="menu-icon" onClick={handleClick}>
    <i className={click ? "fas fa-times" : "fas fa-bars"} />
</div>
<ul className={click ? "nav-menu active" : "nav-menu"}>
<li className="nav-item">
    <Link to="/" className="nav-links" onClick={closeMobileMenu}>
        Home
    </Link>
</li>
<li className="nav-item">
    <Link to="/signup" className="nav-links" 
    onClick={closeMobileMenu}>
        Sign Up
    </Link>
</li>
<li className="nav-item">
    <Link to="/login" className="nav-links" onClick={closeMobileMenu}>
        Login
    </Link>
</li>
<li className="nav-item">
    <Link to="/userprofile" className="nav-links" onClick={closeMobileMenu}>
       Profile
    </Link>
</li>
<li className="nav-item">
    <Link to="/destinations" className="nav-links" onClick={closeMobileMenu}>
        Destinations
    </Link>
</li>
<li className="nav-item">
    <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
        About
    </Link>
</li>
<li className="nav-item">
    <Link to="/search" className="nav-links" onClick={closeMobileMenu}>
        Search
    </Link>
</li>
<li className="nav-item">
    <Link to="/logout" className="nav-links" onClick={closeMobileMenu}>
        Logout
    </Link>
</li>
</ul>
{Button && <Button buttonStyle="btn--outline">Sign Up</Button>}
</div>
</nav>       
</>
    );
}

export default Navbar;