import { createStackNavigator } from '@react-navigation/stack';
import {
  BOTTOM_NAVIGATOR_TAB,
  SPLASH_SCREEN,
  ON_BOARDING_1,
  LOG_IN,
} from '../constants/routes';
import SplashScreen from '../screens/SplashScreen';
import onBoardingScreen1 from '../screens/onBoarding/onBoardingScreen1';
import LogInScreen from '../screens/LogInScreen';
import BottomTabNavigator from './BottomNavigator';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={SPLASH_SCREEN}>
      <Stack.Screen name={SPLASH_SCREEN} component={SplashScreen} />
      <Stack.Screen name={ON_BOARDING_1} component={onBoardingScreen1} />
      <Stack.Screen name={LOG_IN} component={LogInScreen} />
      <Stack.Screen name={BOTTOM_NAVIGATOR_TAB} component={BottomTabNavigator} />
    </Stack.Navigator>
  );
}

export default StackNavigator;
