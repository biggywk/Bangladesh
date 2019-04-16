import React, { Component } from 'react';
import LineChart from "./LineChart"
import DataSource from "./DataSource"

class Graph extends Component {
    
  constructor(props) {
    super(props);
    this.state = {
        chartData:{},
        type: this.props.type,
        country: this.props.country
      }
};

  componentWillReceiveProps(nextProps ){
    this.setState({type : nextProps.type}, () => {this.getChartData()})
  }

  componentWillMount(){
        this.getChartData();
  }

  
  getChartData = () => {
    this.setState({
      chartData: DataSource.getChartData(this.state.type, this.state.country)
      }
    )
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
