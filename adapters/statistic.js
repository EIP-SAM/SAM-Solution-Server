var statManager = require('../managers/statistic');

module.exports.registerGraphs = function () {
  statManager.statisticRegisterMethodForEntity('User', 'GraphRadarOfSave', TESTDEFONCTION);
  statManager.statisticRegisterMethodForEntity('User', 'GraphBarOfAge', TESTDEFONCTION2);
  statManager.statisticRegisterMethodForEntity('Computer', 'GraphCircleOfTypeOfComputer', TESTDEFONCTION3);
  statManager.statisticRegisterMethodForEntity('User', 'GraphRadarOfAge', TESTDEFONCTION4);
  statManager.statisticRegisterMethodForEntity('User', 'GraphLineOfAge', TESTDEFONCTION5);
  statManager.statisticRegisterMethodForEntity('Computer', 'GraphPolarOfTypeOfComputer', TESTDEFONCTION6);
  statManager.statisticRegisterMethodForEntity('Save', 'GraphDoughnutOfTypeOfSave', TESTDEFONCTION7);
  statManager.statisticRegisterMethodForEntity('Save', 'GraphRadarOfSave', TESTDEFONCTION8);
};

function TESTDEFONCTION () {

  var returnData = {
    type: 'radar',
    labels: ['janvier', 'test', 'mars'],
    title: 'Graphique radar sauvegarde',
    dataset: [
      {
        title: 'Sauvegarde des utilisateurs',
        data: [25, 10, 29]
      },
      {
        title: 'Sauvegarde des enfants',
        data: [25, 10, 29]
      }
    ]
  };

  return (returnData);
}

function TESTDEFONCTION2 () {

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
}

function TESTDEFONCTION3 () {
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
}

function TESTDEFONCTION4 () {
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
}

function TESTDEFONCTION5 () {
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
}

function TESTDEFONCTION6 () {
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
}

function TESTDEFONCTION7 () {
  var returnData = {
    type: 'doughnut',
    title: 'Graphique type des Sauvegarde',
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
}

function TESTDEFONCTION8 () {
  var returnData = {
    type: 'radar',
    labels: ['janvier', 'test', 'mars'],
    title: 'Graphique radar sauvegarde',
    dataset: [
      {
        title: 'Sauvegarde des utilisateurs',
        data: [25, 10, 29]
      },
      {
        title: 'Sauvegarde des enfants',
        data: [25, 10, 29]
      }
    ]
  };

  return (returnData);
}
