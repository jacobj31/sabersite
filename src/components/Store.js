import React from 'react'
import {connect} from 'react-redux'

import {getProducts, deleteProduct, addProduct, viewProduct} from '../redux/reducers/products'
import {Link} from 'react-router-dom'


class Store extends React.Component{
    constructor(props){
        super(props)
        
        this.state = { 
            name: '',
            category: '',
            price: 0,
            image:'',
            description:'',
            addItem: false
        }
    }
    
   
    componentDidMount(){
       this.props.getProducts()  
    }

    // viewProduct = (id) => {
    //     this.props.viewProduct(id)
    // }

    toggleAdd = () => {
        this.setState({
            addItem: !this.state.addItem
        })
    }
    handleChange = e => {
        let {name, value} = e.target
        this.setState({
            [name]: value
        })
    }
    handleSubmit = () => {
        let {name, category, price, image, description} = this.state
        this.props.addProduct({name, category, price, image, description})
    }

    render(){
        
    return(
        <div>
            
            <section>
            {this.props.products && this.props.products.map(product=> 
            
            <div key={product.product_id}>
             
            {product.name}
            <Link to ={`/store/${product.product_id}`}>
                <button onClick = {() => this.props.viewProduct(product.product_id)}>View Product</button>
            </Link>
            
            
            <button onClick={() => this.props.deleteProduct(product.product_id)}>Delete</button>
            </div>)}
            </section>
            {this.state.addItem? 
            <div>
                <input
                    name='name'
                    type='text'
                    placeholder='Product Name'
                    onChange={this.handleChange}/>
                <input
                    name='category'
                    type='text'
                    placeholder='Category'
                    onChange={this.handleChange}/>
                <input
                    name='price'
                    type='text'
                    placeholder='Price'
                    onChange={this.handleChange}/>
                <input
                    name='image'
                    type='text'
                    placeholder='Image'
                    onChange={this.handleChange}/>
                <input
                    name='description'
                    type='text'
                    placeholder='Description'
                    onChange={this.handleChange}/>
                <button onClick={this.handleSubmit}>Confirm Add</button>
                <button onClick={this.toggleAdd}>Cancel</button>
            </div> :<button onClick={this.toggleAdd}>Add Item</button>}
        </div>
    )
}}

let mapStateToProps = state => {
    let {data: products} = state.products
    return{products}
}

export default connect(mapStateToProps, {getProducts, deleteProduct, addProduct, viewProduct})(Store)