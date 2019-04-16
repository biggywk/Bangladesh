import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';

class LineChart extends Component{
  constructor(props){
    super(props);
    this.state = {
      chartData: {},
      yAxesLabel: ""
    }
  }

  static defaultProps = {
    displayTitle:true,
    displayLegend: true,
    legendPosition:'right',
    yAxesLabel: "USD million"
  }

  componentWillMount() {
    this.setState({
      chartData: this.props.chartData,
      yAxesLabel: this.props.yAxesLabel
    })
  }
  
  componentWillReceiveProps(nextProps ){
    this.setState({
                    type : nextProps.type,
                    chartData: nextProps.chartData
    })
  }
  
  render(){
    return (
      <div className="chart">
        <Line
          data={this.state.chartData}
          options={{
            title:{
              display:this.props.displayTitle,
              text: this.props.type,
              fontSize:25
            },
            legend:{
              display:this.props.displayLegend,
              position:this.props.legendPosition
            },
            scales: {
                xAxes: [{
                    ticks: {
                        beginAtZero:true
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Year (Christian era)',
                        fontSize: 20
                    }
                }],
                yAxes: [{
                  ticks: {
                      beginAtZero:true
                  },
                  scaleLabel: {
                      display: true,
                      labelString: this.state.yAxesLabel,
                      fontSize: 20
                  }
              }]
            }
          }}
        />
{/* 
        <Pie
          data={this.state.chartData}
          options={{
            title:{
              display:this.props.displayTitle,
              text:'Largest Cities In '+this.props.location,
              fontSize:25
            },
            legend:{
              display:this.props.displayLegend,
              position:this.props.legendPosition
            }
          }}
        /> */}
      </div>
    )
  }
}

export default LineChart;