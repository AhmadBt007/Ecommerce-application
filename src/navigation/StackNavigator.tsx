// src/navigation/StackNavigator.tsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { enableScreens } from 'react-native-screens';

// 🔹 Screens
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import ForgotPass from '../pages/ForgotPass';
import BottomTabs from './ BottomTabs';
import ShopByCtg from '../pages/ShopByCtg';
import Hoodies from '../pages/Hoodies';
import NotFound from '../components/NotFound';
enableScreens();

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* 🔹 Auth Screens */}
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="ForgotPass" component={ForgotPass} />
      <Stack.Screen name="ShopByCtg" component={ShopByCtg}/>
      <Stack.Screen name="Hoodies" component={Hoodies}/>
      <Stack.Screen name="NotFound" component={NotFound}/>
      {/* 🔹 Main App (Bottom Tabs) */}
      <Stack.Screen name="MainTabs" component={BottomTabs} />

    </Stack.Navigator>
  );
};

export default StackNavigator;
