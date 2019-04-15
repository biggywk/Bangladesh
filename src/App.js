import React, { Component } from 'react';
import CountryCard from "./CountryCard"

class App extends Component {

  render() {
    return (
      <div className="container">
       <CountryCard  country="Bangladesh"/>
      </div>
    );
  }
}

export default App;
