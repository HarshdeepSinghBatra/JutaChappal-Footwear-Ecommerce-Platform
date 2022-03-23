require("dotenv").config();

const express = require('express');
const app = express()
const db = require("./config/db")
const { addUser } = require("./controllers/UserController")
const { checkUserExists } = require("./middleware/UserMiddleware")

app.use(express.json());

const cors = require("cors");
app.use(cors());

// addUser()
checkUserExists()

app.listen(9000, () => {
    console.log("Server is running at port 9000")
})