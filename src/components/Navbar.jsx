import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaRegUser } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi'
import { BsCartCheck } from 'react-icons/bs'


const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isNavMenuOpen, setIsNavMenuOpen] = useState(false)


    const navRef = useRef()

    const mobileNavOverlay = useRef()

    useEffect(() => {
        if (window.innerWidth <= 768) {
            setIsScrolled(true)
            return
        }
    }, [])
        
        window.addEventListener('scroll', () => {
            if (window.innerWidth <= 768) return
            if (window.pageYOffset > 150) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        })
 

    const LINKS = [
        {
            text: 'NEW ARRIVALS',
            link: '/footwear/latest',
        },
        {
            text: 'WOMEN',
            link: '/footwear/women',
        },
        {
            text: 'MEN',
            link: '/footwear/men',
        },
        {
            text: 'BRANDS',
            link: '/footwear/brands',
        },
    ]

    return (
        <>
        <nav className={`navbar ${isScrolled && 'scrolled'}`} ref={navRef}>
            <div className='upperbar'>
                <Link to="/" className='logo'>
                    <img
                        src='https://www.fashos.com/pub/media/logo/stores/1/logo.png'
                        alt=''
                    />
                </Link>

                <div className='buttons'>
                    <Link to='/login'>
                        <FaRegUser className='nav-icon' />
                    </Link>
                    <button>
                        <BsCartCheck className='nav-icon' />
                    </button>
                </div>
            </div>

            <div className='lowerbar'>
                <GiHamburgerMenu className='mobile-nav-open mobile-only' onClick={() => setIsNavMenuOpen(true)} />
                <Link to="/" className='logo-left'>
                    <img
                        src='https://www.fashos.com/pub/media/logo/stores/1/logo.png'
                        alt=''
                    />
                </Link>
                <ul>
                    {LINKS.map((item, index) => (
                        <li key={index}>
                            <Link to={item.link}>{item.text}</Link>
                        </li>
                    ))}
                </ul>
                <div className='buttons'>
                    <Link to='/login'>
                        <FaRegUser className='nav-icon' />
                    </Link>
                    <button>
                        <BsCartCheck className='nav-icon' />
                    </button>
                </div>
            </div>
            
        </nav>
        <div ref={mobileNavOverlay} className={isNavMenuOpen ? "mobile-nav-overlay" : ""}></div>
        <div className={`mobile-side-menu mobile-only ${isNavMenuOpen && "menu-open"}`}>
        <ul>
                {LINKS.map((item, index) => (
                    <li key={index}>
                        <Link to={item.link}>{item.text}</Link>
                    </li>
                ))}

                <AiOutlineClose className='mobile-nav-close' onClick={() => setIsNavMenuOpen(false)} />
            </ul>
        </div>
        
        </>
    )
}

export default Navbar
