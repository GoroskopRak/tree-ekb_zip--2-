import React, {Component} from 'react';
import FormHeader from '../form-header';
import Header from '../header';
import Main from '../main';
import Footer from '../footer';
import './app.css';

export default class App extends Component{
  render(){
    return(
      <div className="page">
      <Header />
      <FormHeader />     
      <Main />
      <Footer />
    </div>
    )
  }
}
