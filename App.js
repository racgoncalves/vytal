import React from 'react';
import { View, Text, SafeAreaView, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../vytal/src/pages/Login';
import ChooseAccountType from '../vytal/src/pages/ChooseAccountType';
import RegisterMarket from './src/pages/RegisterMarket';
import RegisterUser from './src/pages/RegisterUser';
import Home from './src/pages/Home';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="ChooseAccountType" component={ChooseAccountType} />
        <Stack.Screen name="RegisterMarket" component={RegisterMarket} />
        <Stack.Screen name="RegisterUser" component={RegisterUser} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
