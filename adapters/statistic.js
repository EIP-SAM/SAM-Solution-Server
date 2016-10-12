var statManager = require('../managers/statistic');
var dataAdapters = require('./statistics/statistic_temporary_fake_data');
var restoreAdapters = require('./statistics/restore');
var saveAdapters = require('./statistics/save');
var logsAdapters = require('./statistics/logs');

module.exports.registerGraphs = function () {
  statManager.statisticRegisterMethodForEntity('User', 'GraphRadarOfSave', dataAdapters.TESTDEFONCTION);
  statManager.statisticRegisterMethodForEntity('User', 'GraphBarOfAge', dataAdapters.TESTDEFONCTION2);
  statManager.statisticRegisterMethodForEntity('Computer', 'GraphCircleOfTypeOfComputer', dataAdapters.TESTDEFONCTION3);
  statManager.statisticRegisterMethodForEntity('User', 'GraphRadarOfAge', dataAdapters.TESTDEFONCTION4);
  statManager.statisticRegisterMethodForEntity('User', 'GraphLineOfAge', dataAdapters.TESTDEFONCTION5);
  // statManager.statisticRegisterMethodForEntity('Save', 'GraphDoughnutOfTypeOfSave', dataAdapters.TESTDEFONCTION7);
  // statManager.statisticRegisterMethodForEntity('Save', 'GraphRadarOfSave', dataAdapters.TESTDEFONCTION8);
  statManager.statisticRegisterMethodForEntity('Restore', 'GraphLineOfRestore', restoreAdapters.numberRestoresPerMonthByUser);
  statManager.statisticRegisterMethodForEntity('Save', 'GraphLineOfSave', saveAdapters.numberSavesPerMonthByUser);
  statManager.statisticRegisterMethodForEntity('Logs', 'GraphPieOfLogsGroupByModuleName', logsAdapters.numberOfLogsGroupByModuleName);
  statManager.statisticRegisterMethodForEntity('Logs', 'GraphPieOfLogsGroupByLevel', logsAdapters.numberOfLogsGroupByLevel);
};

/*

Pour pouvoir créer un graphique il faut tout d’abord aller dans l’adapter statistic
SAM-Solution-Server/adapters/statistic.js

Comme on peut le voir au-dessus, il faut appeler la méthode « statisticRegisterMethodForEntity »
dans la méthode « registerGraphs » afin de déclarer votre graphe.

Le PREMIER PARAMETRE est le nom de la « catégorie » du graphe, ce nom-là est utilisé comme « filtre »
sur la page de statistique.

Le DEUXIEME PARAMETRE est le nom associé à votre graph, pour l’instant il n’a pas d’impact
mais il pourrait servir dans le cas où nous voudrions afficher que certain graphes d’une « catégorie ».

Le TROISIEME PARAMETRE est la « callback », c’est la fonction qui renverra les données liées au graphe.

Dans mon exemple j’ai créé un adapter d’exemple et y est placé mes callbacks.
SAM-Solution-Server/adapters/statistics/statistic_temporary_fake_data.js

************************
***** CODE EXEMPLE *****
************************

module.exports.TESTDEFONCTION = function () {

  var returnData = {
    type: 'radar',
    labels: ['janvier', 'test', 'mars'],
    title: 'Graphique radar sauvegarde',
    dataset: [
      {
        title: 'Sauvegarde des utilisateurs',
        data: [25, 10, 29]
      },
      {
        title: 'Sauvegarde des enfants',
        data: [25, 10, 29]
      }
    ]
  };

  return (returnData);
}

************************
************************
************************

Le nom de mon callback ici est TESTDEFONCTION. Le rôle de cette fonction est de simplement récupérer
les données de les formater selon le graphe voulu et ensuite de retourner cet objet.

L'objet est composé de plusieurs attributs qui lui sont essentiels.
/!\ EN FONCTION DU TYPE DE GRAPHE VOULU, LES ATTRIBUTS SONT DIFFERENTS /!\

- type : le type de graphe que vous voulez, valeurs possible : radar, bar, pie, line, doughnut.
- titre : Le nom du graphique qui sera affiché juste en dessous du graphe.
- label : correspond au label, attention, en fonction du type de graphe il peut etre necessaire ou non.
- dataset : les données qui seront présente dans le graphe, qui seront différente en fonction du graphe voulu

Vous pouvez consulter les exemples visuels sur http://localhost:3000/statistics

********************************
***** RADAR DATA STRUCTURE *****
********************************

{
  type: 'radar',
  labels: ['janvier', 'fevrier', 'mars'],
  title: 'radar : Graphique radar sauvegarde',
  dataset: [
    {
      title: 'Sauvegarde des utilisateurs',
      data: [25, 10, 29, ...]
    },
    {
      title: 'Sauvegarde des enfants',
      data: [25, 10, 29, ...]
    },
    ...
  ]
}

******************************
***** BAR DATA STRUCTURE *****
******************************

{
  type: 'bar',
  labels: ['janvier', 'fevrier', 'mars', ...],
  title: 'bar : Graphique barre age',
  dataset: [
    {
      title: 'Age des utilisateurs',
      data: [65, 50, 79, ...]
    },
    {
      title: 'Age des enfants',
      data: [35, 20, 49, ...]
    },
    ...
  ]
}

******************************
***** PIE DATA STRUCTURE *****
******************************

{
  type: 'pie',
  title: 'pie : Graphique type des ordinateurs',
  dataset: [
    {
      title: "portable",
      value: 200,
    },
    {
      title: "fixe",
      value: 210,
    },
    {
      title: "ultrabook",
      value: 50,
    },
    ...
  ]
}

*******************************
***** LINE DATA STRUCTURE *****
*******************************

{
  type: 'line',
  labels: ['janvier', 'fevrier', 'mars', ...],
  title: 'line : Graphique ligne age',
  dataset: [
    {
      title: 'Age des utilisateurs',
      data: [65, 50, 79]
    },
    {
      title: 'Age des enfants',
      data: [35, 20, 49]
    },
    ...
  ]
};

***********************************
***** DOUGHNUT DATA STRUCTURE *****
***********************************

{
  type: 'doughnut',
  title: 'Graphique type des Sauvegarde',
  dataset: [
    {
      title: "portable",
      value: 200,
    },
    {
      title: "fixe",
      value: 210,
    },
    {
      title: "ultrabook",
      value: 50,
    },
    ...
  ]
}

*/
