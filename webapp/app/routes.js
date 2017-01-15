// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business
// import { getHooks } from 'utils/hooks';

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = cb => (componentModule) => {
  cb(null, componentModule.default);
};

export default function createRoutes() {
  // Create reusable async injectors using getHooks factory
  // const { injectReducer, injectSagas } = getHooks(store);

  return [
    {
      path: '/',
      name: 'home',
      getComponent(nextState, cb) {
        System.import('containers/Dashboard')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    }, {
      path: '/dashboard',
      name: 'dashboard',
      getComponent(nextState, cb) {
        System.import('containers/Dashboard')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    }, {
      path: '/logs',
      name: 'logs',
      getComponent(nextState, cb) {
        System.import('components/Logs')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    }, {
      path: '/statistics',
      name: 'statistics',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/Stats'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([component]) => {
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/login',
      name: 'login',
      getComponent(nextState, cb) {
        System.import('containers/Login')
        .then(loadModule(cb))
        .catch(errorLoading);
      },
    }, {
      path: '/forgotten-password',
      name: 'forgotten password',
      getComponent(nextState, cb) {
        System.import('containers/ForgottenPassword')
        .then(loadModule(cb))
        .catch(errorLoading);
      },
    }, {
      path: '/create-user',
      name: 'create user',
      getComponent(nextState, cb) {
        System.import('containers/CreateUser')
        .then(loadModule(cb))
        .catch(errorLoading);
      },
    }, {
      path: '/create-group',
      name: 'create group',
      getComponent(nextState, cb) {
        System.import('containers/CreateGroup')
        .then(loadModule(cb))
        .catch(errorLoading);
      },
    }, {
      path: '/edit-user/:id',
      name: 'edit user',
      getComponent(nextState, cb) {
        System.import('containers/EditUser')
        .then(loadModule(cb))
        .catch(errorLoading);
      },
    }, {
      path: '/edit-group/:name/:id',
      name: 'edit group',
      getComponent(nextState, cb) {
        System.import('containers/EditGroup')
        .then(loadModule(cb))
        .catch(errorLoading);
      },
    }, {
      path: '/users',
      name: 'users',
      getComponent(nextState, cb) {
        System.import('containers/Users')
        .then(loadModule(cb))
        .catch(errorLoading);
      },
    }, {
      path: '/groups',
      name: 'groups',
      getComponent(nextState, cb) {
        System.import('containers/Groups')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    }, {
      path: '/save',
      name: 'save',
      getComponent(nextState, cb) {
        System.import('containers/Save')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    }, {
      path: '/save/:username/:id',
      name: 'history save',
      getComponent(nextState, cb) {
        System.import('containers/SaveHistory')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    }, {
      path: '/create-save',
      name: 'creation save',
      getComponent(nextState, cb) {
        System.import('containers/SaveCreation')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    }, {
      path: '/restore',
      name: 'restore',
      getComponent(nextState, cb) {
        System.import('containers/Restore')
         .then(loadModule(cb))
         .catch(errorLoading);
      },
    }, {
      path: '/restore/:username',
      name: 'history restore',
      getComponent(nextState, cb) {
        System.import('containers/RestoreHistory')
        .then(loadModule(cb))
        .catch(errorLoading);
      },
    }, {
      path: '/create-restore/:username',
      name: 'createRestore',
      getComponent(nextState, cb) {
        System.import('containers/RestoreCreation')
        .then(loadModule(cb))
        .catch(errorLoading);
      },
    }, {
      path: '/software/:username/:id',
      name: 'softwareByUser',
      getComponent(nextState, cb) {
        System.import('containers/SoftwaresByUser')
        .then(loadModule(cb))
        .catch(errorLoading);
      },
    }, {
      path: '/images',
      name: 'images',
      getComponent(nextState, cb) {
        System.import('components/ImageManagement')
        .then(loadModule(cb))
        .catch(errorLoading);
      },
    },
    {
      path: '/migration/history',
      name: 'migrationHistory',
      getComponent(nextState, cb) {
        System.import('components/MigrationHistory')
        .then(loadModule(cb))
        .catch(errorLoading);
      },
    }, {
      path: '/software',
      name: 'software',
      getComponent(nextState, cb) {
        System.import('containers/Software')
        .then(loadModule(cb))
        .catch(errorLoading);
      },
    }, {
      path: '/notifications',
      name: 'Notifications',
      getComponent(nextState, cb) {
        System.import('containers/Notifications')
        .then(loadModule(cb))
        .catch(errorLoading);
      },
    }, {
      path: '/dashboard/:username/:id',
      name: 'dashboard by user',
      getComponent(nextState, cb) {
        System.import('containers/DashboardByUser')
        .then(loadModule(cb))
        .catch(errorLoading);
      },
    }, {
      path: '*',
      name: 'notfound',
      getComponent(nextState, cb) {
        System.import('containers/PageNotFound')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
  ];
}
