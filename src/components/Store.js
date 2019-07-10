import React from 'react'
import {connect} from 'react-redux'
import {getProducts, deleteProduct, addProduct, viewProduct} from '../redux/reducers/products'
import {Link} from 'react-router-dom'
import Header from './Header'
import {  MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBBadge, MDBContainer } from "mdbreact";
//import './Store.css'

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
       console.log(this.props.user)
    }

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
        this.toggleAdd()
    }

    render(){
        
    return(
    <div>
    <Header></Header>
    <MDBContainer fluid style={{ width:'100vw', background:'#90a4ae'}}>
        
        
        <MDBRow center>
            
    
            {this.props.products && this.props.products.map(product=> 
            <div 
            
            key={product.product_id}>
            <MDBCol size = '6' >
            <br/>
            <MDBCard
                className="align-items-center" 
                style={{width: '210px', height:'350px', padding:'3px', background:'#cfd8dc'}}>
            <MDBCardImage
              src={product.image}
              top
              style={{height:'180px'}}
              alt="sample photo"
              overlay="white-slight"
            />
            <MDBCardBody className="text-center" style={{display:'flex', flexDirection:'column', justifyContent:'flex-end'}}>
             
              <h5>
                <strong>
                  <a href="#!" style={{color:'#263238'}}>
                    {product.name}
                    
                  </a>
                </strong>
              </h5>
              <h4 className="font-weight-bold blue-text">
                <strong>${product.price}</strong>
              </h4>
              <Link to ={`/store/${product.product_id}`}>
                <button 
                 style={{background:'#263238', border:'none', color:'white', borderRadius:'3px'}}
                onClick = {() => this.props.viewProduct(product.product_id)}>View Product</button>
            </Link>
            </MDBCardBody>
            
            {this.props.user && this.props.user.is_admin? 
            <button
            style={{marginTop:'-15px', background:'#b71c1c', border:'none', color:'white', borderRadius:'3px'}} 
            onClick={() => this.props.deleteProduct(product.product_id)}>Delete</button>: null}
            </MDBCard>
            
        </MDBCol>
            
             
            
            
            
            </div>)}
            </MDBRow>
            




            {this.state.addItem? 
            <div>
                <br />
                <input style={{borderRadius:'4px', margin:'3px'}}
                    name='name'
                    type='text'
                    placeholder='Product Name'
                    onChange={this.handleChange}/>
                {/* <input
                    name='category'
                    type='text'
                    placeholder='Category'
                    onChange={this.handleChange}/> */}
                <input style={{borderRadius:'4px', margin:'3px'}}
                    name='price'
                    type='text'
                    placeholder='Price'
                    onChange={this.handleChange}/>
                <input style={{borderRadius:'4px', margin:'3px'}}
                    name='image'
                    type='text'
                    placeholder='ImageURL'
                    onChange={this.handleChange}/>
                {/* <input
                    name='description'
                    type='text'
                    placeholder='Description'
                    onChange={this.handleChange}/> */}
                <div>
                <button 
                style={{background:'#1b5e20', border:'none', color:'white', borderRadius:'3px'}}
                onClick={this.handleSubmit}>Confirm Add</button>
                <button style={{background:'#b71c1c', border:'none', color:'white', borderRadius:'3px', margin:'3px'}}onClick={this.toggleAdd}>Cancel</button>
                </div>

            </div> :this.props.user && this.props.user.is_admin? <div><br /> 
            <button 
            style={{background:'#1b5e20', border:'none', color:'white', borderRadius:'3px', margin:'3px'}}
            onClick={this.toggleAdd}
            >Add Item</button><br /></div>: null}
        </MDBContainer>
        </div>
    )
}}

let mapStateToProps = state => {
    let {data: products} = state.products
    let { data: user } = state.user 
    return{products, user}
}

export default connect(mapStateToProps, {getProducts, deleteProduct, addProduct, viewProduct})(Store)