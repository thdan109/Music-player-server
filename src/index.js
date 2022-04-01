const express = require('express')
const app = express()
const port = process.env.PORT || 8888

require('dotenv').config()

const server = require('./config/server')
app.use(server)

app.listen(port, () =>{
  console.log(`Server had started at port ${port}`)
})