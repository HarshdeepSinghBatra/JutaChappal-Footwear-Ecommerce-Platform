import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ShoeBox from './ShoeBox'

const RelatedProducts = ({ shoeItem }) => {

    const [relatedProductsData, setRelatedProductsData] = useState()

    const getRelatedData = async (shoeItem) => {
        try {
            const res = await axios.get(`/api/shoes/category/${shoeItem.category}`)
            const data = res.data
            const res2 = await axios.get(`/api/shoes/brand/${shoeItem.brand}`)
            const data2 = res2.data
            const combinedData = [...new Map([...data, ...data2].map(item => [item.slug, item])).values()]

            setRelatedProductsData(combinedData.filter(shoe => shoe.slug !== shoeItem.slug).sort((shoe1, shoe2) => shoe2.sales - shoe1.sales).slice(0, 6))
        } catch (err) {
            console.error(err)
        }
    }

    useEffect(() => {
        if (shoeItem) getRelatedData(shoeItem)
    }, [shoeItem])

    return (
        <div className='related-products-container'>
            {relatedProductsData?.map((item, index) => (
                <ShoeBox key={index} role='home' shoeItem={item} />
            ))}
        </div>
    )
}

export default RelatedProducts
