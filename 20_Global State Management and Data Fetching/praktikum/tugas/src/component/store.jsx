import {configureStore} from "@reduxjs/toolkit";
import {persistReducer, persistStore} from "redux-persist";
import storage from "redux-persist/Lib/storage";
import counterSlice from './Counterslice';
import reducer from "./reducer";

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, reducer);

const Store = configureStore({
    reducer: persistedReducer,
});

export const persiststore = persistStore(store);

export default Store;