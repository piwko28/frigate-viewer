import {Navigation} from 'react-native-navigation';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';
import {TopBarButton} from './components/icons/TopBarButton';
import {Author} from './views/author/Author';
import {CameraEventClip} from './views/camera-event-clip/CameraEventClip';
import {Notifications} from './views/notifications/Notifications';
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
import {colors} from './store/colors';
import {Appearance} from 'react-native';

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

Appearance.setColorScheme(null);

registerComponent('CamerasList', CamerasList, viewDecorators);
registerComponent('CameraEvents', CameraEvents, viewDecorators);
registerComponent('CameraEventClip', CameraEventClip, viewDecorators);
registerComponent('Notifications', Notifications, viewDecorators);
registerComponent('Storage', Storage, viewDecorators);
registerComponent('System', System, viewDecorators);
registerComponent('Logs', Logs, viewDecorators);
registerComponent('Settings', Settings, viewDecorators);
registerComponent('Author', Author, viewDecorators);

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
    backgroundColor: colors.background,
  },
  topBar: {
    title: {
      color: colors.text,
    },
    backButton: {
      color: colors.text,
    },
    background: {
      color: colors.background,
    },
  },
});
