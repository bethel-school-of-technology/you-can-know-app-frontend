import React from 'react';
import Boxitem from './Boxitem';
import './Boxes.css';

function Boxes() {
    return (
        <div className='boxes'>
        <h1>"Oh The Places You Could Go!"</h1>
        <div className="boxes__container">
        <div className="boxes__wrapper">
        <ul className="boxes__items">
            <Boxitem 
            src='images/img-7.jpg' 
            text='Taking A Trip To Europe?'
            label='Journey'
            path='/Destinations'
            />
        </ul>
        </div>
        </div>   
        </div>
    );
}

export default Boxes;
