import React, {Component} from 'react';
import './App.css';
import {HashRouter as Router, Route, Switch} from 'react-router-dom'
import {connect} from 'react-redux'
import {getUser} from './redux/reducers/user'

import Header from './components/Header'
import About from './components/About'
import Home from './components/Home'
import Orders from './components/Orders'
import Store from './components/Store'
import Cart from './components/Cart'
import Landing from './components/Landing'





class App extends Component {
componentDidMount(){
  this.props.getUser()
  
}
  

  render(){
   
  return (
    <div className="App">
    <Router>
      <Header></Header>
        <Switch>
          <Route path = '/cart' component = {Cart}></Route>
          <Route path = '/about' component = {About}></Route>
          <Route path = '/orders' component = {Orders}></Route>
          <Route path = '/store' component = {Store}></Route>
          <Route path = '/' exact component = {Landing}></Route>
          <Route path = '/home' component ={Home}></Route>
        </Switch>
    </Router>
    </div>
  )
}}

export default connect(null, {getUser})(App);
