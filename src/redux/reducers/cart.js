import axios from 'axios'

const GET_CART='GET_CART'
const GET_CART_FULFILLED='GET_CART_FULFILLED'

const ADD_TO_CART='ADD_TO_CART'
const ADD_TO_CART_FULFILLED='ADD_TO_CART_FULFILLED'

const DELETE_FROM_CART='DELETE_FROM_CART'
const DELETE_FROM_CART_FULFILLED='DELETE_FROM_CART_FULFILLED'

const initialState = {
    data : []
}

export default function (state = initialState, action) {
    switch(action.type) {
        case GET_CART_FULFILLED:
            return {...state, data: action.payload.data}

        case ADD_TO_CART_FULFILLED:
            return {...state, data: action.payload.data}
        
        case DELETE_FROM_CART_FULFILLED:
            return {...state, data: action.payload.data}

        default:
            return state
    }
}

export function getCart(){
    return{
        type: GET_CART,
        payload: axios.get('/cart')
    }
}

export function deleteFromCart(product_id){
    return{
        type: DELETE_FROM_CART,
        payload: axios.delete(`/cart/${product_id}`)
    }
}

export function addToCart(info){
    return{
        type: ADD_TO_CART,
        payload: axios.post('/cart/product', info)
    }
}
