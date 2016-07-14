module.exports = function init() {
  return new Promise(function (fulfill, reject) {

    require('./users').sync().then(function () {
      require('./saveScheduled').sync().then(function () {
        require('./save').sync().then(function () {
          require('./restore').sync().then(function () {
            require('./groups').sync().then(function () {
              require('./usersGroupsRelations').sync().then(function () {
                fulfill();
              });
            });
          });
        });
      });
    });

  });
};
