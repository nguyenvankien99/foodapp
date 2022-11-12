import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SlapScren from '../component/SlapScren';
import Login from '../component/login/Login';
import ForgotPassword from '../component/login/ForgotPassword';
import OTP from '../component/login/OTP';
import ChangePass from '../component/login/ChangePass';
import HomeScreen from './ButtonTabbar';
import ButtonTabbar from './ButtonTabbar';
import Home from '../component/home/Home';
import Profile from '../component/home/Profile';
import Modalmenu from '../component/modal/Modalmenu';
import Register from '../component/login/Register';
import Home1 from './Home1';
import Dishdetail from '../component/screen/Dishdetail';
const Stack = createNativeStackNavigator();

function Container() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SlapScren">
        <Stack.Screen
          name="SlapScren"
          component={SlapScren}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="OTP"
          component={OTP}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ChangePass"
          component={ChangePass}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Dishdetail"
          component={Dishdetail}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home1"
          component={Home1}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Modalmenu"
          component={Modalmenu}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Container;
