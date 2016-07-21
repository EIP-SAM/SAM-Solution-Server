module.exports.TESTDEFONCTION = function () {
  return new Promise(function(fulfill, reject) {
    var returnData = {
      complete: 1,
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

    fulfill (returnData);
  });
}

module.exports.TESTDEFONCTION2 = function () {
  return new Promise(function(fulfill, reject) {
    var returnData = {
      complete: 1,
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

    fulfill (returnData);
  });
}

module.exports.TESTDEFONCTION3 = function () {
  return new Promise(function(fulfill, reject) {
    var returnData = {
      complete: 1,
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

    fulfill (returnData);
  });
}

module.exports.TESTDEFONCTION4 = function () {
  return new Promise(function(fulfill, reject) {
    var returnData = {
      complete: 1,
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

    fulfill (returnData);
  });
}

module.exports.TESTDEFONCTION5 = function () {
  return new Promise(function(fulfill, reject) {
    var returnData = {
      complete: 1,
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

    fulfill (returnData);
  });
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
  return new Promise(function(fulfill, reject) {
    var returnData = {
      complete: 1,
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

    fulfill (returnData);
  });
}

module.exports.TESTDEFONCTION8 = function () {
  return new Promise(function(fulfill, reject) {
    var returnData = {
      complete: 1,
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

    fulfill (returnData);
  });
}
