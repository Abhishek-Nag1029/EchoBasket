import {createSlice} from "@reduxjs/toolkit";

const cartSlice =createSlice({
    name:"cart",
    initialState:{
        products:[],
        quantity:0,
        total:0,
    },
    reducers:{
        addProduct:(state,action)=>{
            state.quantity+=1;
            state.products.push(action.payload);
            state.total+=action.payload.price*action.payload.quantity;
        },
        removeProduct:(state,action)=>{
            state.quantity-=1;
            console.log("in redux")
            state.products=state.products.filter((item)=>item._id!==action.payload._id);
            state.total-=(action.payload.price*action.payload.quantity);
        }
    }
});

export const {addProduct,removeProduct}=cartSlice.actions
export default cartSlice.reducer;