import React, { Component } from 'react';
import './App.css';
import Selection from './views/Selection'

/*import info from '.views/appInfo'*/

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>GDPglobal</h1>
        <h4><strong>The World&#39;s financial data at your fingertips.</strong> Shows financial data from every nation around the world</h4>  
        
        <h5>Click on the circle to see data from each nation</h5>
        <p>About</p>
        <p>Github</p>
        
      </div>
    );
  }
}

export default App;
