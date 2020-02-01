const handlers = require('../handlers/handler')
const express = require('express');
const api = express.Router();

const moviesDelivery = (usecase) => {
    const handler = new handlers(usecase);
    api.get('/movies', (req, res)=>{
        handler.getMovies(req,res)
    })
}

module.exports = {
    moviesDelivery,
    api
}