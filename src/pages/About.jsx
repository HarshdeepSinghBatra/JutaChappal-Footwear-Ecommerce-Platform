import React from 'react'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'

const About = () => {
    return (
        <main className='about-main'>
            <h1>ABOUT US</h1>
            <section className='about-section'>
                <h2>Who we are?</h2>
                <p>
                    A group of people who got together to create footwear, but
                    got high on style somewhere in between, started watching
                    fashion networks and created something that can be
                    recognized only by someone out of this planet. That's how we
                    started and that's how we are still going on. We are India's
                    one of its kind online personalized store with a group of
                    stylists to recommend you the most stylish footwear as per
                    your needs. We bring you a huge collection, created around
                    many themes and styles to bring you cult classic fashion.
                </p>
            </section>
            <section className="about-section">
                <h2>What we do?</h2>
                <p>Well, to start with - Everything to make you feel Special! A stylist to discuss your fashion needs, a delivery guarantee, and no question asked return/exchange policy and a promise to ensure quality in all our products. We believe in outrageous fashion trends and offer you the same, but with a hint of class. Our famous fashion advice for all is: <span> Don't just be Stylish, Be Smart, buy SMART on FASHOS.com! </span> </p>
            </section>
            <section className="about-section">
                <h2>How to get it going?</h2>
                <p>Welcome to the world of FASHOS - a smart, quick and easy way to get yourself access to the latest fasionista. All you need to do is access our online storefront and fill out a brief survey to help us know your personal style needs and preferences. Once you tell us what you like, our team of stylists will take you to an exciting journey, showing you the variety we boast of and will help you choose the best. And believe us – online shopping at FASHOS is a lot of fun, not even a bit of it will disappoint you.</p>
            </section>
            <section className="about-contact">
                <div className="contact-heading">
                <h2>NEED HELP? CONTACT US</h2>
                <p>MONDAY - SATURDAY 10:00AM-6:00PM (IST)</p>
                </div>
                <div className="contact-details">
                    <div>
                        <BsFillTelephoneFill className='contact-icon' />
                        <span>Phone: +91 1111111111</span>
                    </div>
                    <div>
                        <MdEmail className='contact-icon' />
                        <span>Email: consumersupport@fashos.com</span>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default About
