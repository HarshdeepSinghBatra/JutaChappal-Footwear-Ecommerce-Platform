import React, { useState, useEffect } from 'react'
import HeaderSlider from '../components/HeaderSlider'
import { Link } from 'react-router-dom'
import ShoeCarousel from '../components/ShoeCarousel'
import axios from 'axios'

const Home = () => {

    const [shoesData, setShoesData] = useState()

    const CATEGORY1 = [
        {
            link: '/footwear/women',
            img: 'women_thumb.webp',
            text: 'WOMEN',
        },
        {
            link: '/footwear/men',
            img: 'men_thumb.jpg',
            text: 'MEN',
        },
        {
            link: '/footwear/latest',
            img: 'newarrival_thumb.jpg',
            text: 'NEW ARRIVALS',
        },
        {
            link: '/footwear/best',
            img: 'best_seller_thumb.jpg',
            text: 'BEST SELLERS',
        },
    ]
    const CATEGORY2 = [
        {
            link: '/footwear/casual',
            img: 'casual.jpg',
            text: 'CASUAL',
        },
        {
            link: '/footwear/formal',
            img: 'formal.jpg',
            text: 'FORMAL',
        },
        {
            link: '/footwear/slippers',
            img: 'slippers.jpg',
            text: 'SLIPPERS',
        },
        {
            link: '/footwear/sports',
            img: 'sports.jpg',
            text: 'SPORTS',
        },
        {
            link: '/footwear/sandals',
            img: 'sandals.jpg',
            text: 'SANDALS',
        },
        {
            link: '/footwear/boots',
            img: 'boots.jpg',
            text: 'BOOTS',
        },
    ]

    const BRANDS = [
        {
            name: "Lancer",
            img: "lancer.webp",
            link: "footwear/lancer"
        },
        {
            name: "Bata",
            img: "bata.jpg",
            link: "footwear/bata"
        },
        {
            name: "Sparx",
            img: "sparx.jpg",
            link: "footwear/sparx"
        },
        {
            name: "Fausto",
            img: "fausto.jpg",
            link: "footwear/fausto"
        },
    ]

    const getAllData = async () => {
        try {  
            const res = await axios.get("/api/shoes");
            const data = res.data
            setShoesData(data)
        } catch (err) {
            console.error(err)
        }
    }

    useEffect(() => {
        getAllData()
    }, [])

    return (
        <div>
            <header className='slider'>
                <HeaderSlider />
            </header>
            <main>
                <section className='categories'>
                    <div className='category1'>
                        {CATEGORY1.map((item, index) => (
                            <Link
                                className='category1-item'
                                to={item.link}
                                key={index}
                            >
                                <div className='img-container'>
                                    <img src={`/images/category1/${item.img}`} alt={item.text} />
                                </div>
                                <span>{item.text}</span>
                            </Link>
                        ))}
                    </div>
                    <div className='category2'>
                        {CATEGORY2.map((item, index) => (
                            <Link
                                className='category2-item'
                                to={item.link}
                                key={index}
                            >
                                <div className='img-container'>
                                    <img src={`/images/category2/${item.img}`} alt={item.text} />
                                </div>
                                <span>{item.text}</span>
                            </Link>
                        ))}
                        
                    </div>
                </section>
                <ShoeCarousel heading={'NEW ARRIVALS'} shoesData={shoesData} />
                <ShoeCarousel heading={'TOP SELLING'} shoesData={shoesData} />
                <section className='featured-brands'>
                    <h2>FEATURED BRANDS</h2>
                    <div className='brands-container'>
                        {BRANDS.map((item, index) => (
                            <Link to={item.link} className='brand-item' key={index}>
                                <div className='img-container'>
                                    <img
                                        src={`/images/brands/${item.img}`}
                                        alt={item.name}
                                    />
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Home
