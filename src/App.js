import React, { Component } from 'react';
import './App.css';

class map_data extends Component {
  render() {
    return (
      <div className="side_Tab">
        <h1>GDPglobal</h1>
        <h4>Shows financial data from every nation around the world</h4>  
        <h5>Click on any circle inside the map to see data from each nation</h5>
        <p><a href={"https://github.com/GDPglobal-project/app"}>Github page </a> | <a href={"https://github.com/GDPglobal-project"}>Project page</a></p>
        <p>Source: <a href ={"https://wits.worldbank.org/countrystats.aspx?lang=en"}> World Bank</a>
        </p>

      </div>
    );
  }
}

export default map_data;
