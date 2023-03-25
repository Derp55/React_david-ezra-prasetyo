import {configureStore} from "@reduxjs/toolkit";
import counterSlice from './Counterslice';

const Store = configureStore({
    reducer: counterSlice.reducer,
});

export default Store;