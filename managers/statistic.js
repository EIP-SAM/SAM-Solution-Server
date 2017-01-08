const statAdapters = require('../adapters/statistic');

module.exports.statisticFunctions = [];
module.exports.statisticFilters = [];

module.exports.statisticRegisterMethodForEntity = (entity, functionName, functionData) => {
  if (module.exports.statisticFunctions[entity] == null) {
    module.exports.statisticFunctions[entity] = [];
  }

  module.exports.statisticFunctions[entity][functionName] = functionData;
  module.exports.addFilter(entity);
};

module.exports.statisticGetMethodForEntity = (entity, functionName) => {
  if (module.exports.statisticFunctions[entity]) {
    if (module.exports.statisticFunctions[entity][functionName]) {
      return (module.exports.statisticFunctions[entity][functionName]());
    }
  }
};

module.exports.addFilter = (entity) => {
  if (module.exports.statisticFilters.indexOf(entity) === -1) {
    module.exports.statisticFilters.push(entity);
  }
};

module.exports.getStatisticFilters = () => module.exports.statisticFilters;

module.exports.getStatisticByTypeAndName = (type, name) => new Promise((fulfill) => {
  module.exports.statisticFunctions[type][name]().then((data) => {
    fulfill(module.exports.prepareDataForGraph(data));
  });
});

module.exports.getStatisticTypeAndNameListByType = (type) => {
  const functions = module.exports.statisticFunctions[type];
  const data = [];

  for (const i in functions) {
    data.push(i);
  }

  const return_data = {
    type,
    data,
  };

  return return_data;
};

module.exports.initiateGraphs = () => {
  statAdapters.registerGraphs();
};

// COLOR GENERATOR FUNCTIONS

function generateColorBar(order, type) {
  const typeTable = [];
  typeTable[0] = [];
  typeTable[1] = [];

  typeTable[0][0] = 'rgba(220,220,220,0.5)';
  typeTable[1][0] = 'rgba(151,187,205,0.5)';

  typeTable[0][1] = 'rgba(220,220,220,0.8)';
  typeTable[1][1] = 'rgba(151,187,205,0.8)';

  typeTable[0][2] = 'rgba(220,220,220,0.75)';
  typeTable[1][2] = 'rgba(151,187,205,0.75)';

  typeTable[0][3] = 'rgba(220,220,220,1)';
  typeTable[1][3] = 'rgba(151,187,205,1)';

  if (order % 2 === 0) {
    return typeTable[1][type];
  }
  return typeTable[0][type];
}

function generateColorPie(order, type) {
  const typeTable = [];
  typeTable[0] = [];
  typeTable[1] = [];
  typeTable[2] = [];

  typeTable[0][0] = '#F7464A';
  typeTable[1][0] = '#46BFBD';
  typeTable[2][0] = '#FDB45C';

  typeTable[0][1] = '#FF5A5E';
  typeTable[1][1] = '#5AD3D1';
  typeTable[2][1] = '#FFC870';

  if (order % 3 === 0) {
    return typeTable[2][type];
  } else if (order % 2 === 0) {
    return typeTable[1][type];
  }
  return typeTable[0][type];
}

function generateColorDoughnut(order, type) {
  const typeTable = [];
  typeTable[0] = [];
  typeTable[1] = [];
  typeTable[2] = [];

  typeTable[0][0] = '#F7464A';
  typeTable[1][0] = '#46BFBD';
  typeTable[2][0] = '#FDB45C';

  typeTable[0][1] = '#FF5A5E';
  typeTable[1][1] = '#5AD3D1';
  typeTable[2][1] = '#FFC870';

  if (order % 3 === 0) {
    return typeTable[2][type];
  } else if (order % 2 === 0) { return typeTable[1][type]; }
  return typeTable[0][type];
}

function generateColorRadar(order, type) {
  const typeTable = [];
  typeTable[0] = [];
  typeTable[1] = [];

  typeTable[0][0] = 'rgba(220,220,220,0.2)';
  typeTable[1][0] = 'rgba(151,187,205,0.2)';

  typeTable[0][1] = 'rgba(220,220,220,1)';
  typeTable[1][1] = 'rgba(151,187,205,1)';

  typeTable[0][2] = 'rgba(220,220,220,1)';
  typeTable[1][2] = 'rgba(151,187,205,1)';

  typeTable[0][3] = '#fff';
  typeTable[1][3] = '#fff';

  typeTable[0][4] = '#fff';
  typeTable[1][4] = '#fff';

  typeTable[0][5] = 'rgba(220,220,220,1)';
  typeTable[1][5] = 'rgba(151,187,205,1)';

  if (order % 2 === 0) {
    return typeTable[1][type];
  }
  return typeTable[0][type];
}

