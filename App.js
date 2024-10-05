import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Home from './screens/Home'
import SignUp from './screens/SignUp';
import Login from './screens/Login';
import Product from './screens/Product';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style='auto'/>
        <Stack.Navigator initialRouteName="Product" screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Login' component={Login}></Stack.Screen>
        <Stack.Screen name='SignUp' component={SignUp}></Stack.Screen>
        <Stack.Screen name='Home' component={Home}></Stack.Screen>
        <Stack.Screen name='Product' component={Product}></Stack.Screen>
        </Stack.Navigator>
    </NavigationContainer>
  );
}

