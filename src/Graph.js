import React, { Component } from 'react';
import LineChart from "./LineChart"
import DataSource from "./DataSource"

class Graph extends Component {
    
  constructor(props) {
    super(props);
    this.state = {
        chartData:{},
        type: "",
        country: ""
      }
};

  componentWillReceiveProps(nextProps) {
    this.setState({
      type : nextProps.type,
      country : nextProps.country
    }, () => {this.getChartData(this.state.type, this.state.country)})
  }

  componentWillMount() {
        this.setState({
          type: this.props.type,
          country: this.props.country
        }, () => {
          this.getChartData(this.state.type, this.state.country)
        })
  }
  
  getChartData = (type, country) => {
    this.setState({
      chartData: DataSource.getChartData(type, country)
      })
  }
  render() {
    return (
          <div className="d-flex flex-column justify-content-around mt-4">
              <LineChart  type={this.state.type} chartData={this.state.chartData} legendPosition="bottom"/>
          </div>
    );
  }
}

export default Graph;
