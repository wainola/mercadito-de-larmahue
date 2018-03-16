import axios from 'axios';

export const FETCH_DATA = 'FETCH_DATA';
export const ADD_TO_CART = 'ADD_TO_CART';

export function fetchProductos(){
    const url = `http://localhost:3000/data/data_productos.json`;
    const request = axios.get(url);
    return{
        type: FETCH_DATA,
        payload: request
    }
}

export function addToCart(){
    
}