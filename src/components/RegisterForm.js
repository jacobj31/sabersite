import React, {Component} from 'react'
import {connect} from 'react-redux'
import {register} from '../redux/reducers/user'
import {withRouter} from 'react-router-dom'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput} from 'mdbreact'


class RegisterForm extends Component {
    constructor(props){
        super(props)

        this.state = {
            email:'',
            password:'',
            first_name: '',
            last_name:'',
        }
    }

    handleChange = e => {
        let {name, value} = e.target
        this.setState({
            [name]: value
        })
    }
    
    handleSubmit = () => {
        let {email, password, first_name, last_name} = this.state
        this.props.register({email, password, first_name, last_name})
       this.props.history.push('/home')

    }

    render(){
        return(
    <MDBContainer >
      <MDBRow center>
        <MDBCol md="5">
          <form>
            <p className="h4 text-center mb-4">Sign up</p>
            {/* <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
              Your name
            </label> */}
            <MDBInput style={{background:'white', borderRadius:'4px'}}
                    name='first_name'
                    type='text'
                    hint='First Name'
                    onChange={this.handleChange}/>
            
            {/* <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
              Your email
            </label> */}
          <MDBInput style={{background:'white', borderRadius:'4px'}}
                    name='last_name'
                    type='text'
                    hint='Last Name'
                    onChange={this.handleChange}/>
            
            {/* <label
              htmlFor="defaultFormRegisterConfirmEx"
              className="grey-text"
            >
              Confirm your email
            </label> */}
            <MDBInput style={{background:'white', borderRadius:'4px'}}
                    name='email'
                    type='text'
                    hint='Email'
                    onChange={this.handleChange}/>
            
            {/* <label
              htmlFor="defaultFormRegisterPasswordEx"
              className="grey-text"
            >
              Your password
            </label> */}
            <MDBInput style={{background:'white', borderRadius:'4px'}}
                    name='password'
                    type='password'
                    hint='Password'
                    onChange={this.handleChange}/>
            <div style= {{marginBottom: '6px'}}className="text-center mt-4">
              <button style={{borderRadius:'3px', color:'white', background:'#263238', border:'none', height:'40px', width:'100px'}} type="submit" onClick= {this.handleSubmit}>
                Register
              </button>
              
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
           
             
                
                
            
        )
    }
}


export default withRouter(connect(null, {register})(RegisterForm))