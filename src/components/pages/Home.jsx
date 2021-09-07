import React from 'react';
import '../../App.css';
import Header from '../Header';
import Boxes from '../Boxes';
// import SignUp from '../SignUp';
// import '../../../public/images/Balloons-j-bezanger.';


const Home = (props) => {
    return (
    <>
        {/* <img src='public/images/Balloons-j-bezanger.jpg' /> */}

        <Header />
        <Boxes />
        {/* <SignUp /> */}
        <div>
            You Can Know(c) 2021
        </div>

    </>
    );
}

export default Home;