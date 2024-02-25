import axios from "axios";
import { useState } from "react";
//import { useDispatch } from 'react-redux';
export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";

// ACTION | addFav
export const addFav = (character) => {
  console.log("este es el character seleccionado", character);
  const endpoint = "http://localhost:3001/rickandmorty/fav";
  return (dispatch) => {
    axios.post(endpoint, character).then(({ data }) => {
      console.log("esta es la data addfavd", data);
      return dispatch({
        type: ADD_FAV,
        payload: data,
      });
    });
  };
};

/*
export const addFav =(character)=>{
    console.log("valor characte en el archivo action.js",character)
    
    return {
        type: ADD_FAV,
        payload: character
    }
    

;}
  
*/
export const removeFav = (id) => {
  const endpoint = "http://localhost:3001/rickandmorty/fav/" + id;
  return (dispatch) => {
    axios.delete(endpoint).then(({ data }) => {
      return dispatch({
        type: "REMOVE_FAV",
        payload: data,
      });
    });
  };
};
/*
export const removeFav =(id)=>{
   console.log("archivo action.js",id)
    
    return {
        type: REMOVE_FAV,
        payload: id
    }
    

;}
*/
