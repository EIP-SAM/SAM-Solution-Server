var gitManager = require('../../managers/git');
var gitAdapter = require('../../adapters/git');

describe('call to git adapter', function () {

  beforeAll(function () {

  });

  it('should return initNewGitRepo function', function () {
    expect(typeof gitManager.initNewGitRepo === 'function').toBeTruthy();
    spyOn(gitAdapter, 'initNewGitRepo');
    gitManager.initNewGitRepo();
    expect(gitAdapter.initNewGitRepo).toHaveBeenCalledTimes(1);
  });

  it('should return getLastCommitInfo function', function () {
    expect(typeof gitManager.getLastCommitInfo === 'function').toBeTruthy();
    spyOn(gitAdapter, 'getLastCommitInfo');
    gitManager.getLastCommitInfo();
    expect(gitAdapter.getLastCommitInfo).toHaveBeenCalledTimes(1);
  });
});
