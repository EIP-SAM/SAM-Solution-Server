module.exports = function initStatisticAdapters(models, adapters, libs) {
  adapters.test = function() {

    libs.statisticRegisterMethodForEntity('testdefct', 'name1', function(){
      console.log('sucessor');
    })

    libs.statisticFunctions['testdefct']['name1']();
  }
};
