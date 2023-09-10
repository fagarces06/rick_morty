/* 4️⃣ ***REDUCER*** 4️⃣ */

/* Importa las action-types aquí. */
import { ADD_FAV, REMOVE_FAV } from "./actions";

const initialState = {
  myFavorites: [],
};

const ReducerFavorites = (state = initialState, action) => {
  console.log("entro al reducer");
  console.log("accion del reducer", action.type);
  switch (action.type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: [...state.myFavorites, action.payload],
      };

    case REMOVE_FAV:
      const myFavoritesList_state = state.celulares;
      const new_favoriteslist = myFavoritesList_state.filter(
        (i) => i.id !== action.payload
      );
      return {
        ...state,
        myFavorites: new_favoriteslist,
      };

    default:
      //console.log("entro al default del reducer");
      return state;
  }
};

export default ReducerFavorites;
