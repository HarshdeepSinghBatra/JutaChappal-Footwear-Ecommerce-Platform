import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'

const CAROUSEL_CONTENT = ["https://firebasestorage.googleapis.com/v0/b/webdevprojectsem1.appspot.com/o/banner%2F1.jpg?alt=media&token=faac2a96-1ba5-40b5-a797-7268e281927a", "https://firebasestorage.googleapis.com/v0/b/webdevprojectsem1.appspot.com/o/banner%2F2.jpg?alt=media&token=505d770d-f20b-4f08-a123-7196db34f96e", "https://firebasestorage.googleapis.com/v0/b/webdevprojectsem1.appspot.com/o/banner%2F3.jpg?alt=media&token=827dc28e-83f3-41cb-9771-2c23f11bb12a"]

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
                    <img src={item} alt={`slider${index+1}`} />
                    <div className="carousel-content">
                    </div>
                </div>
            ))}
        </Carousel>
    )
}

export default HeaderSlider
