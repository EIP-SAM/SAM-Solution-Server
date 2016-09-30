var saveAdapter = require('../saveScheduled.js');

module.exports.numberSavesPerMonthByUser = function() {
  return new Promise(function(fulfill, reject) {

    saveAdapter.getSavesByDay().then(function (saves) {
      var months = ['January', 'February', 'March', 'April', 'May', 'June','July', 'August', 'September', 'October', 'November', 'December'];
      var savesByMonth = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

      var i = 0;
      var j = 0;
      var k = 0;
      saves.rows.forEach(function(save) {
        i = save.dataValues.execDate.getMonth(save.dataValues.execDate);
        if (i == k){
          savesByMonth[i] += saves.count[j].count;
        }
        else {
          savesByMonth[i] = saves.count[j].count;
          k = i;
        }
        j++;
      })

      var returnData = {
        complete: 1,
        type: 'line',
        labels: months,
        title: 'radar : Graphique des Sauvegardes',
        dataset: [
          {
            title: 'Sauvegarde des utilisateurs',
            data: savesByMonth,
          },
        ]
      };
      fulfill (returnData);
    });
  })
}
