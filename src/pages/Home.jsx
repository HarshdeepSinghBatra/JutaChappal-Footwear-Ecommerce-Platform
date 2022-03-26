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
            img: 'https://firebasestorage.googleapis.com/v0/b/webdevprojectsem1.appspot.com/o/category1%2Fwomen_thumb.webp?alt=media&token=9125ff6f-0fb2-4d06-aa4f-3d29b43d3c3e',
            text: 'WOMEN',
        },
        {
            link: '/footwear/men',
            img: 'https://firebasestorage.googleapis.com/v0/b/webdevprojectsem1.appspot.com/o/category1%2Fmen_thumb.jpg?alt=media&token=7cc74d85-c490-4578-a17d-5ffcbfc45005',
            text: 'MEN',
        },
        {
            link: '/footwear/latest',
            img: 'https://firebasestorage.googleapis.com/v0/b/webdevprojectsem1.appspot.com/o/category1%2Fnewarrival_thumb.jpg?alt=media&token=4fcce098-29ee-4290-b376-ab7153c0f885',
            text: 'NEW ARRIVALS',
        },
        {
            link: '/footwear/best',
            img: 'https://firebasestorage.googleapis.com/v0/b/webdevprojectsem1.appspot.com/o/category1%2Fbest_seller_thumb.jpg?alt=media&token=c898503b-8284-40c8-b318-f0f796ecd7bd',
            text: 'BEST SELLERS',
        },
    ]
    const CATEGORY2 = [
        {
            link: '/footwear/casual',
            img: 'https://firebasestorage.googleapis.com/v0/b/webdevprojectsem1.appspot.com/o/categories%2Fcasual.jpg?alt=media&token=fcb29cbe-04e4-4492-81df-66ae9226e8a0',
            text: 'CASUAL',
        },
        {
            link: '/footwear/formal',
            img: 'https://firebasestorage.googleapis.com/v0/b/webdevprojectsem1.appspot.com/o/categories%2Fformal.jpg?alt=media&token=da889cb8-5f8a-487f-a128-e351e04693ce',
            text: 'FORMAL',
        },
        {
            link: '/footwear/slippers',
            img: 'https://firebasestorage.googleapis.com/v0/b/webdevprojectsem1.appspot.com/o/categories%2Fslipper.jpg?alt=media&token=c33e81d0-4b5e-4b6d-b73b-143c8e68aadf',
            text: 'SLIPPERS',
        },
        {
            link: '/footwear/sports',
            img: 'https://firebasestorage.googleapis.com/v0/b/webdevprojectsem1.appspot.com/o/categories%2Fsports.jpg?alt=media&token=a19921f3-11a5-4760-be89-aceffddb4a67',
            text: 'SPORTS',
        },
        {
            link: '/footwear/sandal',
            img: 'https://firebasestorage.googleapis.com/v0/b/webdevprojectsem1.appspot.com/o/categories%2Fsandals.jpg?alt=media&token=11fbfb31-33c6-4091-ad76-477f7fd02c2a',
            text: 'SANDALS',
        },
        {
            link: '/footwear/boots',
            img: 'https://firebasestorage.googleapis.com/v0/b/webdevprojectsem1.appspot.com/o/categories%2Fboots.jpg?alt=media&token=982317da-38bc-4708-a17a-6b25bdc6548f',
            text: 'BOOTS',
        },
    ]

    const BRANDS = [
        {
            name: "Lancer",
            img: "https://firebasestorage.googleapis.com/v0/b/webdevprojectsem1.appspot.com/o/lancer.webp?alt=media&token=99bf212f-65b9-47bc-9ccf-ff35b8c524d8",
            link: "footwear/lancer"
        },
        {
            name: "Bata",
            img: "https://firebasestorage.googleapis.com/v0/b/webdevprojectsem1.appspot.com/o/bata.jpg?alt=media&token=76327033-1bee-4df6-abd4-bcabc273ced5",
            link: "footwear/bata"
        },
        {
            name: "Sparx",
            img: "https://firebasestorage.googleapis.com/v0/b/webdevprojectsem1.appspot.com/o/sparx.jpg?alt=media&token=e22c1bd2-86ad-4516-8c94-f993d3d222f0",
            link: "footwear/sparx"
        },
        {
            name: "Fausto",
            img: "https://firebasestorage.googleapis.com/v0/b/webdevprojectsem1.appspot.com/o/fausto.jpg?alt=media&token=a28b68c0-5b18-49d4-baf3-73f545835835",
            link: "footwear/fausto"
        },
    ]

    const getAllData = async () => {
        try {  
            const res = await axios.get("https://harshdeepshoesapi.herokuapp.com/shoes");
            const data = res.data
            // console.log(data)
            setShoesData(data)
        } catch (err) {
            console.log(err)
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
                                    <img src={item.img} alt={item.text} />
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
                                    <img src={item.img} alt={item.text} />
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
                                        src={item.img}
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
