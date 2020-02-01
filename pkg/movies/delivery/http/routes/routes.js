const handlers = require('../handlers/handler')
const express = require('express');
const api = express.Router();

const moviesDelivery = (usecase) => {
    const handler = new handlers(usecase);
    api.get('/v1/movies', (req, res)=>{
        handler.getMovies(req,res)
    })
    //sortBy= budget||revenue || runtime & type = asc: ascending || dsc : descending
    api.get('/v1/movies/sort',(req, res)=>{
        handler.getSortedMovies(req,res)
    })
}

module.exports = {
    moviesDelivery,
    api
}