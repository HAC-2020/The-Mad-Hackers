import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import LoginView from'./screens/LoginScreen'
import CoursesScreen from'./screens/CoursesScreen'
import {MaterialIcons ,Ionicons, Octicons, Entypo, MaterialCommunityIcons} from '@expo/vector-icons'
import JobsScreen from './screens/JobsScreen'
import ProjectionScreen from './screens/ProjectionScreen'
import TJScreen from './screens/TJ'
import ForumScreen from './screens/ForumScreen'
import  {Button, Alert} from 'react-native'
import JobsResultsScreen from './screens/JobsResultsScreen'
import FGJScreen from './screens/FGJScreen'
import LoadingScreen from './screens/LoadingScreen'
import ComparisonScreen from './screens/ComparisonScreen'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import RegisterScreen from './screens/RegisterScreen'
import {IconButton, Colors} from 'react-native-paper'
import Firebasekeys from './config'
import FormSubmissionScreen from './screens/FormSubmission'
import * as firebase from 'firebase'

const themecolor = '#fff'
const tabcolor = '#5271ff'
const Tab = createMaterialBottomTabNavigator();
const Auth = createStackNavigator();
const JobsStack = createStackNavigator()
const CoursesStack = createStackNavigator()
const TJStack = createStackNavigator()
const FundingStack = createStackNavigator()
const Resources = createMaterialTopTabNavigator()
let firebaseConfig = Firebasekeys
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
let user = firebase.auth().currentUser
const LoginScreen = ({ navigation }) => (<LoginView navigation={this.props.navigation}/>);

function ResourcesSection() {
  
  return (
    <Resources.Navigator initialRouteName="Jobs"
    screenOptions={{
      headerStyle: {
        backgroundColor: `${tabcolor}`,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        color: `${themecolor}`
      },
    }}
    >
      <Resources.Screen name="STEM vs Non-STEM" component={ComparisonScreen}
      />
      <Resources.Screen name="Fastest Growing Jobs" component={FGJScreen}
      />
      <Resources.Screen name="Jobs of the Future" component={ProjectionScreen}
      />
    </Resources.Navigator>
  );
}
function JobsSection() {
  
  return (
    <JobsStack.Navigator initialRouteName="Jobs"
    screenOptions={{
      headerStyle: {
        backgroundColor: `${tabcolor}`,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        color: `${themecolor}`
      },
    }}
    >
      <JobsStack.Screen name="Latest Job Offerings" component={JobsScreen}
        options={{
          headerTitle: "Latest Job Offerings",
          headerLeft: null,
        }}
      />
      <JobsStack.Screen name="Form Submission" component={FormSubmissionScreen}
        options={{
          headerTitle: "Latest Job Offerings",
        }}
      />
    </JobsStack.Navigator>
  );
}

