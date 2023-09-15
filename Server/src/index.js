

const express = require('express');
const router= require('./routers/index.js')
const server = express();
const PORT = 3001;


server.use((req, res, next) => {
   res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Allow-Credentials', 'true');
   res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
   );
   res.header(
      'Access-Control-Allow-Methods',
      'GET, POST, OPTIONS, PUT, DELETE'
   );
   next();
});
server.use(express.json());
server.use('/rickandmorty',router); // aqui le digo al servidor que use mis rutas
server.listen(PORT, () => {
   console.log('Server raised in port: ' + PORT);
});





//1.35 hr











/*
SERVIDOR ANTES DE LA CLASE DE EXPRESS


const { error } = require("console");
var fs = require("fs");
var http = require("http");
var characters = require('./utils/data.js')
const {getChardById} = require('./controllers/getChardById') // se hace destructuring porque se impo
/* ⚠️ NO MODIFICAR NADA POR ENCIMA DE ESTA LÍNEA ⚠️ */
/* AQUÍ DEBAJO PUEDES ESCRIBIR LA CONSTANTE DEL PUERTO */
/*
const PORT = 3001;
/*

 const server = http.createServer((req,res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*')
   //const url= req.url; es lo mismo que abajo
   const {url}=req;
   
   if(url.includes('/rickandmorty/character')){
    const id = url.split('/').pop();       // split vuelv lista el string y los elementos seria cada hasta donde aparesca /, luego con pop selecciona el ultimo elemento que es el numero en string
     const characterid= parseInt(id);
     const character= characters.find(i=> i.id===characterid);
     return getChardById(res,id); //en vez de poner if entonces return en caso de cumplirse, en caso contrario continua y ejecuta los errores de abajo
     /* Se cambia lo de la homework anterior
     res.writeHead(200,{'Content-Type': 'application/json'});
  
     if(character){
        return res.end(JSON.stringify(character));

     }else{
        return res.end(JSON.stringify({"error":"Character not found"}));
     }
     */
    /*
   }

    



    res.writeHead(404,{'Content-Type':'aplication/json'});
    res.end(JSON.stringify({"error":"not found"})); // Siempre hay que darle finalizaar al server para que no se quede escuchandoo...
  })
  /*
  server.listen(PORT,()=>{ console.log(`Server raised in port ${PORT}`)}); */