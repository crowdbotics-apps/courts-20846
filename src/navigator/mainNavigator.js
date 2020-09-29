import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen0116846Navigator from '../features/BlankScreen0116846/navigator';
import UserProfile116845Navigator from '../features/UserProfile116845/navigator';
import Maps116826Navigator from '../features/Maps116826/navigator';
import Settings116804Navigator from '../features/Settings116804/navigator';
import Settings116789Navigator from '../features/Settings116789/navigator';
import NotificationList116788Navigator from '../features/NotificationList116788/navigator';
import Maps116787Navigator from '../features/Maps116787/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen0116846: { screen: BlankScreen0116846Navigator },
UserProfile116845: { screen: UserProfile116845Navigator },
Maps116826: { screen: Maps116826Navigator },
Settings116804: { screen: Settings116804Navigator },
Settings116789: { screen: Settings116789Navigator },
NotificationList116788: { screen: NotificationList116788Navigator },
Maps116787: { screen: Maps116787Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
