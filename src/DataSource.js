const bangladeshChartData =  { GDP: {
    labels: ['2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017'],
    datasets:[
      {
        label:'GDP from datasets (USD million)',
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
        label:'GDP from regression model (USD million)',
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
                  998.7122,
                  1140.5886,
                  1419.1087,
                  1620.0841,
                  1760.7842,
                  1779.483
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
                  1000.99054,
                  1138.967937,
                  1417.602626,
                  1618.91903,
                  1761.196702,
                  1781.115358
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