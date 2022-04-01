const express = require("express")

const Router =  express.Router();

const zing = require("../../controllers/zing.controller");

// get song
Router.get('/song', zing.getSong)

// search
Router.get('/search', zing.search)

// get100
Router.get("/top100", zing.getTop100)


module.exports = Router