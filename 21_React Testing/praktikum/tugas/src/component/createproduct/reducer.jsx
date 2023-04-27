import { combineReducers } from "redux";
import productsReducer from "./productsReducer";



const reducer = combineReducers({
  productss: productsReducer,
});

export default reducer;