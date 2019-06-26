import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getUser} from '../redux/reducers/user'

class Home extends Component{
    componentDidMount(){
 
    }


    render(){
        let {user} = this.props
        console.log(user)
    
    return(
        <div>Home</div>
    )
}}

let mapStateToProps = state => {
    let { data: user } = state.user 
    return { user }
}

export default connect (mapStateToProps, {getUser})(Home)
