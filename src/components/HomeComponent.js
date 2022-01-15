import React from 'react';
import IconBarComponent from './IconBarComponent';
import MyCarousel from './CarouselComponent';

function Home(props) {
    return (
        <div className="wrapper">
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

