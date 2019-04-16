const bangladeshChartData =  { GDP: {
    labels: ['2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017'],
    datasets:[
      {
        label:'GDP from datasets',
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
    ] },
        TAX: {
            labels: ['2010', '2011', '2012', '2013', '2014', '2015'],
            datasets:[
              {
                label:'TAX from datasets (USD billion)',
                fill: false,
                data:[
                  998712.2,
                  1140588.6,
                  1419108.7,
                  1620084.1,
                  1760784.2,
                  1779483.0
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
                label:'TAX from regression model (USD billion)',
                fill: false,
                data:[
                  1000990.54,
                  1138967.937,
                  1417602.626,
                  1618919.03,
                  1761196.702,
                  1781115.358
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
  }

const Country = {
    BANGLADESH: 'Bangladesh', 
}

class DataSource {
    static getChartData(type, country) {
      let data = {}
        switch(country) {
            case (Country.BANGLADESH): 
                data =  bangladeshChartData[type]
                break;
            default: 
                data = {}
        }

        return data
    }
}

export default DataSource;