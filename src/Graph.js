import React, { Component } from 'react';
import LineChart from "./LineChart"

class Graph extends Component {
    
  constructor(props) {
    super(props);
    this.state = {
        chartData:{}
      }
};

  componentWillMount(){
        this.getChartData();
  }

  getChartData(){
    this.setState({
      chartData:{
        labels: ['2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017'],
        datasets:[
          {
            label:'GDP from datas',
            fill: false,
            data:[
              102480,
              115280,
              128640,
              133360,
              149990,
              172850,
              195080,
              221420,
              249720
            ],
            backgroundColor:[
                "rgb(146, 226, 253)",
                "rgb(146, 226, 253)",
                "rgb(146, 226, 253)",
                "rgb(146, 226, 253)",
                "rgb(146, 226, 253)",
                "rgb(146, 226, 253)",
                "rgb(146, 226, 253)",
                "rgb(146, 226, 253)",
                "rgb(146, 226, 253)"
            ],
            borderColor: "rgb(146, 226, 253)"
          }, {
            label:'GDP from regression model',
            fill: false,
            data:[
                101782.0518,
                110464.937,
                124414.5818,
                139672.5299,
                157042.4934,
                173338.9773,
                194186.5677,
                220261.7805,
                247576.8064
              ],
            backgroundColor:[
                "pink",
                "pink",
                "pink",
                "pink",
                "pink",
                "pink",
                "pink",
                "pink",
                "pink"
            ],
            borderColor: "rgb(200, 148, 166)"
            
          }
        ]
      }
    });
  }
  render() {
    return (
          <h2 className="d-flex flex-column justify-content-around mt-4">
              {/* <p>{this.props.country}</p> */}
              <LineChart  type={this.props.type} chartData={this.state.chartData} legendPosition="bottom"/>
          </h2>
    );
  }
}

export default Graph;
