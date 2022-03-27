const model = require("../models/Product.db")
const shoedata = require("../data.json")
const insertProducts = async () => {
    try {
        const data = await model.insertMany(shoedata)
        if (data) { 
            console.log("yes")
            // res.send("ho gya")
        } else {
            console.log("nhi hua")
        }
    } catch (err) {
        console.log(err)
    }
}

module.exports = {
    insertProducts
}