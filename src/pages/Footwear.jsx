import React, { useEffect, useState } from 'react'
import FootwearCategorySidebar from '../components/FootwearCategorySidebar'
import ShoeBox from '../components/ShoeBox'
import { BsFilter } from 'react-icons/bs'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Footwear = () => {
    const [shoesData, setShoesData] = useState()
    const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false)

    const { category } = useParams()

    useEffect(() => {
      if (category) {
        if (category === 'brands') {
          getDataByCategory("Best")
        } else {
          const categoryParam = category[0].toUpperCase()
          getDataByCategory(categoryParam + category.slice(1))
        }
      }
    }, [category])

    const getDataByCategory = async (category) => {
      try {
        let res
        if (["Bata", "Lancer", "Sparx", "Fausto"].includes(category)) {
          res = await axios.get(`https://harshdeepshoesapi.herokuapp.com/shoes/brand/${category}`)
        } else {
          res = await axios.get(`https://harshdeepshoesapi.herokuapp.com/shoes/category/${category}`)
        }

        const data = res.data
        setShoesData(data);
      } catch (err) {
        console.log(err)
      }
    }

    useEffect(() => {
      if (isMobileFilterOpen) {
        document.body.style.overflow = "hidden"
      } else {
        document.body.style.overflow = "unset"
      }
    }, [isMobileFilterOpen])

  return (
    <main className='footwear-main'>
      <FootwearCategorySidebar isMobileFilterOpen={isMobileFilterOpen} setIsMobileFilterOpen={val => setIsMobileFilterOpen(val)} setShoesData={(val) => setShoesData(val)}  />
      {shoesData?.length === 0 && <p className='no-products'>No products found in this category</p>}
      <div className='footwear-container'>
        {shoesData?.map((item, index) => (
            <ShoeBox key={index} role='footwear' shoeItem={item} />
        ))}
    </div>
    <div className="mobile-toggle-filter" onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}>
            <button> FILTER </button>
            <BsFilter className='filter-icon' />
        </div>
    </main>
  )
}

export default Footwear