import React from 'react';
import { Button } from './Button';
import './Footer.css';
import '../App.css';

function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
            <p className='footer-subscription-heading'>
        "YOU CAN KNOW" more about things happening on 
           this App by Subscribing!
            </p>
            <p className='footer-subscription=text'>
                Unsubscribe
            </p>
            <div className='input-areas'>
            <form>
            <input
                type='email'
                name='email'
                placeholder='Enter Your Email Here'
                className='footer-input' />
            <Button buttonStyle='btn--outline'>I Want To Signup</Button>
            </form>
            </div>
            </section>
        </div>
    )
}

export default Footer
