import React from 'react';
import { Button } from './Button';
import './Header.css';
import '../App.css';

// import images from 'react-router-dom';


function Header() {
  return (
    <>
    <div className='header-container'>
    <h1>ARE YOU READY?</h1>
    
    

      
      <div className='header-btns'>
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
      </div>
    </div>
    </>
  );
}

export default Header;
