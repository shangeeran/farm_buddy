import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';

import MainTabScreen from './screens/MainTabScreen';
import Dashboard from './screens/Dashboard';
import Weather from './screens/Weather';
import proSetting from './screens/proSetting';
import proSettingSec from './screens/proSettingSec';
import proSettingThird from './screens/proSettingThird';
import proSettingEnd from './screens/proSettingEnd';

const DashboardStack = createStackNavigator();
const ProfileStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
    <Tab.Navigator
        initialRouteName="Home"
        activeColor="#fff"
    >
        <Tab.Screen
            name="Home"
            component={HomeStackScreen}
            options={{
                tabBarLabel: 'Home',
                tabBarColor: '#009387',
                tabBarIcon: ({ color }) => (
                    <Icon name="ios-home" color={color} size={26} />
                ),
            }}
        />
        <Tab.Screen
            name="Dashboard"
            component={DashboardStackScreen}
            options={{
                tabBarLabel: 'Dashboard',
                tabBarColor: '#1f65ff',
                tabBarIcon: ({ color }) => (
                    <Icon name="ios-notifications" color={color} size={26} />
                ),
            }}
        />
        <Tab.Screen
            name="Profile"
            component={ProfileStackScreen}
            options={{
                tabBarLabel: 'Profile',
                tabBarColor: '#694fad',
                tabBarIcon: ({ color }) => (
                    <Icon name="ios-person" color={color} size={26} />
                ),
            }}
        />
        {/*<Tab.Screen*/}
        {/*  name="Explore"*/}
        {/*  component={ExploreScreen}*/}
        {/*  options={{*/}
        {/*    tabBarLabel: 'Explore',*/}
        {/*    tabBarColor: '#d02860',*/}
        {/*    tabBarIcon: ({ color }) => (*/}
        {/*      <Icon name="ios-aperture" color={color} size={26} />*/}
        {/*    ),*/}
        {/*  }}*/}
        {/*/>*/}
    </Tab.Navigator>
);

export default MainTabScreen;

const DashboardStackScreen = ({navigation}) => (
    <DashboardStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: '#009387',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold'
        }
    }}>
        <DashboardStack.Screen name="Dashboard" component={<Dashboard></Dashboard>} options={{
            title:'Overview',
            headerLeft: () => (
                <Icon.Button name="ios-menu" size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()}></Icon.Button>
            )
        }} />
    </DashboardStack.Navigator>
);

const ProfileStackScreen = ({navigation}) => (
    <ProfileStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: '#1f65ff',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold'
        }
    }}>
        <ProfileStack.Screen name="Profile" component={proSetting} options={{
            headerLeft: () => (
                <Icon.Button name="ios-menu" size={25} backgroundColor="#1f65ff" onPress={() => navigation.openDrawer()}></Icon.Button>
            )
        }} />
    </ProfileStack.Navigator>
);
