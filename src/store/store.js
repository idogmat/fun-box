import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk';
import feedReducer from "./feedReducer";

let reducers = combineReducers({
    feedReducer: feedReducer

});
let store =createStore(reducers,applyMiddleware(thunkMiddleware));

window.store=store;

export default store;
