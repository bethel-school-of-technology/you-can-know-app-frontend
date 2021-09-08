import React from 'react';
import Carditem from './Carditem';
import './Cards.css';
import image from '../images/FireWaterTownRe.jpg';

function Cards() {
    return (
        <div className='cards'>
        <h1>"Oh The Places You Could Go!"</h1>
        <div className="cards__container">
        <div className="cards__wrapper">
        <ul className="cards__items">

            <Carditem
            src={image} 
            text='Planning To Take A Trip To Europe?'
            label='Explore!'
            path='/Destinations'
            />
            {/* Image below is from zarpo magazine */}
            {/* https://magazine.zarpo.com.br/praias-do-rio-de-janeiro/ */}
            <Carditem
            src='images/pdp_zarpo-2.png' 
            text='Beautiful Brazil! 
            Glorious, Wonders Brazil offers!'
            // text2= 'Where better to began your adventure than on the beaches of Brazil!  '
            label='FUN!'
            path='/Destinations'
            />
            <Carditem
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

export default Cards;
