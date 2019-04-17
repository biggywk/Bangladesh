import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';

class LineChart extends Component{
  constructor(props){
    super(props);
    this.state = {
      chartData: {},
      yAxesLabel: "",
      xAxesLabel: ""
    }
  }

  static defaultProps = {
    type: "GDP",
    displayTitle:true,
    displayLegend: true,
    legendPosition:'right',
    yAxesLabel: "USD million",
    xAxesLabel: "Year (Christian era)"
  }

  componentWillMount() {
    this.setState({
      chartData: this.props.chartData,
      yAxesLabel: this.props.yAxesLabel,
      xAxesLabel: this.props.xAxesLabel
    })
  }
  
  componentWillReceiveProps(nextProps ){
    this.setState({
                    type : nextProps.type,
                    chartData: nextProps.chartData,
                    yAxesLabel: nextProps.yAxesLabel,
                    xAxesLabel: nextProps.xAxesLabel
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
                        labelString: this.state.xAxesLabel,
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
      </div>
    )
  }
}

export default LineChart;