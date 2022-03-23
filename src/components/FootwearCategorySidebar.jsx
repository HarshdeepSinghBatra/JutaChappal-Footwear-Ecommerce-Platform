import React, { useState } from 'react'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import { useForm } from 'react-hook-form'

const FootwearCategorySidebar = ({ isMobileFilterOpen, setIsMobileFilterOpen }) => {
    const [footwearCategoryOpen, setFootwearCategoryOpen] = useState([false, false, false])

    const { register, handleSubmit } = useForm()
  
    const handleCategoryListToggle = index => {
        setFootwearCategoryOpen(prev => prev.map((item, arrIndex) => arrIndex === index ? !item : false))
    }

    const [categoryFilter, setCategoryFilter] = useState('{"gender":false,"brand":false,"price":false}')

    const CATEGORY_LIST = [
        {
            heading: "GENDER",
            inputName: "gender",
            list: [
                {
                    text: "Male",
                    value: "male"
                },
                {
                    text: "Female",
                    value: "female"
                }
            ]
        },
        {
            heading: "BRAND",
            inputName: "brand",
            list: [
                {
                    text: "Bata",
                    value: "bata"
                },
                {
                    text: "Fausto",
                    value: "fausto"
                },
                {
                    text: "Lancer",
                    value: "lancer"
                },
                {
                    text: "Sparx",
                    value: "sparx"
                },
            ]
        },
        {
            heading: "PRICE",
            inputName: "price",
            list: [
                {
                    text: "Below Rs. 499",
                    value: "499"
                },
                {
                    text: "Rs. 500 - Rs. 999",
                    value: "500"
                },
                {
                    text: "Rs. 1000 - Rs. 1999",
                    value: "1000"
                },
                {
                    text: "Rs. 2000 - Rs. 2999",
                    value: "2000"
                },
            ]
        },
    ]

    const onSubmit = data => {
        if (JSON.stringify(data) === categoryFilter) {
            console.log("already same")
            setIsMobileFilterOpen(false)

            return
        }
        console.log(data)
        setCategoryFilter(JSON.stringify(data))
        setIsMobileFilterOpen(false)
    }

    return (
    <aside className={`footwear-sidebar ${isMobileFilterOpen ? "filter-open" : ""}`}>
        <form onSubmit={handleSubmit(onSubmit)}>
        <span>FILTER <button type='submit'>Save</button> </span>
            {CATEGORY_LIST.map((category, index) => (
                <div className="footwear-category" key={index}>
                    <h2 onClick={() => handleCategoryListToggle(index)}> {category.heading} <span> {footwearCategoryOpen[index] ? <AiOutlineMinus className='footwear-h2-icon' /> : <AiOutlinePlus className='footwear-h2-icon' /> } </span> </h2>
                    <ul className={footwearCategoryOpen[index] ? "category-list-open" : ""}>
                        {category.list.map((listItem, index2) => (
                            <li key={index2}>
                                <input type="checkbox" name={category.inputName} id={`${category.inputName}-${listItem.value}`} value={listItem.value} {...register(category.inputName)} />
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