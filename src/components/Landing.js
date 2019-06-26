import React, {Component} from 'react'
import {connect} from 'react-redux'



import Login from './Login'
import Register from './RegisterForm'



class Landing extends Component {

    
    render(){
    let {user} = this.props
    
    return(
        <div>
        
        {  user && user.data.first_name ? <h1>Welcome {user.data.first_name} </h1> : <Login></Login>}

        <Register></Register>
        </div>
    )
    }
}

let mapStateToProps = state => {
    let { data: user } = state.user 
    return { user }
}


export default connect (mapStateToProps)(Landing)