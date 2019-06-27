import React, {Component} from 'react'
import {connect} from 'react-redux'
import {viewProduct} from '../redux/reducers/products'

class Product extends Component{
    constructor(props){
        super(props)

        this.state={


        }
    }

    componentDidMount(){
        this.props.viewProduct()
    }
    render(){
    return(
        <div>
            {this.props.product && this.props.product.product_id ? 
                <div>
                    {this.props.product.product_id}
                    <button>Add To Cart</button>
                </div>
                
                :null}
        
        
        
        
        </div>
    )}
}


let mapStateToProps = state => {
    let {selected: product} = state.products
    return{product}
}
export default connect(mapStateToProps, {viewProduct})(Product)