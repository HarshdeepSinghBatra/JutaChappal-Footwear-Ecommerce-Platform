import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'

const CAROUSEL_CONTENT = ["1.jpg", "2.jpg", "3.jpg"]

const HeaderSlider = () => {
    return (
        <Carousel
            className='carousel'
            autoPlay={true}
            swipeable={true}
            interval={3000}
            infiniteLoop={true}
            stopOnHover={false}
            showStatus={false}
            showThumbs={false}
        >
            {CAROUSEL_CONTENT.map((item, index) => (
                <div key={index} className='carousel-div'>
                    <img src={`/images/banner/${item}`} alt={`slider${index+1}`} />
                    <div className="carousel-content">
                    </div>
                </div>
            ))}
        </Carousel>
    )
}

export default HeaderSlider
