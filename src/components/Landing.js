import React, {Component} from 'react'
import {connect} from 'react-redux'


import Header from './Header'
import Login from './Login'
import Register from './RegisterForm'
import { MDBBtn } from "mdbreact";



class Landing extends Component {
    constructor(props){
        super(props)
        
        this.state ={
            register: false
        }
    }

    
    render(){
    let {user} = this.props
    
    return(
        <div style={{display: 'flex', flexDirection: 'column', background:'gray', height: '100vh'}}>
        <Header></Header>
        {this.state.register? 
        <div ><Register></Register> 
        <MDBBtn rounded color = 'danger' onClick = {() => {this.setState({register: !this.state.register})}}>Cancel</MDBBtn>
        </div>: 
        
        <div><Login></Login> 
        New to the site? Create account<button style={{background: 'none', border: 'none', color: 'white', marginLeft:'-2px', textDecoration:'underline'}}onClick = {() => {this.setState({register: !this.state.register})}}>here!</button></div>}
         <br /></div>
       
    )
    }
}

let mapStateToProps = state => {
    let { data: user } = state.user 
    return { user }
}


export default connect (mapStateToProps)(Landing)