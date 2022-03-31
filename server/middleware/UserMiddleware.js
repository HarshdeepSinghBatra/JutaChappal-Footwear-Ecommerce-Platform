const mongoose = require("mongoose")
const User = require('../models/User.db')
const bcrypt = require("bcrypt")

const checkUserExists = async (req, res, next) => {
    try {
        const { email } = req.body
        const isUser = await User.exists({email: email})

        if (isUser) req.userExists = 1
        next()
        return
    } catch (err) {
        console.log(err.message)
    }
}

const checkPassword = async (req, res, next) => {
    try {
        if (!req.userExists) {
            res.send({
                status: 0,
                message: "Account not found. Please register"
            })
            return
        } else {
            const { email, password } = req.body
            const user = await User.findOne({email: email})

            const db_password = user.password

            if (!await bcrypt.compare(password, db_password)) {
                res.send({
                    status: 0,
                    message: "Email and password do not match"
                })
                return
            }
            next()
            return
        }
    } catch (err) {
        console.log(err.message)
    } 
}   

module.exports = {
    checkUserExists,
    checkPassword
}