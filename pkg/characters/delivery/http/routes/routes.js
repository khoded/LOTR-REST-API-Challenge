const handlers = require('../handlers/handler')
const express = require('express');
const api = express.Router();

const characterDelivery = (usecase) => {
    const handler = new handlers(usecase);
    api.get('/v1/character', (req, res)=>{
        handler.getCharacters(req,res)
    })
    //sortBy= race||gender  & order = asc: ascending || dsc : descending
    api.get('/v1/character/sort',(req, res)=>{
        handler.getSortedCharacters(req,res)
    })
}

module.exports = {
    characterDelivery,
    api
}