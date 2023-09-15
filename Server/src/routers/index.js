const express= require("express");
//const getCharById = require("../controllers/getChardById");
const login = require("../controllers/login")
const getCharById = require("../controllers/getChardById");

const {postFav,deleteFav} = require('../controllers/handleFavorites')

console.log("esto es posfav",postFav)


const router = express.Router();
router.get("/character/:id",getCharById);
router.get("/login",login);
router.post("/fav",postFav);
router.delete("/fav/:id",deleteFav);

module.exports= router;
   