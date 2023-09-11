
import axios from 'axios';
import { useState } from 'react';
//import { useDispatch } from 'react-redux';
export const ADD_FAV='ADD_FAV';
export const REMOVE_FAV= 'REMOVE_FAV';


export const addFav =(character)=>{
    console.log("valor characte en el archivo action.js",character)
    
    return {
        type: ADD_FAV,
        payload: character
    }
    

;}
  

export const removeFav =(id)=>{
   console.log("archivo action.js",id)
    
    return {
        type: REMOVE_FAV,
        payload: id
    }
    

;}