function generateColorRadar(order, type) {
  const typeTable = [];
  typeTable[0] = [];
  typeTable[1] = [];

  typeTable[0][0] = 'rgba(220,220,220,0.2)';
  typeTable[1][0] = 'rgba(151,187,205,0.2)';

  typeTable[0][1] = 'rgba(220,220,220,1)';
  typeTable[1][1] = 'rgba(151,187,205,1)';

  typeTable[0][2] = 'rgba(220,220,220,1)';
  typeTable[1][2] = 'rgba(151,187,205,1)';

  typeTable[0][3] = '#fff';
  typeTable[1][3] = '#fff';

  typeTable[0][4] = '#fff';
  typeTable[1][4] = '#fff';

  typeTable[0][5] = 'rgba(220,220,220,1)';
  typeTable[1][5] = 'rgba(151,187,205,1)';

  if (order % 2 === 0) {
    return typeTable[1][type];
  }
  return typeTable[0][type];
}

// function generateColorPolar(order, type)
// {
//   let typeTable = [];
//   typeTable[0] = [];
//   typeTable[1] = [];
//   typeTable[2] = [];
//
//   typeTable[0][0] = "#F7464A";
//   typeTable[1][0] = "#46BFBD";
//   typeTable[2][0] = "#FDB45C";
//
//   typeTable[0][1] = "#FF5A5E";
//   typeTable[1][1] = "#5AD3D1";
//   typeTable[2][1] = "#FFC870";
//
//   if (order % 3 == 0)
//     return typeTable[2][type];
//   else if (order % 2 == 0)
//     return typeTable[1][type];
//   return typeTable[0][type];
// }

// DATA CREATION, FILL AND PUSH TO CANVAS FUNCTIONS

function prepareBarDataForGraph(graphData) {
  const datasets = [];
  for (let i = 0; i < graphData.dataset.length; i++) {
    datasets.push({
      label: graphData.dataset[i].title,
      fillColor: generateColorBar(i, 0),
      strokeColor: generateColorBar(i, 1),
      highlightFill: generateColorBar(i, 2),
      highlightStroke: generateColorBar(i, 3),
      data: graphData.dataset[i].data,
    });
  }

  const dataSets = {
    labels: graphData.labels,
    datasets,
  };

  const dataToChart = {
    complete: graphData.complete,
    datasets: dataSets,
    type: graphData.type,
    title: graphData.title,
  };

  return dataToChart;
}

function preparePieDataForGraph(graphData) {
  const datasets = [];

  for (let i = 0; i < graphData.dataset.length; i++) {
    datasets.push({
      color: generateColorPie(i, 0),
      highlight: generateColorPie(i, 1),
      value: graphData.dataset[i].value,
      label: graphData.dataset[i].title,
    });
  }

  const dataToChart = {
    complete: graphData.complete,
    datasets,
    type: graphData.type,
    title: graphData.title,
  };

  return dataToChart;
}

function prepareDoughnutDataForGraph(graphData) {
  const datasets = [];

  for (let i = 0; i < graphData.dataset.length; i++) {
    datasets.push({
      color: generateColorPie(i, 0),
      highlight: generateColorPie(i, 1),
      value: graphData.dataset[i].value,
      label: graphData.dataset[i].title,
    });
  }

  const dataToChart = {
    complete: graphData.complete,
    datasets,
    type: graphData.type,
    title: graphData.title,
  };

  return dataToChart;
}

function prepareRadarDataForGraph(graphData) {
  const datasets = [];
  for (let i = 0; i < graphData.dataset.length; i++) {
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
  }

  const dataSets = {
    labels: graphData.labels,
    datasets,
  };

  const dataToChart = {
    complete: graphData.complete,
    datasets: dataSets,
    type: graphData.type,
    title: graphData.title,
  };

  return dataToChart;
}

function prepareLineDataForGraph(graphData) {
  const datasets = [];
  for (let i = 0; i < graphData.dataset.length; i++) {
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
  }

  const dataSets = {
    labels: graphData.labels,
    datasets,
  };

  const dataToChart = {
    complete: graphData.complete,
    datasets: dataSets,
    type: graphData.type,
    title: graphData.title,
  };

  return dataToChart;
}

// function preparePolarDataForGraph(graphData, ctx) {
//   var datasets = [];
//
//   for (var i = 0; i < graphData.dataset.length; i++) {
//       datasets.push({
//           color: generateColorPolar(i, 0),
//           highlight: generateColorPolar(i, 1),
//           value: graphData.dataset[i].value,
//           label: graphData.dataset[i].title,
//       });
//   };
//
//   var dataSets = {
//     labels: graphData.labels,
//     datasets: datasets,
//   }
//
//   var dataToChart = {
//       datasets: dataSets,
//       type: graphData.type
//   };
//
//   return dataToChart;
// }

module.exports.prepareDataForGraph = (graphData) => {
  if (graphData.type === 'bar') {
    return (prepareBarDataForGraph(graphData));
  } else if (graphData.type === 'pie') {
    return (preparePieDataForGraph(graphData));
  } else if (graphData.type === 'doughnut') { return (prepareDoughnutDataForGraph(graphData)); } else if (graphData.type === 'radar') {
    return prepareRadarDataForGraph(graphData);
  } else if (graphData.type === 'line') { return prepareLineDataForGraph(graphData); }
  // else if (graphData.type == "polar")
  //   return preparePolarDataForGraph(graphData);
};
