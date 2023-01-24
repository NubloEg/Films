import {combineReducers, legacy_createStore as createStore} from "redux";
import filmsReducer from "./filmsReducer";


let reduscers =combineReducers({
    films:filmsReducer

});


let store=createStore(reduscers);

window.store=store;
export default store;