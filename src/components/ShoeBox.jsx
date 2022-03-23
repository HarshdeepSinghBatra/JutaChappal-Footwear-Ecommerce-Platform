import React from 'react'
import { Link } from 'react-router-dom'

const ShoeBox = ({ role }) => {
    return (
        <Link to='/footwear/id'>
            <div className={`shoe-box ${role === 'home' && 'shoe-home'}`}>
                <div className='img-container'>
                    <img src='https://picsum.photos/300' alt='' />
                </div>
                <div className='shoe-text'>
                    <p className='shoe-name'>
                        FAUSTO Men's White Lace Up Trend
                    </p>
                    <p className='shoe-cost'>Rs.1,299.00</p>
                    <button className='btn-submit'>BUY NOW</button>
                </div>
            </div>
        </Link>
    )
}

export default ShoeBox
