import {combineReducers} from 'redux'

import user from './user'
import products from './products'
import cart from './cart'
import orders from './orders'

export default combineReducers({user, products, cart, orders})