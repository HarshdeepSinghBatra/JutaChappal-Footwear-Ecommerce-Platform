const mongoose = require("mongoose")
const User = require('../models/User')

const checkUserExists = async () => {
    try {
        const isUser = await User.exists({name: "Kyle"});
        console.log(isUser)
    } catch (err) {
        console.log(err.message)
    }
}

module.exports = {
    checkUserExists
}