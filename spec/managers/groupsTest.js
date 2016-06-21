// var groupsManager = require('../../managers/groups');
// var groupsAdapter = require('../../adapters/groups');
//
// describe('retrieveAllGroups', function () {
//   var req = { session: {} };
//   var res = {};
//   var groups = groupsManager.retrieveAllGroups(req, res);
//
//   it('should not return null', function () {
//     expect(groups).not.toBeNull();
//   });
//
//   it('should return a promise', function () {
//     expect(typeof groups.then === 'function').toBeTruthy();
//   });
//
//   it('should have called findAll once', function () {
//     spyOn(groupsAdapter, 'findAll');
//     groupsManager.retrieveAllGroups(req, res);
//     expect(groupsAdapter.findAll).toHaveBeenCalledTimes(1);
//   });
// });
//
// describe('updateGroups', function () {
//   var params;
//   var group = groupsManager.updateGroups(params);
//
//   it('should return a function', function () {
//     expect(typeof group === 'function').toBeTruthy();
//   });
// });
//
// describe('createGroups', function () {
//   var params;
//   var group = groupsManager.createGroups(params);
//
//   it('should return a function', function () {
//     expect(typeof group === 'function').toBeTruthy();
//   });
// });
//
// describe('deleteGroups', function () {
//   var params;
//   var group = groupsManager.deleteGroups(params);
//
//   it('should return a function', function () {
//     expect(typeof group === 'function').toBeTruthy();
//   });
// });
//
// describe('addUsersToGroup', function () {
//   var params;
//   var group = groupsManager.addUsersToGroup(params);
//
//   it('should return a function', function () {
//     expect(typeof group === 'function').toBeTruthy();
//   });
// });
