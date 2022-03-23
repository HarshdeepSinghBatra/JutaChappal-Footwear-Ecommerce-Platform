import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import { Link } from 'react-router-dom'

const CAROUSEL_CONTENT = [
    {
        img: "https://picsum.photos/1000/400",
        text: "THE ETHNIC EDIT"
    },
    {
        img: "https://picsum.photos/1000/400",
        text: "FREE AND EASY"
    },
    {
        img: "https://picsum.photos/1000/400",
        text: "FEELL THE ENERGY"
    },
]

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
                    <img src={`https://picsum.photos/id/${index+121}/1000/400`} alt={`slider${index+1}`} />
                    <div className="carousel-content">
                        {/* <p>{item.text}</p> */}
                        {/* <Link to="/">Explore Now</Link> */}
                    </div>
                </div>
            ))}
        </Carousel>
    )
}

export default HeaderSlider
