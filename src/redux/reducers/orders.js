import axios from 'axios'

const GET_ORDERS='GET_ORDERS'
const GET_ORDERS_FULFILLED='GET_ORDERS_FULFILLED'

const GET_ALL_ORDERS='GET_ALL_ORDERS'
const GET_ALL_ORDERS_FULFILLED='GET_ALL_ORDERS_FULFILLED'


const initialState = {
    data : []
}

export default function (state = initialState, action) {
    switch(action.type) {
        case GET_ORDERS_FULFILLED:
            return {...state, data: action.payload.data}
        case GET_ALL_ORDERS_FULFILLED:
            return {...state, data: action.payload.data}
        default:
            return state
    }
}

export function getOrders(){
    return{
        type: GET_ORDERS,
        payload: axios.get('/orders')
    }
}

export function getAllOrders(){
    return{
        type: GET_ALL_ORDERS,
        payload: axios.get('/allorders')
        
    }
}