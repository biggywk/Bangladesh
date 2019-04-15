import React, { PureComponent } from 'react';

class Badge extends PureComponent {
    
  static defaultProps = {
    fontColor: "white",
    backgroundColor: "rgb(158, 230, 152)",
  };

  constructor(props) {
    super(props);
    this.state = {badgeStyle : {
        cursor: "pointer",
        color: this.props.fontColor,
        backgroundColor: this.props.backgroundColor
    }}
};

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
