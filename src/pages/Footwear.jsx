import React, { useEffect, useState } from 'react'
import FootwearCategorySidebar from '../components/FootwearCategorySidebar'
import ShoeBox from '../components/ShoeBox'
import { BsFilter } from 'react-icons/bs'

const Footwear = () => {

    const data = [1,2,3,4,5,6,7,8,9,0,1,2,1,2,3,4,5,6,7,8,9,0,1,2]
    const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false)

    useEffect(() => {
      if (isMobileFilterOpen) {
        document.body.style.overflow = "hidden"
      } else {
        document.body.style.overflow = "unset"
      }


    }, [isMobileFilterOpen])

  return (
    <main className='footwear-main'>
 
      <FootwearCategorySidebar isMobileFilterOpen={isMobileFilterOpen} setIsMobileFilterOpen={val => setIsMobileFilterOpen(val)} />
    <div className='footwear-container'>
        {data.map((item, index) => (
            <ShoeBox key={index} role='footwear' />
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