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
            <MDBInput
                    name='first_name'
                    type='text'
                    hint='First Name'
                    onChange={this.handleChange}/>
            <br />
            {/* <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
              Your email
            </label> */}
          <MDBInput
                    name='last_name'
                    type='text'
                    hint='Last Name'
                    onChange={this.handleChange}/>
            <br />
            {/* <label
              htmlFor="defaultFormRegisterConfirmEx"
              className="grey-text"
            >
              Confirm your email
            </label> */}
            <MDBInput
                    name='email'
                    type='text'
                    hint='Email'
                    onChange={this.handleChange}/>
            <br />
            {/* <label
              htmlFor="defaultFormRegisterPasswordEx"
              className="grey-text"
            >
              Your password
            </label> */}
            <MDBInput
                    name='password'
                    type='password'
                    hint='Password'
                    onChange={this.handleChange}/>
            <div style= {{marginBottom: '6px'}}className="text-center mt-4">
              <MDBBtn rounded color="primary" type="submit" onClick= {this.handleSubmit}>
                Register
              </MDBBtn>
              
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
           
             
                
                
            
        )
    }
}


export default withRouter(connect(null, {register})(RegisterForm))