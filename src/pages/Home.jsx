import React from 'react'
import HeaderSlider from '../components/HeaderSlider'
import { Link } from 'react-router-dom'
import ShoeCarousel from '../components/ShoeCarousel'

const Home = () => {
    const CATEGORY1 = [
        {
            link: '/footwear',
            img: 'https://picsum.photos/60',
            text: 'WOMEN',
        },
        {
            link: '/footwear',
            img: 'https://picsum.photos/60',
            text: 'MEN',
        },
        {
            link: '/footwear',
            img: 'https://picsum.photos/60',
            text: 'NEW ARRIVALS',
        },
        {
            link: '/footwear',
            img: 'https://picsum.photos/60',
            text: 'BEST SELLERS',
        },
    ]
    const CATEGORY2 = [
        {
            link: '/footwear',
            img: 'https://picsum.photos/250/350',
            text: 'CASUAL',
        },
        {
            link: '/footwear',
            img: 'https://picsum.photos/250/350',
            text: 'FORMAL',
        },
        {
            link: '/footwear',
            img: 'https://picsum.photos/250/350',
            text: 'SLIPPER',
        },
        {
            link: '/footwear',
            img: 'https://picsum.photos/250/350',
            text: 'SPORTS',
        },
        {
            link: '/footwear',
            img: 'https://picsum.photos/250/350',
            text: 'SANDAL',
        },
        {
            link: '/footwear',
            img: 'https://picsum.photos/250/350',
            text: 'BOOTS',
        },
    ]

    const BRANDS = [1,2,3,4,5,6]

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
                                    <img src={`https://picsum.photos/id/${index+50}/60`} alt={item.text} />
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
                                    <img src={`https://picsum.photos/id/${index+11}/250/350`} alt={item.text} />
                                </div>
                                <span>{item.text}</span>
                            </Link>
                        ))}
                        
                    </div>
                </section>
                <ShoeCarousel heading={'NEW ARRIVALS'} />
                <ShoeCarousel heading={'TOP SELLING'} />
                <section className='featured-brands'>
                    <h2>FEATURED BRANDS</h2>
                    <div className='brands-container'>
                        {BRANDS.map((item, index) => (
                            <Link to="/" className='brand-item' key={index}>
                                <div className='img-container'>
                                    <img
                                        src={`https://picsum.photos/id/${index+1}/150/100`}
                                        alt=''
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
