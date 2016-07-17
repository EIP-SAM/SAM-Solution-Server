var gitWorker = require('../../workers/git');
var Git = require('../../libs/nodegit');
var conf = require('../../config/git.config.json');

var userName = 'bernar_w';
var pathToRepo = conf.baseDir + userName + '/' ;

var promiseRepo = new Promise(function (resolve, reject) {
  resolve(repo);

});

describe('getLastCommitInfo from a git repository', function () {
  it('should return a promise containing an object with commit info', function () {
    spyOn(Git.Repository, 'open').and.returnValue(promiseRepo);
    var ret = gitWorker.getLastCommitInfo((0, userName));

    expect(Git.Repository.open).toHaveBeenCalledTimes(1);
  });
});

describe('the initisilization of a git repository', function () {
  it('should return shoud create the repo and return its path', function () {
    spyOn(Git.Repository, 'init').and.returnValue(promiseRepo);
    spyOn(promiseRepo, 'catch').and.returnValue(promiseRepo);
    spyOn(promiseRepo, 'then').and.returnValue(promiseRepo);

    var ret = gitWorker.initNewGitRepo(userName);
    expect(ret).toBe(pathToRepo);
    expect(Git.Repository.init).toHaveBeenCalledTimes(1);
    expect(Git.Repository.init).toHaveBeenCalledWith(pathToRepo, 1);
    expect(promiseRepo.then).toHaveBeenCalled();
    expect(promiseRepo.catch).toHaveBeenCalled();
  });
});
