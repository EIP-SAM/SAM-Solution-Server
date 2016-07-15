// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business
// import { getHooks } from 'utils/hooks';

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
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
        const importModules = Promise.all([
          // System.import('components/HomePage'),
          // System.import('components/Login'),
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
      }
    }, {
      path: '/forgotten-password',
      name: 'forgotten password',
      getComponent(nextState, cb) {
        System.import('containers/ForgottenPassword')
        .then(loadModule(cb))
        .catch(errorLoading);
      }
    }, {
      path: '/register',
      name: 'register',
      getComponent(nextState, cb) {
        System.import('containers/Register')
        .then(loadModule(cb))
        .catch(errorLoading);
      }
    }, {
      path: '/edit-user/:username',
      name: 'edit user',
      getComponent(nextState, cb) {
        System.import('containers/EditUser')
        .then(loadModule(cb))
        .catch(errorLoading);
      }
    }, {
      path: '/edit-group/:groupname',
      name: 'edit group',
      getComponent(nextState, cb) {
        System.import('containers/EditGroup')
        .then(loadModule(cb))
        .catch(errorLoading);
      }
    }, {
      path: '/users',
      name: 'users',
      getComponent(nextState, cb) {
        System.import('containers/Users')
        .then(loadModule(cb))
        .catch(errorLoading);
      }
    }, {
        path: '/groups',
        name: 'groups',
        getComponent(nextState, cb) {
          System.import('containers/Groups')
          .then(loadModule(cb))
          .catch(errorLoading);
        }
      }, /* {
      path: '*',
      name: 'notfound',
      getComponent(nextState, cb) {
        System.import('components/NotFoundPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },*/
  ];
}
