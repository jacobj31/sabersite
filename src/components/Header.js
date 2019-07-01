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
            <Link style={{textDecoration:'none'}} to='/home'>Home</Link>
            <Link style={{textDecoration:'none'}} to='/about'>About</Link>
            <Link style={{textDecoration:'none'}} to='/store'>Store</Link>
            <Link style={{textDecoration:'none'}} to='/cart'>Cart</Link>
            <Link style={{textDecoration:'none'}} to='/orders'>Orders</Link>
            <button onClick={this.out}>Logout</button>
        </div>
    )
}
}
export default withRouter(connect(null, {logout})(Header))

