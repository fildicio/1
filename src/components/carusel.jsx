import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import MediaCard from './mediacard';

class DemoCarousel extends Component {
    render() {
        return (
            <div className="carousel">
                <Carousel
                    showThumbs={false}
                    showStatus={false}
                    dynamicHeight={false} 
                >
                    <div>
                        <img
                            src="https://i.pinimg.com/originals/c2/be/9a/c2be9aa95a0e7a4bc0ee9565b2387a1b.jpg" 
                            alt="Image 1"
                            className="carousel-image"
                        />
                    </div>
                    <div>
                        <img
                            src="https://www.state.gov/wp-content/uploads/2023/07/shutterstock_433413835v2-1024x683.jpg"
                            className="carousel-image"
                        />
                    </div>
                    <div>
                        <img
                            src="https://www.state.gov/wp-content/uploads/2023/07/shutterstock_433413835v2-1024x683.jpg"
                            alt="Image 3"
                            className="carousel-image"
                        />
                    </div>
                </Carousel>
            </div>
        );
    }
}

export default DemoCarousel;



