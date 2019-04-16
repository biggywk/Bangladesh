import React, { Component } from 'react';
import Badge from "./Badge"
import Graph from "./Graph"

const GraphTypes = {
  TAX: 'TAX', 
  GDP: 'GDP'
  };

class CountryCard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      graphType: GraphTypes.GDP,
      country: this.props.country
    };
  }

  onSetGraphType = (e) => {
    this.setState({graphType: e.target.getAttribute("value")})
  }

  badgesSection = (graphTypes) => {
    return  <div className="d-flex flex-row justify-content-around mt-3">
    {graphTypes.map( (graphType, index) =>  <Badge onClick={this.onSetGraphType} graphType={graphType} key={index} />)}
  </div>
  }

  render() {
    return (
        <div className="d-flex flex-column">
          {headerSection(this.state.country)}
          {this.badgesSection(Object.values(GraphTypes))}

          {/* wrap me pls */}
          <h2 className="text-center mt-4">
          <Graph country={this.state.country} type={this.state.graphType} />
          </h2>
          {/* -- */}
        </div>
    );
  }
}

const headerSection = (title) => {
  return <h1 className="text-center">{title}</h1>
}

export default CountryCard;
