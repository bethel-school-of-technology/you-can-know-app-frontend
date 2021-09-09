import React from 'react';
import '../../App.css';
import Header from '../Header';
import Cards from '../Cards';
import Footer from '../Footer';


const Home = (props) => {
    return (
    <>

        <Header />
        <Cards />
        <Footer />

        <div>
            Y.C.K,Tsalach(c) 2021
        </div>

    </>
    );
}

export default Home;