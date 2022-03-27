import React, { useEffect, useState } from 'react'
import { AiOutlinePlus, AiOutlineMinus, AiOutlineClose } from 'react-icons/ai'
import { useForm } from 'react-hook-form'
import axios from 'axios'

const FootwearCategorySidebar = ({ isMobileFilterOpen, setIsMobileFilterOpen, setShoesData }) => {
    const [initialFlag, setInitialFlag] = useState(0)
    const [footwearCategoryOpen, setFootwearCategoryOpen] = useState([false, false, false])

    const [activeFilter, setActiveFilter] = useState([])
    const { register, handleSubmit, reset } = useForm()
    

    const handleCategoryListToggle = index => {
        setFootwearCategoryOpen(prev => prev.map((item, arrIndex) => arrIndex === index ? !item : item))
    }

    const CATEGORY_LIST = [
        {
            heading: "GENDER",
            inputName: "gender",
            list: ["Men", "Women"]
        },
        {
            heading: "BRAND",
            inputName: "brand",
            list: ["Bata", "Fausto", "Lancer", "Sparx"]
        },
        {
            heading: "CATEGORY",
            inputName: "category",
            list: ["Casual", "Formal", "Slippers", "Sports", "Sandals", "Boots"]
        },
        {
            heading: "PRICE",
            inputName: "price",
            list: ["Below Rs. 499", "Rs. 500 - Rs. 999", "Rs. 1000 - Rs. 1999", "Rs. 2000 - Rs. 2999",]
        },
    ]

    const getDataByFilter = async (filters) => {
        const res = await axios.get('/api/shoes/filter', {
            params: {filters: JSON.stringify(filters)}
        })
        const data = res.data
        setShoesData(data)
    }

    useEffect(() => {
        if (initialFlag === 0) {
            setInitialFlag(prev => prev + 1)
        } else {
            if (activeFilter.length === 0) reset()
            getDataByFilter(activeFilter)
        }
    }, [activeFilter])

    const setActiveFilterList = data => {
        let activeFiltersList = []
        Object.values(data).forEach(d => {
            if (d) activeFiltersList = [...activeFiltersList, ...d]
        })
        if (activeFilter.join(",") === activeFiltersList.join(",")) {
            return
        }
        setActiveFilter(prev => [...new Set([...prev, ...activeFiltersList])])
    }

    const onSubmit = data => {
        setActiveFilterList(data)
        setIsMobileFilterOpen(false)
        reset()
    }

    return (
    <aside className={`footwear-sidebar ${isMobileFilterOpen ? "filter-open" : ""}`}>
        <form onSubmit={handleSubmit(onSubmit)}>
        <span>FILTER <button type='submit'>Save</button> </span>
        {activeFilter.length > 0 && (
            <ul className='active-filter-list'>
                <button className='filter-clear' onClick={() => setActiveFilter([])}>Clear All</button>
                {activeFilter.map((item, index) => (
                    <li key={index}><span className="active-filter">{item}<AiOutlineClose className='active-filter-icon' onClick={() => setActiveFilter(prev => prev.filter(filterItem => filterItem !== item))} /> </span></li>
                ))}
            </ul>
        )}
        
            {CATEGORY_LIST.map((category, index) => (
                <div className="footwear-category" key={index}>
                    <h2 onClick={() => handleCategoryListToggle(index)}> {category.heading} <span> {footwearCategoryOpen[index] ? <AiOutlineMinus className='footwear-h2-icon' /> : <AiOutlinePlus className='footwear-h2-icon' /> } </span> </h2>
                    <ul className={footwearCategoryOpen[index] ? "category-list-open" : ""}>
                        {category.list.map((listItem, index2) => (
                            <li key={index2}>
                                <input type="checkbox" name={category.inputName} id={`${category.inputName}-${listItem}`} value={listItem} {...register(category.inputName)} disabled={activeFilter.includes(listItem)} />
                                <label htmlFor={`${category.inputName}-${listItem}`}>{listItem}</label>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </form>
       
    </aside>
  )
}

export default FootwearCategorySidebar