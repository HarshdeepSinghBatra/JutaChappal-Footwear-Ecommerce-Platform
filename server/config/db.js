const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://"+process.env.DB_USERNAME+":"+process.env.DB_PASSWORD+"@cluster0.zqjxe.mongodb.net/"+process.env.DB_DATABASE+"?retryWrites=true&w=majority", () => {
    console.log("Connected to DB")
})


