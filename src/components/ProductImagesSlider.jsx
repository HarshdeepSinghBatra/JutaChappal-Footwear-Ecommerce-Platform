import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import SlickArrowNext from './SlickArrowNext'
import SlickArrowPrev from './SlickArrowPrev'

const ProductImagesSlider = ({ images }) => {
    const settings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        dots: true,
        nextArrow: <SlickArrowNext />,
        prevArrow: <SlickArrowPrev />
    }

    return (
        <div className='product-images-slider'>
            <Slider {...settings}>
                {images.map((item, index) => (
                    <div className='product-slide' key={index}>
                        <img src={item} alt='' />
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default ProductImagesSlider
