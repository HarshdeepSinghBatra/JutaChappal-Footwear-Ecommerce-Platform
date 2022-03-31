const cartModel = require("../models/Cart.db")

const insertCartItem = async (req, res) => {
    try {

        const { itemId, itemName, itemSize, itemCost, itemQuantity, userEmail, imageURL } = req.body
        const item = await new cartModel({id: itemId, name: itemName, size: itemSize, cost: itemCost, quantity: itemQuantity, userEmail: userEmail, imageURL: imageURL})
        item.save()
        res.send(item._id)
    } catch (err) {
        console.log(err)
    }
}

const getCartItems = async (req, res) => {
    try {
        const { userEmail } = req.params
        const items = await cartModel.find({userEmail: userEmail})
        res.send(items)
    } catch (err) {
        console.log(err)
    }
}

const deleteCartItem = async (req, res) => {
    try {
        const { id } = req.params
        const response = await cartModel.deleteOne({id: id})
        res.send(response)
    } catch (err) {
        console.log(err)
    }
}

module.exports = {
    getCartItems,
    insertCartItem,
    deleteCartItem
}