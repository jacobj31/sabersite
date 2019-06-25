import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getUser} from '../redux/reducers/user'


import Login from './Login'
import Register from './RegisterForm'



class Landing extends Component {
    // componentDidMount(){
    //     this.props.getUser()
    // }
    
    render(){
    let {user} = this.props
    console.log(user)
    
    return(
        <div>
        
        {  user ? <h1>Welcome {user.data.first_name} </h1> : <Login></Login>}

        <Login></Login>
        <Register></Register>
        </div>
    )
    }
}

let mapStateToProps = state => {
    let { data: user } = state.user 
    return { user }
}


export default connect (mapStateToProps, {getUser})(Landing)