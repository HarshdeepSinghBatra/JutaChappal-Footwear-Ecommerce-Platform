const mongoose = require("mongoose")
const User = require('../models/User')

const addUser = async () => {
    try {
        const user = await User.create({
            name: 'Kyle',
            email: 'test',
            password: 'test1',
            mobile: 54156,
        })
        console.log(user)
    } catch (err) {
        console.log(err.message)
    }
}

module.exports = {
    addUser,
}
