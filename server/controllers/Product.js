// const shoesData = require("../data.json")

const productModel = require('../models/Product.db')

const getShoes = async (req, res) => {
    try {
        const shoesData = await productModel.find()
        res.send(shoesData)
    } catch (err) {
        console.log(err)
    }
}

const getShoesByCategory = async (req, res) => {
    try {
        const shoesData = await productModel.find()

        const { category } = req.params
        const genderList = ['Men', 'Women']
        let list
        if (genderList.includes(category)) {
            list = shoesData.filter(shoeItem => shoeItem.gender === category)
        } else if (category === 'Best') {
            list = shoesData.sort(
                (shoeItem1, shoeItem2) => shoeItem2.sales - shoeItem1.sales
            )
        } else if (category === 'Latest') {
            list = shoesData.sort(
                (shoeItem1, shoeItem2) => shoeItem2.date - shoeItem1.date
            )
        } else {
            list = shoesData.filter(shoeItem => shoeItem.category === category)
        }

        res.send(list)
    } catch (err) {
        console.log(err)
    }
}

const getShoesByFilter = async (req, res) => {
    try {
        const shoesData = await productModel.find()

        const { filters } = req.query
        const genderArr = ['Men', 'Women']
        const brandArr = ['Sparx', 'Lancer', 'Bata', 'Fausto']
        const categoryArr = [
            'Casual',
            'Formal',
            'Slippers',
            'Sports',
            'Sandals',
            'Boots',
        ]

        const filtersObj = {
            brand: [],
            gender: [],
            category: [],
            price: [],
        }

        JSON.parse(filters).forEach(item => {
            if (brandArr.includes(item)) filtersObj.brand.push(item)
            else if (genderArr.includes(item)) filtersObj.gender.push(item)
            else if (categoryArr.includes(item)) filtersObj.category.push(item)
            else filtersObj.price.push(item)
        })

        // Filter brand
        let list = []
        if (filtersObj.brand.length > 0) {
            filtersObj.brand.forEach(brandname => {
                list = [
                    ...list,
                    ...shoesData.filter(
                        shoeItem => shoeItem.brand === brandname
                    ),
                ]
            })
        } else {
            list = [...shoesData]
        }

        // Filter gender

        let list2 = []
        if (filtersObj.gender.length > 0) {
            filtersObj.gender.forEach(gendername => {
                list2 = [
                    ...list2,
                    ...list.filter(shoeItem => shoeItem.gender === gendername),
                ]
            })
        } else {
            list2 = [...list]
        }

        // Filter category

        let list3 = []
        if (filtersObj.category.length > 0) {
            filtersObj.category.forEach(categoryName => {
                list3 = [
                    ...list3,
                    ...list2.filter(
                        shoeItem => shoeItem.category === categoryName
                    ),
                ]
            })
        } else {
            list3 = [...list2]
        }

        // Filter price

        let list4 = []
        const priceLookup = {
            'Rs. 2000 - Rs. 2999': [2000, 2999],
            'Rs. 1000 - Rs. 1999': [1000, 2000],
            'Rs. 500 - Rs. 999': [500, 999],
            'Below Rs. 499': [0, 499],
        }
        if (filtersObj.price.length > 0) {
            filtersObj.price.forEach(cost => {
                list4 = [
                    ...list4,
                    ...list3.filter(
                        shoeItem =>
                            shoeItem.cost >= priceLookup[cost][0] &&
                            shoeItem.cost < priceLookup[cost][1]
                    ),
                ]
            })
        } else {
            list4 = [...list3]
        }

        const finalList = [
            ...new Map(list4.map(item => [item.slug, item])).values(),
        ]
        res.send(finalList)
    } catch (err) {
        console.log(err)
    }
}

const getShoesBySlug = async (req, res) => {
    try {
        const shoesData = await productModel.find()
        const { slug } = req.params
        const list = shoesData.filter(shoeItem => shoeItem.slug === slug)
        res.send(list[0])
    } catch (err) {
        console.log(err)
    }
}

const getShoesByBrand = async (req, res) => {
    try {
        const shoesData = await productModel.find()
        const { brandname } = req.params
        const list = shoesData.filter(shoeItem => shoeItem.brand === brandname)
        res.send(list)
    } catch (err) {
        console.log(err)
    }
}

module.exports = {
    getShoes,
    getShoesByBrand,
    getShoesByCategory,
    getShoesByFilter,
    getShoesBySlug,
}
