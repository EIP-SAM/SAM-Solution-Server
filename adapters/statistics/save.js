const saveAdapter = require('../saveScheduled.js');

module.exports.numberSavesPerMonthByUser = () => new Promise((fulfill, reject) => {
  saveAdapter.getSavesByDay().then((saves) => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const savesByMonth = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    let i = 0;
    let j = 0;
    let k = 0;
    saves.rows.forEach((save) => {
      i = save.dataValues.execDate.getMonth(save.dataValues.execDate);
      if (i == k) {
        savesByMonth[i] += saves.count[j].count;
      } else {
        savesByMonth[i] = saves.count[j].count;
        k = i;
      }
      j++;
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
