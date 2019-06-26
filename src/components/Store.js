import React from 'react'
import {connect} from 'react-redux'

import {getProducts, deleteProduct} from '../redux/reducers/products'



class Store extends React.Component{
    constructor(props){
        super(props)
        
        this.state = { 
            name: '',
            category: '',
            price:0,
            image:'',
            description:'',
            addItem: false
        }
    }
    
   
    componentDidMount(){
       this.props.getProducts()  
    }

    deleteProduct = (id) => {
        this.props.deleteProduct(id)  
    }

    toggleAdd = () => {
        this.setState({
            addItem: !this.state.addItem
        })
    }

    render(){
        
    return(
        <div>
            <section>
            {this.props.products && this.props.products.map(product=> 
            
            <div key={product.product_id}>
             
            {product.name}
             <button onClick={() => this.deleteProduct(product.product_id)}>Delete</button>
            </div>)}
            </section>
            <button onClick={this.toggleAdd}>Add Item</button>
            {this.state.addItem? <div>Hi</div> :null}
        </div>
    )
}}

let mapStateToProps = state => {
    let {data: products} = state.products
    return{products}
}

export default connect(mapStateToProps, {getProducts, deleteProduct})(Store)