const users = require("../utils/users.js");


function login(req,res){
    const {email,password}= req.query;
    console.log("valor del query",req.query);
    
    console.log("valor del email:",email);
    console.log("valor del password",password);
    
    
    //const user= users.find(user=> user.email=== email && user.password===password);
    const user=users.some(user=> user.email=== email && user.password===password);
    console.log("valor de users lista",users)
    console.log("valor de user",user);
    if(user){
        console.log("ingreso a true",res);
        res.status(200).json({acces:true})

    }else{
        console.log("ingreso al false");
        res.json({acces:false})
    }

}

module.exports= login;