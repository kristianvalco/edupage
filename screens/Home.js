import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS, FONTS, SIZES, SHADOWS } from '../constants';

const Tab = createBottomTabNavigator();

import TodaySchedule from '../screens/TodaySchedule';
import Dashboard from './Dashboard';

const Home = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'ios-home' : 'ios-home';
          } else if (route.name === 'TodaySchedule') {
            iconName = focused ? 'calendar' : 'calendar';
          }

          return <Ionicons name={iconName} size={18} color={color} />;
        },
        tabBarActiveTintColor: COLORS.highlight,
        tabBarInactiveTintColor: COLORS.secondary,
        tabBarStyle: {
          backgroundColor: COLORS.white,
          borderTopWidth: 0,
          ...SHADOWS.dark,
          height: 64,
        },
        tabBarIconStyle: {
          marginTop: SIZES.base,
        },
        tabBarLabelStyle: {
          fontSize: 10,
          fontFamily: FONTS.semiBold,
          marginBottom: SIZES.base,
        },
        headerTitleStyle: {
          fontSize: SIZES.extraLarge,
          fontFamily: FONTS.bold,
          color: COLORS.primary,
        },
        headerStyle: {
          backgroundColor: '#F7F7F9',
          height: 80,
          shadowOffset: {
            height: 0,
          },
        },
        headerTransparent: false,
      })}
      initialRouteName="Dashboard"
    >
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarLabel: 'Domov',
          title: 'Domov',
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="TodaySchedule"
        component={TodaySchedule}
        options={{
          tabBarLabel: 'Dnešný rozvrh',
          title: 'Dnešný rozvrh',
        }}
      />
    </Tab.Navigator>
  )
}

export default Home