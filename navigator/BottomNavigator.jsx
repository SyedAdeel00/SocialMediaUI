import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Image,View} from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import GroupScreen from '../screens/GroupScreen';
import SearchScreen from '../screens/SearchScreen';
import ProfileScreen from '../screens/ProfileScreen';
import PostScreen from '../screens/PostScreen';
import { HOME_SCREEN, GROUP_SCREEN, SEARCH_SCREEN, PROFILE_SCREEN, POST_SCREEN} from '../constants/routes';

const BottomTab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          backgroundColor: 'rgba(44, 203, 137, 1)',
          borderTopWidth: 0,
        }
      }}
      
    >
      <BottomTab.Screen
        name={HOME_SCREEN}
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => (
            <Image
              source={require('../assets/icons_home.png')}
              style={{
                width: 24,
                height: 24,
              }}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name={GROUP_SCREEN}
        component={GroupScreen}
        options={{
          tabBarLabel: 'Group',
          tabBarIcon: () => (
            
            <Image
              source={require('../assets/icons_group.png')}
              style={{
                width: 30,
                height: 30,
               
              }}
            />

          ),
        }}
      />
      <BottomTab.Screen
        name={POST_SCREEN}
        component={PostScreen}
        options={{
          tabBarLabel: 'Post',
          tabBarIcon: () => (
            <View>
            <Image
              source={require('../assets/plus.png')}
              style={{
                top: -25,
                width: 60,
                height: 60,
                borderRadius:100,
                borderColor: 'green',
    borderWidth: 2,
              }}
            />
            </View>
          ),
        }}
      />
      <BottomTab.Screen
        name={SEARCH_SCREEN}
        component={SearchScreen}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: () => (
            <Image
              source={require('../assets/icons_search.png')}
              style={{
                width: 24,
                height: 24,
              }}
            />  
          ),
        }}
      />
        <BottomTab.Screen
        name={PROFILE_SCREEN}
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: () => (
            <Image
              source={require('../assets/icons_search.png')}
              style={{
                width: 24,
                height: 24,
              }}
            />  
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
