import React, {Component} from 'react'
import {connect} from 'react-redux'
import {login} from '../redux/reducers/user'
import {withRouter} from 'react-router-dom'
import { MDBBtn, MDBInput, MDBContainer, MDBRow, MDBCol} from "mdbreact";

class Login extends Component {
    constructor(props){
        super(props)

        this.state = {
            email:'',
            password:''
        }
    }

    handleChange = e => {
        let {name, value} = e.target
        this.setState({
            [name]: value
        })
        
    }
    
    handleSubmit = () => {
        let {email, password} = this.state
        this.props.login({email, password})
       this.props.history.push('/home')
       console.log(this.state.password)
       console.log(this.state.email)
    }

    render(){
        
        return(
                
        <MDBContainer>
            <MDBRow center>
              <MDBCol md="5">
                <form>
                  <p className="h4 text-center mb-4">Sign in</p>
                  {/* <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
                    Your email
                  </label> */}
                 <MDBInput style={{background:'white', borderRadius:'4px'}}
                    name='email'
                    type='text'
                    hint='Email'
                    onChange={this.handleChange}/>
                  
                  {/* <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
                    Your password
                  </label> */}
                 <MDBInput style={{background:'white', borderRadius:'4px'}}
                    name='password'
                    type='password'
                    hint='Password'
                    onChange={this.handleChange}/>
                  <div className="text-center mt-4">
                <MDBBtn style={{borderRadius:'4px'}} color = 'primary' size = 'md' onClick={this.handleSubmit}>Login</MDBBtn>
                
                  </div>
                </form>
                
              </MDBCol>
            </MDBRow>
          </MDBContainer>
         
        )
    }
}


export default withRouter(connect(null, {login})(Login))