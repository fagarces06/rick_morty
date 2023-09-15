let myFavorites=[];
function postFav(req,res){
    
    console.log("ingreso a postfav",req.body);
    const character= req.body; //no hay necesidad de hacer destruting porque lo trae normal el character
    console.log("este es el character guaradado",character);
    myFavorites.push(character);
    res.json({myFavorites})
}

function deleteFav(req,res){
    console.log("ingreso s deletefav");
    const {id} = req.params;
    console.log("valro de id",id);
    const characterid=parseInt(id);
    myFavorites= myFavorites.filter(i=> i.id!==characterid);
    res.json(myFavorites);
}

module.exports={
    postFav,
    deleteFav
}

//1.53 hr