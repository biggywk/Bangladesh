import React, { Component } from 'react';

const Country = {
    BANGLADESH: 'Bangladesh'
}

const bangladeshDescription = {
    GDP : <>
    <p className="text-center">
      GDP
    </p>
    <p>
      Factor
    </p>
    <ul className="list-group">
      <li className="list-group-item">Utilities </li>
      <li className="list-group-item">agriculture</li>
      <li className="list-group-item">service</li>
      <li className="list-group-item active">Manufacturing</li>
      <li className="list-group-item">Constant Prices</li>
      <li className="list-group-item">Gross National Product</li>
    </ul>
    <p className="mt-4">
      At significance level = 0.01
    </p>
    <p>
      Manufacturing is an effective factor
    </p>
    <p>
     Regression equation
    </p>
    <p>
      GDP = - 28851.2 + 1164.8 * GDP From Manufacturing
    </p>
    <p>
      Correlation = 0.9932
    </p>
    </>
  ,
    Revenue : <>
    <p className="text-center">
      Revenue
    </p>
    <p>
      Factor
    </p>
    <ul className="list-group">
      <li className="list-group-item active">Corporate Tax and Sales Tax </li>
      <li className="list-group-item active">Non-Tax</li>
      <li className="list-group-item active"> Personal income Tax</li>
    </ul>
    <p className="mt-4">
      At significance level = 0.1
    </p>
    <p>
      All factors is an effective factor
    </p>
    <p>
     Regression equation
    </p>
    <p>
      Revenue = - 10.13129 + 1.00986 * (Corporate Tax and Sales Tax) + 1.05979 * (non-tax) + 0.90444 * (Personal income tax)
    </p>
    <p>
      Correlation = 1.0000
    </p>
    </>
}

class Description extends Component {
    constructor(props) {
        super(props);
        this.state = {
          type: "",
          country: ""
        };
      }

      componentWillMount() {
        this.setState({
          type: this.props.type,
          country: this.props.country
          })
      }

      componentWillReceiveProps(nextProps) {
        this.setState({
            type : nextProps.type,
            country: nextProps.country
        })
      }

      getDescription = (type, country) => {
          let element = ""
         
          switch(country) {
              case Country.BANGLADESH:
                element = bangladeshDescription[type]    
              break;
              default:
              element = <></>
          }

          return element
      }
      render() {
        return (
        <section>
            <h3>Description</h3>
            {this.getDescription(this.state.type, this.state.country)}
        </section>
        );
      }
}

export default Description;