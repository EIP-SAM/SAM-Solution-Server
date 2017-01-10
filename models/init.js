//
// Init all models
//

/* eslint global-require: "off" */

module.exports = function init() {
  return new Promise((fulfill) => {
    require('./users').sync().then(() => {
      require('./saveScheduled').sync().then(() => {
        require('./save').sync().then(() => {
          require('./restore').sync().then(() => {
            require('./groups').sync().then(() => {
              require('./usersGroupsRelations').sync().then(() => {
                require('./migration').sync().then(() => {
                  require('./image').sync().then(() => {
                    require('./daemonCommand').sync().then(() => {
                      fulfill();
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  });
};
