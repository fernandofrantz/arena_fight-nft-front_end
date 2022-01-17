import { createStore, combineReducers, applyMiddleware } from "redux";
import { productReducer } from "./modules/ProductList/reducer";
import thunk from "redux-thunk";

const reducers = combineReducers({
    product: productReducer, 
});

export const store = createStore(reducers, applyMiddleware(thunk));