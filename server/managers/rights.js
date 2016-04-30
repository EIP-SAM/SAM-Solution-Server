//
// Table of all the possible base rights for each module
// An object represent a bit contained in the `baseRights` 32 bits integer in
// the group model, and describe its representation as a right
const modulesRights = [

  //
  // Representation example:
  // { pos: 0, moduleName: 'moduleExample', rightName: 'rightExample', defaultValue: false },
  // ...
];

//
// Possible modules concerned by the base rights
const concernedModules = [
];

//
// Init the table `modulesRights` with 32 empty objects
for (var i = 0; i != 32; ++i) {
  modulesRights[i] = { pos: i, moduleName: null, rightName: null, defaultValue: null };
}

module.exports.createRight = function (moduleName, rightName, defaultValue) {
  // Add `moduleName` in `concernedModule`
  // Segmenter le tableau `modulesRights` en groupes de cases representant le nombre de `concernedModules` ((32 / x) - (32 % x))
  // Push l'element dans le segment de tableau, apres le dernier element du meme module
  // Woila
};

module.exports.getRightForUser = function (moduleName, rightName, user) {
  // Recuperer le groupe lie a l'user (user.groups[0])
  // Recuperer l'objet concerne dans modulesRights (via moduleName & rightName)
  // Lire l'objet recupere precedement, lire la position, et retourner le bit a la position donnee dans `baseRights` tel un booleen

  // Dans un second temps, il faudra parcourir tous les groupes du user, et recuperer le droit le plus permissif
  return (false);
};

function test() {
  getRightForUser = module.exports.getRightForUser;
  createRight = module.exports.createRight;

  createRight('saveAndRestore', 'manualSave', true);
  createRight('saveAndRestore', 'manualRestore', true);
  createRight('saveAndRestore', 'automaticSave', true);
  createRight('saveAndRestore', 'automaticRestore', true);

  createRight('migration', 'manualMigration', false);
  createRight('migration', 'automaticMigration', true);

  createRight('softwarePackages', 'manualInstallation', false);
  createRight('softwarePackages', 'manualUpdate', false);
  createRight('softwarePackages', 'manualDeletion', false);
  createRight('softwarePackages', 'automaticInstallation', true);
  createRight('softwarePackages', 'automaticUpdate', true);
  createRight('softwarePackages', 'automaticDeletion', true);

  console.log('saveAndRestore->manualSave = ' + getRightForUser('saveAndRestore', 'manualSave', null));
  console.log('saveAndRestore->manualRestore = ' + getRightForUser('saveAndRestore', 'manualRestore', null));
  console.log('saveAndRestore->automaticSave = ' + getRightForUser('saveAndRestore', 'automaticSave', null));
  console.log('saveAndRestore->automaticRestore = ' + getRightForUser('saveAndRestore', 'automaticRestore', null));

  console.log('migration->manualMigration = ' + getRightForUser('migration', 'manualMigration', null));
  console.log('migration->automaticMigration = ' + getRightForUser('migration', 'automaticMigration', null));

  console.log('softwarePackages->manualInstallation = ' + getRightForUser('softwarePackages', 'manualInstallation', null));
  console.log('softwarePackages->manualUpdate = ' + getRightForUser('softwarePackages', 'manualUpdate', null));
  console.log('softwarePackages->manualDeletion = ' + getRightForUser('softwarePackages', 'manualDeletion', null));
  console.log('softwarePackages->automaticInstallation = ' + getRightForUser('softwarePackages', 'automaticInstallation', null));
  console.log('softwarePackages->automaticUpdate = ' + getRightForUser('softwarePackages', 'automaticUpdate', null));
  console.log('softwarePackages->automaticDeletion = ' + getRightForUser('softwarePackages', 'automaticDeletion', null));
}

test();
