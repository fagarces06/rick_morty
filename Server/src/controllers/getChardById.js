const axios = require('axios');
const {response}= require("express");
const URL="https://rickandmortyapi.com/api/character/";



function getChardById(req,res){
   
    const {id}= req.params //obtener el id por params
    console.log(URL+id);
    axios.get(URL+id).then((response)=>{
       // console.log("ingreso al axios",res.data);
        if(response.status===200){ // si fue correcto, es lo mismo que poner if(res.data)
            console.log("ingreso a getcharbydt")
       
            const {id,name,gender,species,origin,image,status}= response.data;
            res.json({id,name,gender,species,origin,image,status});
        } else{
            console.log("ingreso al error");
            res.status(404).send("Not found f")
        }
    }).catch((error)=> res.status(500).json({message: error.message}))
}


module.exports = getChardById;


















/* VERSION ANTES DE EXPRESS
const axios = require('axios');

function getChardById(res,id){
    axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response)=>{
        console.log(response.data); //la respuesta siempre viene en un body
        const{name, image,species,gender,status, id,origin}= response.data;
        console.log("name",data);
        debugger
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify({name, image,species,gender,status, id,origin}))
    }).catch((error)=>{
        res.writeHead(500,{'Content-Type':'text/plain'})
        res.end(error.message);
    })
}

module.exports= {getChardById}

*/