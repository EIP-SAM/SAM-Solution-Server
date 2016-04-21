
module.exports.test = function () {

  statisticRegisterMethodForEntity('testdefct', 'name1', function () {
    console.log('sucessor');
  });

  statisticFunctions['testdefct']['name1']();
};
