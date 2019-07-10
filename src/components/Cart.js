import React, {Component} from 'react'
import {connect} from 'react-redux'
import {deleteFromCart, getCart} from '../redux/reducers/cart'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'
import {withRouter} from 'react-router-dom'
import Header from './Header'
import {  MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBBadge, MDBContainer } from "mdbreact";


class Cart extends Component{
    constructor(props){
        super(props)

        this.state = {
            amount: 0
        }
    }

    componentDidMount(){
       this.props.getCart()
    }
  
    componentDidUpdate(){
      this.props.getCart()
    }

    onToken = async (token) => {
        
        let  amount  = await this.getTotal()
        amount *= 100
        token.card = void 0
        axios.post('/api/payment', { token, amount: amount }).then(res => {
          alert(`Your payment of $${(amount/100).toFixed(2)} was successfully processed!`)
            })
          }
    onClosed = () => {
      this.props.getCart()
    }
    getTotal(){
        let total = 0.00
        this.props.cart.map((item) =>{
            return total += +item.price 
        })
        return total
    }

    render(){

    return(
    
    this.props.cart.length ? 
    <div style={{background:'#90a4ae', height:'100vh'}}>
        <Header></Header>
        <br />
        <MDBContainer>
          <MDBRow >
              <MDBCol md='8' style={{background:''}}>
              {this.props.cart.map((item, index) => {
                    
                  return(
                    
                      <div key={index}
                          style={{border:'', height:'100px', padding:'3px', margin:'3px',display:'flex', alignItems:'center', justifyContent:'space-between', borderRadius:'3px', boxShadow:'1px 1px 5px  black', background:'#cfd8dc'}}>
                      <img style={{width:'90px', height:'90px',borderRadius:'3px'}}src={item.image}></img>
                      <div style={{fontFamily:'bold', color:'#263238'}}>
                      <h5>{item.name}</h5> 
                      <h5>${item.price}</h5>
                      </div>
                      <button 
                       style={{ background:'#b71c1c', border:'none', color:'white', borderRadius:'3px'}}
                      onClick={() => {this.props.deleteFromCart(index)}}>Remove from Cart</button>
                      </div>
                  )
              })}
              </MDBCol> 


              <MDBCol md='4' style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
              
              <div style={{display:'flex',flexDirection:'column', alignItems:'center', marginTop:'0px'}}>
              <h3 style={{fontFamily:'bold', color:'#263238'}}>Total:${this.getTotal().toFixed(2)}</h3>
              <StripeCheckout
              name='Custom Saber Checkout' //header
              image={imageUrl}
              description='' //subtitle - beneath header
              stripeKey={process.env.REACT_APP_PUBLIC_KEY} //public key not secret key
              token={this.onToken} //fires the call back
              amount={this.getTotal() * 100} //this will be in cents
              currency="USD" 
              // image={imageUrl} // the pop-in header image (default none)
              // ComponentClass="div" //initial default button styling on block scope (defaults to span)
              panelLabel="Submit Payment" //text on the submit button
              locale="en" //locale or language (e.g. en=english, fr=french, zh=chinese)
              opened={this.onOpened} //fires cb when stripe is opened
              closed={this.onClosed} //fires cb when stripe is closed
              allowRememberMe // "Remember Me" option (default true)
              billingAddress
              shippingAddress //you can collect their address
              zipCode
              >
              {/* <button>Checkout</button> */}
            </StripeCheckout>
            </div>
            </MDBCol>


    
        </MDBRow>
      </MDBContainer>
    </div>
    
    
    
    : <div style={{background:'#90a4ae', height:'100vh'}}>
      <Header></Header>
      <br />
      <h2 style={{color: '#263238'}}>Empty, your cart is!</h2>
      </div>)
    
}
}


let mapStateToProps = state => {
    let {data: cart} = state.cart
    let { data: user } = state.user 
    return{ cart, user}
}
export default withRouter(connect(mapStateToProps, {deleteFromCart, getCart})(Cart))

const imageUrl = 'data:image/jpeg;base64,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'