import React, { PureComponent } from 'react';

class Badge extends PureComponent {
    
  static defaultProps = {
    fontColor: "white",
    backgroundColor: "rgb(158, 230, 152)",
    cursor: "pointer"
  };

  constructor(props) {
    super(props);
    this.state = {
      badgeStyle : {}
    }
};

  componentWillMount() {
    this.setState({
      badgeStyle: {
          cursor:this.props.cursor,
          color: this.props.fontColor,
          backgroundColor: this.props.backgroundColor
      }
    })
  }

  render() {
    return (
          <h2>
            <span className="badge badge-success" style={this.state.badgeStyle} value={this.props.graphType}  onClick={this.props.onClick}>
                {this.props.graphType}
            </span>
          </h2>
    );
  }
}

export default Badge;
