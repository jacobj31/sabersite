import React, {Component} from 'react'
import {connect} from 'react-redux'
import {login} from '../redux/reducers/user'
import {withRouter} from 'react-router-dom'

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
//        this.props.history.push('/home')
    }


    render(){
        
        return(
            <div>
                <input
                    name='email'
                    type='text'
                    placeholder='Email'
                    onChange={this.handleChange}/>
                 <input
                    name='password'
                    type='password'
                    placeholder='Password'
                    onChange={this.handleChange}/>
                <button onClick={this.handleSubmit}>Login</button>
                

            </div>
        )
    }
}


export default withRouter(connect(null, {login})(Login))