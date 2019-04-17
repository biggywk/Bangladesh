const Country = {
  BANGLADESH: 'Bangladesh',
  INDIA: 'India',
  ISRAEL: 'Israel',
  KUWAIT: 'Kuwait',
  TURKEY: 'Turkey'
}

const bangladeshChartData = {
  GDP: {
    labels: ['2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017'],
    datasets: [{
      label: 'GDP from datasets',
      fill: false,
      data: [
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
      backgroundColor: [
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
      label: 'GDP from regression model',
      fill: false,
      data: [
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
      backgroundColor: [
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
    }]
  },
  Revenue: {
    labels: ['2010', '2011', '2012', '2013', '2014', '2015'],
    datasets: [{
      label: 'Revenue from datasets',
      fill: false,
      data: [
        998712.2,
        1140588.6,
        1419108.7,
        1620084.1,
        1760784.2,
        1779483.0
      ],
      backgroundColor: [
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
      label: 'Revenue from regression model',
      fill: false,
      data: [
        1000990.54,
        1138967.937,
        1417602.626,
        1618919.03,
        1761196.702,
        1781115.358
      ],
      backgroundColor: [
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
    }]
  }
}
const indiaChartData = {
  GDP: {
    labels: ['2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016'],
    datasets: [{
      label: 'GDP from datasets',
      fill: false,
      data: [
        457148.3077,
        521615.8142,
        608196.2964,
        704936.2412,
        815933.3996,
        939831.2288,
        1115209.154,
        1344050.709,
        1417387.446,
        1507903.099,
        1619641.929,
        1751714.65,
        1876308.761
      ],
      backgroundColor: [
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
      label: 'GDP from regression model',
      fill: false,
      data: [
        463966.0712,
        522372.8025,
        604244.4364,
        703200.5762,
        814239.747,
        931649.4903,
        1126151.473,
        1341924.928,
        1411194.771,
        1512426.328,
        1619484.402,
        1752842.877,
        1876179.041
      ],
      backgroundColor: [
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
    }]
  },
  Revenue: {
    labels: ["2009", '2010', '2011', '2012', '2013', '2014', '2015', "2016", "2017", "2018"],
    datasets: [{
      label: 'Revenue from datasets',
      fill: false,
      data: [
        88124.92308,
        121303.3846,
        115605.5385,
        135266.6154,
        156111.2308,
        169457.6923,
        183850,
        211415.8462,
        231604.3077,
        265498.1538
      ],
      backgroundColor: [
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
      label: 'Revenue from regression model',
      fill: false,
      data: [
        86843.0068,
        112223.1506,
        123571.1504,
        139331.7385,
        157369.64,
        173476.8576,
        184907.1642,
        199814.583,
        236886.0638,
        263814.5172
      ],
      backgroundColor: [
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
    }]
  }
}
const israelChartData = {
  GDP: {
    labels: ['2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016'],
    datasets: [{
      label: 'GDP from datasets',
      fill: false,
      data: [
        457148.3077,
        521615.8142,
        608196.2964,
        704936.2412,
        815933.3996,
        939831.2288,
        1115209.154,
        1344050.709,
        1417387.446,
        1507903.099,
        1619641.929,
        1751714.65,
        1876308.761
      ],
      backgroundColor: [
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
      label: 'GDP from regression model',
      fill: false,
      data: [
        463966.0712,
        522372.8025,
        604244.4364,
        703200.5762,
        814239.747,
        931649.4903,
        1126151.473,
        1341924.928,
        1411194.771,
        1512426.328,
        1619484.402,
        1752842.877,
        1876179.041
      ],
      backgroundColor: [
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
    }]
  },
  Revenue: {
    labels: ["2009", '2010', '2011', '2012', '2013', '2014', '2015', "2016", "2017", "2018"],
    datasets: [{
      label: 'Revenue from datasets',
      fill: false,
      data: [
        88124.92308,
        121303.3846,
        115605.5385,
        135266.6154,
        156111.2308,
        169457.6923,
        183850,
        211415.8462,
        231604.3077,
        265498.1538
      ],
      backgroundColor: [
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
      label: 'Revenue from regression model',
      fill: false,
      data: [
        86843.0068,
        112223.1506,
        123571.1504,
        139331.7385,
        157369.64,
        173476.8576,
        184907.1642,
        199814.583,
        236886.0638,
        263814.5172
      ],
      backgroundColor: [
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
    }]
  }
}
const kuwaitChartData = {

  GDP: {
    labels: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017'],
    datasets: [{
      label: 'GDP from datasets',
      fill: false,
      data: [
        115.4149,
        154.0275,
        174.07,
        174.1611,
        162.6314,
        114.5673,
        110.9123,
        120.1263
      ],
      backgroundColor: [
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
      label: 'GDP from regression model',
      fill: false,
      data: [
        130.0770291,
        148.7577838,
        176.0992746,
        167.3058441,
        159.963366,
        119.645308,
        97.996288,
        125.8888335
      ],
      backgroundColor: [
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
    }]
  },
  Revenue: {
    labels: ['2019', '2010', '2011', '2012', '2013', '2014', '2015'],
    datasets: [{
      label: 'Revenue from datasets',
      fill: false,
      data: [
        11.70193895,
        13.08804966,
        13.16935125,
        11.819353,
        11.3204715,
        12.18109186,
        12.56803281
      ],
      backgroundColor: [
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
      label: 'Revenue from regression model',
      fill: false,
      data: [
        11.68860379,
        12.95798676,
        13.2018622,
        11.72413213,
        11.32473036,
        12.27099889,
        12.54101327
      ],
      backgroundColor: [
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
    }]
  }
}
const turkeyChartData = {

  GDP: {
    labels: ['2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017'],
    datasets: [{
      label: 'GDP from datasets',
      fill: false,
      data: [
        764336,
        644640,
        771902,
        832524,
        873982,
        950579,
        934186,
        859797,
        863722,
        851549
      ],
      backgroundColor: [
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
      label: 'GDP from regression model',
      fill: false,
      data: [
        764478.53,
        644687.90,
        770271.80,
        831806.49,
        878440.18,
        947021.34,
        935484.41,
        859244.81,
        863434.96,
        851879.85
      ],
      backgroundColor: [
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
    }]
  },
  Revenue: {
    labels: ["2008", "2009", '2010', '2011', '2012', '2013', '2014', '2015', "2016", "2017"],
    datasets: [{
      label: 'Revenue from datasets',
      fill: false,
      data: [
        53324.40624,
        56237.91424,
        66257.32165,
        77632.97722,
        88489.84721,
        102000.00,
        114000.00,
        137000.00,
        155000.00,
        166000.00
      ],
      backgroundColor: [
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
      label: 'Revenue from regression model',
      fill: false,
      data: [
        55660.92413,
        61668.41296,
        61745.38154,
        83233.7158,
        91066.22036,
        100258.3353,
        112065.8215,
        148963.5818,
        149840.3489,
        168360.9795,
      ],
      backgroundColor: [
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
    }]
  }
}

class DataSource {
  static getChartData(type, country) {
    let data = {}

    switch (country) {
      case (Country.BANGLADESH):
        data = bangladeshChartData[type]
        break;
      case (Country.INDIA):
        data = indiaChartData[type]
        break;
      case (Country.ISRAEL):
        data = israelChartData[type]
        break;
      case (Country.KUWAIT):
        data = kuwaitChartData[type]
        break;
      case (Country.TURKEY):
        data = turkeyChartData[type]
        break;
      default:
        data = {}
    }

    return data
  }

  static getCountryList() {
    return Country
  }
}

export default DataSource;