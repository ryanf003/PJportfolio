import React from 'react';
import IconBarComponent from './IconBarComponent';
import MyCarousel from './CarouselComponent';
import CarouselComponent2 from './CarouselComponent2';
import Header from './HeaderComponent';
import { Navbar, Nav } from 'react-bootstrap'

function Home(props) {
    return (
        <div className="wrapper">
            <Header />
            <div className="carousel">
                <MyCarousel />
            </div>
            <div className="buttons">
                <IconBarComponent />
            </div>
        </div>  
    );
}

export default Home;   

