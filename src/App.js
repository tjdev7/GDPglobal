import React, { Component } from 'react';
import './App.css';

class map_data extends Component {
  render() {
    return (
      <section className="side_Tab">
        <h1>GDPglobal</h1>
        <h4>Shows financial data from every nation around the world. Click on any circle inside the map to see data from each nation</h4>  
        <br/>
        <br/>

        <p><a href={"https://github.com/GDPglobal-project/app"}>Github page </a> | <a href={"https://github.com/GDPglobal-project"}>Project page</a></p>
        <hr/>
        <p>Source: <a href ={"https://wits.worldbank.org/countrystats.aspx?lang=en"}> World Bank</a>
        </p>

      </section>
    );
  }
}

export default map_data;
