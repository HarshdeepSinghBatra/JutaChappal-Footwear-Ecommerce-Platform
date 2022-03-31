import React, { useEffect, useRef, useState } from 'react'
import { Link, useLocation, useSearchParams } from 'react-router-dom'
import { FaRegUser } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi'
import { BsCartCheck } from 'react-icons/bs'
import Cart from './Cart'

const Navbar = ({ cartItems, setCartItems }) => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isNavMenuOpen, setIsNavMenuOpen] = useState(false)
    const [isCartOpen, setIsCartOpen] = useState(false)

    const cartRef = useRef()
    const mobileNavOverlay = useRef()
    const location = useLocation()
    const [searchParams] = useSearchParams()

    useEffect(() => {
        document.addEventListener("mouseup", e => {
            if (cartRef.current) {
                if (cartRef.current.contains(e.target)) return
                setIsCartOpen(false)
            }
        })
    }, [cartRef])

    useEffect(() => {
        if (window.innerWidth <= 768) {
            setIsScrolled(true)
        }
    }, [])

    useEffect(() => {
        const handleScroll = () => {
            if (window.innerWidth <= 768) return
            setIsScrolled(() => window.scrollY > 5)
        }

        window.addEventListener('scroll', handleScroll, { passive: true })

        return () => window.removeEventListener('scroll', handleScroll)
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

    const logoutUser = () => {
        localStorage.clear()
        window.location.reload()
    }


    return (
        <>
            <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
                <div className="nav-logo">
                    <GiHamburgerMenu
                        className='mobile-nav-open mobile-only'
                        onClick={() => setIsNavMenuOpen(true)}
                    />
                    <Link to='/' className='logo'>
                        <img src='/images/logo.png' alt='' />
                    </Link>
                </div>
                    <ul className='nav-list'>
                        {LINKS.map((item, index) => (
                            <li key={index}>
                                <Link to={item.link}>{item.text}</Link>
                            </li>
                        ))}
                    </ul>
               
                <div className='nav-buttons'>
                        {localStorage.getItem('userName') ? (
                            <div
                                className="logged-user"
                            >
                                <button
                                    type='button'
                                    onClick={() => logoutUser()}
                                >
                                    Log out
                                </button>
                            </div>
                        ) : (
                            <Link to={`/login?continue=${location.pathname === '/login' ? searchParams.get('continue') : location.pathname}`}>
                                <FaRegUser className='nav-icon' />
                            </Link>
                        )}
                        <div className='cart-ref-container' ref={cartRef}>
                            <button className='cart-button' onClick={() => setIsCartOpen(!isCartOpen)}>
                                <span
                                    className="cart-badge"
                                >
                                    {cartItems?.reduce((total, item) => total + item.quantity, 0)}
                                </span>
                                <BsCartCheck className='nav-icon' />
                            </button>
                        {isCartOpen && <Cart isScrolled={isScrolled} cartItems={cartItems} setCartItems={setCartItems} />} 
                        </div>
                </div>

            </nav>
            <div
                ref={mobileNavOverlay}
                className={isNavMenuOpen ? 'mobile-nav-overlay' : ''}
            ></div>
            <div
                className={`mobile-side-menu mobile-only ${
                    isNavMenuOpen && 'menu-open'
                }`}
            >
                <ul>
                    {LINKS.map((item, index) => (
                        <li key={index}>
                            <Link to={item.link}>{item.text}</Link>
                        </li>
                    ))}

                    <AiOutlineClose
                        className='mobile-nav-close'
                        onClick={() => setIsNavMenuOpen(false)}
                    />
                </ul>
            </div>
        </>
    )
}

export default Navbar
