import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Entypo';
import Icons from 'react-native-vector-icons/Ionicons';
import IconsF from 'react-native-vector-icons/FontAwesome';

import Home from '../component/home/Home';
import Favorite from '../component/home/Favorite';
import Shopping from '../component/home/Shopping';
import Notification from '../component/home/Notification';
import Profile from '../component/home/Profile';
import sizes from '../res/sizes';

const Tab = createBottomTabNavigator();

function ButtonTabbar() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabelStyle: {
            fontSize: sizes._font_size_big_big,
            marginBottom: sizes._7sdp,
          },
          tabBarIcon: ({focused, size, color}) => {
            return focused ? (
              <>
                <Icon name="home" color={color} size={size} />
              </>
            ) : (
              <Icon name="home" color={color} size={size} />
            );
          },
          headerShown: false,
          tabBarStyle: {
            borderTopRightRadius: sizes._20sdp,
            borderTopLeftRadius: sizes._20sdp,
            backgroundColor: '#FFFFFF',
            height: sizes._70sdp,
          },
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={Favorite}
        options={{
          tabBarLabelStyle: {
            fontSize: sizes._font_size_big_big,
            marginBottom: sizes._7sdp,
          },
          tabBarIcon: ({focused, size, color}) => {
            return focused ? (
              <Icon name="heart" color={color} size={size} />
            ) : (
              <Icon name="heart" color={color} size={size} />
            );
          },
          headerShown: false,
          tabBarStyle: {
            borderTopRightRadius: sizes._20sdp,
            borderTopLeftRadius: sizes._20sdp,
            backgroundColor: '#FFFFFF',
            height: sizes._70sdp,
          },
        }}
      />
      <Tab.Screen
        name="Shopping"
        component={Shopping}
        options={{
          tabBarLabelStyle: {
            fontSize: sizes._font_size_big_big,
            marginBottom: sizes._7sdp,
          },
          tabBarIcon: ({focused, color, size}) => {
            return focused ? (
              <IconsF name="shopping-cart" color={color} size={size} />
            ) : (
              <IconsF name="shopping-cart" color={color} size={size} />
            );
          },
          headerShown: false,
          tabBarStyle: {
            borderTopRightRadius: sizes._20sdp,
            borderTopLeftRadius: sizes._20sdp,
            backgroundColor: '#FFFFFF',
            height: sizes._70sdp,
          },
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          tabBarLabelStyle: {
            fontSize: sizes._font_size_big_big,
            marginBottom: sizes._7sdp,
          },
          tabBarIcon: ({focused, color, size}) => {
            return focused ? (
              <Icons name="notifications" color={color} size={size} />
            ) : (
              <Icons name="notifications" color={color} size={size} />
            );
          },
          headerShown: false,
          tabBarStyle: {
            borderTopRightRadius: sizes._20sdp,
            borderTopLeftRadius: sizes._20sdp,
            backgroundColor: '#FFFFFF',
            height: sizes._70sdp,
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabelStyle: {
            fontSize: sizes._font_size_big_big,
            marginBottom: sizes._7sdp,
          },
          tabBarIcon: ({focused, color, size}) => {
            return focused ? (
              <IconsF name="user" color={color} size={size} />
            ) : (
              <IconsF name="user" color={color} size={size} />
            );
          },
          tabBarStyle: {
            borderTopRightRadius: sizes._20sdp,
            borderTopLeftRadius: sizes._20sdp,
            backgroundColor: '#FFFFFF',
            height: sizes._70sdp,
          },

          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}
export default ButtonTabbar;
