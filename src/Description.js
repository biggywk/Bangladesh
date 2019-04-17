import React, { Component } from 'react';
import DataSource from "./DataSource"

const Country = DataSource.getCountryList()
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
      <li className="list-group-item">Agriculture</li>
      <li className="list-group-item">Service</li>
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
const israelDescription = {
  GDP : <>
  <p className="text-center">
    GDP
  </p>
  <p>
    Factor
  </p>
  <ul className="list-group">
    <li className="list-group-item">Agriculture </li>
    <li className="list-group-item">Manufacturing</li>
    <li className="list-group-item active">Industry</li>
    <li className="list-group-item active">Services</li>
  </ul>
  <p className="mt-4">
    At significance level = 0.05
  </p>
  <p>
  Industry and Services is an effective factors
  </p>
  <p>
   Regression equation
  </p>
  <p>
  GDP(10^12) = 5.74 * %Agriculture - 7.366 * %Manufacturing + 12.424 * %Industry 
         + 8.292 * %Services - 6.996
  </p>
  <p>
    Correlation = Don't know
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
    <li className="list-group-item active">Income Taxes</li>
    <li className="list-group-item active">Inter trade Taxes</li>
    <li className="list-group-item">Goods Service Taxes</li>
    <li className="list-group-item">Other Tax</li>
    <li className="list-group-item active">Social Contrib</li>
    <li className="list-group-item active">Grants</li>
  </ul>
  <p className="mt-4">
    At significance level = 0.1
  </p>
  <p>
    All factors is an effective factors except Goods Service Taxes and Other Tax
  </p>
  <p>
   Regression equation
  </p>
  <p>
       Revenue (% to GDP) = 2.2046 * %IncomeTaxes + 2.2133 * %InternationalTradeTaxes
        + 1.1327 * %GoodsAndServicesTaxes + 2.2991 * %SocialContributions + 1.9483 * %OtherTaxes
        + 2.3424 * %Grants - 154.8590
  </p>
  <p>
    Correlation = Don't know
  </p>
  </>
}
const indiaDescription = {
  GDP : <>
  <p className="text-center">
    GDP
  </p>
  <p>
    Factor
  </p>
  <ul className="list-group">
    <li className="list-group-item active">
    Agriculture, Forestry & Fishing 
    </li>
    <li className="list-group-item active">
 Mining & Quarrying
    </li>
    <li className="list-group-item">
Manufacturing
    </li>
    <li className="list-group-item">
Elect. Gas & Water supply
    </li>
    <li className="list-group-item">
Construction
    </li>
    <li className="list-group-item">
Trade, Hotels & Restaurant
    </li>
    <li className="list-group-item active">
    Transport, Storage & Communication
    </li>
    <li className="list-group-item active">
Financing, Insurance, Real estate & Business services
    </li>
  </ul>
  <p className="mt-4">
    At significance level = 0.01
  </p>
  <p>
  Agriculture,forestry & Fishing, Mining & Quarrying, Transport,storage & Communication and Financing, Insurance, Real estate & Business services
     is an effective factors
  </p>
  <p>
   Regression equation
  </p>
  <p>
  GDP = -11710.01 
    + (1.882553 * GDP of Agriculture,forestry & fishing) 
    + (6.003632 * GDP of Mining & quarrying)           	
    + (2.614242 * GDP of Transport)                                                                                        
    + (1.972493 * GDP of Services)
  </p>
  <p>
    Correlation = 0.9999
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
    <li className="list-group-item active">
    Corporate Tax  
    </li>
    <li className="list-group-item">
    Taxes on Income other than CorporationTax
    </li>
    <li className="list-group-item"> 
    Customs
    </li>
    <li className="list-group-item"> 
    Union Excise Duties
    </li>
    <li className="list-group-item"> 
    Taxes of Union Territories
    </li>
    <li className="list-group-item"> 
    Social Services
    </li>
    <li className="list-group-item"> 
    Economic Services
    </li>
    <li className="list-group-item"> 
    Union Territories without Legislature
    </li>
  </ul>
  <p className="mt-4">
    At significance level = 0.01
  </p>
  <p>
  Corporate Tax is an effective factor
  </p>
  <p>
   Regression equation
  </p>
  <p>
  Revenue = -28257.26 + (3.057112 * Corporation Tax)
  </p>
  <p>
    Correlation = 0.9877
  </p>
  </>
}
const kuwaitDescription = {
  GDP : <>
  <p className="text-center">
    GDP
  </p>
  <p>
    Factor
  </p>
  <ul className="list-group">
    <li className="list-group-item">Agriculture</li>
    <li className="list-group-item active">Industry</li>
    <li className="list-group-item">Manufacturing</li>
    <li className="list-group-item">Services</li>
  </ul>
  <p className="mt-4">
    At significance level = 0.01
  </p>
  <p>
    Industry is an effective factor
  </p>
  <p>
   Regression equation
  </p>
  <p>
  GDP = -550.225 - 163.734 * agriculture + 7.636 * industry + 13.220 * manufacturing + 4.108 * service
  </p>
  <p>
    Correlation = Don't know
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
    <li className="list-group-item active">Grants</li>
    <li className="list-group-item active">Service</li>
    <li className="list-group-item active">Trade</li>
  </ul>
  <p className="mt-4">
    At significance level = 0.01
  </p>
  <p>
    All factors is an effective factors
  </p>
  <p>
   Regression equation
  </p>
  <p>
  Revenue = 3171.46 - 31.6 * Grants - 33.67 * Service - 30.6 * Trade
  </p>
  <p>
    Correlation = 0.6204
  </p>
  </>
}
const turkeyDescription = {
  GDP : <>
  <p className="text-center">
    GDP
  </p>
  <p>
    Factor
  </p>
  <ul className="list-group">
    <li className="list-group-item active">Agriculture</li>
    <li className="list-group-item">Industry</li>
    <li className="list-group-item">Manufacturing</li>
    <li className="list-group-item active">Services</li>
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
  GDP = 1.4171010 + 1.641agriculture + 2.188industry - 1.527manufacuring + 9.64610 - services
  </p>
  <p>
    Correlation = 0.9879
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
    <li className="list-group-item active">taxes_on_income</li>
    <li className="list-group-item active">taxes_on_international_trade</li>
    <li className="list-group-item active">taxes_on_goods_and_services</li>
    <li className="list-group-item active">social_contributions </li>
    <li className="list-group-item active">other_taxes</li>
    <li className="list-group-item active">grants_and_other_revenue</li>
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
  Revenue = -15989604 + 159882  taxes_on_income + 160293  taxes_on_international_trade
        + 159886  taxes_on_goods_and_services + 159908 social_contributions  
        + 159917   other_taxes  + 159890  grants_and_other_revenue   
  </p>
  <p>
    Correlation = 0.9839
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
          }
          )
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
              case Country.INDIA:
                element = indiaDescription[type]    
                break;
              case Country.TURKEY:
                element = turkeyDescription[type]    
                break;
              case Country.KUWAIT:
                element = kuwaitDescription[type]    
                break;
              case Country.ISRAEL:
                element = israelDescription[type]    
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