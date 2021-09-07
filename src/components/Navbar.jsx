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
    <Link to="/create-new-account" className="nav-links-mobile" 
    onClick={closeMobileMenu}>
        Create New Account
    </Link>
</li>
<li className="nav-item">
    <Link to="/login" className="nav-links" onClick={closeMobileMenu}>
        Login
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
{Button && <Button buttonStyle="btn--outline">CREATE NEW ACCOUNT</Button>}
</div>
</nav>       
</>
    );
}

export default Navbar;