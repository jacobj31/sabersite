import React, {Component} from 'react'
import {connect} from 'react-redux'
import {logout} from '../redux/reducers/user'
import {withRouter, Link} from 'react-router-dom'

 
class Header extends Component{

    out = () => {
        this.props.logout()
        this.props.history.push('/')
        
    }
   render(){
    return(
        <div>
            <Link to='/home'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/store'>Store</Link>
            <Link to='/cart'>Cart</Link>
            <Link to='/orders'>Orders</Link>
            <button onClick={this.out}>Logout</button>
        </div>
    )
}
}
export default withRouter(connect(null, {logout})(Header))

