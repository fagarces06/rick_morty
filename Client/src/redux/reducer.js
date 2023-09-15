/* 4️⃣ ***REDUCER*** 4️⃣ */

/* Importa las action-types aquí. */

import { act } from "react-dom/test-utils";
import { ADD_FAV, REMOVE_FAV } from "./actions";

const initialState = {
  myFavorites: [],
};

const ReducerFavorites = (state = initialState, action) => {
 // console.log("entro al reducerfff",action.type);
 // console.log("entro al reducir y el varlo del estate es:",state);
  
  switch (action.type) {
    case ADD_FAV:{
      console.log("valor del payloadfff", action.payload);
       
      const newlist=[...state.myFavorites,action.payload.myFavorites];
      console.log("lista con el objeto myfavortires interna",newlist)
      const newlist_outduplicate= [...new Set(newlist)]  //quitar elementos duplicados por un error de rendirizacion doble con el redux
      console.log("valor de la nueva lista",state.myFavorites.length);
      return { ...state, myFavorites: newlist_outduplicate  };
      //return { ...state, myFavorites: action.payload, allCharacters: payload }; hay que revisar si hacemos el reducr para allcharacters
      /*
      return{
        ...state,
        myFavorites: newlist_outduplicate
       // myFavorites: [...state.myFavorites,action.payload]
    };
    */
  }
       
        //2. hr
      

        
    case REMOVE_FAV:{
  //    console.log("accion del reducer TIPO en REMOVE_fAV", typeof action.payload);
      const myFavoritesList_state = state.myFavorites;
      
      const new_favoriteslist = myFavoritesList_state.filter(
        (i) => i.id !== action.payload
      );
      //git
      //const newlist_Reducer=[]
      //newlist_Reducer.push(new_favoriteslist);
        return { ...state, myFavorites: action.payload };
      /*
      return {
        ...state,
        myFavorites: new_favoriteslist,
      };
      */
    }
    default:
      //console.log("entro al default del reducer");
      return state;



  }
};

export default ReducerFavorites;
