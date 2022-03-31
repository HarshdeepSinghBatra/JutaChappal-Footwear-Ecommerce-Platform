require('dotenv').config()

const express = require('express')
const app = express()
const db = require('./config/db')
const port = process.env.PORT || 9000
const { addUser, loginUser } = require('./controllers/UserController')
const {
    checkUserExists,
    checkPassword,
} = require('./middleware/UserMiddleware')
const {
    getShoes,
    getShoesByBrand,
    getShoesByCategory,
    getShoesByFilter,
    getShoesBySlug,
} = require('./controllers/ProductController')
const {
    getCartItems,
    insertCartItem,
    deleteCartItem,
} = require('./controllers/CartController')

app.use(express.json())

const cors = require('cors')
app.use(cors())

// USER DATA

app.post('/api/signup', checkUserExists, addUser)

app.post('/api/login', checkUserExists, checkPassword, loginUser)

// SHOES DATA

app.get('/api/shoes', getShoes)

app.get('/api/shoes/category/:category', getShoesByCategory)

app.get('/api/shoes/filter', getShoesByFilter)

app.get('/api/shoes/:slug', getShoesBySlug)

app.get('/api/shoes/brand/:brandname', getShoesByBrand)

app.listen(port, () => {
    console.log(`Server is running at port ${port}`)
})

// CART DATA

app.get('/api/cart/:userEmail', getCartItems)

app.post('/api/cart/insertItem', insertCartItem)

app.delete('/api/cart/deleteItem/:id', deleteCartItem)
