var statAdapters = require('../adapters/statistic');

module.exports.statisticFunctions = [];

module.exports.statisticRegisterMethodForEntity = function (entity, functionName, functionData) {
  if (module.exports.statisticFunctions[entity] == null) {
    module.exports.statisticFunctions[entity] = [];
  }

  module.exports.statisticFunctions[entity][functionName] = functionData;
};

module.exports.statisticGetMethodForEntity = function(entity, functionName) {
  if (module.exports.statisticFunctions[entity])
  {
    if (module.exports.statisticFunctions[entity][functionName])
      return (module.exports.statisticFunctions[entity][functionName]());
  }
}

// TESTING FUNCTIONS / DEMO FUNCTIONS

module.exports.getAllStatistics = function() {
  var data = [];
  data['UserGraphBarOfAge'] = module.exports.statisticGetMethodForEntity('User', 'GraphBarOfAge');
  data['ComputerGraphCircleOfTypeOfComputer'] = module.exports.statisticGetMethodForEntity('Computer', 'GraphCircleOfTypeOfComputer');
  data['UserGraphRadarOfAge'] = module.exports.statisticGetMethodForEntity('User', 'GraphRadarOfAge')
  data['UserGraphLineOfAge'] = module.exports.statisticGetMethodForEntity('User', 'GraphLineOfAge')
  data['ComputerGraphPolarOfTypeOfComputer'] = module.exports.statisticGetMethodForEntity('Computer', 'GraphPolarOfTypeOfComputer');

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

}
