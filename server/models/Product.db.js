const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
    name: String,
    slug: String,
    date: Number,
    brand: String,
    gender: String,
    category: String,
    cost: Number,
    sales: Number,
    status: Number,
    "size": [Number],
    details: String,
    images: [String]    
})

module.exports = mongoose.model("products", productSchema)
