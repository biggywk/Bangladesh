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
      graphType: "",
      country: ""
    };
  }

  componentWillMount() {
    this.setState({
      country: this.props.country,
      graphType: GraphTypes.GDP
      })
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
            {/* wrap me to charts section pls*/}
          <section>
            <h3>Chart from Datasets vs Regression model</h3>
            {this.badgesSection(Object.values(GraphTypes))}
            <Graph country={this.state.country} type={this.state.graphType} />
          </section>
          {/* -- */}

          {/* wrap me to descriptive section pls */}
          <h3>Description</h3>

          {/* -- */}
        </div>
    );
  }
}

const headerSection = (title) => {
  return <h1 className="text-center">{title}</h1>
}

export default CountryCard;
