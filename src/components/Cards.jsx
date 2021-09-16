import React from 'react';
import Carditem from './Carditem';
import './Cards.css';
import image from '../images/brazil.jpg';
import image2 from '../images/greece.jpg';
import image3 from '../images/mexico-B.jpg';

function Cards() {
    return (
        <div className='cards'>
        <h1>"Oh The Places You Could Go!"</h1>
        <div className="cards__container">
        <div className="cards__wrapper">
        <ul className="cards__items">

            <Carditem
            src={image} 
            text='Up Up And Away! 
            The Sky Is The Limit!'
            label='BRAZIL!'
            path='/Brazil'
            />
            {/* Image below is from zarpo magazine */}
            {/* https://magazine.zarpo.com.br/praias-do-rio-de-janeiro/ */}
            <Carditem
            src={image2} 
            text='Beautiful, 
            Glorious, Wonders The World Has to Offer!'
            // text2= 'Where better to began your adventure than on the beaches of Brazil!  '
            label='GREECE!'
            path='/Greece'
            />
            <Carditem
            src={image3} 
            text='Planning To Take A Trip!'
            label='MEXICO!'
            path='/Mexico'
            />
        </ul>
        </div>
        </div>   
        </div>
    );
}

export default Cards;
