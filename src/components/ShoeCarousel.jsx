import React, { useEffect, useState } from 'react'
import ShoeBox from './ShoeBox'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import SlickArrowNext from './SlickArrowNext'
import SlickArrowPrev from './SlickArrowPrev'

const ShoeCarousel = ({ heading, shoesData }) => {

    const [shoeList, setShoeList] = useState()

    useEffect(() => {
        if (shoesData) {
            const list = shoesData.sort((d1, d2) => d2.sales - d1.sales).slice(0,10)
            setShoeList(list)
        }
    }, [shoesData])

    useEffect(() => {
        if (shoeList) console.log(shoeList)
    }, [shoeList])

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
                breakpoint: 550,
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
                {shoeList?.map((shoeItem, index) => (
                    <ShoeBox key={index} role='home' shoeItem={shoeItem} />
                ))}
            </Slider>
        </section>
    )
}

export default ShoeCarousel
