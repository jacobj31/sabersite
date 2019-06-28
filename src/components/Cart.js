import React, {Component} from 'react'
import {connect} from 'react-redux'
import {deleteFromCart, getCart} from '../redux/reducers/cart'


class Cart extends Component{

    componentDidMount(){
       this.props.getCart()
    }
    
    render(){
    return(
        
    <div>Cart
        {this.props.cart.map((item, index) => {
            return(
                <div>
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
    
    return{ cart}
}
export default connect(mapStateToProps, {deleteFromCart, getCart})(Cart)