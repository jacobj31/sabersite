import React, {Component} from 'react'
import {connect} from 'react-redux'
import {viewProduct, editProduct} from '../redux/reducers/products'
import {addToCart} from '../redux/reducers/cart'


class Product extends Component{
    constructor(props){
        super(props)

        this.state={
            name: '',
            category: '',
            price: 0,
            image:'',
            description:'',
            editing: false
        }
    } 
    componentDidMount(){
         
        console.log(this.props.product)
        // {this.props.product && this.props.product.product_id ? 
        //     this.setState({
        //         name: this.props.product.name
        //     }) : null}
    }
    toggleEdit = () => {
        this.setState({
            addItem: !this.state.editing
        })
    }
    handleChange = e => {
        let {name, value} = e.target
        this.setState({
            [name]: value
        })
    }
    handleSubmit = (id) => {
        let {name, category, price, image, description} = this.state
        this.props.editProduct(id, {name, category, price, image, description})
    }
   
    render(){
    return(
        <div>
            {this.props.product && this.props.product.product_id ? 
                <div>
                    {this.props.product.name}
                    {this.props.product.price}
                    {this.props.product.category}
                    {this.props.product.image}
                    {this.props.product.description}
                <input
                    name='name'
                    type='text'
                    placeholder='Product Name'
                    onChange={this.handleChange}
                    value={this.state.name}/>
                <input
                    name='category'
                    type='text'
                    placeholder='Category'
                    onChange={this.handleChange}
                    value={this.state.category}/>
                <input
                    name='price'
                    type='text'
                    placeholder='Price'
                    onChange={this.handleChange}
                    value={this.state.price}/>
                <input
                    name='image'
                    type='text'
                    placeholder='Image'
                    onChange={this.handleChange}
                    value={this.state.image}/>
                <input
                    name='description'
                    type='text'
                    placeholder='Description'
                    onChange={this.handleChange}
                    value={this.state.description}/>
                    <button onClick={() => this.handleSubmit(this.props.product.product_id)}>Edit</button>
                    <button onClick={() => this.props.addToCart(this.props.product)}>Add To Cart</button>
                </div>
                :null}
        
        
        
        
        </div>
    )}
}


let mapStateToProps = state => {
    let {selected: product} = state.products
    let {data: cart} = state.cart
    
    return{product, cart}
}
export default connect(mapStateToProps, {viewProduct, editProduct, addToCart})(Product)