import React, { Component } from 'react';
import CountryCard from "./CountryCard"
import Badge from "./Badge"
import DataSource from "./DataSource"

class CountryCardsContainer extends Component {
    
    constructor(props) {
        super(props)
        this.state= {
            country: "Bangladesh"
        }
    }
    
    onSetGraphType = (e) => {
        this.setState({country: e.target.getAttribute("value")})
      }
    
      badgesSection = (graphTypes) => {
        return  <div className="d-flex flex-row justify-content-around mt-3">
        {graphTypes.map( (graphType, index) =>  <Badge onClick={this.onSetGraphType} graphType={graphType} key={index} />)}
      </div>
      }
  
  render() {
    return (
      <div className="container">
            {this.badgesSection(Object.values(DataSource.getCountryList()))}
       <CountryCard  country={this.state.country}/>
      </div>
    );
  }
}

export default CountryCardsContainer;
