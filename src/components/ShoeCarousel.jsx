import React from 'react'
import ShoeBox from './ShoeBox'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import SlickArrowNext from './SlickArrowNext'
import SlickArrowPrev from './SlickArrowPrev'

const ShoeCarousel = ({ heading }) => {
    const SHOES = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]



    const settings = {
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: false,
        nextArrow: <SlickArrowNext />,
        prevArrow: <SlickArrowPrev />,
        responsive: [
            {
                breakpoint: 825,
                settings: {
                    slidesToShow: 3,
                    dots: true,
                },
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 2,
                    dots: true,
                },
            },
        ],
    }
    return (
        <section>
            <h2>{heading}</h2>
            <Slider {...settings}>
                {SHOES.map((item, index) => (
                    <ShoeBox key={index} role='home' />
                ))}
            </Slider>
        </section>
    )
}

export default ShoeCarousel
