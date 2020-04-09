const express = require('express');
const router = express.Router();
const axios = require('axios');

const init = async() => {
    try{
        const dataex = await axios.get('http://prpi.ifce.edu.br/nl/acoescovidws');
        console.log(JSON.stringify(dataex.data))
    }catch(err){
        console.log(err)
    }
}

init()
    //.then(dataex => console.log(dataex))

module.exports = axios

//https://attacomsian.com/blog/http-requests-axios