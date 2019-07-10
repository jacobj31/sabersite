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
                <MDBRow center style={{ alignItems:'center'}}>
                <MDBCard style={{width: '310px', height:'500px', padding:'3px', background:'#cfd8dc'}}>
                    
                    <MDBCardImage 
                        src={this.props.product.image}
                        style={{width: '100%', height:'250px'}}>
                    </MDBCardImage>
                    <br />
                    <MDBCardBody style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
                    <h3>
                    <strong>
                    <a href="#!" style={{color:'#263238'}}>
                    {this.props.product.name} 
                    </a>
                    </strong>
                    </h3>
                    <h2 className="font-weight-bold blue-text">
                    <strong>${this.props.product.price}</strong>
                    </h2>
                    <br />
                    <div style={{background:'', display:'flex', justifyContent:'space-around', marginTop:'8px'}}>
                    <button 
                    style={{background:'#1b5e20', border:'none', color:'white', borderRadius:'3px', height:'55px'}}
                    onClick={() => this.addItem(this.props.product)}>Add to Cart</button>
                    <button 
                    style={{background:'#263238', border:'none', color:'white', borderRadius:'3px'}}
                    onClick = {() => this.props.history.push('/store')}>Return to Store</button>
                    </div>
                    </MDBCardBody>
                    {this.props.user && this.props.user.is_admin? 
                    <button 
                    style={{background:'#311b92', border:'none', color:'white', borderRadius:'3px', height:'55px'}}
                    onClick={() => this.toggleEdit()}>{this.state.editing?'Cancel':'Edit'}</button>:null}
                    <br />
                </MDBCard>
                
                {this.state.editing?
                
                <MDBCard style={{width: '310px', height:'220px', background:'#cfd8dc', padding:'3px', justifyContent:'center'}} >
                <input style={{borderRadius:'4px', margin:'3px'}}
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
                <input style={{borderRadius:'4px', margin:'3px'}}
                    name='price'
                    type='text'
                    placeholder='Price'
                    onChange={this.handleChange}
                    value={this.state.price}/>
                <input style={{borderRadius:'4px', margin:'3px'}}
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
                    
                    <button 
                    style={{background:'#311b92', border:'none', color:'white', borderRadius:'3px', margin:'3px', height:'40px'}}
                    onClick={() => this.handleSubmit(this.props.product.product_id)}>Confirm Edit</button>
                    
                    
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