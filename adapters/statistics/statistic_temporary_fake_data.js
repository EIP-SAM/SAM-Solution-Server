module.exports.TESTDEFONCTION = function () {

  var returnData = {
    type: 'radar',
    labels: ['janvier', 'fevrier', 'mars'],
    title: 'radar : Graphique radar sauvegarde',
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

module.exports.TESTDEFONCTION2 = function () {

  var returnData = {
    type: 'bar',
    labels: ['janvier', 'fevrier', 'mars'],
    title: 'bar : Graphique barre age',
    dataset: [
      {
        title: 'Age des utilisateurs',
        data: [65, 50, 79]
      },
      {
        title: 'Age des enfants',
        data: [35, 20, 49]
      },
    ]
  };

  return (returnData);
}

module.exports.TESTDEFONCTION3 = function () {
  var returnData = {
    type: 'pie',
    title: 'pie : Graphique type des ordinateurs',
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

module.exports.TESTDEFONCTION4 = function () {
  var returnData = {
    type: 'radar',
    labels: ['janvier', 'fevrier', 'mars'],
    title: 'radar : Graphique radar age',
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

module.exports.TESTDEFONCTION5 = function () {
  var returnData = {
    type: 'line',
    labels: ['janvier', 'fevrier', 'mars'],
    title: 'line : Graphique ligne age',
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

// module.exports.TESTDEFONCTION6 = function () {
//   var returnData = {
//     type: 'polar',
//     title: 'Graphique polaire type des ordinateurs',
//     dataset: [
//       {
//         title: "portable",
//         value: 200,
//       },
//       {
//         title: "fixe",
//         value: 210,
//       },
//       {
//         title: "ultrabook",
//         value: 50,
//       },
//     ]
//   };
//
//   return (returnData);
// }

module.exports.TESTDEFONCTION7 = function () {
  var returnData = {
    type: 'doughnut',
    title: 'doughnut : Graphique type des Sauvegarde',
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

module.exports.TESTDEFONCTION8 = function () {
  var returnData = {
    type: 'radar',
    labels: ['janvier', 'test', 'mars'],
    title: 'radar : Graphique radar sauvegarde',
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
