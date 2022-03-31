const mongoose = require("mongoose");
const cartSchema = new mongoose.Schema({
    id: Number,
    name: String,
    size: Number,
    cost: Number,
    quantity: Number,
    userEmail: String,
    imageURL: String
})

module.exports = mongoose.model("cart_item", cartSchema)
