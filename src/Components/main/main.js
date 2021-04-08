import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';

import LoginForm from '../login-form';
import RegistrationForm from '../registation-form';
import './main.css';

export default class Main extends Component{
    state = {
      touchStart: 0,
      touchEnd: 0
    }

    handleTouchStart = (e) => {
      this.setState({
        touchStart: e.targetTouches[0].clientX
      })
    }

    handleTouchStart = (e) => {
      this.setState({
        touchEnd: e.targetTouches[0].clientX
      })
    }

    handleTouchEnd = () => {
      if (this.state.touchStart - this.state.touchEnd > 150) {
            // do your stuff here for left swipe
          alert("swipe left")
      }

      if (this.state.touchStart - this.state.touchEnd < -150) {
            // do your stuff here for right swipe
          alert("swipe right")
      }
    }
  
  render() {
    return(
      <main>
      <Switch>     
        <Route exact path='/'component={LoginForm}/>
        <Route exact path='/registration' component={RegistrationForm}/>
      </Switch>
    </main>
    )
  }
}