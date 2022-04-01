
const express = require('express')
const app = express()

const bodyParser = require('body-parser')
const cors = require('cors');

app.use(cors())
app.use(bodyParser.json())


const Route = require("../routes/index.route");
app.use(Route)

module.exports = app