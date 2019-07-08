import React, { useEffect} from 'react'
import {connect} from 'react-redux'
import {getOrders, getAllOrders} from '../redux/reducers/orders'
import Header from './Header'

export function Orders(props){

    const {user, getAllOrders, getOrders} = props
        useEffect (() => 
        {user && (user.is_admin ? getAllOrders() :
        getOrders())}, [user])
    
            
    
    return(
      
        
        <div><Header></Header>
            {props.orders.map((order, i) => {
            return <div key = {i}>{order.name}{order.order_id
            }</div>
        })}</div>
    )
}


let mapStateToProps = state => {
    let {data: orders} = state.orders
    let { data: user } = state.user 
    return{orders, user}
}

export default connect(mapStateToProps, {getOrders, getAllOrders})(Orders)