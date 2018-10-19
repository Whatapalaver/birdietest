import React, { Component } from 'react';
import './App.css'

import Navbar from './Navigation/Navbar';
import Footer from './Footer';
import FieldSelector from './FieldSelector';

class App extends Component {
  constructor() {
    super()
  }
  
  render() {
    return (
      <div className='tc dark-red bg-washed-green pa2'>
        <h2 className='mt1 mb0 avenir i f1 pt2 fw6'>Birdie Tech Test</h2>
        <Navbar />
        <FieldSelector />
        <Footer />
      </div>
    )
  }
}

export default App;