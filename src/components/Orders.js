import React, { useEffect} from 'react'
import {connect} from 'react-redux'
import {getOrders, getAllOrders} from '../redux/reducers/orders'
import Header from './Header'
import { MDBTable, MDBTableBody, MDBTableHead, MDBContainer } from 'mdbreact';

export function Orders(props){

    const {user, getAllOrders, getOrders} = props
        useEffect (() => 
        {user && (user.is_admin ? getAllOrders() :
        getOrders())}, [user])
    
            
    
    return(
        <div>
            <Header></Header>
            <MDBContainer>
            <MDBTable>
            <MDBTableHead>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Street</th>
                <th>City</th>
                <th>State</th>
                <th>Zipcode</th>
                <th>Country</th>
                <th>Order ID</th>
                <th>Product</th>
            </tr>
            </MDBTableHead>
            <MDBTableBody>
            {props.orders.map((order, i) => {
            return(
            <tr key = {i}>
            <td>{order.first_name}</td>
            <td>{order.last_name}</td>
            <td>{order.address}</td>
            <td>{order.city}</td>
            <td>{order.state}</td>
            <td>{order.zipcode}</td>
            <td>{order.country}</td>
            <td>{order.order_id}</td>
            <td>{order.name}</td>
            </tr>)
            })}


            </MDBTableBody>
            </MDBTable>
            </MDBContainer>
        </div>
    )
}


let mapStateToProps = state => {
    let {data: orders} = state.orders
    let { data: user } = state.user 
    return{orders, user}
}

export default connect(mapStateToProps, {getOrders, getAllOrders})(Orders)



