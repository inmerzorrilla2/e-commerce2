import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
const urlBase = 'https://fakestoreapi.com';

const products =createSlice({
    name: 'products',
    initialState: null,
    reducers: {
        setProducts: (_state, action) => action.payload,
    }
})

export const { setProducts } = products.actions;
export default products.reducer;

// Thunk

export const getProductsThunk = () => (dispatch) => {
    const url = `${urlBase}/products`
        axios.get(url)
            .then(response => {
                dispatch(setProducts(response.data))
            })
            .catch(error => {
                console.log(error)
            })


}