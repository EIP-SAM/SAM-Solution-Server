var gitAdapter = require('../../adapters/git');
var gitWorker = require('../../workers/git');

describe('call to git adapter', function () {

  beforeAll(function () {

  });

  it('should return initNewGitRepo function', function () {
    expect(typeof gitAdapter.initNewGitRepo === 'function').toBeTruthy();
    spyOn(gitWorker, 'initNewGitRepo');
    gitAdapter.initNewGitRepo();
    expect(gitWorker.initNewGitRepo).toHaveBeenCalledTimes(1);
  });

  it('should return getLastCommitInfo function', function () {
    expect(typeof gitAdapter.getLastCommitInfo === 'function').toBeTruthy();
    spyOn(gitWorker, 'getLastCommitInfo');
    gitAdapter.getLastCommitInfo();
    expect(gitWorker.getLastCommitInfo).toHaveBeenCalledTimes(1);
  });
});
