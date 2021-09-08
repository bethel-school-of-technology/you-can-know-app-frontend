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
            src='images/FireWaterTownRe.jpg' 
            text='Planning To Take A Trip To Europe?'
            label='Explore!'
            path='/Destinations'
            />

            {/* Image below is from zarpo magazine */}
            {/* https://magazine.zarpo.com.br/praias-do-rio-de-janeiro/ */}
            <Boxitem 
            src='images/pdp_zarpo-2.png' 
            text='Beautiful Brazil! 
            Glorious, Wonders Brazil offers!'
            // text2= 'Where better to began your adventure than on the beaches of Brazil!  '
            label='FUN!'
            path='/Destinations'
            />
            <Boxitem 
            src='images/Balloons-j-bezanger.jpg' 
            text='Up Up And Away! 
            The Sky Is The Limit!'
            label='FUN!'
            path='/Destinations'
            />
        </ul>
        </div>
        </div>   
        </div>
    );
}

export default Boxes;
