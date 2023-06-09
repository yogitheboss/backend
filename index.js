const express = require("express")
const path = require('path');

const cors = require("cors")
const app = express()
app.use(express.json())
require('dotenv').config()
app.use(cors())

app.use(express.static(path.resolve(__dirname, '/public')));

app.listen(4000, () => {
    console.log("Server is running on port 4000")
})