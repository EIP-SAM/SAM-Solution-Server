var statAdapters = require('../adapters/statistic');

module.exports.statisticFunctions = [];

module.exports.statisticRegisterMethodForEntity = function (entity, functionName, functionData) {
  if (module.exports.statisticFunctions[entity] == null) {
    module.exports.statisticFunctions[entity] = [];
  }

  module.exports.statisticFunctions[entity][functionName] = functionData;
};

module.exports.statisticGetMethodForEntity = function (entity, functionName) {
  if (module.exports.statisticFunctions[entity])
  {
    if (module.exports.statisticFunctions[entity][functionName])
      return (module.exports.statisticFunctions[entity][functionName]());
  }
}

module.exports.getStatisticData = function () {
  return module.exports.prepareDataForGraph(module.exports.statisticGetMethodForEntity('Computer', 'GraphCircleOfTypeOfComputer'));
}

// TESTING FUNCTIONS / DEMO FUNCTIONS

module.exports.getAllStatistics = function() {
  var data = [];
  data.push(module.exports.prepareDataForGraph(module.exports.statisticGetMethodForEntity('User', 'GraphBarOfAge')));
  data.push(module.exports.prepareDataForGraph(module.exports.statisticGetMethodForEntity('Computer', 'GraphCircleOfTypeOfComputer')));
  data.push(module.exports.prepareDataForGraph(module.exports.statisticGetMethodForEntity('User', 'GraphRadarOfAge')));
  data.push(module.exports.prepareDataForGraph(module.exports.statisticGetMethodForEntity('User', 'GraphLineOfAge')));
  data.push(module.exports.prepareDataForGraph(module.exports.statisticGetMethodForEntity('Computer', 'GraphPolarOfTypeOfComputer')));

  return data;
}

