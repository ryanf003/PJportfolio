import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

class MyCarousel extends Component {
    render() {
        return (
            <Carousel >
            <Carousel.Item>
                <img
                className=" w-100"
                src='/assets/img/testcarousel.jpg'
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>Baby</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className=" w-100"
                src='/assets/img/Family/fam-2.jpg'
                alt="Second slide"
                />
                <Carousel.Caption>
                <h3>Family</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className=" w-100"
                src="/assets/img/Maternity/mat-4-land-home.jpg"
                alt="Third slide"
                />
                <Carousel.Caption>
                <h3>Maternity</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
        );
    }
}

export default MyCarousel;
