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
            list: [
                {
                    text: "Men",
                    value: "Men"
                },
                {
                    text: "Women",
                    value: "Women"
                }
            ]
        },
        {
            heading: "BRAND",
            inputName: "brand",
            list: [
                {
                    text: "Bata",
                    value: "Bata"
                },
                {
                    text: "Fausto",
                    value: "Fausto"
                },
                {
                    text: "Lancer",
                    value: "Lancer"
                },
                {
                    text: "Sparx",
                    value: "Sparx"
                },
            ]
        },
        {
            heading: "PRICE",
            inputName: "price",
            list: [
                {
                    text: "Below Rs. 499",
                    value: "Below Rs. 499"
                },
                {
                    text: "Rs. 500 - Rs. 999",
                    value: "Rs. 500 - Rs. 999"
                },
                {
                    text: "Rs. 1000 - Rs. 1999",
                    value: "Rs. 1000 - Rs. 1999"
                },
                {
                    text: "Rs. 2000 - Rs. 2999",
                    value: "Rs. 2000 - Rs. 2999"
                },
            ]
        },
    ]

    const getDataByFilter = async (filters) => {
        const res = await axios.get('https://harshdeepshoesapi.herokuapp.com/shoes/filter', {
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
        console.log(data)
        setActiveFilterList(data)
        setIsMobileFilterOpen(false)
        reset()
    }

    const removeFilter = (item) => {
        setActiveFilter(prev => prev.filter(filterItem => filterItem !== item))
        document.querySelectorAll("input[type=checkbox]").forEach(input => {
            if (input.value === item) {
                console.log(input)
            }
        })
    }

    return (
    <aside className={`footwear-sidebar ${isMobileFilterOpen ? "filter-open" : ""}`}>
        <form onSubmit={handleSubmit(onSubmit)}>
        <span>FILTER <button type='submit'>Save</button> </span>
        {activeFilter.length > 0 && (
            <ul className='active-filter-list'>
                <button className='filter-clear' onClick={() => setActiveFilter([])}>Clear All</button>
                {activeFilter.map((item, index) => (
                    <li key={index}><span className="active-filter">{item}<AiOutlineClose className='active-filter-icon' onClick={() => removeFilter(item)} /> </span></li>
                ))}
            </ul>
        )}
        
            {CATEGORY_LIST.map((category, index) => (
                <div className="footwear-category" key={index}>
                    <h2 onClick={() => handleCategoryListToggle(index)}> {category.heading} <span> {footwearCategoryOpen[index] ? <AiOutlineMinus className='footwear-h2-icon' /> : <AiOutlinePlus className='footwear-h2-icon' /> } </span> </h2>
                    <ul className={footwearCategoryOpen[index] ? "category-list-open" : ""}>
                        {category.list.map((listItem, index2) => (
                            <li key={index2}>
                                <input type="checkbox" name={category.inputName} id={`${category.inputName}-${listItem.value}`} value={listItem.value} {...register(category.inputName)} disabled={activeFilter.includes(listItem.value)} />
                                <label htmlFor={`${category.inputName}-${listItem.value}`}>{listItem.text}</label>
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