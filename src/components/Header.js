import React, {Component} from 'react'
import {connect} from 'react-redux'
import {logout} from '../redux/reducers/user'
import {withRouter} from 'react-router-dom'

 
class Header extends Component{

    out = () => {
        this.props.logout()
        this.props.history.push('/')
        
    }
   render(){
    return(
        <div>
            <button onClick={this.out}>Logout</button>
        </div>
    )
}
}
export default withRouter(connect(null, {logout})(Header))

