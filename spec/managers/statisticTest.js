var statManager = require('../../managers/statistic');

describe("Register/Get method for Entity", function() {
  it("should add a method to the methods array and get the method result", function(){

    statManager.statisticRegisterMethodForEntity('UserTest', 'GraphBarOfAgeTest', function() {

      var returnData = {
        type: 'bar',
        labels: ['janvier', 'fevrier', 'mars'],
        title: 'Graphique barre age',
        dataset: [
          {
            title: 'Age des utilisateurs',
            data: [65, 50, 79]
          },
          {
            title: 'Age des enfants',
            data: [35, 20, 49]
          },
        ]
      };

      return (returnData);
    });

    var result = statManager.statisticGetMethodForEntity('UserTest', 'GraphBarOfAgeTest');

    expect(result).not.toBeNull();
    expect('object' === typeof result).toBeTruthy();
  })
});
