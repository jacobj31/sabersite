import React, {Component} from 'react'
import {connect} from 'react-redux'
import {register} from '../redux/reducers/user'


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
                <input
                    name='first_name'
                    type='text'
                    placeholder='First Name'
                    onChange={this.handleChange}/>
                <input
                    name='last_name'
                    type='text'
                    placeholder='Last Name'
                    onChange={this.handleChange}/>
                <button onClick={this.handleSubmit}>Register</button>
            </div>
        )
    }
}


export default connect(null, {register})(RegisterForm)