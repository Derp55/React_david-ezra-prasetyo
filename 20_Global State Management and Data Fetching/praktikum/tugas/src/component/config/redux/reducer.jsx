import { combineReducers } from "redux";
import productsReducer from "./product/productsreducer";



const reducer = combineReducers({
  productss: productsReducer,
});

export default reducer;