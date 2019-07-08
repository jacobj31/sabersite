import React, {Component} from 'react';
import './App.css';
import {HashRouter as Router, Route, Switch} from 'react-router-dom'
import {connect} from 'react-redux'
import {getUser} from './redux/reducers/user'

import About from './components/About'
import Home from './components/Home'
import Orders from './components/Orders'
import Store from './components/Store'
import Cart from './components/Cart'
import Landing from './components/Landing'
import Product from './components/Product'




class App extends Component {
componentDidMount(){
  this.props.getUser()
}
  

  render(){
  return (
    <div className="App">
     <Router>
     
        <Switch>
          <Route path = '/store/:product' component = {Product}/>
          <Route path = '/cart' component = {Cart}/>
          <Route path = '/about' component = {About}/>
          <Route path = '/orders' component = {Orders}/>
          <Route path = '/store' exact component = {Store}/>
          <Route path = '/home' component = {Home}/>
          <Route path = '/' exact component = {Landing}/>
        </Switch>
     </Router>
    </div>
  )
}
}
export default connect (null, {getUser})(App);
