import React from 'react';
import '../../App.css';
import Header from '../Header';
import Boxes from '../Boxes';


const Home = (props) => {
    return (
    <>
        <image src='public/images/Balloons-jeremy-bezanger.jpg' />

        <Header />
        <Boxes />
        <div>
            You Can Know!
        </div>

    </>
    );
}

export default Home;