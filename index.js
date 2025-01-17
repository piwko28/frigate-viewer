import {Navigation} from 'react-native-navigation';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';
import {TopBarButton} from './components/icons/TopBarButton';
import {Author} from './views/author/Author';
import {Report} from './views/report/Report';
import {CameraEventClip} from './views/camera-event-clip/CameraEventClip';
import {CameraPreview} from './views/camera-preview/CameraPreview';
import {CameraEvents} from './views/camera-events/CameraEvents';
import {CamerasList} from './views/cameras-list/CamerasList';
import {EventsFilters} from './views/events-filters/EventsFilters';
import {Menu} from './views/menu/Menu';
import {Settings} from './views/settings/Settings';
import {withRedux} from './helpers/redux';
import {withTranslations} from './helpers/locale';
import {Logs} from './views/logs/Logs';
import {Storage} from './views/storage/Storage';
import {System} from './views/system/System';
import {ServerForm} from './views/settings/ServerForm';

const registerComponent = (name, component, decorators = []) => {
  Navigation.registerComponent(
    name,
    () =>
      decorators.reduce(
        (decoratedComponent, decorator) => decorator(decoratedComponent),
        component,
      ),
    () => component,
  );
};

const viewDecorators = [gestureHandlerRootHOC, withTranslations, withRedux];

registerComponent('CamerasList', CamerasList, viewDecorators);
registerComponent('CameraEvents', CameraEvents, viewDecorators);
registerComponent('CameraEventClip', CameraEventClip, viewDecorators);
registerComponent('CameraPreview', CameraPreview, viewDecorators);
registerComponent('Storage', Storage, viewDecorators);
registerComponent('System', System, viewDecorators);
registerComponent('Logs', Logs, viewDecorators);
registerComponent('Settings', Settings, viewDecorators);
registerComponent('ServerForm', ServerForm, viewDecorators);
registerComponent('Author', Author, viewDecorators);
registerComponent('Report', Report, viewDecorators);

registerComponent('Menu', Menu, [
  gestureHandlerRootHOC,
  withTranslations,
  withRedux,
]);
registerComponent('EventsFilters', EventsFilters, [
  withTranslations,
  withRedux,
]);
registerComponent('TopBarButton', TopBarButton);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      sideMenu: {
        center: {
          stack: {
            id: 'MainMenu',
            children: [
              {
                component: {
                  name: 'CamerasList',
                },
              },
            ],
          },
        },
        left: {
          component: {
            id: 'Menu',
            name: 'Menu',
          },
        },
        right: {
          component: {
            id: 'EventsFilters',
            name: 'EventsFilters',
          },
        },
        options: {
          sideMenu: {
            left: {
              enabled: false,
            },
            right: {
              enabled: false,
            },
          },
        },
      },
    },
  });
});

Navigation.setDefaultOptions({
  statusBar: {
    backgroundColor: 'black',
  },
  topBar: {
    title: {
      color: 'white',
    },
    backButton: {
      color: 'white',
    },
    background: {
      color: 'black',
    },
  },
});
