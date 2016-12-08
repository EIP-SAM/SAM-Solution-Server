//
// Getting migration adapter
//
const migrationAdapter = require('../migration');

//
// Return the numbers of logs group by module name
//
module.exports.getMigrations = function () {
  return new Promise(function(fulfill, reject) {
    migrationAdapter.getMigrationsGroupByStatus().then(function (migrations) {
      let dataset = migrations.map((elem) => (
        {
          title: elem.status,
          value: elem.count,
        }
      ))

      let returnData = {
        complete: 1,
        type: 'pie',
        title: 'Pie: Migrations numbers by status',
        dataset: dataset,
      };

      // console.log('dataset => ', returnData)

      fulfill(returnData);
    }).catch(function(err) {
      reject(err);
    });
  });
};
