import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import React from 'react'
import {createStackNavigator} from 'react-navigation-stack'
import HomeScreen from './screens/ProjectionScreen'
import LoadingScreen from './screens/LoadingScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import {View, Text, StyleSheet} from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import Firebasekeys from './config'
import MessageScreen from './screens/TJ'
import PostScreen from './screens/CoursesScreen'
import NotificationScreen from './screens/FundingScreen'
import ProfileScreen from './screens/JobsScreen'

import * as firebase from 'firebase'

let firebaseConfig = Firebasekeys

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
let user = firebase.auth().currentUser
const AppStack = createStackNavigator({
    Home: HomeScreen
})
const AuthStack = createStackNavigator({
    Login: LoginScreen,
    Register: RegisterScreen
})

export default createAppContainer(
    createSwitchNavigator(
        {
            Loading: LoadingScreen,
            App: AppStack,
            Auth: AuthStack,
        },
        {initialRouteName: "Loading"}
    )
)

