import React, { Component } from 'react';

import {Start} from './screens/Start';
import CropSelection from './screens/CropSelection';
import SignUpView from './screens/SignUp';
import {OnBoard} from './screens/OnBoard';
import Message from './screens/OTPMessage';
import Verified from './screens/OTPVerfication';
import Success from './screens/OTPSuccess';
import HomeScreen from './screens/HomeScreen';
import Dashboard from './screens/Dashboard';
import Weather from './screens/Weather';
import FlatListCrops from './screens/FlatListCrops';
import ProfileSetting1 from './screens/ProfileSetting1';
import ProfileSetting2 from './screens/ProfileSetting2';
import ProfileSetting3 from './screens/ProfileSetting3';
import ProfileSetting4 from './screens/ProfileSetting4';

import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();


export default class App extends Component {

  createHomeStack = () =>
    <Stack.Navigator>
        <Stack.Screen
            name="Start"
            component={Start}
            options={{
                headerShown: false
            }}
        />
        <Stack.Screen
            name="OnBoard"
            component={OnBoard}
            options={{
                headerShown: false
            }}
        />

        <Stack.Screen
            name="Message"
            component={Message}
            options={{
                headerShown: false
            }}
        />
        <Stack.Screen
            name="Verified"
            component={Verified}
            options={{
                headerShown: false
            }}
        />
        <Stack.Screen
            name="Success"
            component={Success}
            options={{
                headerShown: false
            }}
        />
        <Stack.Screen
            name="SignUpView"
            component={SignUpView}
            options={{
                headerShown: false
            }}
        />
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
            headerShown: false
        }}
    />
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
            headerShown: false
        }}
      />
        <Stack.Screen
            name="Weather"
            component={Weather}
            options={{
                // headerTitleStyle: { alignSelf: 'center' },
                headerShown: false
            }}
        />
        <Stack.Screen
            name="CropSelection"
            component={CropSelection}
            options={{
                // headerTitleStyle: { alignSelf: 'center' },
                headerShown: false
            }}
        />


        <Stack.Screen
            name="FlatListCrops"
            component={FlatListCrops}
            options={{
                headerShown: false
            }}
        />

        <Stack.Screen
            name="ProfileSetting1"
            component={ProfileSetting1}
            options={{
                // headerTitleStyle: { alignSelf: 'center' },
                headerShown: false
            }}
        />
        <Stack.Screen
            name="ProfileSetting2"
            component={ProfileSetting2}
            options={{
                headerShown: false
            }}
        />
        <Stack.Screen
            name="ProfileSetting3"
            component={ProfileSetting3}
            options={{
                headerShown: false
            }}
        />
        <Stack.Screen
            name="ProfileSetting4"
            component={ProfileSetting4}
            options={{
                headerShown: false
            }}
        />

    </Stack.Navigator>



  render() {
    return (
      <NavigationContainer>
        {this.createHomeStack()}
      </NavigationContainer>
    );
  }
}
