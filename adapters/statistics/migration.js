//
// Getting migration adapter
//
const migrationAdapter = require('../migration');

//
// Return the numbers of logs group by module name
//
module.exports.getMigrations = () => new Promise((fulfill, reject) => {
  migrationAdapter.getMigrationsGroupByStatus().then((migrations) => {
    const dataset = migrations.map(elem => (
      {
        title: elem.status,
        value: elem.count,
      }
      ));

    const returnData = {
      complete: 1,
      type: 'pie',
      title: 'Pie: Migrations numbers by status',
      dataset,
    };

      // console.log('dataset => ', returnData)

    fulfill(returnData);
  }).catch((err) => {
    reject(err);
  });
});
