const express = require('express');
const bodyparser = require('body-parser');
const cors = require ('cors');

//resources
const movies = require('./pkg/movies');

//initialize tools
const app = express();
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
app.use(cors());


//initialize resources
app.use(movies.moviesService)

app.listen(process.env.PORT || 8008, ()=>{
    console.log('server running............')
})