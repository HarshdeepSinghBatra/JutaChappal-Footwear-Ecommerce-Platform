import React from 'react'
import ShoeBox from './ShoeBox'

const RelatedProducts = () => {
    const RELATED_PRODUCTS = [1, 2, 3, 4]

    return (
        <div className='related-products-container'>
            {RELATED_PRODUCTS.map((item, index) => (
                <ShoeBox key={index} role='home' />
            ))}
        </div>
    )
}

export default RelatedProducts
