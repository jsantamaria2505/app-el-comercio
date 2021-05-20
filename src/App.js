import React, { Component } from 'react'

import './App.css';


import Footer from './components/Footer';
import Content from './components/Content';

//Router
//import AppRoutes from './routes';

export default class App extends Component {
  render() {
    const {children} = this.props;
    
    return (

        <div className="App">

          <Content body={children} />

          
          <Footer></Footer>

        </div>

    )
  }
}

