import axios from 'axios'

const GET_USER = 'GET_USER'
const GET_USER_FULFILLED = 'GET_USER_FULFILLED'

const REGISTER_USER = 'REGISTER_USER'
const REGISTER_USER_FULFILLED = 'REGISTER_USER_FULFILLED'

const LOGIN_USER = 'LOGIN_USER'
const LOGIN_USER_FULFILLED = 'LOGIN_USER_FULFILLED'

const LOGOUT_USER = 'LOGOUT_USER'
const LOGOUT_USER_FULFILLED = 'LOGOUT_USER_FULFILLED'

const initialState = {
    data: null
}

export default function (state = initialState, action) {
    switch(action.type) {
        case GET_USER_FULFILLED:
            return {...state, data: action.payload}

        case REGISTER_USER_FULFILLED:
            return {...state, data: action.payload}
        
        case LOGIN_USER_FULFILLED:
            return {...state, data: action.payload}
        
        case LOGOUT_USER_FULFILLED:
            return {...state, data: action.payload}

        default:
            return state
    }
}

export function getUser(){
    return{
        type: GET_USER,
        payload: axios.get('/auth/currentUser')
    }
}

export function register(info){
    return{
        type: REGISTER_USER,
        payload: axios.post('/auth/register', info)
    }
}

export function login(info){
    return{
        type: LOGIN_USER,
        payload: axios.post('/auth/login', info)
    }
}

export function logout(){
    return{
        type: LOGOUT_USER,
        payload: axios.get('/auth/logout')
    }
}

