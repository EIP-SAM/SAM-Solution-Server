//
// Getting migration adapter
//
const migrationAdapter = require('../migration');

//
// Return the numbers of logs group by module name
//
module.exports.getMigrations = function () {
  return new Promise(function(fulfill, reject) {
    migrationAdapter.getMigrations().then(function (migrations) {
      let dataset = migrations.map((elem, index) => (
        {
          status: elem.status,
        }
      ));

      let returnData = {
        complete: 1,
        type: 'pie',
        title: 'Pie: Migrations numbers by status',
        dataset: dataset,
      };

      fulfill(returnData);
    }).catch(function(err) {
      reject(err);
    });
  });
};
