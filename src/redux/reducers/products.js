import axios from 'axios'

const GET_PRODUCTS = 'GET_PRODUCTS'
const GET_PRODUCTS_FULFILLED = 'GET_PRODUCTS_FULFILLED'

const VIEW_PRODUCT='VIEW_PRODUCT'
const VIEW_PRODUCT_FULFILLED='VIEW_PRODUCT_FULFILLED'

const DELETE_PRODUCT='DELETE_PRODUCT'
const DELETE_PRODUCT_FULFILLED='DELETE_PRODUCT_FULFILLED'

const EDIT_PRODUCT='EDIT_PRODUCT'
const EDIT_PRODUCT_FULFILLED='EDIT_PRODUCT_FULFILLED'

const ADD_PRODUCT='ADD_PRODUCT'
const ADD_PRODUCT_FULFILLED='ADD_PRODUCT_FULFILLED'

const initialState ={
    data: [],
    selected: null
}





export default function (state = initialState, action){
    switch(action.type){
        case GET_PRODUCTS_FULFILLED:
            return {...state, data: action.payload.data}

        case VIEW_PRODUCT_FULFILLED:
            return {...state, selected: action.payload.data}

        case DELETE_PRODUCT_FULFILLED:
            return {...state, data: action.payload.data}
        
        case EDIT_PRODUCT_FULFILLED:
            return {...state, data: action.payload.data}

        case ADD_PRODUCT_FULFILLED:
            return {...state, data: action.payload.data}

        default:
            return state
    }
}

export function getProducts(){
    return{
        type: GET_PRODUCTS,
        payload: axios.get('/api/products')
}}

export function  viewProduct(product_id){
    return{
        type: VIEW_PRODUCT,
        payload: axios.get(`/api/product/${product_id}`)
    }
}

export function deleteProduct(product_id){
    return{
        type: DELETE_PRODUCT,
        payload: axios.delete(`/api/product/${product_id}`)
    }
}

export function editProduct(product_id, info){
    return{
        type: EDIT_PRODUCT,
        payload: axios.put(`/api/product/${product_id}`, info)
    }
}
export function addProduct(info){
    return{
        type: ADD_PRODUCT,
        payload: axios.post('/api/product', info)
    }
}