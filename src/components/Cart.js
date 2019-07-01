import React, {Component} from 'react'
import {connect} from 'react-redux'
import {deleteFromCart, getCart} from '../redux/reducers/cart'


class Cart extends Component{

    componentDidMount(){
        
       this.props.getCart()
    }
    
    render(){
        console.log(this.props)
    return(
        
    <div>Cart
        {this.props.cart.map((item, index) => {
            return(
                <div key={index}>
                {item.name}
                <button onClick={() => {this.props.deleteFromCart(index)}}>Remove from Cart</button>
                </div>
            )
        })}
        
    </div>
        
    )
}
}


let mapStateToProps = state => {
    let {data: cart} = state.cart
    let { data: user } = state.user 
    return{ cart, user}
}
export default connect(mapStateToProps, {deleteFromCart, getCart})(Cart)