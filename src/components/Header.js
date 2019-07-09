import React, {Component} from 'react'
import {connect} from 'react-redux'
import {logout} from '../redux/reducers/user'
import {withRouter} from 'react-router-dom'
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBCollapse, MDBContainer,
    MDBHamburgerToggler } from 'mdbreact';

 
class Header extends Component{
    constructor(props){
        super(props)

        this.state = {
            collapse1: false,
            collapseID: ''
        }
    }
    toggleCollapse = collapseID => () => {
        this.setState(prevState => ({ collapseID: (prevState.collapseID !== collapseID ? collapseID : '') }));
      }
      
      toggleSingleCollapse = collapseId => {
        this.setState({
          ...this.state,
          [collapseId]: !this.state[collapseId]
        });
      }

    out = () => {
        this.props.logout()
        this.props.history.push('/')    
    }
   render(){
    return(


        this.props.user && this.props.user.user_id ? 
        
      <MDBContainer>
      <MDBNavbar style={{marginTop: '0px', background:'#263238', borderRadius:'3px'}} light>
        <MDBContainer>
          <MDBNavbarBrand style={{fontFamily:'bold', color:'#eceff1'}}>
            LED Custom Saber Builds
          </MDBNavbarBrand>
          <MDBHamburgerToggler color="#eceff1" id="hamburger1" onClick={()=> this.toggleSingleCollapse('collapse1')} />
            <MDBCollapse isOpen={this.state.collapse1} navbar>
              <MDBNavbarNav left>
                <MDBNavItem active>
                  <MDBNavLink style={{color: '#eceff1'}}to="/home" >Home</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink style={{color: '#eceff1'}}to="/about">About</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink style={{color: '#eceff1'}}to="/store">Store</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink style={{color: '#eceff1'}}to="/cart">Cart</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink style={{color: '#eceff1'}}to="/orders">Orders</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <button style={{background:'none', border:'none', color:'red'}}onClick={this.out}>Logout</button> 
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </MDBContainer> 
        : 
        <div>
            <br />
            <br />
   
        
        </div>





    )
}
}
let mapStateToProps = state => {
    let { data: user } = state.user 
    return { user }
}
export default withRouter(connect(mapStateToProps, {logout})(Header))

