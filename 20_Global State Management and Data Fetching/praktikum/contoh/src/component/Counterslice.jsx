import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
name: "Counter",
initialState: {
    angka:100,
},
reducers: {
increment: (state) => {
    return {
        ...state,
        angka: state.angka +1,
    };

},
decrement: (state) => {
    return {
        ...state,
        angka:state.angka -1,
    };
},

reset: (state) => {
    return {
        ...state,
        angka: 100,
    };
},

},

});

const {actions: counterAction, reducer: counterReducer} = counterSlice;

export {counterReducer, counterAction};

export default counterSlice;