const saveAdapter = require('../saveScheduled.js');

module.exports.numberSavesPerMonthByUser = () => new Promise((fulfill) => {
  saveAdapter.getSavesByDay().then((saves) => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const savesByMonth = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    let i = 0;
    let j = 0;
    let k = 0;
    saves.rows.forEach((save) => {
      i = save.dataValues.execDate.getMonth(save.dataValues.execDate);
      if (i === k) {
        savesByMonth[i] += saves.count[j].count;
      } else {
        savesByMonth[i] = saves.count[j].count;
        k = i;
      }
      j += 1;
    });

    const returnData = {
      complete: 1,
      type: 'line',
      labels: months,
      title: 'radar : Saves graph',
      dataset: [
        {
          title: 'Users save',
          data: savesByMonth,
        },
      ],
    };
    fulfill(returnData);
  });
});

//
// Return the saves numbers of logs group by success / error
//
module.exports.RestoresGroupBySuccessFailure = () => new Promise((fulfill) => {
  saveAdapter.getAllFinishedRestore().then((saves) => {
    let success = 0;
    let errors = 0;

    saves.forEach((save) => {
      if (save.isSuccess === true) {
        success += 1;
      } else {
        errors += 1;
      }
    });

    const returnData = {
      complete: 1,
      type: 'pie',
      title: 'Success and Failure saves',
      dataset: [
        {
          title: 'Success save',
          value: success,
        }, {
          title: 'Fail save',
          value: errors,
        },
      ],
    };

    fulfill(returnData);
  });
});
