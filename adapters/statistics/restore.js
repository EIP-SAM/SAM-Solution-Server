var restoreAdapter = require('../restore.js');

module.exports.numberRestoresPerMonthByUser = function() {
  return new Promise(function(fulfill, reject) {

    restoreAdapter.getRestoresByDay().then(function (saves) {
      var daysOfWeek = ['January', 'February', 'March', 'April', 'May', 'June','July', 'August', 'September', 'October', 'November', 'December'];
      var restoresByMonth = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

      var i = 0;
      var j = 0;
      var k = 0;

      saves.rows.forEach(function(save) {
        i = save.dataValues.execDate.getMonth(save.dataValues.execDate);
        if (i == k){
          restoresByMonth[i] += saves.count[j].count;
        }
        else {
          restoresByMonth[i] = saves.count[j].count;
          k = i;
        }
        j++;
      })

      var returnData = {
        complete: 1,
        type: 'line',
        labels: daysOfWeek,
        title: 'radar : Graphique radar sauvegarde',
        dataset: [
          {
            title: 'Sauvegarde des utilisateurs',
            data: restoresByMonth,
          },
        ]
      };
      fulfill (returnData);
    });
  })
}
