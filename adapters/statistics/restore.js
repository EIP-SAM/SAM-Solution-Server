const restoreAdapter = require('../restore.js');

module.exports.numberRestoresPerMonthByUser = () => new Promise((fulfill, reject) => {
  restoreAdapter.getRestoresByDay().then((saves) => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const restoresByMonth = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    let i = 0;
    let j = 0;
    let k = 0;

    saves.rows.forEach((save) => {
      i = save.dataValues.execDate.getMonth(save.dataValues.execDate);
      if (i == k) {
        restoresByMonth[i] += saves.count[j].count;
      } else {
        restoresByMonth[i] = saves.count[j].count;
        k = i;
      }
      j++;
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
