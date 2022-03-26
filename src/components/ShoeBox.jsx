import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const ShoeBox = ({ role, shoeItem }) => {

    const [shoeName, setShoeName] = useState()

    const setTrimmedName = name => {
        const trimmed = name.substr(0, 30)
        const final = trimmed.substr(0, Math.min(trimmed.length, trimmed.lastIndexOf(" ")))
        setShoeName(final)
    }

    useEffect(() => {
        if (shoeItem) setTrimmedName(shoeItem.name)
    }, [shoeItem])

    return (
        <Link to={`/product/${shoeItem?.slug}`}>
            <div className={`shoe-box ${role === 'home' && 'shoe-home'}`}>
                <div className='img-container'>
                    <img src={shoeItem?.images[0]} alt={shoeItem?.name} />
                </div>
                <div className='shoe-text'>
                    <p className='shoe-name'>
                        {shoeName && shoeName}
                    </p>
                    <p className='shoe-cost'>Rs. {shoeItem?.cost}</p>
                    <button className='btn-submit'>BUY NOW</button>
                </div>
            </div>
        </Link>
    )
}

export default ShoeBox
