import { createStore } from "redux";
import ReducerFavorites from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import { applyMiddleware } from "redux";
import { compose } from "redux";

const composeEnhancers =
   (typeof window !== 'undefined' &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
   compose;

const store = createStore(
   ReducerFavorites,
   composeEnhancers(applyMiddleware(thunk)),
);

export default store;
