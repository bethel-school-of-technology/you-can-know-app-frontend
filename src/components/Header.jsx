import React from 'react';
import { Button } from './Button';
// import './Header.css';
import '../App.css';

import images from 'react-router-dom';


function Header() {
  return (
    
    <div className="min-h-screen flex items-center justify-center bg-home-img bg-cover py-12 px-4 sm:px-6 lg:px-8">
    <h1 className="text-4xl text-white text font-extrabold ">
    “Traveling – it leaves you speechless, then turns you into a storyteller” – Ibn Battuta
    </h1>
    
    

      
      {/* <div className='header-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >  
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          DIVE RIGHT IN! <i className='far fa-play-circle' />
        </Button>
      </div> */}
    </div>
    
  );
}

export default Header;
