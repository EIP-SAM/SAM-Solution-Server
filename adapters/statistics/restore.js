const restoreAdapter = require('../restore.js');

module.exports.numberRestoresPerMonthByUser = () => new Promise((fulfill) => {
  restoreAdapter.getRestoresByDay().then((saves) => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const restoresByMonth = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    let i = 0;
    let j = 0;
    let k = 0;

    saves.rows.forEach((save) => {
      i = save.dataValues.execDate.getMonth(save.dataValues.execDate);
      if (i === k) {
        restoresByMonth[i] += saves.count[j].count;
      } else {
        restoresByMonth[i] = saves.count[j].count;
        k = i;
      }
      j += 1;
    });

    const returnData = {
      complete: 1,
      type: 'line',
      labels: months,
      title: 'radar : Restorations graph',
      dataset: [
        {
          title: 'Users save',
          data: restoresByMonth,
        },
      ],
    };
    fulfill(returnData);
  });
});

//
// Return the restores numbers of logs group by success / error
//
module.exports.RestoresGroupBySuccessFailure = () => new Promise((fulfill) => {
  restoreAdapter.getAllFinishedRestore().then((restores) => {
    let success = 0;
    let errors = 0;

    restores.forEach((restore) => {
      if (restore.isSuccess === true) {
        success += 1;
      } else {
        errors += 1;
      }
    });

    const returnData = {
      complete: 1,
      type: 'pie',
      title: 'Success and Failure restorations',
      dataset: [
        {
          title: 'Success restoration',
          value: success,
        }, {
          title: 'Fail restoration',
          value: errors,
        },
      ],
    };

    fulfill(returnData);
  });
});