function CoursesSection() {
  return (
    <CoursesStack.Navigator initialRouteName="Courses"
    screenOptions={{
      headerStyle: {
        backgroundColor: `${tabcolor}`,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        color: `${themecolor}`
      },
    }}
    >
      <CoursesStack.Screen name="Courses" component={CoursesScreen}
        options={{
          headerTitle: "Courses",
          headerLeft: null,
        }}
      />
    </CoursesStack.Navigator>
  );
}
function TJSection() {
  return (
    <TJStack.Navigator initialRouteName="Jobs"
    screenOptions={{
      headerStyle: {
        backgroundColor: `${tabcolor}`,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        color: `${themecolor}`
      },
    }}
    >
      <TJStack.Screen name="Temporary Jobs" component={TJScreen}
        options={{
          headerTitle: "Temporary Jobs",
        }}
      />
       <TJStack.Screen name="Details" component={JobsResultsScreen}
        options={{
          headerTitle: "Details",
        }}
      />
    </TJStack.Navigator>
  );
}
function ForumSection() {
  return (
    <FundingStack.Navigator initialRouteName="Jobs"
    screenOptions={{
      headerStyle: {
        backgroundColor: `${tabcolor}`,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        color: `${themecolor}`
      },
    }}
    >
      <FundingStack.Screen name="Job Finder Forum " component={ForumScreen}
        options={{
          headerTitle: "Job Finder Forum",
          headerLeft: null,
        }}
      />
    </FundingStack.Navigator>
  );
}
function ProjectionSection() {
  return (
    <FundingStack.Navigator initialRouteName="Jobs"
    screenOptions={{
      headerStyle: {
        backgroundColor: `${tabcolor}`,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        color: `${themecolor}`
      },
    }}
    >
      <FundingStack.Screen name="Future Job Projections" component={ResourcesSection}
        options={{
          headerTitle: "Future Job Projections",
          headerLeft: null,
        }}
      />
    </FundingStack.Navigator>
  );
}
function MainTabs() {
  return (
        <Tab.Navigator
          initialRouteName="Jobs"
          sceneAnimationEnabled="true"
          activeColor={themecolor}
          inactiveColor={themecolor}
          barStyle={{ backgroundColor: `${tabcolor}` }}
          
        >
          <Tab.Screen name="Jobs" component={JobsScreen} 
          options={{
            tabBarIcon: ({color}) => (
              <Ionicons name="ios-home" size={24} color={themecolor} />
            ),
          }}
          />
          <Tab.Screen name="Courses" component={CoursesSection} 
          options={{
            tabBarIcon: ({color}) => (
              <MaterialIcons name="library-books" size={24} color={themecolor} />
            ),
          }}
          />
          <Tab.Screen name="Temporary Jobs" component={TJSection}
          options={{
            tabBarIcon: ({color}) => (
              <Entypo name="tools" size={24} color={themecolor}/>
            )
          }}
          /> 
          <Tab.Screen name="Find Funding" component={FundingSection} 
          options={{
            tabBarIcon: ({color}) => (
              <MaterialIcons name="attach-money" size={26} color={themecolor} />
            ),
            headerTitle: "Prep Resources",
          }}
          />
          <Tab.Screen name="Job Projections" component={ProjectionScreen} 
          options={{
            tabBarIcon: ({color}) => (
              <Entypo name="area-graph" size={26} color={themecolor} />
            ),
            headerTitle: "Job Projections",
          }}
          />
        </Tab.Navigator>
  );
}
function checkForUser(){
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
     console.log('user is signed in')
     return true
    } else {
     console.log('user is not signed in')
    return false
    }
  });
}
export default function App() {
  let alertStatus = false;
    return (
      <NavigationContainer>
          {!checkForUser ? (
            <Auth.Navigator 
            initialRouteName="Login"
            screenOptions={{
              headerShown: false
            }}
            >
              <Auth.Screen name="Login" component={LoginScreen}
                options={{
                  headerTitle: "Complaint Form Submission",
        
                }}
              />
              <Auth.Screen name="Register" component={RegisterScreen}
                options={{
                  headerTitle: "Complaint Form Submission",
        
                }}
               />
               {/* <Auth.Screen name="MainTabs" component={MainTabs}
                 options={{
                   headerTitle: "Complaint Form Submission",
        
                 }}
              /> */}
            </Auth.Navigator>
          ) : (
            <Tab.Navigator
          initialRouteName="Jobs"
          sceneAnimationEnabled="true"
          activeColor={themecolor}
          inactiveColor={themecolor}
          barStyle={{ backgroundColor: `${tabcolor}` }}
          
        >
          <Tab.Screen name="Jobs" component={JobsSection} 
          options={{
            tabBarIcon: ({color}) => (
              <Ionicons name="ios-home" size={24} color={themecolor} />
            ),
          }}
          />
          <Tab.Screen name="Courses" component={CoursesSection} 
          options={{
            tabBarIcon: ({color}) => (
              <MaterialIcons name="library-books" size={24} color={themecolor} />
            ),
          }}
          />
          <Tab.Screen name="Temporary Jobs" component={TJSection}
          options={{
            tabBarIcon: ({color}) => (
              <Entypo name="tools" size={24} color={themecolor}/>
            )
          }}
          /> 
          <Tab.Screen name="Forum" component={ForumSection} 
          options={{
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons name="forum" size={26} color={themecolor} />
            ),
            headerTitle: "Resources",
          }}
          />
          <Tab.Screen name="Projections" component={ProjectionSection} 
          options={{
            tabBarIcon: ({color}) => (
              <Entypo name="area-graph" size={26} color={themecolor} />
            ),
            headerTitle: "Projections",
          }}
          />
        </Tab.Navigator>
          )}
      </NavigationContainer>
    );
  return (
    <NavigationContainer>
      <MainTabs.Navigator initialRouteName="Login"
      screenOptions={{
        headerShown: false
      }}
      >
        <MainTabs.Screen name="Login" component={LoginScreen}
          options={{
            headerTitle: "Complaint Form Submission",

          }}
        />
        <MainTabs.Screen name="Register" component={RegisterScreen}
          options={{
            headerTitle: "Complaint Form Submission",

          }}
        />
      </MainTabs.Navigator>
    </NavigationContainer>
  )
}