module.exports.initSampleStatistics = function() {

  module.exports.statisticRegisterMethodForEntity('User', 'GraphBarOfAge', function() {

    var returnData = {
      type: 'bar',
      labels: ['janvier', 'fevrier', 'mars'],
      title: 'Graphique barre age',
      dataset: [
        {
          title: 'Age des utilisateurs',
          data: [65, 50, 79]
        },
        {
          title: 'Age des enfants',
          data: [35, 20, 49]
        },
        // {
        //   title: 'Age des papa',
        //   data: [25, 10, 19]
        // },
      ]
    };

    return (returnData);
  })

  module.exports.statisticRegisterMethodForEntity('Computer', 'GraphCircleOfTypeOfComputer', function() {

    var returnData = {
      type: 'pie',
      title: 'Graphique type des ordinateurs',
      dataset: [
        {
          title: "portable",
          value: 200,
        },
        {
          title: "fixe",
          value: 210,
        },
        {
          title: "ultrabook",
          value: 50,
        },
      ]
    };

    return (returnData);
  })

  module.exports.statisticRegisterMethodForEntity('User', 'GraphRadarOfAge', function() {

    var returnData = {
      type: 'radar',
      labels: ['janvier', 'fevrier', 'mars'],
      title: 'Graphique radar age',
      dataset: [
        {
          title: 'Age des utilisateurs',
          data: [65, 50, 79]
        },
        {
          title: 'Age des enfants',
          data: [35, 20, 49]
        }
      ]
    };

    return (returnData);
  })

  module.exports.statisticRegisterMethodForEntity('User', 'GraphLineOfAge', function() {

    var returnData = {
      type: 'line',
      labels: ['janvier', 'fevrier', 'mars'],
      title: 'Graphique ligne age',
      dataset: [
        {
          title: 'Age des utilisateurs',
          data: [65, 50, 79]
        },
        {
          title: 'Age des enfants',
          data: [35, 20, 49]
        }
      ]
    };

    return (returnData);
  })

  module.exports.statisticRegisterMethodForEntity('Computer', 'GraphPolarOfTypeOfComputer', function() {

    var returnData = {
      type: 'polar',
      title: 'Graphique polaire type des ordinateurs',
      dataset: [
        {
          title: "portable",
          value: 200,
        },
        {
          title: "fixe",
          value: 210,
        },
        {
          title: "ultrabook",
          value: 50,
        },
      ]
    };

    return (returnData);
  })





  // COLOR GENERATOR FUNCTIONS

  function generateColorBar(order, type)
  {
    typeTable = [];
    typeTable[0] = [];
    typeTable[1] = [];

    typeTable[0][0] = "rgba(220,220,220,0.5)";
    typeTable[1][0] = "rgba(151,187,205,0.5)";

    typeTable[0][1] = "rgba(220,220,220,0.8)";
    typeTable[1][1] = "rgba(151,187,205,0.8)";

    typeTable[0][2] = "rgba(220,220,220,0.75)";
    typeTable[1][2] = "rgba(151,187,205,0.75)";

    typeTable[0][3] = "rgba(220,220,220,1)";
    typeTable[1][3] = "rgba(151,187,205,1)";

    if (order % 2 == 0)
      return typeTable[1][type];
    return typeTable[0][type];
  }

  function generateColorPie(order, type)
  {
    typeTable = [];
    typeTable[0] = [];
    typeTable[1] = [];
    typeTable[2] = [];

    typeTable[0][0] = "#F7464A";
    typeTable[1][0] = "#46BFBD";
    typeTable[2][0] = "#FDB45C";

    typeTable[0][1] = "#FF5A5E";
    typeTable[1][1] = "#5AD3D1";
    typeTable[2][1] = "#FFC870";

    if (order % 3 == 0)
      return typeTable[2][type];
    else if (order % 2 == 0)
      return typeTable[1][type];
    return typeTable[0][type];
  }

  function generateColorRadar(order, type)
  {
    typeTable = [];
    typeTable[0] = [];
    typeTable[1] = [];

    typeTable[0][0] = "rgba(220,220,220,0.2)";
    typeTable[1][0] = "rgba(151,187,205,0.2)";

    typeTable[0][1] = "rgba(220,220,220,1)";
    typeTable[1][1] = "rgba(151,187,205,1)";

    typeTable[0][2] = "rgba(220,220,220,1)";
    typeTable[1][2] = "rgba(151,187,205,1)";

    typeTable[0][3] = "#fff";
    typeTable[1][3] = "#fff";

    typeTable[0][4] = "#fff";
    typeTable[1][4] = "#fff";

    typeTable[0][5] = "rgba(220,220,220,1)";
    typeTable[1][5] = "rgba(151,187,205,1)";

    if (order % 2 == 0)
      return typeTable[1][type];
    return typeTable[0][type];
  }

  function generateColorRadar(order, type)
  {
    typeTable = [];
    typeTable[0] = [];
    typeTable[1] = [];

    typeTable[0][0] = "rgba(220,220,220,0.2)";
    typeTable[1][0] = "rgba(151,187,205,0.2)";

    typeTable[0][1] = "rgba(220,220,220,1)";
    typeTable[1][1] = "rgba(151,187,205,1)";

    typeTable[0][2] = "rgba(220,220,220,1)";
    typeTable[1][2] = "rgba(151,187,205,1)";

    typeTable[0][3] = "#fff";
    typeTable[1][3] = "#fff";

    typeTable[0][4] = "#fff";
    typeTable[1][4] = "#fff";

    typeTable[0][5] = "rgba(220,220,220,1)";
    typeTable[1][5] = "rgba(151,187,205,1)";

    if (order % 2 == 0)
      return typeTable[1][type];
    return typeTable[0][type];
  }

  function generateColorPolar(order, type)
  {
    typeTable = [];
    typeTable[0] = [];
    typeTable[1] = [];
    typeTable[2] = [];

    typeTable[0][0] = "#F7464A";
    typeTable[1][0] = "#46BFBD";
    typeTable[2][0] = "#FDB45C";

    typeTable[0][1] = "#FF5A5E";
    typeTable[1][1] = "#5AD3D1";
    typeTable[2][1] = "#FFC870";

    if (order % 3 == 0)
      return typeTable[2][type];
    else if (order % 2 == 0)
      return typeTable[1][type];
    return typeTable[0][type];
  }

  // DATA CREATION, FILL AND PUSH TO CANVAS FUNCTIONS

  function prepareBarDataForGraph(graphData) {
    var datasets = [];
    for (var i = 0; i < graphData.dataset.length; i++) {
        datasets.push({
            label: graphData.dataset[i].title,
            fillColor: generateColorBar(i, 0),
            strokeColor: generateColorBar(i, 1),
            highlightFill: generateColorBar(i, 2),
            highlightStroke: generateColorBar(i, 3),
            data: graphData.dataset[i].data,
        });
    };

    var dataSets = {
      labels: graphData.labels,
      datasets: datasets,
    }

    var dataToChart = {
        datasets: dataSets,
        type: graphData.type
    };

    return dataToChart;
  }

  function preparePieDataForGraph(graphData) {
    var datasets = [];

    for (var i = 0; i < graphData.dataset.length; i++) {
        datasets.push({
            color: generateColorPie(i, 0),
            highlight: generateColorPie(i, 1),
            value: graphData.dataset[i].value,
            label: graphData.dataset[i].title,
        });
    };

    var dataToChart = {
       datasets: datasets,
       type: graphData.type
   };

    return dataToChart;
  }

  function prepareRadarDataForGraph(graphData, ctx) {
    var datasets = [];
    for (var i = 0; i < graphData.dataset.length; i++) {
        datasets.push({
            label: graphData.dataset[i].title,
            fillColor: generateColorRadar(i, 0),
            strokeColor: generateColorRadar(i, 1),
            pointColor: generateColorRadar(i, 2),
            pointStrokeColor: generateColorRadar(i, 3),
            pointHighlightFill: generateColorRadar(i, 4),
            pointHighlightStroke: generateColorRadar(i, 5),
            data: graphData.dataset[i].data,
        });
    };

    var dataSets = {
      labels: graphData.labels,
      datasets: datasets,
    }

    var dataToChart = {
        datasets: dataSets,
        type: graphData.type
    };

    return dataToChart;
  }

  function prepareLineDataForGraph(graphData, ctx) {
    var datasets = [];
    for (var i = 0; i < graphData.dataset.length; i++) {
        datasets.push({
            label: graphData.dataset[i].title,
            fillColor: generateColorRadar(i, 0),
            strokeColor: generateColorRadar(i, 1),
            pointColor: generateColorRadar(i, 2),
            pointStrokeColor: generateColorRadar(i, 3),
            pointHighlightFill: generateColorRadar(i, 4),
            pointHighlightStroke: generateColorRadar(i, 5),
            data: graphData.dataset[i].data,
        });
    };

    var dataSets = {
      labels: graphData.labels,
      datasets: datasets,
    }

    var dataToChart = {
        datasets: dataSets,
        type: graphData.type
    };

    return dataToChart;
  }

  function preparePolarDataForGraph(graphData, ctx) {
    var datasets = [];

    for (var i = 0; i < graphData.dataset.length; i++) {
        datasets.push({
            color: generateColorPolar(i, 0),
            highlight: generateColorPolar(i, 1),
            value: graphData.dataset[i].value,
            label: graphData.dataset[i].title,
        });
    };

    var dataSets = {
      labels: graphData.labels,
      datasets: datasets,
    }

    var dataToChart = {
        datasets: dataSets,
        type: graphData.type
    };

    return dataToChart;
  }

  module.exports.prepareDataForGraph = function(graphData) {
    if (graphData.type == "bar")
      return (prepareBarDataForGraph(graphData));
    else if (graphData.type == "pie")
      return (preparePieDataForGraph(graphData));
    else if (graphData.type == "radar")
      return prepareRadarDataForGraph(graphData);
    else if (graphData.type == "line")
      return prepareLineDataForGraph(graphData);
    else if (graphData.type == "polar")
      return preparePolarDataForGraph(graphData);
  }

}
