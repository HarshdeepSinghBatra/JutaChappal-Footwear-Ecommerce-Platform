import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'

const Footer = () => {

    const [mobileNavListOpen, setMobileNavListOpen] = useState([false, false, false, false])

    const FOOTER_LINKS = [
        {
            heading: "FASHOS",
            list: ["About Us", "Careers", "News & Events", "Merchants & Partners", "Sitemap", "Blog"]
        },
        {
            heading: "MY ACCOUNT",
            list: ["My Account", "Order History"]
        },
        {
            heading: "POLICIES",
            list: ["Returns & Exchanges", "Payment Terms", "Delivery Terms", "Store Credit Program", "Terms of Use", "Privacy Policy", "Security Policy"]
        },
        {
            heading: "CUSTOMER SERVICE",
            list: ["FAQs", "Track Order", "Return Request", "Return Status"]
        }        
    ]

    const handleListToggle = (index) => {
        setMobileNavListOpen(prev => prev.map((item, arrIndex) => arrIndex === index ? !item : false))
    }

  return (
    <footer>
        <div className="footer-links-container">

        {FOOTER_LINKS.map((item, index) => (
            <div className="footer-links" key={index}>
                <h2 onClick={() => handleListToggle(index)}>{item.heading} <span> {mobileNavListOpen[index] ? <AiOutlineMinus className='footer-h2-icon' /> : <AiOutlinePlus className='footer-h2-icon' /> } </span> </h2>
                <ul className={`footer-links-list ${mobileNavListOpen[index] && "list-open"}`}>
                    {item.list.map((listItem, index2) => (
                        <li key={index2}><Link to={listItem === 'About Us' ? 'about' : "#"}>{listItem}</Link></li>
                    ))}
                </ul>
            </div>
        ))}
        
        <div className="footer-links">
            <h2>FOLLOW US</h2>
            <ul className="footer-social-links">
                <li><a href="https://www.facebook.com" rel='noreferrer' target="_blank"><FaFacebookF className='footer-icon' /></a></li>
                <li><a href="https://www.instagram.com" rel='noreferrer' target="_blank"><FaInstagram className='footer-icon' /></a></li>
            </ul>
        </div>
        </div>
        <div className="footer-brands-and-categories">
            <div className="footer-brands">
                <h2>ALL BRANDS</h2>
                <ul className="footer-brands-list">
                    <li><Link to="/footwear">Bata</Link></li>
                    <li><Link to="/footwear">Lancer</Link></li>
                    <li><Link to="/footwear">Sparx</Link></li>
                    <li><Link to="/footwear">Scholls</Link></li>
                </ul>
            </div>
            <div className="footer-brands">
                <h2>ALL CATEGORIES</h2>
                <ul className="footer-brands-list">
                    <li><Link to="/footwear">Casual</Link></li>
                    <li><Link to="/footwear">Formal</Link></li>
                    <li><Link to="/footwear">Slipper</Link></li>
                    <li><Link to="/footwear">Sports</Link></li>
                    <li><Link to="/footwear">Sandal</Link></li>
                    <li><Link to="/footwear">Boots</Link></li>
                </ul>
            </div>
        </div>
        <div className="footer-trademark">
            &copy; {new Date().getFullYear()} fashos.com all rights reserved.
        </div>
    </footer>
  )
}

export default Footer