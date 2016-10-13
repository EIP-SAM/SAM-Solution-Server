module.exports.TESTDEFONCTION = function () {
  return new Promise(function(fulfill, reject) {
    var returnData = {
      complete: 1,
      type: 'radar',
      labels: ['January', 'February', 'March'],
      title: 'radar : Save radar graph',
      dataset: [
        {
          title: 'Save users',
          data: [25, 10, 29]
        },
        {
          title: 'Save childrens',
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
      labels: ['January', 'February', 'March'],
      title: 'bar : Age bar graph',
      dataset: [
        {
          title: 'Users age',
          data: [65, 50, 79]
        },
        {
          title: 'Childrens age',
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
      title: 'pie : Computer types pie graph',
      dataset: [
        {
          title: "laptop",
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
      labels: ['January', 'February', 'March'],
      title: 'radar : Age radar graph',
      dataset: [
        {
          title: 'Users age',
          data: [65, 50, 79]
        },
        {
          title: 'Childrens age',
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
      labels: ['January', 'February', 'March'],
      title: 'line : Age line graph',
      dataset: [
        {
          title: 'Users age',
          data: [65, 50, 79]
        },
        {
          title: 'Childrens age',
          data: [35, 20, 49]
        }
      ]
    };

    fulfill (returnData);
  });
}

module.exports.TESTDEFONCTION7 = function () {
  return new Promise(function(fulfill, reject) {
    var returnData = {
      complete: 1,
      type: 'doughnut',
      title: 'doughnut : Save graph type',
      dataset: [
        {
          title: "laptop",
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
      labels: ['January', 'February', 'March'],
      title: 'radar : Save radar graph',
      dataset: [
        {
          title: 'Users save',
          data: [25, 10, 29]
        },
        {
          title: 'Childrens save',
          data: [25, 10, 29]
        }
      ]
    };

    fulfill (returnData);
  });
}
