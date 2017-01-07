module.exports = function init() {
  return new Promise((fulfill, reject) => {
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
