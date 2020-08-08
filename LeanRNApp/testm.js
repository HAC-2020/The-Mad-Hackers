
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import React from 'react'
import {createStackNavigator} from 'react-navigation-stack'
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/ProjectionScreen'
import LoadingScreen from './screens/LoadingScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import {View, Text, StyleSheet} from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import Firebasekeys from './config'
import MessageScreen from './screens/TJ'
import PostScreen from './screens/CoursesScreen'
import ProfileScreen from './screens/JobsScreen'
import NotificationScreen from './screens/FundingScreen'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import * as firebase from 'firebase'

const TabNavigator = createMaterialBottomTabNavigator();
const AuthStack = createStackNavigator()

let firebaseConfig = Firebasekeys

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
let user = firebase.auth().currentUser

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function App(){
  <NavigationContainer>
      {/* {user ? (
       <AuthStack.Navigator initialRouteName="Login">
        <AuthStack.Screen name="Login" component={LoginScreen}/>
        <AuthStack.Screen name="Register" component={RegisterScreen}/>
       </AuthStack.Navigator>
      ) : (
        <TabNavigator.Navigator initialRouteName="Home">
          <TabNavigator.Screen name="Home" component={HomeScreen}/>
          <TabNavigator.Screen name="Message" component={MessageScreen}/>
        </TabNavigator.Navigator>
      )} */}
      <TabNavigator.Navigator 
        initialRouteName="Home"
        sceneAnimationEnabled="true"
        activeColor="#000000"
        inactiveColor="#000000"
        headerShown="false"
      >
          <TabNavigator.Screen name="Home" component={HomeScreen}/>
          <TabNavigator.Screen name="Message" component={MessageScreen}/>
      </TabNavigator.Navigator>
  </NavigationContainer>
}

