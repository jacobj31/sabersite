import React, {Component} from 'react'
import {connect} from 'react-redux'
import {viewProduct, editProduct} from '../redux/reducers/products'
import {addToCart} from '../redux/reducers/cart'
import Header from './Header'
import {withRouter} from 'react-router-dom'
import {  MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBBadge, MDBContainer } from "mdbreact";

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
 
    toggleEdit = () => {
        let {name, category, price, image, description} = this.props.product
        this.setState({
            editing: !this.state.editing,
            name,
            category,
            price,
            image,
            description
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
        this.props.viewProduct(id)
    }
    addItem = (id) => {
        this.props.addToCart(id)
        alert(`${this.props.product.name} added to cart!`)
    }


    render(){
    return(
        <div>
        <Header></Header>
        <MDBContainer fluid style={{background:''}}>
            
            <br />
            {this.props.product && this.props.product.product_id ? 
                <MDBRow center>
                <MDBCard style={{background:''}}>
                    
                    <MDBCardImage src={this.props.product.image}></MDBCardImage>
                    <h4>{this.props.product.name}</h4>
                    <h4>${this.props.product.price}</h4>
                    <div>
                    <button onClick={() => this.addItem(this.props.product)}>Add To Cart</button>
                    <button onClick = {() => this.props.history.push('/store')}>Return to Store</button>
                    
                    </div>
                    
                    {this.props.user && this.props.user.is_admin? <button onClick={() => this.toggleEdit()}>{this.state.editing?'Cancel':'Edit'}</button>:null}
                
                </MDBCard>
                
                {this.state.editing? 
                <MDBCard>
                <input
                    name='name'
                    type='text'
                    placeholder='Product Name'
                    onChange={this.handleChange}
                    value={this.state.name}/>
                {/* <input
                    name='category'
                    type='text'
                    placeholder='Category'
                    onChange={this.handleChange}
                    value={this.state.category}/> */}
                <input
                    name='price'
                    type='text'
                    placeholder='Price'
                    onChange={this.handleChange}
                    value={this.state.price}/>
                <input
                    name='image'
                    type='text'
                    placeholder='ImageURL'
                    onChange={this.handleChange}
                    value={this.state.image}/>
                {/* <input
                    name='description'
                    type='text'
                    placeholder='Description'
                    onChange={this.handleChange}
                    value={this.state.description}/> */}
                    
                    <button onClick={() => this.handleSubmit(this.props.product.product_id)}>Confirm Edit</button>
                    
                    
                </MDBCard>: null}
                    
                    
                    
                    

                
                </MDBRow>
                :null}
        
        
        
        
        </MDBContainer>
        </div>
    )}
}


let mapStateToProps = state => {
    let {selected: product} = state.products
    let {data: cart} = state.cart
    let {data: user} = state.user
    return{product, cart, user}
}
export default withRouter(connect(mapStateToProps, {viewProduct, editProduct, addToCart})(Product))