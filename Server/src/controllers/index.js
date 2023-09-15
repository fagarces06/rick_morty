
const login = require("./login")
const getCharById = require("./getChardById");

const {postFav,deleteFav} = require('./handleFavorites')
/* 
 console.log("valor de login en controlers",login);
 console.log("valor de getcharbyide en controlers",getCharById);
 console.log("valor de deleteFav en controlers",deleteFav);
 console.log("valor de postFav en controlers",postFav);
 */
 
module.export ={
    login,
    getCharById,
    postFav,
    deleteFav
}