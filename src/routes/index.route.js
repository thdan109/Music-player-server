const express = require("express")
const app = express()

const ZingRoute = require("./api/zing.route")
app.use('/music', ZingRoute)

module.exports = app